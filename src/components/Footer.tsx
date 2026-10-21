import React from 'react';
import { BookOpen, Compass, Award } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  onOpenPassport: () => void;
  onOpenContribute: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  onOpenPassport,
  onOpenContribute
}) => {
  return (
    <footer className="bg-[#1C1917] text-stone-300 border-t border-stone-800 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-stone-800">
          {/* Brand and Project Info */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="text-xl font-serif font-bold text-white tracking-tight">
              Amthucbamien <span className="text-amber-500 font-sans font-normal text-xs">· Mã đề tài: E02</span>
            </h3>
            <p className="text-xs uppercase tracking-widest text-stone-400 font-semibold">
              Thư viện món ăn ba miền có nguồn gốc
            </p>
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              Dự án nghiên cứu và số hóa tri thức di sản văn hóa ẩm thực truyền thống Việt Nam. 
              Tra cứu cội nguồn lịch sử, địa lý xuất xứ, điển tích dân gian và triết lý ngũ hành ẩm thực dân tộc.
            </p>
            <div className="pt-2 text-xs font-mono text-amber-300">
              Tên miền chính thức: <span className="underline">amthucbamien.ai.studio</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-stone-200 font-semibold">
              Mục lục nghiên cứu
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button 
                  onClick={() => onNavClick('danh-sach-mon')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Thư viện hồ sơ di sản
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavClick('ban-do-am-thuc')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Bản đồ địa lý nguồn gốc
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavClick('so-sanh-ba-mien')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Phòng đối chiếu ba miền
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenPassport} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Trắc nghiệm & Hộ chiếu di sản
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenContribute} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Đóng góp hồ sơ mới
                </button>
              </li>
            </ul>
          </div>

          {/* Academic & Cultural Sources */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-stone-200 font-semibold">
              Tài liệu tham khảo & Trích dẫn
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Dữ liệu được tổng hợp và đối chiếu từ các nguồn khảo cứu uy tín:
            </p>
            <ul className="space-y-1.5 text-xs text-stone-400 font-serif italic">
              <li>· Thạch Lam, &ldquo;Hà Nội băm sáu phố phường&rdquo; (1943)</li>
              <li>· Vũ Bằng, &ldquo;Miếng ngon Hà Nội&rdquo; (1957) & &ldquo;Món lạ Hà Nội&rdquo;</li>
              <li>· Sơn Nam, &ldquo;Hương rừng Cà Mau&rdquo; & &ldquo;Văn minh miệt vườn&rdquo;</li>
              <li>· Vương Hồng Sển, &ldquo;Sài Gòn năm xưa&rdquo; (1960)</li>
              <li>· Hoàng Phủ Ngọc Tường, &ldquo;Món ngon xứ Huế&rdquo; & địa chí các vùng miền</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © 2026 Amthucbamien · Đề tài E02. Bản quyền thuộc về Kho lưu trữ văn hóa ẩm thực Việt Nam.
          </div>
          <div className="flex items-center gap-4">
            <span>Tiêu chuẩn WCAG AA</span>
            <span aria-hidden="true">·</span>
            <span>Không gian số hóa di sản</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
