'use client';

import { useState } from 'react';
import Image from 'next/image';

import { useLanguage } from '../../context/LanguageContext';

type Temp = 'hot' | 'cold' | 'blend';

interface Product {
  nameTH: string;
  nameEN: string;
  image: string;
  temps?: Temp[];
}

interface SubCategory {
  titleTH: string;
  titleEN: string;
  products: Product[];
}

interface Category {
  id: string;
  labelTH: string;
  labelEN: string;
  subcategories: SubCategory[];
}

const BASE = 'https://www.cafe-amazon.com/static/product';

const categories: Category[] = [
  {
    id: 'drinks',
    labelTH: 'เครื่องดื่ม',
    labelEN: 'Drinks',
    subcategories: [
      {
        titleTH: 'อเมซอน พรีเมี่ยม',
        titleEN: 'Amazon Premium',
        products: [
          { nameTH: 'เอสเปรสโซ', nameEN: 'Espresso', image: `${BASE}/coffee/espresso/espresso-hot-40z-take-away.jpg`, temps: ['hot'] },
          { nameTH: 'อเมริกาโน', nameEN: 'Americano', image: `${BASE}/amazon-selected-cup-premium/iced-americano-selected.jpg`, temps: ['hot', 'cold'] },
          { nameTH: 'คาเฟ่ ลาเต้', nameEN: 'Café Latte', image: `${BASE}/amazon-selected-cup-premium/iced-cafe-latte-selected.jpg`, temps: ['hot', 'cold'] },
          { nameTH: 'คาปูชิโน่', nameEN: 'Cappuccino', image: `${BASE}/amazon-selected-cup-premium/iced-cappuccino-selected.jpg`, temps: ['hot', 'cold'] },
          { nameTH: 'คาราเมล มัคคิอาโต', nameEN: 'Caramel Macchiato', image: `${BASE}/amazon-selected-cup-premium/iced-caramel-macchiato-selected.jpg`, temps: ['hot', 'cold', 'blend'] },
          { nameTH: 'คอฟฟี่ มาร์เบิล', nameEN: 'Coffee Marble', image: `${BASE}/amazon-selected-cup-premium/coffee-marble-selected.jpg`, temps: ['cold'] },
        ],
      },
      {
        titleTH: 'กาแฟ - ร้อน',
        titleEN: 'Coffee - Hot',
        products: [
          { nameTH: 'เอสเปรสโซ', nameEN: 'Espresso', image: `${BASE}/coffee/espresso/espresso-hot-40z-take-away.jpg`, temps: ['hot'] },
          { nameTH: 'อเมซอน', nameEN: 'Amazon', image: `${BASE}/coffee/amazon/amazon-hot-120z-take-away.jpg`, temps: ['hot'] },
          { nameTH: 'แบล็คคอฟฟี่', nameEN: 'Black Coffee', image: `${BASE}/coffee/black-coffee/black-coffee-hot-120z-take-away.jpg`, temps: ['hot'] },
          { nameTH: 'คาปูชิโน่', nameEN: 'Cappuccino', image: `${BASE}/coffee/cappuccino/cappuccino-hot-12oz-take-away.jpg`, temps: ['hot'] },
          { nameTH: 'ลาเต้อเมซอน', nameEN: 'Amazon Latte', image: `${BASE}/coffee/latte-amazon/latte-amazon-hot-8oz-take-away1.jpg`, temps: ['hot'] },
          { nameTH: 'มอคค่า', nameEN: 'Mocha', image: `${BASE}/coffee/mocha/mocha-hot-120z-take-away.jpg`, temps: ['hot'] },
        ],
      },
      {
        titleTH: 'กาแฟ - เย็น/ปั่น',
        titleEN: 'Coffee - Iced/Blended',
        products: [
          { nameTH: 'เอสเปรสโซ', nameEN: 'Espresso', image: `${BASE}/coffee/espresso/espresso.png`, temps: ['cold', 'blend'] },
          { nameTH: 'อเมซอน', nameEN: 'Amazon', image: `${BASE}/coffee/amazon/amazon-iced-01.png`, temps: ['cold', 'blend'] },
          { nameTH: 'อเมซอนเอ็กซ์ตร้า', nameEN: 'Amazon Extra', image: `${BASE}/coffee/amazon-extra/amazon-extra-iced-01.jpg`, temps: ['cold'] },
          { nameTH: 'แบล็คคอฟฟี่', nameEN: 'Black Coffee', image: `${BASE}/coffee/black-coffee/black-coffee.png`, temps: ['cold'] },
          { nameTH: 'แบล็คคอฟฟี่น้ำผึ้ง', nameEN: 'Black Coffee Honey', image: `${BASE}/coffee/black-coffee-honey/honey-black-coffee.png`, temps: ['cold'] },
          { nameTH: 'แบล็คคอฟฟี่น้ำผึ้งมะนาว', nameEN: 'Black Coffee Honey Lemon', image: `${BASE}/coffee/black-coffee-honey-lemon/black-coffee-honey-lime.png`, temps: ['cold'] },
        ],
      },
      {
        titleTH: 'ชา',
        titleEN: 'Tea',
        products: [
          { nameTH: 'ชา', nameEN: 'Tea', image: `${BASE}/tea/tea/tea.jpg`, temps: ['hot'] },
          { nameTH: 'ชาเขียวนม', nameEN: 'Green Milk Tea', image: `${BASE}/tea/green-tea-with-milk/green-tea-with-milk.jpg`, temps: ['hot', 'cold', 'blend'] },
          { nameTH: 'ชานม', nameEN: 'Milk Tea', image: `${BASE}/tea/tea-with-milk/tea-with-milk.jpg`, temps: ['hot', 'cold', 'blend'] },
          { nameTH: 'โฮจิฉะ บราวน์ชูการ์ ลาเต้', nameEN: 'Hojicha Brown Sugar Latte', image: `${BASE}/tea/hojicha-brown-sugar-latte/hojicha-latte-1040x1040.jpg`, temps: ['cold'] },
          { nameTH: 'ชาดำ', nameEN: 'Black Tea', image: `${BASE}/tea/black-tea/black-tea.jpg`, temps: ['cold'] },
          { nameTH: 'ชามะนาว', nameEN: 'Lemon Tea', image: `${BASE}/tea/lemon-tea/lemon-tea.jpg`, temps: ['cold'] },
        ],
      },
      {
        titleTH: 'นม / ช็อคโกแลต',
        titleEN: 'Milk / Chocolate',
        products: [
          { nameTH: 'นมสด', nameEN: 'Fresh Milk', image: `${BASE}/milk-and-chocolate/fresh-milk/fresh-milk.jpg`, temps: ['hot', 'cold', 'blend'] },
          { nameTH: 'ช็อกโกแลต', nameEN: 'Chocolate', image: `${BASE}/milk-and-chocolate/chocolate/chocolate.jpg`, temps: ['hot', 'cold', 'blend'] },
          { nameTH: 'สตรอว์เบอร์รีชีสเค้ก', nameEN: 'Strawberry Cheesecake', image: `${BASE}/milk-and-chocolate/strawberry-cheesecake/strawberry-cheesecake.jpg`, temps: ['blend'] },
          { nameTH: 'มิลกี้ สตรอว์เบอร์รี', nameEN: 'Milky Strawberry', image: `${BASE}/milk-and-chocolate/milky-strawberry-series/milky-strawberry.png`, temps: ['cold', 'blend'] },
        ],
      },
      {
        titleTH: 'น้ำผลไม้ & สมูทตี้',
        titleEN: 'Juice & Smoothie',
        products: [
          { nameTH: 'น้ำลิ้นจี่', nameEN: 'Lychee Juice', image: `${BASE}/juice-and-smoothies/lychee-juice/lychee-juice.jpg`, temps: ['cold', 'blend'] },
          { nameTH: 'น้ำสตรอว์เบอร์รีปั่น', nameEN: 'Strawberry Slush', image: `${BASE}/juice-and-smoothies/fruity-frappe/750x750-px/strawberry-frappe.jpg`, temps: ['blend'] },
          { nameTH: 'น้ำกีวีปั่น', nameEN: 'Kiwi Slush', image: `${BASE}/juice-and-smoothies/fruity-frappe/750x750-px/kiwi-frappe.jpg`, temps: ['blend'] },
          { nameTH: 'มิกซ์เบอร์รีปั่น', nameEN: 'Mix Berry Slush', image: `${BASE}/juice-and-smoothies/fruity-frappe/500x500-px/mixed-berry-yogurt-smoothies.jpg`, temps: ['blend'] },
          { nameTH: 'สตรอว์เบอร์รีโยเกิร์ตสมูทตี้', nameEN: 'Strawberry Yogurt Smoothie', image: `${BASE}/juice-and-smoothies/yogurt-smoothies/500x500-px/strawberry-yogurt-frappe.jpg`, temps: ['blend'] },
          { nameTH: 'มิกซ์เบอร์รีโยเกิร์ตสมูทตี้', nameEN: 'Mix Berry Yogurt Smoothie', image: `${BASE}/juice-and-smoothies/fruity-frappe/750x750-px/mixed-berry-yogurt-smoothies.jpg`, temps: ['blend'] },
        ],
      },
      {
        titleTH: 'เครื่องดื่มเพื่อสุขภาพ',
        titleEN: 'Healthy Drinks',
        products: [
          { nameTH: 'ไลท์คอฟฟี่ฮันนี', nameEN: 'Light Coffee Honey', image: `${BASE}/light/light-coffee-honey.jpg`, temps: ['cold'] },
          { nameTH: 'เฟรชคาเฟ่ลาเต้', nameEN: 'Fresh Café Latte', image: `${BASE}/light/fresh-cafe-latte-light-iced.jpg`, temps: ['cold'] },
          { nameTH: 'ไลท์แบล็คทีฮันนี', nameEN: 'Light Black Tea Honey', image: `${BASE}/light/light-black-tea-honey.jpg`, temps: ['cold'] },
          { nameTH: 'ไลท์มัทฉะฮันนี', nameEN: 'Light Matcha Honey', image: `${BASE}/light/light-matcha-honey.jpg`, temps: ['cold'] },
          { nameTH: 'เฟรชดาร์กช็อกโกแลต', nameEN: 'Fresh Dark Chocolate', image: `${BASE}/light/dark-chocolate-light-iced.jpg`, temps: ['cold'] },
          { nameTH: 'เฟรชมิลค์ที', nameEN: 'Fresh Milk Tea', image: `${BASE}/light/fresh-milk-light-iced.jpg`, temps: ['cold'] },
        ],
      },
    ],
  },
  {
    id: 'bakery',
    labelTH: 'เบเกอรี',
    labelEN: 'Bakery',
    subcategories: [
      {
        titleTH: 'เบเกอรีอบสด',
        titleEN: 'Freshly Baked',
        products: [
          { nameTH: 'ครัวซองเนยสด', nameEN: 'Butter Croissant', image: `${BASE}/bakery/fresh-bakery/croissant-butter-dicut-a4-menu.png` },
          { nameTH: 'ครัวซองแฮมชีส', nameEN: 'Ham & Cheese Croissant', image: `${BASE}/bakery/fresh-bakery/croissant-hamcheese-dicut-a4-menu.png` },
          { nameTH: 'ครัวซองดับเบิ้ลช็อกโกแลต', nameEN: 'Double Chocolate Croissant', image: `${BASE}/bakery/fresh-bakery/croissant-chocolate-dicut-a4-menu.png` },
          { nameTH: 'เดนิชแฮมชีส', nameEN: 'Ham & Cheese Danish', image: `${BASE}/bakery/fresh-bakery/danish-dicut-a4-menu.png` },
          { nameTH: 'โทสต์แฮมทริปเปิ้ลชีส', nameEN: 'Ham Triple Cheese Toast', image: `${BASE}/bakery/fresh-bakery/toast-ham-cheese1-dicut-a4-menu.png` },
          { nameTH: 'ผักโขมอบชีสโทสต์', nameEN: 'Spinach Cheese Toast', image: `${BASE}/bakery/fresh-bakery/toast-spinach-dicut-a4-menu.png` },
        ],
      },
      {
        titleTH: 'เบเกอรีอบแห้ง',
        titleEN: 'Dry Bakery',
        products: [
          { nameTH: 'คุกกี้เนย', nameEN: 'Butter Cookie', image: `${BASE}/bakery/ambient-bakery/butter-cookies.jpg` },
          { nameTH: 'คุกกี้เนย สายรุ้ง', nameEN: 'Rainbow Butter Cookie', image: `${BASE}/bakery/ambient-bakery/confetti-cookies.jpg` },
          { nameTH: 'คุกกี้ช็อกโกแลตแครนเบอร์รี่', nameEN: 'Choco Cranberry Cookie', image: `${BASE}/bakery/ambient-bakery/chocolate-cranberry-cookies.jpg` },
          { nameTH: 'ป๊อปคอร์น กลิ่นทรัฟเฟิล', nameEN: 'Truffle Popcorn', image: `${BASE}/bakery/ambient-bakery/truffle-flavoured-popcorn.jpg` },
          { nameTH: 'ป๊อปคอร์น รสซาวครีมและชีส', nameEN: 'Sour Cream & Cheese Popcorn', image: `${BASE}/bakery/ambient-bakery/sour-cream-and-cheese-popcorn.jpg` },
          { nameTH: 'ป๊อปคอร์น รสคาราเมล', nameEN: 'Caramel Popcorn', image: `${BASE}/bakery/ambient-bakery/caramel-popcorn.jpg` },
        ],
      },
    ],
  },
  {
    id: 'home',
    labelTH: 'ชงเองที่บ้าน',
    labelEN: 'Café at Home',
    subcategories: [
      {
        titleTH: 'กาแฟแคปซูล',
        titleEN: 'Coffee Capsules',
        products: [
          { nameTH: 'กาแฟแคปซูล ซีเล็คเต็ด', nameEN: 'Capsule Selected', image: `${BASE}/20250729/producthomeusecoffeecoffee-capsule-amazon-selected.png` },
          { nameTH: 'กาแฟแคปซูล ซิกเนเจอร์', nameEN: 'Capsule Signature', image: `${BASE}/20250729/producthomeusecoffeecoffee-capsule-amazon-signature.png` },
          { nameTH: 'กาแฟแคปซูล เคนย่า', nameEN: 'Capsule Kenya', image: `${BASE}/20250729/producthomeusecoffeecoffee-capsule-kenya.png` },
          { nameTH: 'กาแฟแคปซูล เอธิโอเปีย', nameEN: 'Capsule Ethiopia', image: `${BASE}/20250729/producthomeusecoffeecoffee-capsule-ethiopia.png` },
          { nameTH: 'กาแฟแคปซูล โคลอมเบีย', nameEN: 'Capsule Colombia', image: `${BASE}/20250729/producthomeusecoffeecoffee-capsule-colombia.png` },
          { nameTH: 'กาแฟแคปซูล คาราเมลสเวิร์ล', nameEN: 'Capsule Caramel Swirl', image: `${BASE}/20250729/producthomeusecoffeecoffee-capsule-caramel-swirl.png` },
        ],
      },
      {
        titleTH: 'อื่นๆ',
        titleEN: 'Others',
        products: [
          { nameTH: 'ช๊อคโกแลตมอลต์ชนิดผง', nameEN: 'Chocolate Malt Powder', image: `${BASE}/20250729/producthomeusenon-coffeeclassic-choc.png` },
          { nameTH: 'ชาเขียวนมปรุงสำเร็จ', nameEN: 'Green Milk Tea Mix', image: `${BASE}/20250729/producthomeusenon-coffeemix-green-milk-tea.png` },
          { nameTH: 'ชาไทยปรุงสำเร็จ', nameEN: 'Thai Tea Mix', image: `${BASE}/20250729/producthomeusenon-coffeemix-thai-milk-tea.png` },
          { nameTH: 'ดาร์กช็อกโกแลต น้ำตาลน้อย', nameEN: 'Dark Choc Less Sugar', image: `${BASE}/20250729/producthomeusenon-coffeedark-choc-less-sugar.png` },
          { nameTH: 'ดาร์กช๊อคโกแลตชนิดผง', nameEN: 'Dark Chocolate Powder', image: `${BASE}/20250729/producthomeusenon-coffeedark-choc.png` },
          { nameTH: 'มัทฉะลาเต้ปรุงสำเร็จ', nameEN: 'Matcha Latte Mix', image: `${BASE}/20250729/producthomeusenon-coffeematcha-latte.png` },
        ],
      },
    ],
  },
  {
    id: 'premium',
    labelTH: 'สินค้าพรีเมียม',
    labelEN: 'Premium',
    subcategories: [
      {
        titleTH: 'สินค้าพรีเมียม',
        titleEN: 'Premium Items',
        products: [
          { nameTH: 'เครื่องชงกาแฟแคปซูล (สีเขียว)', nameEN: 'Capsule Machine (Green)', image: `${BASE}/merchandise/cafe-amazon-capsule-coffee-machine-green.png` },
          { nameTH: 'เครื่องชงกาแฟแคปซูล (สีดำ)', nameEN: 'Capsule Machine (Black)', image: `${BASE}/merchandise/cafe-amazon-capsule-coffee-machine.png` },
          { nameTH: 'Ordinary Tumbler (Peachy)', nameEN: 'Ordinary Tumbler (Peachy)', image: `${BASE}/merchandise/ordinary-tumbler-peachy.png` },
          { nameTH: 'Ordinary Tumbler (Greeny)', nameEN: 'Ordinary Tumbler (Greeny)', image: `${BASE}/merchandise/ordinary-tumbler-greeny.png` },
          { nameTH: 'Ordinary Tumbler (Greyry)', nameEN: 'Ordinary Tumbler (Greyry)', image: `${BASE}/merchandise/ordinary-tumbler-greyry.png` },
        ],
      },
    ],
  },
  {
    id: 'rtd',
    labelTH: 'เครื่องดื่มพร้อมดื่ม',
    labelEN: 'Ready to Drink',
    subcategories: [
      {
        titleTH: 'กาแฟปรุงสำเร็จพร้อมดื่ม',
        titleEN: 'Ready-to-Drink Coffee',
        products: [
          { nameTH: 'อเมซอน แบล็ค', nameEN: 'Amazon Black', image: `${BASE}/20250729/Black.png` },
          { nameTH: 'อเมซอน แบล็ค ไม่มีน้ำตาล', nameEN: 'Amazon Black No Sugar', image: `${BASE}/20250729/Black_no_sugar.png` },
          { nameTH: 'อเมซอน แบล็ค ฮันนี่ เลมอน', nameEN: 'Amazon Black Honey Lemon', image: `${BASE}/20250729/Honey_Lemon.png` },
        ],
      },
    ],
  },
];

