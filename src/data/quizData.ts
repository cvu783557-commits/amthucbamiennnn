import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Món Phở Bò Hà Nội được các nhà nghiên cứu đồng thuận xuất hiện vào thời kỳ nào?',
    region: 'bac',
    options: [
      'Thời Lý - Trần (Thế kỷ XI-XIII)',
      'Thời Lê sơ (Thế kỷ XV)',
      'Đầu thế kỷ XX (Thời Pháp thuộc)',
      'Sau năm 1975'
    ],
    correctAnswer: 2,
    explanation: 'Phở bò ra đời vào đầu thế kỷ XX tại Hà Nội và Nam Định, là sự giao thoa văn hóa giữa món xáo trâu truyền thống và súp bò "Pot-au-feu" kiểu Pháp.',
    culturalFact: 'Thuở ban đầu, phở được bán trên những đôi quang gánh của người thợ rong thắp đèn dầu leo lét trên phố cổ Hà Nội.',
    dishRefCode: 'HS-BAC-01'
  },
  {
    id: 2,
    question: 'Hoàng tử nào trong truyền thuyết thời vua Hùng thứ 6 đã sáng tạo ra Bánh Chưng và Bánh Giầy?',
    region: 'bac',
    options: [
      'Hoàng tử Tiết Liêu',
      'Hoàng tử Lang Liêu',
      'Hoàng tử An Dương',
      'Hoàng tử Mai An Tiêm'
    ],
    correctAnswer: 1,
    explanation: 'Hoàng tử Lang Liêu được thần nhân báo mộng, chọn hạt gạo - ngọc thực quý giá nhất của đất trời nuôi sống con người để làm bánh dâng cúng tổ tiên.',
    culturalFact: 'Bánh giầy hình tròn tượng trưng cho Trời (Dương), bánh chưng hình vuông tượng trưng cho Đất (Âm).',
    dishRefCode: 'HS-BAC-03'
  },
  {
    id: 3,
    question: 'Để nấu được sợi Cao Lầu Hội An dai giòn đúng điệu, người thợ bắt buộc phải dùng "tam bảo" nguồn gốc nào?',
    region: 'trung',
    options: [
      'Nước mưa trong, tro trấu lúa nếp, gạo nàng hương',
      'Nước giếng cổ Bá Lễ, tro củi Cù Lao Chàm, rau làng Trà Quế',
      'Nước sông Thu Bồn, than gỗ đước, gạo lứt tím',
      'Nước suối Tiên Sa, tro rơm rạ, rau má đồng'
    ],
    correctAnswer: 1,
    explanation: 'Sợi Cao Lầu Hội An độc nhất vô nhị vì nước ngâm bột phải lấy từ giếng cổ Bá Lễ ngàn năm tuổi và tro củi đốt từ cây trên quần đảo Cù Lao Chàm.',
    culturalFact: 'Nếu đem công thức Cao Lầu rời khỏi Hội An thì không thể tạo ra được sợi mì dẻo dai sần sật chuẩn phong vị.',
    dishRefCode: 'HS-TRUNG-03'
  },
  {
    id: 4,
    question: 'Trong món Bún Bò Huế, bí quyết gia truyền tạo nên chiều sâu hương vị không thể thiếu là gì?',
    region: 'trung',
    options: [
      'Nước cốt dừa béo ngậy',
      'Mắm ruốc Huế ủ chum lắng trong và sả cây đập giập',
      'Dấm bỗng rượu nếp',
      'Nước tương đen ngọt'
    ],
    correctAnswer: 1,
    explanation: 'Mắm ruốc Thuận An được hòa tan lọc lấy nước trong rồi nêm cùng hàng bó sả cây tạo nên linh hồn nước dùng Bún Bò Cố Đô.',
    culturalFact: 'Mắm ruốc không được thả trực tiếp vào nồi đang sôi vì sẽ làm đục nước dùng và có mùi tanh khét; phải hòa tan để lắng mới rót nước trong vào.',
    dishRefCode: 'HS-TRUNG-01'
  },
  {
    id: 5,
    question: 'Tên gọi "Bánh Xèo" của miền Tây Nam Bộ bắt nguồn từ đâu?',
    region: 'nam',
    options: [
      'Tên một loại lá cây rừng miền Tây',
      'Âm thanh tượng thanh "XÈO" khi đổ vá bột gạo vào chảo gang nóng rực',
      'Tên gọi của một làng nghề cổ bên bờ sông Tiền',
      'Tên một vị quan thời khẩn hoang'
    ],
    correctAnswer: 1,
    explanation: 'Khi người phụ nữ miền Tây múc vá bột gạo pha nước cốt dừa rót vào chảo gang nóng đỏ, tiếng vang "xèo...o...o" rộn rã đã trở thành tên gọi mộc mạc của món ăn.',
    culturalFact: 'Bánh xèo miền Tây có thể ăn kèm tới hơn 20 loại rau rừng ngập nước như lá cách, lá xoài non, đọt cóc, bông điên điển.',
    dishRefCode: 'HS-NAM-01'
  },
  {
    id: 6,
    question: 'Món Cơm Tấm Sài Gòn ban đầu có nguồn gốc từ tầng lớp nào trong xã hội?',
    region: 'nam',
    options: [
      'Giới quý tộc quan lại triều đình',
      'Thương nhân Hoa kiều giàu có Chợ Lớn',
      'Công nhân, phu xe kéo và người lao động nghèo',
      'Binh lính Pháp đồn trú'
    ],
    correctAnswer: 2,
    explanation: 'Hạt tấm là đầu hạt gạo bị vỡ khi xay xát, xưa kia có giá rất rẻ, được người lao động nghèo mua về nấu ăn chống đói, sau này phát triển thành món ăn đại chúng nức danh.',
    culturalFact: 'Cơm tấm Sài Gòn theo truyền thống ăn bằng thìa (muỗng) và nĩa trên đĩa dẹt, mang hơi thở giao thoa phương Tây.',
    dishRefCode: 'HS-NAM-02'
  },
  {
    id: 7,
    question: 'Món ăn nào gắn liền với phong trào Cần Vương yêu nước tại số nhà 14 phố Hàng Sơn năm 1886?',
    region: 'bac',
    options: [
      'Bún Thang Hà Nội',
      'Chả Cá Lã Vọng',
      'Bánh Đa Cua Hải Phòng',
      'Cốm Làng Vòng'
    ],
    correctAnswer: 1,
    explanation: 'Gia đình cụ Đoàn Xuân Phúc đã làm món chả cá lăng nướng chảo để chiêu đãi nghĩa sĩ nghĩa quân Đề Thám. Bức tượng cụ Lã Vọng câu cá trước cửa quán đã trở thành tên gọi món ăn.',
    culturalFact: 'Phố Hàng Sơn sau này được đổi tên thành phố Chả Cá, là con phố hiếm hoi mang tên một món ăn.',
    dishRefCode: 'HS-BAC-04'
  },
  {
    id: 8,
    question: 'Món Cơm Hến Cồn Hến (Huế) bắt buộc phải dùng loại cơm nào mới đúng chuẩn văn hóa dân gian?',
    region: 'trung',
    options: [
      'Cơm nóng hổi vừa xới ra nồi',
      'Cơm rang cháy giòn',
      'Cơm nguội để rời hạt',
      'Cơm nếp dẻo thơm'
    ],
    correctAnswer: 2,
    explanation: 'Người Huế kiên quyết dùng cơm nguội để giữ độ giòn mát tươi non của rau ghém, tương phản với nước luộc hến gừng nóng bỏng chan bên cạnh.',
    culturalFact: 'Cơm hến là món ăn thể hiện triết lý tận dụng đồ thừa thông minh của người dân nghèo xứ Huế nhưng đã được nâng tầm thành món ngự thiện.',
    dishRefCode: 'HS-TRUNG-04'
  }
];
