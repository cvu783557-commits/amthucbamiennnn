export type RegionId = 'bac' | 'trung' | 'nam';

export type HistoricalEra = 
  | 'co_dai'       // Thời Hùng Vương - Cổ đại
  | 'phong_kien'   // Thời Lý - Trần - Lê - Nguyễn
  | 'khan_hoang'   // Thời khẩn hoang phương Nam (TK XVII-XVIII)
  | 'can_dai'      // Đầu thế kỷ XX (Thời Pháp thuộc & đô thị hóa)
  | 'hien_dai';    // Giai đoạn hiện đại và phát triển đương đại

export interface FiveElementsPhilosophy {
  kim: string;    // Cay, gia vị cay nồng, tiêu, ớt, gừng (Kim)
  moc: string;    // Chua, rau mùi thanh mát, dấm bỗng, khế, me (Mộc)
  thuy: string;   // Mặn, nước mắm truyền thống, độ mặn mòi, mắm ruốc (Thủy)
  hoa: string;    // Đắng/hăng nồng, màu sắc đỏ au gấc/ớt, lửa nhiệt (Hỏa)
  tho: string;    // Ngọt, vị thanh ngọt xương tủy, gạo nếp, nước dừa (Thổ)
}

export interface SignatureIngredient {
  name: string;
  role: string;
  localSpecialty?: string;
}

export interface DishQuote {
  text: string;
  author: string;
  source: string;
}

export interface Dish {
  id: string;
  code: string; // e.g. "HS-BAC-01"
  name: string;
  localName?: string;
  region: RegionId;
  province: string;
  coordinates: { x: number; y: number }; // Percentage on Vietnam map SVG (0-100)
  eraTitle: string;
  eraCategory: HistoricalEra;
  yearEstimate: string;
  summary: string;
  originStory: string;
  historicalFigures?: string;
  literatureQuote?: DishQuote;
  fiveElements: FiveElementsPhilosophy;
  signatureIngredients: SignatureIngredient[];
  cookingMethod: string;
  cookingTime: string;
  preparationSteps: string[];
  culturalEtiquette: string;
  image: string;
  imageCaption: string;
  tags: string[];
  tasteProfile: string[];
  nutritionInsight: string;
  artisanSecret: string;
  comparisonId?: string;
}

export interface RegionComparison {
  id: string;
  title: string;
  subtitle: string;
  dishA: {
    name: string;
    region: string;
    origin: string;
    brothOrBase: string;
    keyIngredients: string;
    sauceOrDipping: string;
    herbsAndSides: string;
    philosophy: string;
  };
  dishB: {
    name: string;
    region: string;
    origin: string;
    brothOrBase: string;
    keyIngredients: string;
    sauceOrDipping: string;
    herbsAndSides: string;
    philosophy: string;
  };
  culturalInsight: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  region: RegionId;
  options: string[];
  correctAnswer: number;
  explanation: string;
  culturalFact: string;
  dishRefCode?: string;
}

export interface FilterState {
  searchQuery: string;
  region: 'all' | RegionId;
  era: 'all' | HistoricalEra;
  method: string;
  selectedProvince: string | null;
}
