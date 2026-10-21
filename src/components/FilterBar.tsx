import React from 'react';
import { RegionId, HistoricalEra } from '../types';
import { Search, X, Bookmark, RotateCcw } from 'lucide-react';

interface FilterBarProps {
  searchQuery: string;
  region: 'all' | RegionId;
  era: 'all' | HistoricalEra;
  showOnlyBookmarked: boolean;
  bookmarkCount: number;
  totalFilteredCount: number;
  totalCount: number;
  onSearchChange: (query: string) => void;
  onRegionChange: (region: 'all' | RegionId) => void;
  onEraChange: (era: 'all' | HistoricalEra) => void;
  onToggleBookmarkedOnly: () => void;
  onResetFilters: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  region,
  era,
  showOnlyBookmarked,
  bookmarkCount,
  totalFilteredCount,
  totalCount,
  onSearchChange,
  onRegionChange,
  onEraChange,
  onToggleBookmarkedOnly,
  onResetFilters
}) => {
  const isFiltered = searchQuery !== '' || region !== 'all' || era !== 'all' || showOnlyBookmarked;

  return (
    <div className="bg-white border border-stone-200 rounded-lg p-5 shadow-sm space-y-4">
      {/* Top Search Input & Bookmarked Toggle */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Tìm theo tên món, tỉnh thành, sự tích, nguyên liệu (ví dụ: giếng Bá Lễ, Lang Liêu, mắm ruốc...)"
            className="w-full pl-10 pr-9 py-2 text-sm bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-900 focus:border-amber-900 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <button
          onClick={onToggleBookmarkedOnly}
          className={`flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium rounded-md border transition-colors cursor-pointer shrink-0 ${
            showOnlyBookmarked
              ? 'bg-amber-100 text-amber-950 border-amber-300'
              : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5 fill-current" />
          <span>Sổ tay lưu trữ ({bookmarkCount})</span>
        </button>
      </div>

      {/* Region & Historical Era Segmented Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-3 border-t border-stone-100">
        {/* Region buttons */}
        <div className="flex items-center flex-wrap gap-1">
          <span className="text-xs font-medium text-stone-500 mr-2">Vùng miền:</span>
          <div className="flex items-center gap-1 p-0.5 bg-stone-100 rounded-md">
            <button
              onClick={() => onRegionChange('all')}
              className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                region === 'all'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Tất cả
            </button>
            <button
              onClick={() => onRegionChange('bac')}
              className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                region === 'bac'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Bắc Bộ
            </button>
            <button
              onClick={() => onRegionChange('trung')}
              className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                region === 'trung'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Trung Bộ
            </button>
            <button
              onClick={() => onRegionChange('nam')}
              className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                region === 'nam'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Nam Bộ
            </button>
          </div>
        </div>

        {/* Historical Era Dropdown or Buttons */}
        <div className="flex items-center flex-wrap gap-2">
          <span className="text-xs font-medium text-stone-500">Thời kỳ lịch sử:</span>
          <select
            value={era}
            onChange={(e) => onEraChange(e.target.value as any)}
            className="px-3 py-1 text-xs bg-stone-50 border border-stone-200 rounded-md text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-900 cursor-pointer"
          >
            <option value="all">Mọi thời kỳ lịch sử</option>
            <option value="co_dai">Thời Hùng Vương - Cổ đại</option>
            <option value="phong_kien">Thời phong kiến (Lý - Trần - Nguyễn)</option>
            <option value="khan_hoang">Thời khẩn hoang phương Nam (TK XVII-XVIII)</option>
            <option value="can_dai">Thời cận đại (Đầu TK XX - Pháp thuộc)</option>
          </select>

          {isFiltered && (
            <button
              onClick={onResetFilters}
              className="flex items-center gap-1 text-xs text-stone-500 hover:text-stone-900 transition-colors ml-2 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Xóa bộ lọc</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Metadata String (Zero-Pill Discipline) */}
      <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
        <div>
          <span>Hiển thị </span>
          <strong className="text-stone-800 font-medium tabular-nums">{totalFilteredCount}</strong>
          <span> / </span>
          <span className="tabular-nums">{totalCount} hồ sơ món ăn có nguồn gốc</span>
        </div>
        {searchQuery && (
          <span>Từ khóa tìm kiếm: &ldquo;{searchQuery}&rdquo;</span>
        )}
      </div>
    </div>
  );
};
