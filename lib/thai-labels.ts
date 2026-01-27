/**
 * Thai Labels for UI elements
 * ใช้สำหรับ text คงที่ใน UI เช่น ปุ่ม, labels, messages
 */
export const THAI_LABELS = {
  // ============ Navigation ============
  home: "หน้าแรก",
  dashboard: "แดชบอร์ด",
  settings: "ตั้งค่า",
  profile: "โปรไฟล์",
  logout: "ออกจากระบบ",
  login: "เข้าสู่ระบบ",
  register: "สมัครสมาชิก",

  // ============ Common Actions ============
  save: "บันทึก",
  cancel: "ยกเลิก",
  delete: "ลบ",
  edit: "แก้ไข",
  add: "เพิ่ม",
  create: "สร้าง",
  update: "อัปเดต",
  search: "ค้นหา",
  filter: "กรอง",
  reset: "รีเซ็ต",
  submit: "ส่ง",
  confirm: "ยืนยัน",
  back: "กลับ",
  next: "ถัดไป",
  previous: "ก่อนหน้า",
  close: "ปิด",
  view: "ดู",
  download: "ดาวน์โหลด",
  upload: "อัปโหลด",

  // ============ Form Labels ============
  title: "หัวข้อ",
  name: "ชื่อ",
  description: "รายละเอียด",
  email: "อีเมล",
  password: "รหัสผ่าน",
  confirmPassword: "ยืนยันรหัสผ่าน",
  phone: "เบอร์โทรศัพท์",
  address: "ที่อยู่",
  date: "วันที่",
  time: "เวลา",
  status: "สถานะ",
  type: "ประเภท",
  category: "หมวดหมู่",
  price: "ราคา",
  quantity: "จำนวน",
  total: "รวม",
  image: "รูปภาพ",
  file: "ไฟล์",

  // ============ Table Headers ============
  no: "ลำดับ",
  actions: "จัดการ",
  createdAt: "สร้างเมื่อ",
  updatedAt: "แก้ไขเมื่อ",

  // ============ Status ============
  active: "เปิดใช้งาน",
  inactive: "ปิดใช้งาน",
  pending: "รอดำเนินการ",
  approved: "อนุมัติแล้ว",
  rejected: "ปฏิเสธ",
  completed: "เสร็จสิ้น",
  draft: "ฉบับร่าง",
  published: "เผยแพร่แล้ว",

  // ============ Messages ============
  loading: "กำลังโหลด...",
  saving: "กำลังบันทึก...",
  deleting: "กำลังลบ...",
  noData: "ไม่มีข้อมูล",
  noResults: "ไม่พบผลลัพธ์",
  error: "เกิดข้อผิดพลาด",
  success: "สำเร็จ",

  // ============ Confirmation ============
  confirmDelete: "คุณต้องการลบรายการนี้หรือไม่?",
  confirmCancel: "คุณต้องการยกเลิกหรือไม่? การเปลี่ยนแปลงจะไม่ถูกบันทึก",
  confirmLogout: "คุณต้องการออกจากระบบหรือไม่?",

  // ============ Validation ============
  required: "จำเป็นต้องกรอก",
  invalidEmail: "รูปแบบอีเมลไม่ถูกต้อง",
  invalidPhone: "รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง",
  minLength: "ต้องมีอย่างน้อย {min} ตัวอักษร",
  maxLength: "ต้องไม่เกิน {max} ตัวอักษร",
  passwordMismatch: "รหัสผ่านไม่ตรงกัน",

  // ============ Pagination ============
  page: "หน้า",
  of: "จาก",
  showing: "แสดง",
  entries: "รายการ",
  perPage: "ต่อหน้า",
  firstPage: "หน้าแรก",
  lastPage: "หน้าสุดท้าย",

  // ============ Language ============
  language: "ภาษา",
  thai: "ไทย",
  english: "English",

  // ============ StarWork Specific ============
  services: "บริการ",
  packages: "แพ็คเกจ",
  gallery: "แกลเลอรี่",
  contactUs: "ติดต่อเรา",
  bookTour: "จองเข้าชม",
  callUs: "โทร",

} as const;

// Type สำหรับ key ของ THAI_LABELS
export type ThaiLabel = keyof typeof THAI_LABELS;

// Helper function สำหรับดึง label
export function getLabel(key: ThaiLabel): string {
  return THAI_LABELS[key];
}

// Helper function สำหรับ label ที่มี placeholder
export function getLabelWithParams(
  key: ThaiLabel,
  params: Record<string, string | number>
): string {
  let label = THAI_LABELS[key] as string;
  Object.entries(params).forEach(([paramKey, value]) => {
    label = label.replace(`{${paramKey}}`, String(value));
  });
  return label;
}
