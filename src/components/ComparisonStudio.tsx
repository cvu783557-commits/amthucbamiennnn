import React, { useState } from 'react';
import { COMPARISONS_DATA } from '../data/comparisonsData';
import { GitCompare, Sparkles, BookOpen } from 'lucide-react';

interface ComparisonStudioProps {
  selectedComparisonId?: string;
}

export const ComparisonStudio: React.FC<ComparisonStudioProps> = ({ selectedComparisonId }) => {
  const [activeId, setActiveId] = useState<string>(
    selectedComparisonId || COMPARISONS_DATA[0].id
  );

  const currentComparison = COMPARISONS_DATA.find(c => c.id === activeId) || COMPARISONS_DATA[0];

  return (
    <section id="so-sanh-ba-mien" className="py-14 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-medium">
              <span>Phòng đối chiếu khảo cứu</span>
              <span aria-hidden="true">·</span>
              <span>Sự biến thiên văn hóa ẩm thực</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-stone-900 mt-1">
              Đối chiếu ẩm thực ba miền
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
              Quan sát hành trình di cư và thích ứng phong thổ của món ăn truyền thống: Từ sự thanh nhã 
              chuẩn mực đất Kinh kỳ đến nồng đượm Cố đô và trù phú hào sảng miệt vườn Nam Bộ.
            </p>
          </div>

          {/* Selector Tabs for Comparisons */}
          <div className="flex flex-wrap gap-2">
            {COMPARISONS_DATA.map((comp) => (
              <button
                key={comp.id}
                onClick={() => setActiveId(comp.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-md border transition-all cursor-pointer ${
                  activeId === comp.id
                    ? 'bg-[#78350F] text-amber-50 border-[#78350F] shadow-sm'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                {comp.title.split(' vs. ')[0]} vs. {comp.title.split(' vs. ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Header Card */}
        <div className="mb-8 p-6 bg-[#FAF7F0] border border-stone-200 rounded-lg">
          <div className="flex items-center gap-2 text-xs text-amber-900 font-semibold uppercase tracking-wider mb-1">
            <GitCompare className="w-4 h-4" />
            <span>HỒ SƠ ĐỐI CHIẾU CHUYÊN SÂU</span>
          </div>
          <h3 className="text-2xl font-serif font-medium text-stone-900">
            {currentComparison.title}
          </h3>
          <p className="text-sm text-stone-600 mt-1 italic font-serif">
            {currentComparison.subtitle}
          </p>
        </div>

        {/* 2-Column Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Dish A */}
          <div className="flex flex-col bg-[#FBF9F5] border border-stone-200 rounded-lg p-6 sm:p-8 shadow-xs">
            <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-1">
              {currentComparison.dishA.region}
            </div>
            <h4 className="text-2xl font-serif font-medium text-stone-900 mb-4 pb-3 border-b border-stone-200">
              {currentComparison.dishA.name}
            </h4>

            <div className="space-y-4 text-sm flex-1">
              <div>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                  Khởi nguyên lịch sử
                </span>
                <p className="text-stone-700 leading-relaxed">{currentComparison.dishA.origin}</p>
              </div>

              <div>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                  Nước dùng / Nền bánh
                </span>
                <p className="text-stone-700 leading-relaxed">{currentComparison.dishA.brothOrBase}</p>
              </div>

              <div>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                  Nguyên liệu cốt lõi
                </span>
                <p className="text-stone-700 leading-relaxed">{currentComparison.dishA.keyIngredients}</p>
              </div>

              <div>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                  Nước chấm / Gia vị
                </span>
                <p className="text-stone-700 leading-relaxed">{currentComparison.dishA.sauceOrDipping}</p>
              </div>

              <div>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                  Rau thơm & Đồ ăn kèm
                </span>
                <p className="text-stone-700 leading-relaxed">{currentComparison.dishA.herbsAndSides}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 bg-white/70 p-4 rounded-md">
              <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider block mb-1">
                Triết lý ẩm thực
              </span>
              <p className="text-xs text-stone-700 italic leading-relaxed">
                &ldquo;{currentComparison.dishA.philosophy}&rdquo;
              </p>
            </div>
          </div>

          {/* Dish B */}
          <div className="flex flex-col bg-[#FBF9F5] border border-stone-200 rounded-lg p-6 sm:p-8 shadow-xs">
            <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-1">
              {currentComparison.dishB.region}
            </div>
            <h4 className="text-2xl font-serif font-medium text-stone-900 mb-4 pb-3 border-b border-stone-200">
              {currentComparison.dishB.name}
            </h4>

            <div className="space-y-4 text-sm flex-1">
              <div>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                  Khởi nguyên lịch sử
                </span>
                <p className="text-stone-700 leading-relaxed">{currentComparison.dishB.origin}</p>
              </div>

              <div>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                  Nước dùng / Nền bánh
                </span>
                <p className="text-stone-700 leading-relaxed">{currentComparison.dishB.brothOrBase}</p>
              </div>

              <div>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                  Nguyên liệu cốt lõi
                </span>
                <p className="text-stone-700 leading-relaxed">{currentComparison.dishB.keyIngredients}</p>
              </div>

              <div>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                  Nước chấm / Gia vị
                </span>
                <p className="text-stone-700 leading-relaxed">{currentComparison.dishB.sauceOrDipping}</p>
              </div>

              <div>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                  Rau thơm & Đồ ăn kèm
                </span>
                <p className="text-stone-700 leading-relaxed">{currentComparison.dishB.herbsAndSides}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 bg-white/70 p-4 rounded-md">
              <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider block mb-1">
                Triết lý ẩm thực
              </span>
              <p className="text-xs text-stone-700 italic leading-relaxed">
                &ldquo;{currentComparison.dishB.philosophy}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Curatorial Cultural Synthesis */}
        <div className="mt-8 p-6 bg-stone-100/90 border border-stone-200 rounded-lg">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
            <BookOpen className="w-4 h-4 text-amber-900" />
            <span>Đúc kết khảo cứu văn hóa</span>
          </div>
          <p className="text-stone-800 text-sm sm:text-base leading-relaxed">
            {currentComparison.culturalInsight}
          </p>
        </div>
      </div>
    </section>
  );
};
