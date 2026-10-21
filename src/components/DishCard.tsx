import React, { useState } from 'react';
import { Dish } from '../types';
import { Bookmark, Clock, MapPin, Sparkles } from 'lucide-react';

interface DishCardProps {
  dish: Dish;
  isBookmarked: boolean;
  onToggleBookmark: (dishId: string) => void;
  onOpenDetail: (dish: Dish) => void;
}

export const DishCard: React.FC<DishCardProps> = ({
  dish,
  isBookmarked,
  onToggleBookmark,
  onOpenDetail
}) => {
  const [imgError, setImgError] = useState(false);

  const regionNames = {
    bac: 'Miền Bắc',
    trung: 'Miền Trung',
    nam: 'Miền Nam'
  };

  return (
    <article className="flex flex-col bg-white border border-stone-200 rounded-lg overflow-hidden hover:border-stone-400/80 transition-all duration-200 group">
      {/* Media Slot */}
      <div 
        className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100 cursor-pointer"
        onClick={() => onOpenDetail(dish)}
      >
        {!imgError ? (
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-stone-100 to-stone-200 text-stone-600">
            <Sparkles className="w-8 h-8 text-stone-400 mb-2" />
            <span className="text-sm font-serif font-medium text-stone-800 text-center">{dish.name}</span>
            <span className="text-xs text-stone-500 mt-1">{dish.province}</span>
          </div>
        )}

        {/* Floating Bookmark action */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(dish.id);
          }}
          aria-label={isBookmarked ? "Bỏ lưu món" : "Lưu vào sổ tay"}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
            isBookmarked
              ? 'bg-[#78350F] text-amber-100'
              : 'bg-white/80 hover:bg-white text-stone-700 hover:text-stone-900 shadow-sm'
          }`}
        >
          <Bookmark className="w-4 h-4 fill-current" />
        </button>

        {/* Region watermark caption */}
        <div className="absolute bottom-2 left-3 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[11px] text-stone-200">
          {regionNames[dish.region]}
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Zero-Pill Unboxed Metadata Header */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-2">
            <span className="font-mono text-stone-700 font-semibold">{dish.code}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-stone-400 inline" />
              {dish.province}
            </span>
            <span aria-hidden="true">·</span>
            <span className="truncate">{dish.eraTitle}</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onOpenDetail(dish)}
            className="text-xl font-serif font-medium text-stone-900 group-hover:text-amber-950 transition-colors cursor-pointer leading-snug"
          >
            {dish.name}
          </h3>

          {dish.localName && (
            <p className="text-xs text-stone-500 italic mt-0.5">
              Tên gọi dân gian: {dish.localName}
            </p>
          )}

          {/* Origin Summary Deck */}
          <p className="mt-2.5 text-sm text-stone-600 line-clamp-3 leading-relaxed">
            {dish.originStory}
          </p>
        </div>

        {/* Footer Area with Key Signature Ingredients and Button */}
        <div className="mt-5 pt-4 border-t border-stone-100">
          <div className="text-xs text-stone-500 mb-3">
            <span className="font-medium text-stone-700">Nguyên liệu bản địa: </span>
            <span>
              {dish.signatureIngredients.slice(0, 2).map(i => i.name).join(', ')}...
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-xs text-stone-500">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              <span>{dish.cookingTime}</span>
            </div>

            <button
              onClick={() => onOpenDetail(dish)}
              className="text-xs font-semibold text-amber-900 hover:text-amber-950 hover:underline cursor-pointer"
            >
              Xem hồ sơ nguồn gốc →
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
