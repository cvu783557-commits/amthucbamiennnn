import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { X, Award, CheckCircle2, AlertCircle, ArrowRight, RotateCcw, Printer, Compass, Stamp } from 'lucide-react';

interface PassportQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  exploredDishesCount: number;
}

export const PassportQuizModal: React.FC<PassportQuizModalProps> = ({
  isOpen,
  onClose,
  exploredDishesCount
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [explorerName, setExplorerName] = useState('Độc giả khảo cứu');
  const [activeTab, setActiveTab] = useState<'quiz' | 'passport'>('quiz');

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === currentQ.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < totalQuestions) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
      setActiveTab('passport');
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizCompleted(false);
    setActiveTab('quiz');
  };

  const getTitleRank = (finalScore: number) => {
    if (finalScore >= 7) return 'Nhà Khảo Cứu Ẩm Thực Thượng Hạng';
    if (finalScore >= 5) return 'Sứ Giả Văn Hóa Ẩm Thực Ba Miền';
    if (finalScore >= 3) return 'Người Khám Phá Hương Vị Việt Nam';
    return 'Lữ Khách Mới Bắt Đầu';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-[#FBF9F5] border border-stone-300 rounded-lg shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#FAF7F0] px-6 py-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-900/10 rounded text-amber-900">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
                ĐỀ TÀI E02 · KHẢO CỨU KIẾN THỨC
              </div>
              <h2 className="text-lg font-serif font-medium text-stone-900">
                Hộ Chiếu & Trắc Nghiệm Di Sản Ẩm Thực
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Switcher Tabs */}
            <div className="flex items-center bg-stone-200/80 p-0.5 rounded-md text-xs">
              <button
                onClick={() => setActiveTab('quiz')}
                className={`px-3 py-1 font-medium rounded cursor-pointer ${
                  activeTab === 'quiz' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600'
                }`}
              >
                Trắc nghiệm
              </button>
              <button
                onClick={() => setActiveTab('passport')}
                className={`px-3 py-1 font-medium rounded cursor-pointer ${
                  activeTab === 'passport' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600'
                }`}
              >
                Hộ chiếu di sản
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {activeTab === 'quiz' ? (
            !isQuizCompleted ? (
              <div className="space-y-6">
                {/* Progress bar */}
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                    <span>Câu hỏi {currentQuestionIndex + 1} / {totalQuestions}</span>
                    <span className="font-medium text-stone-800 tabular-nums">Điểm hiện tại: {score}/{currentQuestionIndex + (isAnswerSubmitted && selectedOption === currentQ.correctAnswer ? 1 : 0)}</span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#78350F] transition-all duration-300"
                      style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question Box */}
                <div>
                  <div className="text-xs uppercase tracking-widest text-amber-900 font-semibold mb-1">
                    Miền {currentQ.region === 'bac' ? 'Bắc' : currentQ.region === 'trung' ? 'Trung' : 'Nam'}
                  </div>
                  <h3 className="text-xl font-serif font-medium text-stone-900 leading-snug">
                    {currentQ.question}
                  </h3>
                </div>

                {/* Options List */}
                <div className="space-y-2.5">
                  {currentQ.options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === currentQ.correctAnswer;
                    let optionStyle = "border-stone-200 hover:border-stone-400 bg-white text-stone-800";

                    if (isAnswerSubmitted) {
                      if (isCorrect) {
                        optionStyle = "border-emerald-600 bg-emerald-50 text-emerald-950 font-medium";
                      } else if (isSelected && !isCorrect) {
                        optionStyle = "border-rose-400 bg-rose-50 text-rose-950";
                      } else {
                        optionStyle = "border-stone-200 bg-stone-50 text-stone-400";
                      }
                    } else if (isSelected) {
                      optionStyle = "border-amber-900 bg-amber-50 text-amber-950 font-medium";
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        disabled={isAnswerSubmitted}
                        className={`w-full p-4 text-left text-sm rounded-md border transition-all flex items-start gap-3 cursor-pointer ${optionStyle}`}
                      >
                        <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 text-xs font-semibold mt-0.5">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="flex-1 leading-relaxed">{option}</span>
                        {isAnswerSubmitted && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                        )}
                        {isAnswerSubmitted && isSelected && !isCorrect && (
                          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Banner after submission */}
                {isAnswerSubmitted && (
                  <div className="p-4 bg-[#FAF7F0] border border-amber-200/80 rounded-md text-xs text-stone-700 space-y-2 animate-fadeIn">
                    <div>
                      <strong className="text-stone-900 block mb-0.5">Giải thích lịch sử:</strong>
                      <p className="leading-relaxed">{currentQ.explanation}</p>
                    </div>
                    <div className="pt-2 border-t border-amber-200/50 text-amber-950">
                      <strong>Điển tích văn hóa: </strong>
                      <span>{currentQ.culturalFact}</span>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 pt-4 border-t border-stone-200">
                  {!isAnswerSubmitted ? (
                    <button
                      onClick={handleSubmitAnswer}
                      disabled={selectedOption === null}
                      className="px-5 py-2.5 text-xs font-medium text-amber-50 bg-[#78350F] hover:bg-[#632c0d] disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors cursor-pointer"
                    >
                      Xác nhận câu trả lời
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      className="flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-amber-50 bg-[#78350F] hover:bg-[#632c0d] rounded-md transition-colors cursor-pointer"
                    >
                      <span>{currentQuestionIndex + 1 < totalQuestions ? 'Câu hỏi kế tiếp' : 'Xem kết quả & Nhận hộ chiếu'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-6 space-y-6">
                <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-900 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
                    HOÀN THÀNH KHẢO CỨU KIẾN THỨC
                  </div>
                  <h3 className="text-2xl font-serif font-medium text-stone-900 mt-1">
                    Điểm số: {score} / {totalQuestions}
                  </h3>
                  <p className="text-base text-amber-900 font-medium mt-1">
                    Danh hiệu: {getTitleRank(score)}
                  </p>
                </div>

                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => setActiveTab('passport')}
                    className="px-5 py-2.5 text-xs font-medium text-amber-50 bg-[#78350F] hover:bg-[#632c0d] rounded-md transition-colors cursor-pointer"
                  >
                    Xem Hộ chiếu Ẩm thực của bạn
                  </button>
                  <button
                    onClick={handleRestart}
                    className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Thử lại trắc nghiệm</span>
                  </button>
                </div>
              </div>
            )
          ) : (
            /* Passport View */
            <div className="space-y-6">
              {/* Name Customization */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 bg-stone-100/70 border border-stone-200 rounded-md">
                <div>
                  <span className="text-xs font-medium text-stone-700 block">Tên người sở hữu hộ chiếu:</span>
                  <input
                    type="text"
                    value={explorerName}
                    onChange={(e) => setExplorerName(e.target.value)}
                    className="mt-1 px-3 py-1.5 text-sm bg-white border border-stone-300 rounded font-serif font-medium text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-900"
                    placeholder="Nhập tên của bạn"
                  />
                </div>
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-stone-800 bg-white border border-stone-300 hover:bg-stone-50 rounded transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>In / Lưu Hộ chiếu</span>
                </button>
              </div>

              {/* Passport Certificate Card */}
              <div className="relative bg-[#FAF5E9] border-2 border-[#8C6D46] rounded-lg p-6 sm:p-8 shadow-inner overflow-hidden">
                {/* Guilloche ornament border lines */}
                <div className="absolute inset-2 border border-[#BFA785] pointer-events-none rounded opacity-60" />

                <div className="relative z-10 text-center space-y-4">
                  <div className="flex items-center justify-center gap-2 text-[#78350F] text-xs font-semibold tracking-widest uppercase">
                    <Stamp className="w-4 h-4" />
                    <span>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#422006] tracking-tight uppercase">
                    HỘ CHIẾU ẨM THỰC BA MIỀN
                  </h3>

                  <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
                    Chứng nhận đã tham gia khảo cứu và hiểu biết sâu sắc về cội nguồn, 
                    sự tích và triết lý ngũ hành ẩm thực truyền thống Việt Nam.
                  </p>

                  <div className="my-6 py-4 border-y border-[#D6C5A9] flex flex-wrap justify-around gap-4 text-left">
                    <div>
                      <span className="text-[11px] text-stone-500 uppercase block">Chủ sở hữu:</span>
                      <span className="font-serif text-lg font-bold text-stone-900">{explorerName}</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-stone-500 uppercase block">Mã định danh:</span>
                      <span className="font-mono text-sm font-semibold text-stone-800">HC-E02-2026</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-stone-500 uppercase block">Cấp bậc di sản:</span>
                      <span className="text-sm font-semibold text-[#78350F]">{getTitleRank(score)}</span>
                    </div>
                  </div>

                  {/* 3 Regional Stamps (Dấu Mộc Ba Miền) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    {/* Bắc Bộ Stamp */}
                    <div className="p-3 border border-dashed border-[#B45309] rounded bg-white/60 text-center flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full border-2 border-[#B45309] flex items-center justify-center text-[10px] font-bold text-[#B45309] uppercase mb-1">
                        BẮC BỘ
                      </div>
                      <span className="text-xs font-serif font-bold text-stone-800">Dấu Mộc Kinh Kỳ</span>
                      <span className="text-[10px] text-stone-500">Phở · Bún Chả · Bánh Chưng</span>
                    </div>

                    {/* Trung Bộ Stamp */}
                    <div className="p-3 border border-dashed border-[#991B1B] rounded bg-white/60 text-center flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full border-2 border-[#991B1B] flex items-center justify-center text-[10px] font-bold text-[#991B1B] uppercase mb-1">
                        TRUNG BỘ
                      </div>
                      <span className="text-xs font-serif font-bold text-stone-800">Dấu Mộc Cố Đô</span>
                      <span className="text-[10px] text-stone-500">Bún Bò · Cao Lầu · Mì Quảng</span>
                    </div>

                    {/* Nam Bộ Stamp */}
                    <div className="p-3 border border-dashed border-[#065F46] rounded bg-white/60 text-center flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full border-2 border-[#065F46] flex items-center justify-center text-[10px] font-bold text-[#065F46] uppercase mb-1">
                        NAM BỘ
                      </div>
                      <span className="text-xs font-serif font-bold text-stone-800">Dấu Mộc Miệt Vườn</span>
                      <span className="text-[10px] text-stone-500">Bánh Xèo · Cơm Tấm · Lẩu Mắm</span>
                    </div>
                  </div>

                  <div className="pt-4 text-[11px] text-stone-500 italic">
                    Hồ sơ đề tài nghiên cứu E02 · Amthucbamien · amthucbamien.ai.studio
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
