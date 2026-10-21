import React from 'react';
import { BookOpen, MapPin, Sparkles, Flame } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onMapClick: () => void;
  onCompareClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onMapClick,
  onCompareClick,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Curatorial Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-medium mb-3">
            <span>Đề tài nghiên cứu E02</span>
            <span aria-hidden="true">·</span>
            <span>Kho tư liệu số hóa văn hóa ẩm thực Việt Nam</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-800">amthucbamien.ai.studio</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-stone-900 leading-[1.15] text-balance">
                Thư viện món ăn ba miền có nguồn gốc
              </h1>
              <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl">
                Khám phá cội nguồn lịch sử, sự tích dân gian truyền khẩu, bản đồ địa lý khởi sinh 
                và triết lý ngũ hành ẩm thực truyền thống Việt Nam trải dài qua các thời kỳ lịch sử 
                Bắc Bộ, Trung Bộ và Nam Bộ.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
              <button
                onClick={onExploreClick}
                className="px-5 py-2.5 text-sm font-medium text-amber-50 bg-[#78350F] hover:bg-[#632c0d] rounded-md transition-colors whitespace-nowrap shadow-sm cursor-pointer"
              >
                Khám phá thư viện di sản
              </button>
              <button
                onClick={onMapClick}
                className="px-4 py-2.5 text-sm font-medium text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-md transition-colors whitespace-nowrap cursor-pointer"
              >
                Xem bản đồ khởi nguyên
              </button>
            </div>
          </div>
        </div>

        {/* Exhibition Focal Image with measured scrim and curatorial caption */}
        <div className="relative rounded-lg overflow-hidden border border-stone-200 bg-stone-100 shadow-sm">
          <div className="relative aspect-[16/9] max-h-[500px] w-full">
            <img
              src="/src/assets/images/hero_am_thuc_ba_mien_1792587191123.jpg"
              alt="Mâm cỗ ẩm thực ba miền Bắc Trung Nam trên bàn gỗ mộc truyền thống"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="eager"
            />
            {/* Measured scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <div className="max-w-3xl text-white">
                <span className="text-xs uppercase tracking-widest text-amber-200/90 font-medium">
                  HỒ SƠ KHẢO CỨU ĐẶC BIỆT
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium mt-1 text-white">
                  Không gian ẩm thực ba miền: Hồn cốt dân tộc qua nghìn năm văn hiến
                </h2>
                <p className="mt-2 text-sm text-stone-200 line-clamp-2 sm:line-clamp-none max-w-2xl leading-relaxed">
                  Từ sự thanh nhã, chuẩn mực của phở gánh kinh kỳ Thăng Long; vị mặn mòi, cay nồng 
                  cung đình sông Hương núi Ngự; đến chiếc bánh xèo giòn ren hào sảng của buổi đầu khai hoang mở cõi phương Nam.
                </p>
              </div>
            </div>
          </div>

          {/* Curatorial Credit Bar */}
          <div className="bg-[#F7F4EE] px-6 py-3 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-stone-900">Mục lục khảo cứu:</span>
              <span>12+ Tỉnh thành khởi nguồn</span>
              <span aria-hidden="true">·</span>
              <span>Hồ sơ di sản số hóa E02</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Nguồn: Địa chí văn hóa & Viện khảo cứu ẩm thực Việt Nam</span>
            </div>
          </div>
        </div>

        {/* Operational Utility Ribbon below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="p-4 bg-white border border-stone-200 rounded-md">
            <div className="flex items-center gap-2.5 text-amber-900 mb-1">
              <BookOpen className="w-4 h-4 text-amber-800" />
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-700">Khảo cứu lịch sử</span>
            </div>
            <div className="text-xl font-bold font-serif text-stone-900 tabular-nums">15+ Hồ sơ</div>
            <p className="text-xs text-stone-500 mt-0.5">Xuất xứ, giai thoại và tác giả văn học</p>
          </div>

          <div className="p-4 bg-white border border-stone-200 rounded-md">
            <div className="flex items-center gap-2.5 text-amber-900 mb-1">
              <MapPin className="w-4 h-4 text-amber-800" />
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-700">Bản đồ địa danh</span>
            </div>
            <div className="text-xl font-bold font-serif text-stone-900 tabular-nums">3 Miền rõ nét</div>
            <p className="text-xs text-stone-500 mt-0.5">Tọa độ địa lý và làng nghề gốc</p>
          </div>

          <div className="p-4 bg-white border border-stone-200 rounded-md">
            <div className="flex items-center gap-2.5 text-amber-900 mb-1">
              <Sparkles className="w-4 h-4 text-amber-800" />
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-700">Triết lý ngũ hành</span>
            </div>
            <div className="text-xl font-bold font-serif text-stone-900">Kim - Mộc - Thủy - Hỏa - Thổ</div>
            <p className="text-xs text-stone-500 mt-0.5">Cân bằng âm dương trong ẩm thực</p>
          </div>

          <div className="p-4 bg-white border border-stone-200 rounded-md">
            <div className="flex items-center gap-2.5 text-amber-900 mb-1">
              <Flame className="w-4 h-4 text-amber-800" />
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-700">Bí quyết cổ truyền</span>
            </div>
            <div className="text-xl font-bold font-serif text-stone-900">Bí quyết bản địa</div>
            <p className="text-xs text-stone-500 mt-0.5">Kỹ nghệ chế biến lưu giữ qua nhiều đời</p>
          </div>
        </div>
      </div>
    </section>
  );
};
