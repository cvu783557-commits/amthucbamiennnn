import React, { useState } from 'react';
import { RegionId, Dish } from '../types';
import { MapPin, ArrowRight, Compass } from 'lucide-react';

interface VietnamMapProps {
  dishes: Dish[];
  activeRegion: 'all' | RegionId;
  selectedProvince: string | null;
  onSelectRegion: (region: 'all' | RegionId) => void;
  onSelectProvince: (province: string | null) => void;
  onOpenDish: (dish: Dish) => void;
}

interface MapProvincePoint {
  id: string;
  name: string;
  region: RegionId;
  x: number; // SVG coordinate
  y: number; // SVG coordinate
  title: string;
  historicalNote: string;
  primaryDishId: string;
}

const PROVINCE_POINTS: MapProvincePoint[] = [
  // Miền Bắc
  {
    id: 'phu-tho',
    name: 'Phú Thọ',
    region: 'bac',
    x: 130,
    y: 75,
    title: 'Đất Tổ Hùng Vương',
    historicalNote: 'Nơi khởi nguồn văn minh lúa nước và sự tích Bánh Chưng Bánh Giầy thời Hùng Vương thứ 6.',
    primaryDishId: 'banh-chung-dat-to'
  },
  {
    id: 'ha-noi',
    name: 'Hà Nội',
    region: 'bac',
    x: 155,
    y: 90,
    title: 'Kinh Kỳ Thăng Long',
    historicalNote: 'Cái nôi của Phở bò phố cổ, Bún chả than hoa Hàng Mành và Chả cá Lã Vọng năm 1886.',
    primaryDishId: 'pho-bo-ha-noi'
  },
  {
    id: 'hai-phong',
    name: 'Hải Phòng',
    region: 'bac',
    x: 185,
    y: 95,
    title: 'Đất Cảng Sông Cấm',
    historicalNote: 'Cội nguồn sợi bánh đa đỏ tráng tay làng Dư Hàng Kênh và riêu cua đồng bến cảng.',
    primaryDishId: 'banh-da-cua-hai-phong'
  },

  // Miền Trung
  {
    id: 'hue',
    name: 'Thừa Thiên Huế',
    region: 'trung',
    x: 188,
    y: 220,
    title: 'Cố Đô Sông Hương',
    historicalNote: 'Bún bò làng cổ Vân Cù thế kỷ XVI và Cơm Hến Cồn Hến dâng vua Thành Thái.',
    primaryDishId: 'bun-bo-hue'
  },
  {
    id: 'quang-nam',
    name: 'Quảng Nam',
    region: 'trung',
    x: 215,
    y: 265,
    title: 'Thương Cảng Hội An & Xứ Quảng',
    historicalNote: 'Mì Quảng Phú Chiêm mở cõi và Cao Lầu lầu cao huyền thoại với nước giếng Bá Lễ.',
    primaryDishId: 'cao-lau-hoi-an'
  },

  // Miền Nam
  {
    id: 'sai-gon',
    name: 'Sài Gòn - TP.HCM',
    region: 'nam',
    x: 145,
    y: 430,
    title: 'Hòn Ngọc Viễn Đông',
    historicalNote: 'Hạt gạo tấm gãy nuôi phu xe đầu TK XX phát triển thành đĩa cơm sườn bì chả nức tiếng.',
    primaryDishId: 'com-tam-sai-gon'
  },
  {
    id: 'can-tho',
    name: 'Cần Thơ',
    region: 'nam',
    x: 130,
    y: 465,
    title: 'Tây Đô Sông Nước',
    historicalNote: 'Cội nguồn tiếng bánh xèo rộn rã bưng biền và văn hóa ẩm thực chợ nổi miền Tây.',
    primaryDishId: 'banh-xeo-mien-tay'
  },
  {
    id: 'an-giang',
    name: 'An Giang',
    region: 'nam',
    x: 110,
    y: 445,
    title: 'Thủ Phủ Mắm Châu Đốc',
    historicalNote: 'Nơi dòng Mê Kông mang cá linh, cá sặc khai sinh món lẩu mắm bách hoa Kinh - Khmer - Hoa.',
    primaryDishId: 'lau-mam-chau-doc'
  },
  {
    id: 'dong-thap',
    name: 'Đồng Tháp',
    region: 'nam',
    x: 125,
    y: 450,
    title: 'Đồng Tháp Mười Hoang Sơ',
    historicalNote: 'Cá lóc nướng trui trong rơm rạ đồng tàn - nét ẩm thực nguyên sơ buổi đầu khai hoang.',
    primaryDishId: 'ca-loc-nuong-trui'
  }
];

