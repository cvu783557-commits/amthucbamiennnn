import React, { useEffect, useState } from 'react';
import { Dish } from '../types';
import { X, Bookmark, Printer, Share2, MapPin, Calendar, Clock, Sparkles, ChefHat, HeartHandshake, Check } from 'lucide-react';

interface DishDetailModalProps {
  dish: Dish | null;
  isBookmarked: boolean;
  onClose: () => void;
  onToggleBookmark: (dishId: string) => void;
  onOpenCompare?: (comparisonId: string) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  isBookmarked,
  onClose,
  onToggleBookmark,
  onOpenCompare
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (dish) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dish, onClose]);

  if (!dish) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const regionTitles = {
    bac: 'Bắc Bộ · Kinh Kỳ Thăng Long',
    trung: 'Trung Bộ · Cố Đô & Ngũ Quảng',
    nam: 'Nam Bộ · Sông Nước Miệt Vườn'
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#FBF9F5] border border-stone-300 rounded-lg shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 bg-[#FBF9F5]/95 backdrop-blur-md px-6 py-3.5 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <span className="font-mono font-semibold text-stone-900">{dish.code}</span>
            <span aria-hidden="true">·</span>
            <span>{regionTitles[dish.region]}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(dish.id)}
              className={`p-2 rounded-md border text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                isBookmarked
                  ? 'bg-amber-100 text-amber-950 border-amber-300'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border-stone-200'
              }`}
              title="Lưu vào sổ tay di sản"
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">{isBookmarked ? 'Đã lưu' : 'Lưu hồ sơ'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-md bg-white hover:bg-stone-100 border border-stone-200 text-stone-700 text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5"
              title="Sao chép liên kết"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Đã chép' : 'Chia sẻ'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-md bg-white hover:bg-stone-100 border border-stone-200 text-stone-700 text-xs font-medium transition-colors cursor-pointer hidden sm:flex items-center gap-1.5"
              title="In hồ sơ khảo cứu"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>In hồ sơ</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors cursor-pointer ml-1"
              aria-label="Đóng"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-10 max-h-[82vh] overflow-y-auto space-y-8">
          {/* Header Title Section */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-amber-900 font-semibold mb-2">
              <span>HỒ SƠ KHẢO CỨU DI SẢN ẨM THỰC E02</span>
              <span aria-hidden="true">·</span>
              <span>LƯU TRỮ QUỐC GIA</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 tracking-tight leading-tight">
              {dish.name}
            </h1>

            {dish.localName && (
              <p className="text-base text-stone-600 italic font-serif mt-1">
                Tên chữ & danh xưng dân gian: &ldquo;{dish.localName}&rdquo;
              </p>
            )}

            {/* Quick Metadata Info Strip (Zero-Pill) */}
            <div className="mt-4 pt-4 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-stone-600">
              <div>
                <span className="text-stone-400 block mb-0.5">Địa danh nguồn gốc:</span>
                <span className="font-medium text-stone-900 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-800 inline" />
                  {dish.province}
                </span>
              </div>
              <div>
                <span className="text-stone-400 block mb-0.5">Thời kỳ xuất hiện:</span>
                <span className="font-medium text-stone-900 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-amber-800 inline" />
                  {dish.eraTitle}
                </span>
              </div>
              <div>
                <span className="text-stone-400 block mb-0.5">Niên đại ước tính:</span>
                <span className="font-medium text-stone-900">{dish.yearEstimate}</span>
              </div>
              <div>
                <span className="text-stone-400 block mb-0.5">Thời gian chế biến:</span>
                <span className="font-medium text-stone-900 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-800 inline" />
                  {dish.cookingTime}
                </span>
              </div>
            </div>
          </div>

          {/* Focal Image with Archival Caption */}
          <div className="rounded-lg overflow-hidden border border-stone-200 bg-stone-100">
            <div className="aspect-[16/9] w-full max-h-[380px] overflow-hidden">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-[#F7F4EE] px-4 py-2.5 text-xs text-stone-600 italic border-t border-stone-200">
              {dish.imageCaption}
            </div>
          </div>

          {/* Section 1: Origin & Cultural Legend (Editorial with Drop-Cap) */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <h2 className="text-xl font-serif font-medium text-stone-900">
                1. Cội Nguồn Lịch Sử & Giai Thoại Dân Gian
              </h2>
            </div>

            <div className="prose max-w-none text-stone-800 leading-relaxed text-base sm:text-lg">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#78350F] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
                {dish.originStory}
              </p>
            </div>

            {dish.historicalFigures && (
              <div className="p-4 bg-stone-100/70 border border-stone-200 rounded-md text-sm text-stone-700">
                <strong className="text-stone-900">Nhân vật & chủ thể lịch sử liên quan: </strong>
                <span>{dish.historicalFigures}</span>
              </div>
            )}

            {/* Literary Citation Quote */}
            {dish.literatureQuote && (
              <blockquote className="my-6 p-6 border-y border-stone-200 bg-[#F8F5EE]/70 text-center">
                <p className="font-serif italic text-lg sm:text-xl text-stone-800 leading-relaxed max-w-2xl mx-auto">
                  &ldquo;{dish.literatureQuote.text}&rdquo;
                </p>
                <footer className="mt-3 text-xs uppercase tracking-wider text-stone-500 font-sans">
                  — <span className="font-semibold text-stone-700">{dish.literatureQuote.author}</span>, {dish.literatureQuote.source}
                </footer>
              </blockquote>
            )}
          </section>

          {/* Section 2: Five Elements Philosophy in Cuisine (Ngũ Hành Tương Sinh) */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2 flex items-center justify-between">
              <h2 className="text-xl font-serif font-medium text-stone-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-800" />
                <span>2. Triết Lý Ngũ Hành & Cân Bằng Âm Dương</span>
              </h2>
              <span className="text-xs text-stone-500 font-sans">Kim · Mộc · Thủy · Hỏa · Thổ</span>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed">
              Ẩm thực truyền thống Việt Nam tuân thủ nghiêm ngặt tính cân bằng hàn - nhiệt và ngũ vị tương sinh. 
              Mỗi thành phần trong món ăn đều ứng với một hành tự nhiên:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              <div className="p-3.5 bg-white border border-stone-200 rounded-md">
                <div className="text-xs font-semibold text-amber-900 uppercase tracking-wider mb-1">
                  Hành Kim (Vị Cay)
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">{dish.fiveElements.kim}</p>
              </div>

              <div className="p-3.5 bg-white border border-stone-200 rounded-md">
                <div className="text-xs font-semibold text-emerald-900 uppercase tracking-wider mb-1">
                  Hành Mộc (Vị Chua)
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">{dish.fiveElements.moc}</p>
              </div>

              <div className="p-3.5 bg-white border border-stone-200 rounded-md">
                <div className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-1">
                  Hành Thủy (Vị Mặn)
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">{dish.fiveElements.thuy}</p>
              </div>

              <div className="p-3.5 bg-white border border-stone-200 rounded-md">
                <div className="text-xs font-semibold text-rose-900 uppercase tracking-wider mb-1">
                  Hành Hỏa (Hăng/Nhiệt)
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">{dish.fiveElements.hoa}</p>
              </div>

              <div className="p-3.5 bg-white border border-stone-200 rounded-md">
                <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
                  Hành Thổ (Vị Ngọt)
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">{dish.fiveElements.tho}</p>
              </div>
            </div>
          </section>

          {/* Section 3: Signature Local Ingredients & Terroir */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <h2 className="text-xl font-serif font-medium text-stone-900">
                3. Nguyên Liệu Cốt Lõi & Thổ Nhưỡng Bản Địa
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {dish.signatureIngredients.map((ing, idx) => (
                <div key={idx} className="p-4 bg-white border border-stone-200 rounded-md">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-serif font-medium text-stone-900 text-sm">{ing.name}</span>
                    {ing.localSpecialty && (
                      <span className="text-[11px] text-amber-800 font-medium">{ing.localSpecialty}</span>
                    )}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">{ing.role}</p>
                </div>
              ))}
            </div>

            {/* Artisan Secret Box */}
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-md text-xs leading-relaxed text-amber-950">
              <strong className="font-semibold block mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-800" />
                Bí quyết gia truyền của nghệ nhân:
              </strong>
              <span>{dish.artisanSecret}</span>
            </div>
          </section>

          {/* Section 4: Traditional Preparation Technique */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2 flex items-center justify-between">
              <h2 className="text-xl font-serif font-medium text-stone-900 flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-amber-800" />
                <span>4. Quy Trình Chế Biến Chuẩn Cổ Truyền</span>
              </h2>
              <span className="text-xs text-stone-500">{dish.cookingMethod}</span>
            </div>

            <ol className="space-y-3">
              {dish.preparationSteps.map((step, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-stone-700 leading-relaxed">
                  <span className="font-serif font-bold text-amber-900 text-base shrink-0 w-6">
                    0{idx + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Section 5: Traditional Etiquette & Savoring */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2 flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-amber-800" />
              <h2 className="text-xl font-serif font-medium text-stone-900">
                5. Cách Thưởng Thức Đúng Điệu Văn Hóa Dân Gian
              </h2>
            </div>

            <div className="p-5 bg-white border border-stone-200 rounded-md text-sm text-stone-700 leading-relaxed">
              {dish.culturalEtiquette}
            </div>

            {/* Nutrition insight */}
            <div className="text-xs text-stone-500 pt-1">
              <span className="font-medium text-stone-700">Giá trị dinh dưỡng & y học cổ truyền: </span>
              <span>{dish.nutritionInsight}</span>
            </div>
          </section>

          {/* Footer Action to Cross-Compare */}
          {dish.comparisonId && onOpenCompare && (
            <div className="p-4 bg-stone-100 border border-stone-200 rounded-md flex items-center justify-between flex-wrap gap-3">
              <div>
                <span className="text-xs font-semibold text-stone-800 block">
                  Đối chiếu biến thiên ẩm thực giữa các vùng miền
                </span>
                <span className="text-xs text-stone-500">
                  Xem sự chuyển biến khẩu vị của món ăn này khi di cư qua ba miền Bắc - Trung - Nam.
                </span>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenCompare(dish.comparisonId!);
                }}
                className="px-4 py-2 text-xs font-medium text-white bg-[#78350F] hover:bg-[#632c0d] rounded-md transition-colors whitespace-nowrap cursor-pointer"
              >
                Mở phòng đối chiếu ba miền →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
