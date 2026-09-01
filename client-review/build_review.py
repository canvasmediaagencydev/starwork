from pathlib import Path
import json, re

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / 'content' / 'review-proposals'
OUT = Path(__file__).resolve().parent / 'review-data.js'

schedule = {
    'office-rental-chiang-mai-guide': ('03 ก.ย. 2026', 'Pillar Guide', 'art-pillar.png'),
    'office-rental-chiang-mai-cost': ('10 ก.ย. 2026', 'Cost Cluster', 'art-cost.png'),
    'serviced-office-vs-coworking-virtual-office-chiang-mai': ('17 ก.ย. 2026', 'Comparison Cluster', 'art-compare.png'),
    'office-rental-wat-ket-central-festival-chiang-mai': ('24 ก.ย. 2026', 'Local Cluster', 'art-location.png'),
    'office-rental-checklist-team-size-chiang-mai': ('01 ต.ค. 2026', 'Team-size Cluster', 'art-team.png'),
}

def parse_frontmatter(text):
    if not text.startswith('---\n'):
        return {}, text
    raw, body = text[4:].split('\n---\n', 1)
    data, current = {}, None
    for line in raw.splitlines():
        if line.startswith('  - ') and current:
            data.setdefault(current, []).append(line[4:].strip().strip('"'))
        elif ':' in line:
            k, v = line.split(':', 1)
            current = k.strip()
            v = v.strip().strip('"')
            data[current] = v if v else []
    return data, body.strip()

items = []
for path in SRC.glob('*.md'):
    meta, body = parse_frontmatter(path.read_text())
    slug = meta['slug']
    date, label, art = schedule[slug]
    items.append({
        **meta,
        'id': slug,
        'date': date,
        'typeLabel': label,
        'art': art,
        'status': 'รอลูกค้าตรวจ',
        'version': 'Draft v2',
        'markdown': body,
        'characterCount': len(body),
        'sectionCount': len(re.findall(r'^## ', body, re.M)),
        'faqCount': len(re.findall(r'^### ', body, re.M)),
        'keywordCount': body.count('ออฟฟิศให้เช่า เชียงใหม่'),
    })

order = {slug: i for i, slug in enumerate(schedule)}
items.sort(key=lambda x: order[x['slug']])
OUT.write_text('window.REVIEW_ITEMS=' + json.dumps(items, ensure_ascii=False) + ';\n')
print(f'wrote {OUT} with {len(items)} items')