export const VietnamMap: React.FC<VietnamMapProps> = ({
  dishes,
  activeRegion,
  selectedProvince,
  onSelectRegion,
  onSelectProvince,
  onOpenDish
}) => {
  const [hoveredProvince, setHoveredProvince] = useState<MapProvincePoint | null>(null);

  // Active province details
  const currentProvincePoint = PROVINCE_POINTS.find(p => p.name === selectedProvince) || hoveredProvince || PROVINCE_POINTS[1]; // default Hanoi
  const relatedDishes = dishes.filter(d => 
    currentProvincePoint ? d.province.includes(currentProvincePoint.name) || currentProvincePoint.name.includes(d.province) : true
  );

  return (
    <section id="ban-do-am-thuc" className="py-12 border-b border-stone-200 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-medium">
              <span>Bản đồ khảo cứu địa lý</span>
              <span aria-hidden="true">·</span>
              <span>Tọa độ khởi sinh món ngon ba miền</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-stone-900 mt-1">
              Bản đồ nguồn gốc ẩm thực ba miền
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
              Nhấp chọn các địa danh trên bản đồ hình chữ S để truy xuất hồ sơ di sản, giai thoại lịch sử và các món ăn đặc trưng gắn liền với từng vùng đất.
            </p>
          </div>

          {/* Region Tabs (Functional Buttons) */}
          <div className="flex items-center gap-1 p-1 bg-stone-200/80 rounded-md shrink-0">
            <button
              onClick={() => { onSelectRegion('all'); onSelectProvince(null); }}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                activeRegion === 'all' && !selectedProvince
                  ? 'bg-white text-stone-900 shadow-sm font-semibold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Toàn quốc
            </button>
            <button
              onClick={() => { onSelectRegion('bac'); onSelectProvince('Hà Nội'); }}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                activeRegion === 'bac'
                  ? 'bg-white text-stone-900 shadow-sm font-semibold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Miền Bắc (Kinh kỳ)
            </button>
            <button
              onClick={() => { onSelectRegion('trung'); onSelectProvince('Thừa Thiên Huế'); }}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                activeRegion === 'trung'
                  ? 'bg-white text-stone-900 shadow-sm font-semibold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Miền Trung (Cố đô)
            </button>
            <button
              onClick={() => { onSelectRegion('nam'); onSelectProvince('Sài Gòn - TP.HCM'); }}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                activeRegion === 'nam'
                  ? 'bg-white text-stone-900 shadow-sm font-semibold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Miền Nam (Miệt vườn)
            </button>
          </div>
        </div>

        {/* Map & Detail Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive SVG Vietnam Map */}
          <div className="lg:col-span-5 bg-white border border-stone-200 rounded-lg p-6 shadow-sm flex flex-col items-center">
            <div className="w-full flex justify-between items-center text-xs text-stone-500 mb-2 border-b border-stone-100 pb-2">
              <span className="font-medium text-stone-800">Dải đất hình chữ S</span>
              <span>Nhấp vào điểm để tra cứu</span>
            </div>

            <div className="relative w-full max-w-[340px] aspect-[3/5]">
              <svg
                viewBox="0 0 320 540"
                className="w-full h-full drop-shadow-sm select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylized Vietnam S-Shape Geographical Path */}
                <defs>
                  <linearGradient id="vietnamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#EBE5D8" />
                    <stop offset="45%" stopColor="#E2DAC9" />
                    <stop offset="100%" stopColor="#DFD5C2" />
                  </linearGradient>
                </defs>

                {/* Vietnam Continental Silhouette */}
                <path
                  d="M 85 40 
                     C 105 30, 160 30, 180 50 
                     C 195 65, 200 85, 175 105 
                     C 160 115, 140 125, 150 145 
                     C 160 165, 175 190, 185 220 
                     C 195 245, 225 260, 230 290 
                     C 235 320, 215 350, 195 380 
                     C 180 405, 155 420, 145 440 
                     C 135 460, 120 480, 100 495 
                     C 85 505, 65 495, 75 480 
                     C 85 465, 110 455, 115 440 
                     C 120 420, 125 400, 140 375 
                     C 155 350, 165 315, 160 280 
                     C 155 245, 135 225, 130 190 
                     C 125 155, 110 135, 105 110 
                     C 100 85, 70 50, 85 40 Z"
                  fill="url(#vietnamGrad)"
                  stroke="#C5BAA5"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />

                {/* Region boundary demarcation dashed lines */}
                {/* North - Central separator */}
                <line x1="120" y1="165" x2="200" y2="165" stroke="#B8AC96" strokeWidth="1" strokeDasharray="3 3" />
                <text x="75" y="125" fontSize="11" fill="#78716C" fontWeight="600" letterSpacing="1">BẮC BỘ</text>

                {/* Central - South separator */}
                <line x1="140" y1="365" x2="220" y2="365" stroke="#B8AC96" strokeWidth="1" strokeDasharray="3 3" />
                <text x="210" y="240" fontSize="11" fill="#78716C" fontWeight="600" letterSpacing="1">TRUNG BỘ</text>
                <text x="50" y="445" fontSize="11" fill="#78716C" fontWeight="600" letterSpacing="1">NAM BỘ</text>

                {/* Eastern Sea / Biển Đông */}
                <text x="220" y="160" fontSize="10" fill="#A8A29E" fontStyle="italic">Biển Đông</text>

                {/* Interactive Province Nodes */}
                {PROVINCE_POINTS.map((point) => {
                  const isSelected = selectedProvince === point.name;
                  const isHovered = hoveredProvince?.id === point.id;
                  const isRegionActive = activeRegion === 'all' || activeRegion === point.region;

                  return (
                    <g
                      key={point.id}
                      className="cursor-pointer transition-transform duration-200"
                      onClick={() => {
                        onSelectProvince(point.name);
                        onSelectRegion(point.region);
                      }}
                      onMouseEnter={() => setHoveredProvince(point)}
                      onMouseLeave={() => setHoveredProvince(null)}
                    >
                      {/* Pulse circle for active/selected */}
                      {(isSelected || isHovered) && (
                        <circle
                          cx={point.x}
                          cy={point.y}
                          r="12"
                          fill={point.region === 'bac' ? '#B45309' : point.region === 'trung' ? '#991B1B' : '#047857'}
                          opacity="0.2"
                        />
                      )}

                      {/* Pin Circle */}
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r={isSelected ? "6" : isHovered ? "5" : "4"}
                        fill={
                          isSelected
                            ? point.region === 'bac' ? '#78350F' : point.region === 'trung' ? '#991B1B' : '#065F46'
                            : isRegionActive
                            ? '#292524'
                            : '#A8A29E'
                        }
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                      />

                      {/* Province Label */}
                      <text
                        x={point.x + 8}
                        y={point.y + 3}
                        fontSize="9"
                        fill={isSelected ? '#1C1917' : '#57534E'}
                        fontWeight={isSelected ? 'bold' : 'normal'}
                      >
                        {point.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="w-full mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span>Đang chọn: <strong className="text-stone-900">{currentProvincePoint?.name || 'Toàn quốc'}</strong></span>
              <button
                onClick={() => { onSelectProvince(null); onSelectRegion('all'); }}
                className="text-stone-600 hover:text-stone-900 underline cursor-pointer"
              >
                Đặt lại
              </button>
            </div>
          </div>

          {/* Dossier Card of Selected Province */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-900 font-medium mb-1">
              <Compass className="w-3.5 h-3.5" />
              <span>HỒ SƠ KHỞI SINH VĂN HÓA ĐỊA PHƯƠNG</span>
            </div>

            <h3 className="text-2xl font-serif font-medium text-stone-900 mt-1">
              {currentProvincePoint?.name} · {currentProvincePoint?.title}
            </h3>
            
            <p className="mt-3 text-sm text-stone-600 leading-relaxed">
              {currentProvincePoint?.historicalNote}
            </p>

            {/* Related Heritage Dishes from this Province */}
            <div className="mt-6 pt-6 border-t border-stone-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                  Món ăn có nguồn gốc tại địa phương ({relatedDishes.length})
                </span>
                <span className="text-xs text-stone-400">Nhấp để mở toàn văn hồ sơ</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedDishes.map((dish) => (
                  <div
                    key={dish.id}
                    onClick={() => onOpenDish(dish)}
                    className="p-4 border border-stone-200 hover:border-amber-700/60 rounded-md transition-all bg-stone-50/50 hover:bg-white cursor-pointer group"
                  >
                    <div className="text-xs text-stone-500 mb-1">
                      <span>{dish.code}</span>
                      <span className="mx-1.5">·</span>
                      <span>{dish.eraTitle}</span>
                    </div>

                    <h4 className="text-base font-serif font-medium text-stone-900 group-hover:text-amber-900 transition-colors flex items-center justify-between">
                      <span>{dish.name}</span>
                      <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-amber-800 transition-transform group-hover:translate-x-1" />
                    </h4>

                    <p className="text-xs text-stone-600 mt-1.5 line-clamp-2 leading-relaxed">
                      {dish.summary}
                    </p>

                    <div className="mt-3 pt-2 border-t border-stone-100 flex items-center gap-1.5 text-[11px] text-stone-500">
                      <span className="font-medium text-stone-700">Ngũ hành:</span>
                      <span className="truncate">{dish.fiveElements.tho}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
