import React, { useState, useEffect, useMemo } from 'react';
import { DISHES_DATA } from './data/dishesData';
import { Dish, RegionId, HistoricalEra } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { VietnamMap } from './components/VietnamMap';
import { FilterBar } from './components/FilterBar';
import { DishCard } from './components/DishCard';
import { DishDetailModal } from './components/DishDetailModal';
import { ComparisonStudio } from './components/ComparisonStudio';
import { PassportQuizModal } from './components/PassportQuizModal';
import { SubmitContributionModal } from './components/SubmitContributionModal';
import { Footer } from './components/Footer';
import { BookOpen, MapPin, Sparkles, PlusCircle } from 'lucide-react';

export default function App() {
  // All dishes (loaded from presets + local storage contributions)
  const [dishes, setDishes] = useState<Dish[]>(() => {
    try {
      const saved = localStorage.getItem('amthucbamien_custom_dishes');
      if (saved) {
        const parsed = JSON.parse(saved);
        return [...DISHES_DATA, ...parsed];
      }
    } catch (e) {
      console.error(e);
    }
    return DISHES_DATA;
  });

  // Bookmarks
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('amthucbamien_bookmarks');
      return saved ? JSON.parse(saved) : ['pho-bo-ha-noi', 'bun-bo-hue', 'banh-xeo-mien-tay'];
    } catch {
      return ['pho-bo-ha-noi'];
    }
  });

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState<'all' | RegionId>('all');
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [activeEra, setActiveEra] = useState<'all' | HistoricalEra>('all');
  const [showOnlyBookmarked, setShowOnlyBookmarked] = useState(false);

  // Modals & Navigation
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isPassportOpen, setIsPassportOpen] = useState(false);
  const [isContributeOpen, setIsContributeOpen] = useState(false);
  const [activeComparisonId, setActiveComparisonId] = useState<string | undefined>(undefined);

  // Sync bookmarks to LocalStorage
  useEffect(() => {
    localStorage.setItem('amthucbamien_bookmarks', JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  const handleToggleBookmark = (dishId: string) => {
    setBookmarkedIds(prev => 
      prev.includes(dishId) ? prev.filter(id => id !== dishId) : [...prev, dishId]
    );
  };

  const handleAddContribution = (newDish: Dish) => {
    setDishes(prev => [newDish, ...prev]);
    try {
      const saved = localStorage.getItem('amthucbamien_custom_dishes');
      const currentCustom = saved ? JSON.parse(saved) : [];
      localStorage.setItem('amthucbamien_custom_dishes', JSON.stringify([newDish, ...currentCustom]));
    } catch (e) {
      console.error(e);
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveRegion('all');
    setSelectedProvince(null);
    setActiveEra('all');
    setShowOnlyBookmarked(false);
  };

  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'dong-gop') {
      setIsContributeOpen(true);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSearch = () => {
    const filterElement = document.getElementById('danh-sach-mon');
    if (filterElement) {
      filterElement.scrollIntoView({ behavior: 'smooth' });
      const input = document.querySelector('input[type="text"]') as HTMLInputElement;
      if (input) input.focus();
    }
  };

  const handleOpenCompare = (compId: string) => {
    setActiveComparisonId(compId);
    const element = document.getElementById('so-sanh-ba-mien');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered Dishes Memo
  const filteredDishes = useMemo(() => {
    return dishes.filter(dish => {
      // Region filter
      if (activeRegion !== 'all' && dish.region !== activeRegion) return false;

      // Province filter
      if (selectedProvince && !dish.province.toLowerCase().includes(selectedProvince.toLowerCase()) && !selectedProvince.toLowerCase().includes(dish.province.toLowerCase())) {
        return false;
      }

      // Era filter
      if (activeEra !== 'all' && dish.eraCategory !== activeEra) return false;

      // Bookmarked filter
      if (showOnlyBookmarked && !bookmarkedIds.includes(dish.id)) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesLocalName = dish.localName?.toLowerCase().includes(query);
        const matchesProvince = dish.province.toLowerCase().includes(query);
        const matchesSummary = dish.summary.toLowerCase().includes(query);
        const matchesStory = dish.originStory.toLowerCase().includes(query);
        const matchesIngredient = dish.signatureIngredients.some(ing => ing.name.toLowerCase().includes(query));
        const matchesTag = dish.tags.some(tag => tag.toLowerCase().includes(query));

        if (!matchesName && !matchesLocalName && !matchesProvince && !matchesSummary && !matchesStory && !matchesIngredient && !matchesTag) {
          return false;
        }
      }

      return true;
    });
  }, [dishes, activeRegion, selectedProvince, activeEra, showOnlyBookmarked, bookmarkedIds, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-stone-900">
      {/* Top Navigation */}
      <Header
        onNavClick={handleNavClick}
        onOpenSearch={handleOpenSearch}
        onOpenPassport={() => setIsPassportOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Marquee Section */}
        <HeroSection
          onExploreClick={() => handleNavClick('danh-sach-mon')}
          onMapClick={() => handleNavClick('ban-do-am-thuc')}
          onCompareClick={() => handleNavClick('so-sanh-ba-mien')}
        />

        {/* Interactive Vietnam Map Section */}
        <VietnamMap
          dishes={dishes}
          activeRegion={activeRegion}
          selectedProvince={selectedProvince}
          onSelectRegion={(reg) => {
            setActiveRegion(reg);
            setSelectedProvince(null);
          }}
          onSelectProvince={(prov) => setSelectedProvince(prov)}
          onOpenDish={(dish) => setSelectedDish(dish)}
        />

        {/* Main Heritage Archive Library Catalog Section */}
        <section id="danh-sach-mon" className="py-14 max-w-7xl mx-auto px-6 w-full">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-medium">
                <span>Kho tàng tri thức</span>
                <span aria-hidden="true">·</span>
                <span>Hồ sơ lưu trữ di sản E02</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-medium text-stone-900 mt-1">
                Thư viện món ăn theo cội nguồn
              </h2>
              <p className="text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
                Tra cứu chi tiết từng món ăn với nguồn gốc xuất xứ, truyền thuyết văn hóa, 
                triết lý ngũ hành và bí quyết của nghệ nhân bản địa.
              </p>
            </div>

            <button
              onClick={() => setIsContributeOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-md transition-colors cursor-pointer shrink-0 shadow-xs"
            >
              <PlusCircle className="w-3.5 h-3.5 text-amber-800" />
              <span>Đóng góp hồ sơ món ăn</span>
            </button>
          </div>

          {/* Filter Bar */}
          <div className="mb-8">
            <FilterBar
              searchQuery={searchQuery}
              region={activeRegion}
              era={activeEra}
              showOnlyBookmarked={showOnlyBookmarked}
              bookmarkCount={bookmarkedIds.length}
              totalFilteredCount={filteredDishes.length}
              totalCount={dishes.length}
              onSearchChange={setSearchQuery}
              onRegionChange={(reg) => {
                setActiveRegion(reg);
                setSelectedProvince(null);
              }}
              onEraChange={setActiveEra}
              onToggleBookmarkedOnly={() => setShowOnlyBookmarked(prev => !prev)}
              onResetFilters={handleResetFilters}
            />
          </div>

          {/* Dishes Grid */}
          {filteredDishes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDishes.map((dish) => (
                <DishCard
                  key={dish.id}
                  dish={dish}
                  isBookmarked={bookmarkedIds.includes(dish.id)}
                  onToggleBookmark={handleToggleBookmark}
                  onOpenDetail={(d) => setSelectedDish(d)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-white border border-stone-200 rounded-lg">
              <BookOpen className="w-10 h-10 text-stone-300 mx-auto mb-3" />
              <h3 className="text-lg font-serif font-medium text-stone-800">
                Không tìm thấy hồ sơ món ăn phù hợp
              </h3>
              <p className="text-xs text-stone-500 mt-1 max-w-md mx-auto">
                Không có món ăn nào thỏa mãn các tiêu chí lọc hiện tại. Hãy thử thay đổi từ khóa hoặc đặt lại bộ lọc.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-4 px-4 py-2 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 rounded transition-colors cursor-pointer"
              >
                Đặt lại toàn bộ bộ lọc
              </button>
            </div>
          )}
        </section>

        {/* Regional Comparison Section */}
        <ComparisonStudio selectedComparisonId={activeComparisonId} />
      </main>

      {/* Footer */}
      <Footer
        onNavClick={handleNavClick}
        onOpenPassport={() => setIsPassportOpen(true)}
        onOpenContribute={() => setIsContributeOpen(true)}
      />

      {/* Archival Detail Modal */}
      <DishDetailModal
        dish={selectedDish}
        isBookmarked={selectedDish ? bookmarkedIds.includes(selectedDish.id) : false}
        onClose={() => setSelectedDish(null)}
        onToggleBookmark={handleToggleBookmark}
        onOpenCompare={handleOpenCompare}
      />

      {/* Culinary Passport & Trivia Modal */}
      <PassportQuizModal
        isOpen={isPassportOpen}
        onClose={() => setIsPassportOpen(false)}
        exploredDishesCount={dishes.length}
      />

      {/* Community Contribution Modal */}
      <SubmitContributionModal
        isOpen={isContributeOpen}
        onClose={() => setIsContributeOpen(false)}
        onAddDish={handleAddContribution}
      />
    </div>
  );
}