const tempConfig: Record<Temp, { labelTH: string; labelEN: string; class: string }> = {
  hot: { labelTH: 'ร้อน', labelEN: 'Hot', class: 'bg-orange-100 text-orange-600 border border-orange-200' },
  cold: { labelTH: 'เย็น', labelEN: 'Cold', class: 'bg-sky-100 text-sky-600 border border-sky-200' },
  blend: { labelTH: 'ปั่น', labelEN: 'Blend', class: 'bg-violet-100 text-violet-600 border border-violet-200' },
};

export default function CafeMenu() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('drinks');

  const current = categories.find((c) => c.id === activeCategory)!;

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('ผลิตภัณฑ์', 'Products')}
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            {t('เลือกเมนูกาแฟ เบเกอรี และสินค้าคุณภาพพรีเมี่ยมจากคาเฟ่ อเมซอน', 'Premium coffee, bakery and products from Café Amazon')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-56 shrink-0">
            <div className="lg:sticky lg:top-24 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left px-5 py-4 text-sm font-medium border-b border-gray-50 last:border-0 transition-all duration-200 flex items-center justify-between group ${
                    activeCategory === cat.id
                      ? 'bg-[#2d5a27] text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#2d5a27]'
                  }`}
                >
                  <span>{t(cat.labelTH, cat.labelEN)}</span>
                  {activeCategory === cat.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div key={activeCategory}>
              {current.subcategories.map((sub, si) => (
                <div key={si} className="mb-10">
                  {/* Sub-category title */}
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-lg font-bold text-gray-800">
                      {t(sub.titleTH, sub.titleEN)}
                    </h3>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>

                  {/* Product Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                    {sub.products.map((product, pi) => (
                      <div
                        key={pi}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                      >
                        {/* Image */}
                        <div className="relative aspect-square bg-gray-50 overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.nameTH}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                            unoptimized
                          />
                        </div>

                        {/* Info */}
                        <div className="p-3">
                          <p className="text-sm font-semibold text-gray-800 leading-snug mb-2">
                            {t(product.nameTH, product.nameEN)}
                          </p>
                          {product.temps && product.temps.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {product.temps.map((temp) => (
                                <span
                                  key={temp}
                                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${tempConfig[temp].class}`}
                                >
                                  {t(tempConfig[temp].labelTH, tempConfig[temp].labelEN)}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-400 text-xs mt-4">
              {t('* เมนูอาจมีการเปลี่ยนแปลงตามฤดูกาล', '* Menu items may vary by season.')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
