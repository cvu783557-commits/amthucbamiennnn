import React, { useState } from 'react';
import { Dish, RegionId, HistoricalEra } from '../types';
import { X, Send, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

interface SubmitContributionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddDish: (newDish: Dish) => void;
}

export const SubmitContributionModal: React.FC<SubmitContributionModalProps> = ({
  isOpen,
  onClose,
  onAddDish
}) => {
  const [name, setName] = useState('');
  const [localName, setLocalName] = useState('');
  const [region, setRegion] = useState<RegionId>('bac');
  const [province, setProvince] = useState('');
  const [eraTitle, setEraTitle] = useState('Đầu thế kỷ XX');
  const [eraCategory, setEraCategory] = useState<HistoricalEra>('can_dai');
  const [originStory, setOriginStory] = useState('');
  const [keyIngredients, setKeyIngredients] = useState('');
  const [cookingMethod, setCookingMethod] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !province.trim() || !originStory.trim()) {
      setError('Vui lòng điền đầy đủ tên món, tỉnh thành và câu chuyện nguồn gốc lịch sử.');
      return;
    }

    const newDish: Dish = {
      id: `dong-gop-${Date.now()}`,
      code: `DG-${region.toUpperCase()}-${Math.floor(10 + Math.random() * 90)}`,
      name: name.trim(),
      localName: localName.trim() || undefined,
      region,
      province: province.trim(),
      coordinates: region === 'bac' ? { x: 50, y: 15 } : region === 'trung' ? { x: 58, y: 48 } : { x: 50, y: 85 },
      eraTitle,
      eraCategory,
      yearEstimate: 'Tư liệu dân gian ghi nhận',
      summary: `Món ăn truyền thống địa phương có nguồn gốc tại ${province.trim()}.`,
      originStory: originStory.trim(),
      fiveElements: {
        kim: 'Vị cay the kích thích vị giác từ gia vị cổ truyền.',
        moc: 'Hương thanh mát từ thảo mộc địa phương.',
        thuy: 'Vị đậm đà từ nước mắm truyền thống.',
        hoa: 'Lửa hồng nhiệt luyện giữ độ ấm nồng.',
        tho: 'Vị ngọt lành từ hạt gạo và sản vật đồng quê.'
      },
      signatureIngredients: keyIngredients.split(',').filter(Boolean).map(ing => ({
        name: ing.trim(),
        role: 'Nguyên liệu cốt lõi tạo hồn cốt món ăn'
      })),
      cookingMethod: cookingMethod.trim() || 'Chế biến theo phương thức gia truyền',
      cookingTime: '60 phút',
      preparationSteps: [
        'Chuẩn bị nguyên liệu tươi ngon theo mùa từ thổ nhưỡng bản địa.',
        'Sơ chế và ướp gia vị theo tỷ lệ gia truyền.',
        'Nấu và hoàn thiện theo phương pháp thủ công.'
      ],
      culturalEtiquette: 'Thưởng thức khi còn nóng cùng người thân trong gia đình.',
      image: '/src/assets/images/hero_am_thuc_ba_mien_1792587191123.jpg',
      imageCaption: `Tư liệu hình ảnh đóng góp cho món ${name.trim()}.`,
      tags: ['Đóng góp cộng đồng', province.trim(), 'Di sản gia đình'],
      tasteProfile: ['Đậm đà phong vị bản địa'],
      nutritionInsight: 'Thực phẩm truyền thống cân bằng tự nhiên.',
      artisanSecret: 'Bí quyết gia truyền lưu giữ qua nhiều thế hệ.'
    };

    onAddDish(newDish);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#FBF9F5] border border-stone-300 rounded-lg shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#FAF7F0] px-6 py-4 border-b border-stone-200 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
              KHO LƯU TRỮ CỘNG ĐỒNG · ĐỀ TÀI E02
            </div>
            <h2 className="text-lg font-serif font-medium text-stone-900">
              Đóng Góp Tư Liệu Món Ăn Có Nguồn Gốc
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="p-12 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto" />
            <h3 className="text-xl font-serif font-medium text-stone-900">
              Đã ghi nhận vào kho tư liệu di sản!
            </h3>
            <p className="text-sm text-stone-600 max-w-md mx-auto">
              Hồ sơ món ăn của bạn đã được số hóa và đưa vào danh mục tra cứu của đề tài E02.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[80vh] overflow-y-auto">
            {error && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-900 text-xs rounded flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Tên món ăn <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ví dụ: Bánh cuốn Thanh Trì"
                  className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Tên gọi dân gian / Tên chữ
                </label>
                <input
                  type="text"
                  value={localName}
                  onChange={(e) => setLocalName(e.target.value)}
                  placeholder="Ví dụ: Bánh lá tráng mỏng kinh kỳ"
                  className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Vùng miền <span className="text-rose-600">*</span>
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value as RegionId)}
                  className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-900"
                >
                  <option value="bac">Miền Bắc</option>
                  <option value="trung">Miền Trung</option>
                  <option value="nam">Miền Nam</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Tỉnh thành / Làng nghề gốc <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  placeholder="Ví dụ: Hà Nội, Nam Định, Quảng Nam..."
                  className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Thời kỳ xuất hiện ước tính
                </label>
                <select
                  value={eraCategory}
                  onChange={(e) => {
                    const cat = e.target.value as HistoricalEra;
                    setEraCategory(cat);
                    if (cat === 'co_dai') setEraTitle('Thời Cổ đại Hùng Vương');
                    else if (cat === 'phong_kien') setEraTitle('Thời Phong kiến (Lê - Nguyễn)');
                    else if (cat === 'khan_hoang') setEraTitle('Thời khẩn hoang phương Nam');
                    else if (cat === 'can_dai') setEraTitle('Thời cận đại đầu TK XX');
                    else setEraTitle('Thời hiện đại');
                  }}
                  className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-900"
                >
                  <option value="co_dai">Thời Cổ đại - Hùng Vương</option>
                  <option value="phong_kien">Thời phong kiến (Lý - Trần - Nguyễn)</option>
                  <option value="khan_hoang">Thời khẩn hoang phương Nam (TK XVII-XVIII)</option>
                  <option value="can_dai">Thời cận đại (Đầu TK XX - Pháp thuộc)</option>
                  <option value="hien_dai">Thời hiện đại</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Nguyên liệu bản địa (cách nhau dấu phẩy)
                </label>
                <input
                  type="text"
                  value={keyIngredients}
                  onChange={(e) => setKeyIngredients(e.target.value)}
                  placeholder="Gạo tám thơm, mộc nhĩ, hành phi, cà cuống..."
                  className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Sự tích, giai thoại hoặc câu chuyện lịch sử nguồn gốc <span className="text-rose-600">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={originStory}
                onChange={(e) => setOriginStory(e.target.value)}
                placeholder="Mô tả hoàn cảnh xuất hiện, người sáng lập hoặc sự tích dân gian lưu truyền của món ăn này..."
                className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Phương thức chế biến hoặc bí quyết gia truyền
              </label>
              <input
                type="text"
                value={cookingMethod}
                onChange={(e) => setCookingMethod(e.target.value)}
                placeholder="Ví dụ: Tráng mỏng trên nồi hơi vải mùng, phơi một sương..."
                className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-900"
              />
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-stone-700 hover:bg-stone-100 rounded transition-colors cursor-pointer"
              >
                Hủy bỏ
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2 text-xs font-medium text-amber-50 bg-[#78350F] hover:bg-[#632c0d] rounded transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Gửi tư liệu lưu trữ</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
