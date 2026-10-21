import React from 'react';
import { Search, Compass } from 'lucide-react';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  onOpenSearch: () => void;
  onOpenPassport: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavClick, onOpenSearch, onOpenPassport }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark in display face */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-xl font-bold font-serif tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-amber-900 transition-colors"
        >
          Amthucbamien <span className="font-sans font-normal text-xs text-stone-400">· E02</span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          <button 
            onClick={() => onNavClick('danh-sach-mon')} 
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            Thư viện di sản
          </button>
          <button 
            onClick={() => onNavClick('ban-do-am-thuc')} 
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            Bản đồ nguồn gốc
          </button>
          <button 
            onClick={() => onNavClick('so-sanh-ba-mien')} 
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            Đối chiếu ba miền
          </button>
          <button 
            onClick={() => onOpenPassport()} 
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            Trắc nghiệm di sản
          </button>
          <button 
            onClick={() => onNavClick('dong-gop')} 
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            Đóng góp tư liệu
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Search className="w-3.5 h-3.5 text-stone-600" />
            <span className="hidden sm:inline">Tra cứu món ăn</span>
            <span className="sm:hidden">Tra cứu</span>
          </button>
          <button
            onClick={onOpenPassport}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-amber-50 bg-[#78350F] hover:bg-[#632c0d] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
          >
            <Compass className="w-3.5 h-3.5 text-amber-200" />
            <span>Hộ chiếu ẩm thực</span>
          </button>
        </div>
      </div>
    </header>
  );
};
