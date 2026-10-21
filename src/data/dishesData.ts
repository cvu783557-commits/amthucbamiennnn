import { Dish } from '../types';

export const DISHES_DATA: Dish[] = [
  // ==================== MIỀN BẮC ====================
  {
    id: 'pho-bo-ha-noi',
    code: 'HS-BAC-01',
    name: 'Phở Bò Hà Nội',
    localName: 'Phở gánh Kinh Kỳ',
    region: 'bac',
    province: 'Hà Nội',
    coordinates: { x: 52, y: 15 },
    eraTitle: 'Đầu thế kỷ XX (Thời Pháp thuộc)',
    eraCategory: 'can_dai',
    yearEstimate: 'Khoảng 1900 - 1910',
    summary: 'Món quốc hồn quốc túy khởi nguồn từ giao thoa văn hóa giữa món xáo trâu đồng bằng Bắc Bộ và súp bò kiểu Pháp.',
    originStory: 'Phở xuất hiện vào những năm đầu thế kỷ XX tại Hà Nội và Nam Định. Nguồn gốc phở được đa số các nhà khảo cứu ẩm thực (như Nguyễn Tuân, Thạch Lam, Vương Hồng Sển) đồng thuận là sự biến tấu sáng tạo từ món xáo trâu dân gian của phu thuyền bến sông Hồng kết hợp kỹ thuật hầm xương bò lấy nước dùng từ món súp "Pot-au-feu" của người Pháp. Tiếng rao "Hé! Feu!" của lính Pháp hay các gánh phở rong thắp đèn dầu leo lét phố cổ Hà Nội đã khắc sâu vào ký ức kinh kỳ. Nước dùng phở Bắc truyền thống phải trong veo, thơm nức mùi gừng nướng, hoa hồi, thảo quả và vị ngọt sâu từ tủy xương bò ninh 12-14 tiếng mà không lạm dụng đường.',
    historicalFigures: 'Nghệ nhân phở Nam Định (làng Vân Cù) và các cụ bán phở gánh phố cổ Hàng Trống, Bát Đàn.',
    literatureQuote: {
      text: 'Phở là một thứ quà đặc biệt của Hà Nội, không phải chỉ riêng Hà Nội mới có, nhưng chính là vì chỉ ở Hà Nội mới ngon... Nước dùng trong và ngọt, bánh dẻo mà không nát, thịt mỡ gầu giòn chứ không dai, chanh ớt với hành tây đủ cả.',
      author: 'Thạch Lam',
      source: 'Hà Nội băm sáu phố phường (1943)'
    },
    fiveElements: {
      kim: 'Gừng nướng, tiêu sọ đập giập, ớt tươi thái lát tạo vị cay the kích thích vị giác.',
      moc: 'Chanh cốm tươi vắt vừa tay, giấm tỏi ớt truyền thống Hà thành thanh mát.',
      thuy: 'Nước mắm cá cơm cốt nhĩ loại ngon hòa trong nước dùng, đậm đà nhưng không nồng.',
      hoa: 'Lửa hồng ninh xương 12 tiếng liên tục, quế chi, hoa hồi rang thơm sực.',
      tho: 'Sợi phở tráng từ bột gạo tẻ dẻo mềm, nước ngọt tự nhiên từ xương bò hầm nguyên chất.'
    },
    signatureIngredients: [
      { name: 'Xương ống và đuôi bò', role: 'Nền nước dùng ngọt tủy tự nhiên, trong veo không vẩn đục', localSpecialty: 'Bò cỏ Bắc Bộ' },
      { name: 'Bánh phở tráng tay', role: 'Bánh mềm mướt, cắt sợi vừa phải, giữ độ dai tự nhiên', localSpecialty: 'Gạo tẻ đồng bằng sông Hồng' },
      { name: 'Gia vị thảo mộc nướng', role: 'Thảo quả, hoa hồi, quế chi, gừng già, hành khô nướng vàng than hoa', localSpecialty: 'Vùng cao Tây Bắc' },
      { name: 'Hành hoa & ngò gai', role: 'Rắc phủ bề mặt, kích hoạt hương thơm khi chan nước sôi', localSpecialty: 'Hành hoa làng Láng' }
    ],
    cookingMethod: 'Ninh hầm xương dài hạn, hớt bọt thủ công, chần bánh nhanh và chan nước sôi sùng sục',
    cookingTime: '12 - 14 giờ',
    preparationSteps: [
      'Ngâm xương bò trong nước muối loãng, luộc sơ qua nước sôi cùng gừng để tẩy sạch mùi gây.',
      'Nướng thơm hoa hồi, quế, thảo quả, hạt mùi, gừng già và hành tây trên than hoa rồi bọc túi vải mỏng thả vào nồi hầm.',
      'Ninh nhỏ lửa liu riu từ 12-14 tiếng, liên tục vớt bọt để nước dùng đạt độ trong hổ phách tinh khiết.',
      'Chần bánh phở qua nước sôi, xếp thịt bò thái mỏng (tái, chín, nạm, gầu), rải hành hoa, mùi tàu rồi chan nước dùng đang sôi ngập bát.'
    ],
    culturalEtiquette: 'Ăn nóng ngay khi khói nghi ngút, dùng kèm quẩy giòn và giấm ỏi ớt. Người sành ăn Bắc không cho tương đen hay rau thơm miền Nam để thưởng thức trọn vẹn vị thanh tao của nước hầm.',
    image: '/src/assets/images/mon_bac_pho_ha_noi_1792587191700.jpg',
    imageCaption: 'Bát phở bò truyền thống Hà Nội với nước dùng trong hổ phách, gừng hồi và quẩy giòn phố cổ.',
    tags: ['Nước dùng', 'Bò', 'Di sản thế giới', 'Kinh kỳ'],
    tasteProfile: ['Ngọt thanh từ xương', 'Thơm nồng thảo mộc', 'Cay dịu ấm nóng'],
    nutritionInsight: 'Giàu collagen tự nhiên từ tủy xương, protein từ thịt bò tươi, cung cấp năng lượng và hồi phục thể trạng.',
    artisanSecret: 'Bí quyết giữ nước trong vắt: Khi nước sôi bùng phải hạ lửa ngay chỉ để sủi tăm lăn tăn, không bao giờ đậy nắp kín khi hầm xương.',
    comparisonId: 'so-sanh-pho'
  },
  {
    id: 'bun-cha-ha-noi',
    code: 'HS-BAC-02',
    name: 'Bún Chả Hà Nội',
    localName: 'Chả que tre Hàng Mành',
    region: 'bac',
    province: 'Hà Nội',
    coordinates: { x: 53, y: 16 },
    eraTitle: 'Thế kỷ XIX - Đầu thế kỷ XX',
    eraCategory: 'can_dai',
    yearEstimate: 'Khoảng cuối thời Nguyễn',
    summary: 'Tinh hoa ẩm thực nướng than hoa kinh kỳ với chả miếng, chả băm kẹp que tre và nước chấm thanh dịu.',
    originStory: 'Bún chả Hà Nội là sự hòa quyện tuyệt vời của nghệ thuật nướng thịt dân gian bằng than củi. Xưa kia, người Tràng An dùng thanh tre tươi kẹp thịt ba chỉ thái mỏng và chả băm bọc lá lốt hoặc lá chuối rồi quạt than hoa đỏ rực trên vỉa hè các phố Hàng Than, Hàng Mành. Mùi mỡ xèo xèo nhỏ giọt xuống than hồng tỏa mùi thơm quyến rũ khắp các ngõ ngách. Điểm linh hồn của bún chả là bát nước chấm pha ấm với giấm thanh, đường cát, nước mắm ngon và dưa góp đu đủ xanh giòn sần sật, xưa có thể gia thêm một giọt tinh dầu cà cuống.',
    historicalFigures: 'Các bà, các cô gánh bún chả phố cổ Hà Nội ghi dấu ấn trong tác phẩm của Vũ Bằng và Thạch Lam.',
    literatureQuote: {
      text: 'Đến khi cầm đũa gắp một miếng chả, kèm một ngọn rau diếp, chấm vào bát nước chấm có đu đủ giòn tan... thì người ta mới thấy hết cái thú thần tiên của sự ăn uống trên đời này.',
      author: 'Vũ Bằng',
      source: 'Miếng ngon Hà Nội (1957)'
    },
    fiveElements: {
      kim: 'Tiêu đen xay nhuyễn ướp thịt, tỏi đập giập và ớt chỉ thiên trong bát nước chấm.',
      moc: 'Rau kinh giới, tía tô tím ngắt, rau thơm Láng và giấm thanh ủ gạo.',
      thuy: 'Nước mắm cốt truyền thống pha loãng đúng tỷ lệ tạo độ mặn thanh.',
      hoa: 'Than hoa đỏ rực nướng thịt bén cạnh vàng ươm, caramen hóa mỡ thịt.',
      tho: 'Sợi bún Phú Đô trắng muốt, dẻo dai từ gạo mùa mới và vị ngọt thịt ba chỉ tươi.'
    },
    signatureIngredients: [
      { name: 'Thịt ba chỉ & thịt nạc vai', role: 'Làm chả miếng và chả băm viên mềm ngọt, không khô', localSpecialty: 'Thịt lợn ỉ truyền thống' },
      { name: 'Bún sợi nhỏ Phú Đô', role: 'Bún tươi mềm mượt, cuộn gắp không bị nát vỡ', localSpecialty: 'Làng nghề bún Phú Đô (Hà Nội)' },
      { name: 'Dưa góp đu đủ & cà rốt', role: 'Tạo độ giòn giòn cân bằng vị béo của thịt nướng', localSpecialty: 'Đu đủ bánh tẻ' },
      { name: 'Nước hàng thắng tự nhiên', role: 'Ướp thịt lên màu cánh gián và hương thơm caramen', localSpecialty: 'Mật mía hoặc đường thắng' }
    ],
    cookingMethod: 'Nướng than hoa bằng kẹp que tre tươi, pha nước chấm ấm lòng',
    cookingTime: '45 phút',
    preparationSteps: [
      'Thịt ba chỉ thái mỏng làm chả miếng; nạc vai băm nhỏ vo viên tròn dẹt làm chả băm.',
      'Ướp thịt với hành khô băm, nước mắm, đường, tiêu và nước hàng thắng vàng óng trong ít nhất 1 giờ.',
      'Kẹp thịt vào thanh tre bánh tẻ tươi hoặc vỉ nướng trên than hoa đỏ hồng, lật đều tay đến khi xém cạnh thơm lừng.',
      'Pha nước chấm ấm theo tỉ lệ vàng: 1 mắm, 1 đường, 1 giấm, 5 nước lọc; thêm dưa góp, ớt tươi và thả chả nóng vào ngập bát.'
    ],
    culturalEtiquette: 'Thưởng thức bằng cách gắp bún nhúng ngập vào bát nước chấm đang chứa chả nóng hổi, ăn kèm đĩa rau sống xanh mát gồm kinh giới, tía tô, xà lách.',
    image: '/src/assets/images/hero_am_thuc_ba_mien_1792587191123.jpg',
    imageCaption: 'Mâm bún chả nướng than hoa Hà Nội đầy đặn rau sống kinh giới tía tô và bát nước chấm dưa góp.',
    tags: ['Thịt nướng', 'Bún', 'Kinh kỳ', 'Than hoa'],
    tasteProfile: ['Đậm đà chua ngọt dịu', 'Thơm nức mùi than củi', 'Tươi mát từ rau thơm'],
    nutritionInsight: 'Cung cấp cân đối protein động vật và vitamin/chất xơ phong phú từ nhiều loại rau gia vị Việt.',
    artisanSecret: 'Chả viên ngon phải trộn chút mỡ phần băm nhỏ hoặc bọc mỡ chài/lá chuối nướng để khi quạt than, thịt chín mọng mềm mà không hề bị khô xác.',
    comparisonId: 'so-sanh-bun-cha'
  },
  {
    id: 'banh-chung-dat-to',
    code: 'HS-BAC-03',
    name: 'Bánh Chưng Đất Tổ',
    localName: 'Bánh Chưng Lang Liêu',
    region: 'bac',
    province: 'Phú Thọ',
    coordinates: { x: 50, y: 13 },
    eraTitle: 'Thời Hùng Vương (Cổ đại)',
    eraCategory: 'co_dai',
    yearEstimate: 'Thế kỷ VII - VI TCN',
    summary: 'Món ăn cội nguồn dân tộc biểu trưng cho Đất Mẹ vuông vức, nuôi dưỡng sự sống muôn loài của nền văn minh lúa nước.',
    originStory: 'Theo truyền thuyết dân gian "Sự tích bánh chưng bánh giầy" ghi lại trong Lĩnh Nam Chích Quái, vào đời vua Hùng Vương thứ 6, sau khi đánh dẹp giặc Ân, nhà vua muốn truyền ngôi cho người con nào làm vừa lòng thần linh tổ tiên. Trong khi các hoàng tử khác lặn lội tìm sơn hào hải vị, hoàng tử Lang Liêu được thần nhân báo mộng đã chọn hạt lúa gạo quý giá nhất nơi đồng quê để tạo nên hai thứ bánh: Bánh giầy tròn tượng trưng cho Trời (Dương), bánh chưng vuông gói lá dong tượng trưng cho Đất (Âm), bên trong là nhân đỗ xanh và thịt mỡ tượng trưng cho mầm sống cỏ cây và muông thú.',
    historicalFigures: 'Hoàng tử Lang Liêu (Hùng Chiêu Vương), Vua Hùng thứ 6.',
    literatureQuote: {
      text: 'Trong trời đất, không có vật gì quý bằng gạo, vì gạo là ngọc thực nuôi sống con người. Các thứ khác tuy quý nhưng chỉ là vật phụ, duy có gạo mới là vật căn bản.',
      author: 'Lĩnh Nam Chích Quái',
      source: 'Truyền thuyết thời Hồng Bàng (Thế kỷ XIV)'
    },
    fiveElements: {
      kim: 'Hạt tiêu đen xay nhuyễn ướp thịt lợn tạo vị cay ấm nồng.',
      moc: 'Lá dong xanh mướt ôm trọn chiếc bánh, rền xanh tự nhiên.',
      thuy: 'Hạt muối biển trắng tinh ướp vào gạo nếp và nhân đậu tạo vị đằm thắm.',
      hoa: 'Bếp lửa củi gộc đỏ hồng rực sáng suốt 10-12 giờ đêm giao thừa.',
      tho: 'Hạt nếp cái hoa vàng dẻo thơm tượng trưng cho Đất Mẹ phì nhiêu.'
    },
    signatureIngredients: [
      { name: 'Nếp cái hoa vàng', role: 'Hạt gạo tròn mẩy, dẻo quánh và thơm ngát hương lúa', localSpecialty: 'Vùng đồi Đất Tổ Phú Thọ & Nam Định' },
      { name: 'Đỗ xanh tiêu hạt tiêu', role: 'Đỗ xanh lòng vàng ươm, bùi béo mịn màng', localSpecialty: 'Đỗ xanh đồng bằng' },
      { name: 'Thịt lợn ba chỉ ướp tiêu', role: 'Lớp mỡ tan chảy quyện vào nếp tạo độ béo ngậy mượt mà', localSpecialty: 'Lợn đen bản địa' },
      { name: 'Lá dong rừng bản to', role: 'Giữ khuôn bánh xanh rền, mùi thơm hoang dại của núi rừng', localSpecialty: 'Rừng cọ đồi chè Phú Thọ' }
    ],
    cookingMethod: 'Gói lạt giang vuông vức, luộc củi gộc liên tục từ 10 - 12 tiếng',
    cookingTime: '10 - 12 giờ',
    preparationSteps: [
      'Gạo nếp cái hoa vàng vo sạch, đãi kỹ và xóc chút muối hạt trắng tinh cho đậm đà.',
      'Đỗ xanh ngâm nở, đãi sạch vỏ, đồ chín rồi đánh tơi nhuyễn vo viên làm nhân.',
      'Thịt lợn ba chỉ tươi thái miếng dày, ướp tiêu đen và muối hạt đậm vị.',
      'Dùng khuôn gỗ và 4 lá dong xếp bắt chéo, rải lớp nếp, lớp đỗ, thịt mỡ, rồi lại lớp đỗ và lớp nếp phủ kín.',
      'Gấp lá vuông vắn, buộc lạt giang đều đặn rồi xếp vào nồi luộc bằng củi gộc 12 tiếng liên tục, luôn châm nước sôi.',
      'Vớt bánh rửa sạch nước nhờn bên ngoài, ép bằng phiến ván nặng cho róc nước và bánh chắc dền.'
    ],
    culturalEtiquette: 'Dùng lạt giang chẻ nhỏ tước mỏng để cắt bánh thành 8 miếng hình tam giác đều tăm tắp, ăn kèm dưa hành muối chua và giò lụa truyền thống.',
    image: '/src/assets/images/hero_am_thuc_ba_mien_1792587191123.jpg',
    imageCaption: 'Bánh chưng xanh rền vuông vắn biểu trưng cho Đất Mẹ và sự đoàn viên ngày Tết.',
    tags: ['Tết cổ truyền', 'Hùng Vương', 'Văn minh lúa nước', 'Lễ hội'],
    tasteProfile: ['Bùi béo dẻo thơm', 'Đậm đà thịt tiêu', 'Thanh mát hương lá dong'],
    nutritionInsight: 'Hàm lượng carbohydrate phức hợp cao, protein và lipid tạo nguồn năng lượng dồi dào cho dịp lễ hội mùa đông.',
    artisanSecret: 'Bí quyết bánh xanh mướt không cần phẩm màu: Lót cuống lá dong dư dưới đáy nồi luộc và dùng nước mưa trong hoặc nước giếng đá ong để ninh bánh.',
    comparisonId: 'so-sanh-banh-chung'
  },
  {
    id: 'cha-ca-la-vong',
    code: 'HS-BAC-04',
    name: 'Chả Cá Lã Vọng',
    localName: 'Chả cá họ Đoàn',
    region: 'bac',
    province: 'Hà Nội',
    coordinates: { x: 52, y: 14.5 },
    eraTitle: 'Năm 1886 (Thời kỳ phong trào Cần Vương)',
    eraCategory: 'can_dai',
    yearEstimate: 'Năm 1886',
    summary: 'Món ăn biểu tượng trí tuệ yêu nước tại số 14 phố Hàng Sơn, mang tên bậc hiền triết Khương Tử Nha câu cá.',
    originStory: 'Năm 1886, tại số nhà 14 phố Hàng Sơn (nay là phố Chả Cá), gia đình cụ Đoàn Xuân Phúc đã sáng chế ra món cá nướng chảo độc đáo để chiêu đãi nghĩa sĩ nghĩa quân Đề Thám bí mật tụ họp. Trước cửa quán, cụ Đoàn đặt một bức tượng ông Lã Vọng (Khương Tử Nha) ngồi bó gối ôm cần câu cá — biểu tượng của bậc hào kiệt chờ thời cơ cứu nước. Khách ăn quen gọi thành "Chả cá Lã Vọng". Thịt cá lăng tươi sông Hồng được lóc xương, ướp nghệ, riềng, mẻ rồi nướng sơ trên than hoa, sau đó xào nóng trong chảo mỡ cùng thì là và đầu hành tươi.',
    historicalFigures: 'Gia đình cụ Đoàn Xuân Phúc và nghĩa quân Đề Thám chống thực dân Pháp.',
    literatureQuote: {
      text: 'Mỗi miếng chả cá vàng rộm nằm lẫn giữa những cọng thì là xanh ngăn ngắt, chấm vào bát mắm tôm sủi bọt tím ngắt rưới giọt chanh, nhấp thêm ngụm rượu tăm... thì cả một trời thu Hà Nội như đọng lại.',
      author: 'Vũ Bằng',
      source: 'Món lạ Hà Nội'
    },
    fiveElements: {
      kim: 'Đầu hành hoa chẻ sợi trắng tinh, ớt tươi cay the đầu lưỡi.',
      moc: 'Rau thì là xanh biếc thơm mùi tinh dầu đặc trưng, mẻ ngấu chua thanh dịu.',
      thuy: 'Mắm tôm bốc men rượu thơm nức, đánh sủi bọt trắng xóa cùng nước cốt chanh.',
      hoa: 'Nghệ tươi giã vắt nước màu vàng cam rực rỡ và bếp than hồng giữ chảo xèo xèo.',
      tho: 'Thịt cá lăng ngọt béo tự nhiên hòa cùng bún trắng và lạc rang bùi giòn.'
    },
    signatureIngredients: [
      { name: 'Cá lăng sông Hồng / sông Đà', role: 'Thịt chắc, ít xương dăm, thơm béo và ngọt đậm đà', localSpecialty: 'Cá lăng sông Đà' },
      { name: 'Rau thì là & đầu hành hoa', role: 'Lượng lớn rau thơm khử tanh hoàn hảo và tạo hương thơm nồng nàn', localSpecialty: 'Rau thơm đồng bằng' },
      { name: 'Mắm tôm Hậu Lộc', role: 'Linh hồn chấm, đánh bông cùng đường, chanh và rượu trắng', localSpecialty: 'Thanh Hóa' },
      { name: 'Lạc rang bóc vỏ & bún rối', role: 'Tạo độ bùi giòn và nền tinh bột thanh tao', localSpecialty: 'Làng bún Phú Đô' }
    ],
    cookingMethod: 'Nướng than hoa tẩm nghệ riềng mẻ rồi xào nóng trong chảo mỡ tại bàn',
    cookingTime: '30 phút',
    preparationSteps: [
      'Cá lăng lọc lấy phi lê thịt nạc, thái miếng dày bản vừa ăn.',
      'Ướp cá với nước cốt nghệ tươi, riềng giã nhỏ, mẻ ngấu lọc mịn, mắm tôm ngon và chút dầu ăn trong 2 tiếng.',
      'Kẹp cá vào vỉ nướng trên than hoa đến khi hai mặt se lại, vàng ươm và thơm ngậy.',
      'Đặt chảo gang lên bếp lửa tại bàn ăn, cho mỡ nước vào phi thơm hành hoa và thì là, thả chả cá vào đảo nhẹ tay cho săn nóng rồi gắp thưởng thức ngay.'
    ],
    culturalEtiquette: 'Ăn trực tiếp từ chảo nóng: Gắp miếng cá nóng hổi, kẹp cọng thì là xào, chút bún, rắc lạc rang và chấm ngập bát mắm tôm đánh sủi bọt rượu chanh.',
    image: '/src/assets/images/mon_bac_pho_ha_noi_1792587191700.jpg',
    imageCaption: 'Chả cá lăng nướng vàng ươm nghệ tươi thơm nức thì là và đầu hành hoa chẻ sợi.',
    tags: ['Cá lăng', 'Đặc sản Hà Nội', 'Mắm tôm', 'Lịch sử'],
    tasteProfile: ['Béo ngậy thịt cá', 'Thơm nồng thì là mẻ nghệ', 'Đậm đà mắm tôm sủi bọt'],
    nutritionInsight: 'Cung cấp omega-3 dồi dào, kháng viêm tự nhiên từ củ nghệ vàng và riềng tươi.',
    artisanSecret: 'Phải dùng mỡ nước (mỡ lợn phi) thay vì dầu ăn công nghiệp để xào cá, mỡ lợn giữ nhiệt cao giúp thì là chín tới xanh biếc mà không nhũn.',
    comparisonId: 'so-sanh-cha-ca'
  },
  {
    id: 'banh-da-cua-hai-phong',
    code: 'HS-BAC-05',
    name: 'Bánh Đa Cua Hải Phòng',
    localName: 'Bánh đa đỏ bến cảng',
    region: 'bac',
    province: 'Hải Phòng',
    coordinates: { x: 55, y: 17 },
    eraTitle: 'Thế kỷ XIX (Thời bến cảng thương mại)',
    eraCategory: 'can_dai',
    yearEstimate: 'Khoảng giữa thế kỷ XIX',
    summary: 'Món ăn mang bản lĩnh phóng khoáng của đất Cảng với sợi bánh đa đỏ tráng tay dai mướt và gạch cua đồng óng ánh.',
    originStory: 'Khởi thủy từ làng bánh đa Dư Hàng Kênh ven sông Cấm, những người thợ tráng bánh xưa đã kết hợp bột gạo ngon với màu đỏ tự nhiên của hạt gấc chín hoặc mật mía để tạo nên sợi bánh đa màu nâu đỏ sậm, phơi qua một sương một nắng dẻo dai lạ kỳ. Khi người lao động bến cảng Hải Phòng cần món ăn no lâu, đậm đà để chống chọi với sóng gió biển khơi, món bánh đa nấu riêu cua đồng béo ngậy cùng chả lá lốt, chả cá thu và rau muống giòn đã ra đời, trở thành thương hiệu không thể trộn lẫn.',
    historicalFigures: 'Nghệ nhân làng bánh đa cổ Dư Hàng Kênh và phu bến cảng Sáu Kho Hải Phòng.',
    literatureQuote: {
      text: 'Màu nâu đỏ của sợi bánh đa, màu vàng au của gạch cua, màu xanh mướt của rau muống cọng to giòn ngọt... làm nên bức tranh thủy mặc ẩm thực rực lửa của thành phố hoa phượng đỏ.',
      author: 'Nguyễn Thụy Kha',
      source: 'Hương vị Đất Cảng'
    },
    fiveElements: {
      kim: 'Ớt chưng cay xé lưỡi (chí chương Hải Phòng) chuẩn phong vị dân biển.',
      moc: 'Rau muống chẻ ngọn hoặc rau rút giòn rụm, me chua đánh riêu thanh dịu.',
      thuy: 'Cua đồng giã tay đậm đà, nước mắm Cát Hải nguyên chất dậy mùi sóng nước.',
      hoa: 'Gạch cua chưng dầu màu vàng cam rực cháy, hành phi giòn tan thơm nức.',
      tho: 'Sợi bánh đa đỏ dẻo dai từ gạo mùa phơi sương tráng đầm bột.'
    },
    signatureIngredients: [
      { name: 'Bánh đa đỏ Dư Hàng Kênh', role: 'Sợi bánh màu nâu đỏ đặc trưng, trần nước sôi vẫn giữ độ dai sần sật', localSpecialty: 'Hải Phòng' },
      { name: 'Cua đồng giã tay', role: 'Gạch cua đóng tảng dầy, nước riêu ngọt thanh không khé cổ', localSpecialty: 'Đồng bằng duyên hải' },
      { name: 'Chả lá lốt & chả cá thu', role: 'Thơm lừng mùi lá lốt chiên và dai ngọt thịt cá biển', localSpecialty: 'Hải Phòng' },
      { name: 'Chí chương (tương ớt cay)', role: 'Gia vị cay nồng lên men truyền thống của người Đất Cảng', localSpecialty: 'Chí chương Hải Phòng' }
    ],
    cookingMethod: 'Nấu riêu cua đồng gạch tảng, chần bánh đa đỏ dẻo dai ăn kèm rau muống giòn',
    cookingTime: '1 giờ',
    preparationSteps: [
      'Cua đồng rửa sạch, tách mai khều gạch, thịt cua giã nhuyễn với chút muối rồi lọc lấy nước cốt.',
      'Đun nước cua nhỏ lửa để thịt cua kết lại thành từng tảng lớn nổi lên trên, vớt riêng ra bát.',
      'Phi thơm hành khô, chưng gạch cua với dầu điều cho màu sắc vàng cam óng ả.',
      'Chần rau muống hoặc rau cần vừa chín tới, chần sợi bánh đa đỏ qua nước sôi rồi xếp vào tô.',
      'Bày chả lá lốt, chả cá, thịt cua, chan nước riêu nóng hổi chua thanh vị me, rắc hành phi và dầm thìa chí chương cay xé.'
    ],
    culturalEtiquette: 'Thưởng thức khi còn nóng hổi, ăn kèm với rau sống, hoa chuối thái mỏng và nhất định phải thêm chí chương mới chuẩn vị Đất Cảng.',
    image: '/src/assets/images/hero_am_thuc_ba_mien_1792587191123.jpg',
    imageCaption: 'Bát bánh đa cua đỏ rực rỡ với tảng gạch cua đồng thơm ngậy và chả lá lốt đậm đà.',
    tags: ['Bánh đa đỏ', 'Cua đồng', 'Hải Phòng', 'Bến cảng'],
    tasteProfile: ['Ngọt đậm vị cua', 'Chua thanh nước me', 'Cay nồng chí chương'],
    nutritionInsight: 'Hàm lượng canxi và khoáng chất dồi dào từ cua đồng tươi, cân bằng chất xơ từ rau muống xanh.',
    artisanSecret: 'Muốn thịt cua kết tảng dày xốp: Khi đun nước cua phải khuấy nhẹ tay theo một chiều, khi nước bắt đầu lăn tăn thì ngừng khuấy và hạ lửa nhỏ nhất.',
    comparisonId: 'so-sanh-canh-chua'
  },

  // ==================== MIỀN TRUNG ====================
  {
    id: 'bun-bo-hue',
    code: 'HS-TRUNG-01',
    name: 'Bún Bò Huế',
    localName: 'Bún bò giò heo Cố Đô',
    region: 'trung',
    province: 'Thừa Thiên Huế',
    coordinates: { x: 58, y: 48 },
    eraTitle: 'Thế kỷ XVI (Thời chúa Nguyễn Hoàng)',
    eraCategory: 'phong_kien',
    yearEstimate: 'Khoảng năm 1558',
    summary: 'Món ăn hội tụ triết lý cung đình và nghệ thuật mắm ruốc thượng hạng của làng nghề cổ Vân Cù xứ Huế.',
    originStory: 'Theo gia phả làng bún cổ Vân Cù (thị xã Hương Trà, Thừa Thiên Huế), món bún bò do "Bà Bún" (cô gái họ Bùi xinh đẹp, tần tảo) sáng tạo ra từ thế kỷ XVI khi theo chúa Tiên Nguyễn Hoàng vào trấn thủ xứ Thuận Hóa. Trải qua hàng trăm năm, món ăn dân dã này đã được các đầu bếp ngự trù trong hoàng thành Huế nâng tầm thành món ngự thiện dâng vua. Điểm phân định đẳng cấp của bún bò Huế là nghệ thuật dùng mắm ruốc: Mắm ruốc biển Thuận An phải được hòa nước lạnh, đun sôi, chắt lấy nước trong rồi hạ thổ hoặc lắng kỹ trước khi nêm vào nồi nước dùng thơm lừng sả cây đập giập và ớt đỏ rực.',
    historicalFigures: 'Bà Bún làng Vân Cù và các đầu bếp Hoàng gia triều Nguyễn.',
    literatureQuote: {
      text: 'Bún bò Huế không đơn thuần là món ăn mà là một sự thách thức về khứu giác và vị giác. Mùi thơm của sả bốc lên nồng nàn quyện cùng hương ruốc thâm trầm như lịch sử mấy trăm năm của sông Hương núi Ngự.',
      author: 'Hoàng Phủ Ngọc Tường',
      source: 'Món ngon xứ Huế'
    },
    fiveElements: {
      kim: 'Ớt bột xào dầu hạt điều cay nồng xé lưỡi, hạt tiêu cay the của đất miền Trung.',
      moc: 'Bắp chuối sứ thái mỏng ngâm nước chanh trắng tinh, rau húng lủi, giá đỗ.',
      thuy: 'Mắm ruốc Huế ủ chum sành nồng nàn, nước mắm cá cơm cốt đậm đà.',
      hoa: 'Củ sả già đập giập khử hàn, màu đỏ au của ớt sa tế bập bùng ngọn lửa.',
      tho: 'Sợi bún to tròn đặc trưng làng Vân Cù vắt từ gạo ngon và vị ngọt tủy xương bò.'
    },
    signatureIngredients: [
      { name: 'Mắm ruốc Huế ủ chum', role: 'Tạo hương vị trầm ấm, hậu vị ngọt sâu không thể thay thế', localSpecialty: 'Thuận An - Cố Đô' },
      { name: 'Bắp bò hoa & giò heo', role: 'Thịt bò gân giòn sần sật, móng giò béo mềm ninh vừa tới', localSpecialty: 'Bò cỏ xứ Huế' },
      { name: 'Sả cây & ớt bột cay', role: 'Hàng bó sả đập dập thơm lừng át hoàn toàn mùi nồng của thịt', localSpecialty: 'Sả miền Trung' },
      { name: 'Sợi bún Vân Cù', role: 'Sợi bún tiết diện to tròn dẻo dai, bóng mượt', localSpecialty: 'Làng bún Vân Cù' }
    ],
    cookingMethod: 'Ninh xương bò hầm sả cây, nêm tinh chất mắm ruốc lắng trong, dùng kèm chả cua',
    cookingTime: '6 - 8 giờ',
    preparationSteps: [
      'Xương bò và bắp bò rửa sạch ngâm rượu gừng, luộc xả bỏ nước đầu để khử mùi.',
      'Đập giập nhiều bó sả lót dưới đáy nồi quân dụng, xếp xương bò và bắp bò lên trên ninh nhỏ lửa.',
      'Mắm ruốc hòa tan trong nước sôi để nguội, để lắng 2 giờ rồi gạn lấy phần nước trong vắt phía trên nêm vào nồi.',
      'Phi thơm ớt bột trong dầu hạt điều tạo váng màu đỏ cam óng ánh phủ lên mặt nước dùng.',
      'Trần bún sợi to vào tô, xếp bắp bò thái lát, giò heo, chả cua quết, tiết luộc rồi chan nước dùng sả ruốc sôi sùng sục.'
    ],
    culturalEtiquette: 'Ăn nóng hổi, kèm đĩa rau ghém hoa chuối bào sợi, húng thơm, chanh ớt tươi; người Huế ăn rất cay để cân bằng tính hàn của khí hậu miền Trung mưa dầm dề.',
    image: '/src/assets/images/mon_trung_bun_bo_hue_1792587193895.jpg',
    imageCaption: 'Tô bún bò Huế hoàng cung với nước dùng đỏ sả ruốc, bắp bò hoa và hoa chuối bào thanh tao.',
    tags: ['Bún bò', 'Hoàng cung', 'Cố đô Huế', 'Mắm ruốc'],
    tasteProfile: ['Cay nồng nàn', 'Thơm lừng mùi sả', 'Đậm đà hương ruốc Huế'],
    nutritionInsight: 'Cung cấp năng lượng cao, giàu chất sắt từ huyết và thịt bò, kháng khuẩn giữ ấm từ tinh dầu sả ớt.',
    artisanSecret: 'Mắm ruốc nhất định không được thả trực tiếp vào nồi đang sôi vì sẽ làm nước đục và bốc mùi tanh khét; phải khuấy riêng lấy nước trong rồi rót nhẹ từ từ.',
    comparisonId: 'so-sanh-bun-bo'
  },
  {
    id: 'mi-quang',
    code: 'HS-TRUNG-02',
    name: 'Mì Quảng',
    localName: 'Mì Quảng Phú Chiêm',
    region: 'trung',
    province: 'Quảng Nam',
    coordinates: { x: 60, y: 53 },
    eraTitle: 'Thế kỷ XVII (Thời thương cảng Faifo - Hội An)',
    eraCategory: 'khan_hoang',
    yearEstimate: 'Khoảng thế kỷ XVII',
    summary: 'Món ăn kết tinh văn hóa mở cõi phương Nam với sợi mì gạo vàng nghệ, nước nhưỡng xâm xấp và củ nén phi dầu phụng.',
    originStory: 'Mì Quảng ra đời tại vùng đất Quảng Nam trong bối cảnh thương cảng quốc tế Faifo (Hội An) sầm uất thế kỷ XVII. Khi những đoàn lưu dân người Việt vào khai hoang mở đất, họ đã sáng tạo nên món mì từ hạt lúa nước bản địa, nhưng không chan ngập nước như phở hay bún miền Bắc, mà chỉ chan một lượng nước dùng đậm đặc (gọi là "nước nhưỡng") vừa đủ ướt sợi mì. Điểm linh hồn không thể nhầm lẫn của Mì Quảng là củ nén (hành tăm) đập giập phi thơm với dầu đậu phụng (dầu lạc) nguyên chất ép thủ công, tạo nên hương thơm mộc mạc mà quyến rũ kỳ lạ.',
    historicalFigures: 'Người dân vùng đất ngũ Quảng và làng mì Phú Chiêm (Điện Bàn, Quảng Nam).',
    literatureQuote: {
      text: 'Thương nhau múc bát chè xanh / Làm nên tô mì Quảng cho anh đỡ lòng. Mì Quảng không chịu nằm trong sự thanh cảnh đài các; nó là món ăn của những con người ăn to nói lớn, bộc trực và ân tình.',
      author: 'Ca dao xứ Quảng',
      source: 'Dân gian xứ Quảng'
    },
    fiveElements: {
      kim: 'Ớt sừng xanh nguyên trái giòn rụm cắn nghe giòn tan cay xé, củ nén nồng ấm.',
      moc: 'Rau sống Trà Quế với 9 loại rau vườn non mướt, bắp chuối thái mịn.',
      thuy: 'Nước mắm Nam Ô nguyên chất mặn mòi giọt ngọc của biển miền Trung.',
      hoa: 'Dầu phụng phi nén xì xèo trên chảo gang đỏ lửa tạo màu vàng nghệ tráng bánh.',
      tho: 'Sợi mì gạo cán tay dẻo ngọt, tôm sông và thịt ba chỉ rim keo đậm đà.'
    },
    signatureIngredients: [
      { name: 'Củ nén & dầu phụng ép thủ công', role: 'Linh hồn mùi vị, dậy hương vị béo ngậy đặc hữu xứ Quảng', localSpecialty: 'Vùng cát Quảng Nam' },
      { name: 'Sợi mì tráng tay bột gạo', role: 'Sợi mì bản rộng, thoa dầu phụng nghệ vàng óng hoặc trắng ngà', localSpecialty: 'Làng mì Phú Chiêm' },
      { name: 'Tôm đất & thịt heo ba chỉ', role: 'Tôm sông còn nhảy tanh tách rim thấm tháp cùng củ nén', localSpecialty: 'Sông Thu Bồn' },
      { name: 'Rau sống Trà Quế', role: 'Gồm 9 vị rau thơm non mướt bón bằng rong sông Cổ Cò', localSpecialty: 'Làng rau Trà Quế (Hội An)' }
    ],
    cookingMethod: 'Rim tôm thịt đậm đà làm nước nhưỡng sánh đặc, chan nước xâm xấp mặt mì',
    cookingTime: '45 phút',
    preparationSteps: [
      'Gạo ngâm xay mịn tráng mỏng trên nồi hơi, thoa dầu phụng phi nén rồi thái sợi bản rộng.',
      'Củ nén đập giập, phi thơm cùng dầu phụng trên chảo gang lửa lớn cho dậy mùi thơm nức mũi.',
      'Trút tôm đất và thịt heo ba chỉ vào xào săn, nêm nước mắm cốt Nam Ô, tiêu và bột nghệ rồi rim liu riu đến khi ngấm gia vị.',
      'Châm thêm nước hầm xương heo hoặc nước tôm vào đun cạn bớt thành nước nhưỡng sánh đậm.',
      'Bốc lớp rau sống dưới đáy tô, xếp sợi mì lên trên, múc tôm thịt và chan 1-2 muôi nước nhưỡng xâm xấp; rải lạc rang và bẻ bánh tráng mè nướng giòn rụm.'
    ],
    culturalEtiquette: 'Dùng đũa trộn đều từ dưới lên trên cho nước nhưỡng thấm đẫm từng sợi mì, cắn trái ớt xanh giòn rụm và bẻ bánh tráng mè xúc ăn cùng.',
    image: '/src/assets/images/hero_am_thuc_ba_mien_1792587191123.jpg',
    imageCaption: 'Tô Mì Quảng Phú Chiêm đậm đà nước nhưỡng, bánh tráng nướng giòn rụm và ớt xanh giòn cay.',
    tags: ['Mì Quảng', 'Xứ Quảng', 'Hội An', 'Củ nén'],
    tasteProfile: ['Đậm đà béo thơm dầu phụng', 'Giòn tan bánh tráng', 'Cay nồng ớt xanh'],
    nutritionInsight: 'Giàu chất béo không bão hòa từ dầu đậu phộng tự nhiên, chất chống oxy hóa từ nghệ vàng và củ nén.',
    artisanSecret: 'Nếu chan nước dùng đầy tô như bún phở thì không còn là Mì Quảng; nước nhưỡng phải thật sánh và chỉ chan ngập 1/3 tô để giữ trọn độ béo của dầu lạc và độ giòn của rau sống.',
    comparisonId: 'so-sanh-mi-quang'
  },
  {
    id: 'cao-lau-hoi-an',
    code: 'HS-TRUNG-03',
    name: 'Cao Lầu Hội An',
    localName: 'Món ngon Lầu Cao',
    region: 'trung',
    province: 'Quảng Nam',
    coordinates: { x: 61, y: 54 },
    eraTitle: 'Thế kỷ XVII (Thời Chúa Nguyễn mở cõi)',
    eraCategory: 'khan_hoang',
    yearEstimate: 'Khoảng 1600 - 1650',
    summary: 'Món ăn huyền thoại chỉ có thể nấu chuẩn vị tại Hội An nhờ "Tam bảo": Nước giếng Bá Lễ, tro Cù Lao Chàm và rau Trà Quế.',
    originStory: 'Cao Lầu mang tên gọi nghĩa là "Lầu Cao", bởi thế kỷ XVII-XVIII tại thương cảng Faifo sầm uất, các thương gia người Hoa và Nhật Bản giàu có thường ngồi trên các tầng lầu cao của quán xá ngắm nhìn phố cảng sông Hoài để thưởng thức món ăn đặc biệt này. Cao Lầu không phải mì soba của Nhật, cũng không phải mì hoành thánh của Hoa, mà là sự sáng tạo độc nhất vô nhị của người Việt. Sợi Cao Lầu có màu vàng đục, dai giòn sần sật vì được ngâm trong nước tro củi lấy từ Cù Lao Chàm và nhào bằng nước ngầm thanh ngọt của giếng cổ Bá Lễ ngàn năm tuổi.',
    historicalFigures: 'Các thương gia Á - Âu tại thương cảng Faifo và nghệ nhân ẩm thực Hội An.',
    literatureQuote: {
      text: 'Mười bảy thế kỷ trôi qua, nước giếng Bá Lễ vẫn trong vắt mát rượi, cây củi tro Cù Lao Chàm vẫn đượm màu tro xám... Tất cả gom tụ lại trong một bát Cao Lầu như lưu giữ linh hồn cổ kính của Hội An.',
      author: 'Nguyễn Văn Xuân',
      source: 'Hội An di sản'
    },
    fiveElements: {
      kim: 'Bột ngũ vị hương ướp xá xíu thơm lừng, ớt sa tế khô cay rực.',
      moc: 'Rau đắng non, húng lủi, cải con từ làng rau Trà Quế xanh biếc.',
      thuy: 'Nước xíu thịt sánh đặc mặn mà tẩm ướp gia vị thâm sâu.',
      hoa: 'Tro củi rừng Cù Lao Chàm đốt từ cây mè nước tạo tính kiềm ngâm gạo.',
      tho: 'Sợi gạo dẻo thô, tép mỡ da heo chiên giòn rụm màu vàng đất.'
    },
    signatureIngredients: [
      { name: 'Nước giếng cổ Bá Lễ', role: 'Nước ngọt thanh không phèn, giữ sợi mì dai mềm giòn độc nhất vô nhị', localSpecialty: 'Giếng cổ Bá Lễ (Hội An)' },
      { name: 'Tro củi cây Cù Lao Chàm', role: 'Tạo màu vàng nhạt và độ giòn dai tự nhiên cho sợi bột gạo', localSpecialty: 'Quần đảo Cù Lao Chàm' },
      { name: 'Thịt xíu heo cỏ mềm thơm', role: 'Thịt nạc dăm ướp ngũ vị hương xá xíu rim nhỏ lửa', localSpecialty: 'Quảng Nam' },
      { name: 'Tóp mỡ giòn (hoặc da heo chiên)', role: 'Tạo độ giòn rụm vui tai khi nhai cùng sợi cao lầu dai mềm', localSpecialty: 'Hội An' }
    ],
    cookingMethod: 'Nhào bột gạo nước tro giếng cổ, hấp cách thủy sợi mì, xíu thịt heo và chan nước cốt xíu',
    cookingTime: '2 giờ',
    preparationSteps: [
      'Ngâm gạo tẻ với nước tro củi lấy từ cây cù lao, vo sạch bằng nước giếng Bá Lễ rồi xay thành bột đặc.',
      'Dùng vải ép kiệt nước, nhào bột dẻo quánh, cán mỏng rồi cắt sợi đem hấp chín cách thủy hai lần.',
      'Thịt heo ướp ngũ vị hương, tỏi, xì dầu, đường phèn rồi đem xíu lửa nhỏ cho ngấm đượm và tiết ra nước xíu thơm ngát.',
      'Vớt thịt ra thái lát mỏng, giữ lại nước xíu sánh đặc làm sốt chan.',
      'Trần sợi cao lầu qua nước sôi, xếp rau Trà Quế, thịt xíu, tóp mỡ chiên phồng rồi rưới thìa nước xíu đậm đà.'
    ],
    culturalEtiquette: 'Ăn tại những căn nhà gỗ cổ Hội An, trộn nhẹ tay không làm đứt sợi, nhai chậm rãi để cảm nhận độ giòn dai sần sật và hương tro thảo mộc.',
    image: '/src/assets/images/mon_trung_bun_bo_hue_1792587193895.jpg',
    imageCaption: 'Tô Cao Lầu Hội An với sợi mì tro giếng Bá Lễ, thịt xíu mềm mọng và tóp mỡ vàng ròn.',
    tags: ['Cao Lầu', 'Hội An', 'Giếng Bá Lễ', 'Di sản UNESCO'],
    tasteProfile: ['Dai giòn sần sật', 'Thơm nồng ngũ vị hương', 'Mặn ngọt đậm đà'],
    nutritionInsight: 'Khoáng chất tự nhiên từ nước ngầm đá ong cổ xưa kết hợp dinh dưỡng cân đối từ thịt nạc và rau xanh sạch.',
    artisanSecret: 'Nếu rời khỏi Hội An mà không có nước giếng Bá Lễ và tro củi Cù Lao Chàm, sợi cao lầu làm ra sẽ bị nhão nát hoặc khô cứng, mất đi độ dai sần sật đặc trưng.',
    comparisonId: 'so-sanh-cao-lau'
  },
  {
    id: 'com-hen-con-hen',
    code: 'HS-TRUNG-04',
    name: 'Cơm Hến Cồn Hến',
    localName: 'Cơm hến dâng Vua',
    region: 'trung',
    province: 'Thừa Thiên Huế',
    coordinates: { x: 57, y: 47 },
    eraTitle: 'Cuối thế kỷ XIX (Thời vua Thành Thái)',
    eraCategory: 'phong_kien',
    yearEstimate: 'Khoảng 1889 - 1895',
    summary: 'Món ăn độc đáo dùng cơm nguội trộn thịt hến xào, mắm ruốc sống và ớt chỉ thiên cay buốt óc.',
    originStory: 'Khởi đầu từ cồn Ba Chà (nay là Cồn Hến giữa dòng sông Hương), một phụ nữ nghèo tên Huỳnh Thị Mẹo không kiếm đâu ra thức ăn nên đã cào hến dưới sông xào sơ, trộn với bát cơm nguội ăn chống đói. Đến đời vua Thành Thái (1889-1907), một vị quan nếm thử tấm lòng dân dã này đã dâng lên ngự thiện. Nhà vua khen ngợi tấm tắc, phong Cồn Hến là nơi cung tiến đặc sản cung đình. Cơm hến Huế bắt buộc phải dùng cơm nguội để hến và rau bắp chuối giữ được độ giòn mát, tương phản dữ dội với nước luộc hến nóng bỏng chan sau cùng.',
    historicalFigures: 'Bà Huỳnh Thị Mẹo và Vua Thành Thái triều Nguyễn.',
    literatureQuote: {
      text: 'Người Huế ăn cơm hến phải cay đến chảy nước mắt, vừa ăn vừa hít hà, cay buốt óc mà vẫn muốn ăn thêm muỗng nữa. Đó là cái cay của triết lý sống nhẫn nại vượt qua giông bão miền Trung.',
      author: 'Hoàng Phủ Ngọc Tường',
      source: 'Ai đã đặt tên cho dòng sông'
    },
    fiveElements: {
      kim: 'Ớt hiểm tươi băm nhỏ cay thấu tâm can, tỏi khô giã nhuyễn.',
      moc: 'Thân cây môn bạc hà bào mỏng, khế chua thái sợi, rau thơm xứ Huế.',
      thuy: 'Mắm ruốc sống nguyên chất rưới trực tiếp tạo độ mặn mòi nồng đượm.',
      hoa: 'Tóp mỡ heo chiên giòn rụm béo vàng óng ánh trên bếp than hồng.',
      tho: 'Cơm nguội dẻo rời hạt, lạc rang muối bùi ngậy và đậu phộng rang giòn.'
    },
    signatureIngredients: [
      { name: 'Hến sông Hương Cồn Hến', role: 'Con hến nhỏ li ti nhưng thịt ngọt lịm, đậm vị phù sa sông Hương', localSpecialty: 'Cồn Hến - Huế' },
      { name: 'Nước luộc hến gừng nóng hổi', role: 'Nước luộc đục màu sữa, ngọt thanh tao tự nhiên giữ ấm bụng', localSpecialty: 'Sông Hương' },
      { name: 'Mắm ruốc Huế sống', role: 'Nêm một thìa nhỏ trực tiếp vào cơm tạo chiều sâu khứu giác', localSpecialty: 'Thuận An' },
      { name: 'Bắp chuối & thân cây môn', role: 'Rau ghém giòn mát làm nền thanh nhiệt hoàn hảo', localSpecialty: 'Xứ Huế' }
    ],
    cookingMethod: 'Xào hến gia vị măng khô, trộn cơm nguội với 14 loại rau gia vị và chan nước hến nóng',
    cookingTime: '40 phút',
    preparationSteps: [
      'Hến ngâm nước vo gạo cho nhả hết bùn cát, luộc chín đãi lấy ruột hến và giữ lại nước luộc hến.',
      'Phi thơm ớt, tỏi, xào ruột hến nhanh tay cùng măng khô xé nhỏ và miến dong.',
      'Nấu sôi nước luộc hến, đập giập gừng tươi nêm chút muối hột giữ nóng trên bếp.',
      'Xới cơm nguội vào bát, rải rau bắp chuối, thân môn thái mỏng, khế chua, bạc hà và rau thơm.',
      'Múc thịt hến xào, rải tóp mỡ chiên giòn, lạc rang, rưới một thìa mắm ruốc sống và thìa ớt xào sa tế.',
      'Dùng kèm một bát nước luộc hến nóng hổi bốc khói nghi ngút bên cạnh.'
    ],
    culturalEtiquette: 'Có thể ăn khô trộn đều rồi húp nước hến nóng riêng, hoặc chan thẳng nước luộc hến nóng sùng sục vào tô cơm nguội cay nồng.',
    image: '/src/assets/images/mon_trung_bun_bo_hue_1792587193895.jpg',
    imageCaption: 'Tô cơm hến Cồn Hến trứ danh với vị cay xé lưỡi, mắm ruốc sống và tóp mỡ giòn tan.',
    tags: ['Cơm hến', 'Sông Hương', 'Món ngự thiện', 'Dân dã'],
    tasteProfile: ['Cay nồng buốt óc', 'Ngọt thanh nước hến', 'Mặn mòi mắm ruốc'],
    nutritionInsight: 'Giàu kẽm và vi khoáng từ thịt hến tươi, chất xơ dồi dào từ thân chuối và thảo mộc thanh nhiệt.',
    artisanSecret: 'Nhất định không được dùng cơm nóng! Cơm nóng sẽ làm chín nhũn các loại rau sống và bắp chuối, làm mất đi sự đối lập kỳ thú "lạnh - giòn mát của cơm rau" và "nóng rực của nước hến".',
    comparisonId: 'so-sanh-com-hen'
  },

  // ==================== MIỀN NAM ====================
  {
    id: 'banh-xeo-mien-tay',
    code: 'HS-NAM-01',
    name: 'Bánh Xèo Miền Tây',
    localName: 'Bánh xèo chảo bưng biền',
    region: 'nam',
    province: 'Cần Thơ',
    coordinates: { x: 50, y: 88 },
    eraTitle: 'Thế kỷ XVIII (Thời khẩn hoang Nam Bộ)',
    eraCategory: 'khan_hoang',
    yearEstimate: 'Khoảng thế kỷ XVIII',
    summary: 'Biểu tượng hào sảng của vùng đất sông nước Cửu Long với chiếc bánh siêu to giòn rụm và rổ rau rừng hơn 20 loại.',
    originStory: 'Bánh xèo miền Tây gắn liền với công cuộc khai hoang vùng đất Nam Bộ trù phú từ thế kỷ XVIII. Tên gọi bắt nguồn từ âm thanh tượng thanh "XÈO...O...O" rộn rã khi người phụ nữ miền Tây đổ vá bột gạo pha nước cốt dừa vào chiếc chảo gang to đùng bốc khói trên bếp củi. Khác với bánh xèo miền Trung đổ khuôn nhỏ dày vỏ, bánh xèo Nam Bộ có đường kính lên tới 40-50cm, rìa bánh mỏng tang giòn rụm như ren ren, nhân ngập tràn tép bạc sông, thịt ba rọi, củ hũ dừa và bông điên điển mùa nước nổi. Món ăn này thể hiện trọn vẹn tinh thần phóng khoáng, tình làng nghĩa xóm của người dân phương Nam.',
    historicalFigures: 'Những bậc tiền nhân khai khẩn đất phương Nam thời các Chúa Nguyễn.',
    literatureQuote: {
      text: 'Tiếng xèo rộn rã như đánh thức cả miệt vườn sông nước. Chiếc bánh vàng rộm như vầng trăng rằm, cuộn trọn cả mùi thơm của gạo mới, béo ngậy của cốt dừa và vị hoang dại của mớ rau rừng bến sông.',
      author: 'Sơn Nam',
      source: 'Hương rừng Cà Mau'
    },
    fiveElements: {
      kim: 'Tỏi băm nhuyễn và ớt sừng đỏ bồng bềnh trong bát nước mắm chua ngọt.',
      moc: 'Hơn 20 loại rau rừng ngập nước: Lá cách, lá xoài non, đọt cóc, cải xanh, đọt vừng.',
      thuy: 'Nước mắm cá cơm Phú Quốc chua ngọt pha loãng cùng nước dừa xiêm.',
      hoa: 'Lửa củi rực cháy dưới đáy chảo gang lớn làm vàng ươm bột nghệ.',
      tho: 'Bột gạo lúa mùa pha nước cốt dừa béo ngậy và đậu xanh đãi vỏ thơm bùi.'
    },
    signatureIngredients: [
      { name: 'Bột gạo xay pha nước cốt dừa', role: 'Tạo vỏ bánh mỏng giòn rụm bên ngoài, béo ngậy thơm lừng bên trong', localSpecialty: 'Bến Tre / Cần Thơ' },
      { name: 'Tép bạc sông & thịt ba rọi', role: 'Nhân tôm thịt ngọt tươi rói đặc trưng của kênh rạch miền Tây', localSpecialty: 'Sông Mê Kông' },
      { name: 'Củ hũ dừa (hoặc củ sắn non)', role: 'Tạo độ giòn ngọt thanh tao cho phần nhân bánh', localSpecialty: 'Xứ Dừa Bến Tre' },
      { name: 'Tập tàng rau rừng phù sa', role: 'Hơn 20 loại rau vườn và rau hoang dã khử ngấy hoàn hảo', localSpecialty: 'Vườn Nam Bộ' }
    ],
    cookingMethod: 'Lắc chảo gang mỏng đều, đậy nắp vung hấp nhân và canh lửa cho viền bánh giòn tan',
    cookingTime: '30 phút',
    preparationSteps: [
      'Gạo ngâm xay mịn thành bột nước, hòa cùng nước cốt dừa tươi, bột nghệ vàng, hành lá thái nhỏ và chút muối.',
      'Đặt chảo gang lớn lên bếp lửa đỏ, thoa một lớp mỡ nước rồi cho tép bạc và thịt ba rọi vào xào xèo xèo.',
      'Khuấy đều âu bột, múc một vá lớn rót quanh vành chảo rồi nhanh tay lắc cổ tay để tráng bột mỏng tang khắp mặt chảo.',
      'Rải giá đỗ, củ hũ dừa thái sợi, đậy nắp vung 2 phút cho nhân chín hơi.',
      'Mở nắp, rưới thêm viền mỡ mỏng cho mép bánh bung giòn rụm rồi gập đôi bánh lại, xúc ra mẹt lót lá chuối.'
    ],
    culturalEtiquette: 'Dùng tay trần ngắt góc bánh xèo nóng giòn, cuốn trọn bên trong phiến lá cải bẹ xanh to lớn cùng các đọt rau rừng, chấm ngập vào chén nước mắm chua ngọt củ cải đỏ.',
    image: '/src/assets/images/mon_nam_banh_xeo_mien_tay_1792587193779.jpg',
    imageCaption: 'Chiếc bánh xèo miền Tây khổng lồ vàng óng viền giòn ren trên mẹt lá chuối cùng đĩa rau rừng bạt ngàn.',
    tags: ['Bánh xèo', 'Miền Tây', 'Khẩn hoang', 'Rau rừng'],
    tasteProfile: ['Giòn tan béo ngậy cốt dừa', 'Chua ngọt thanh tao', 'Thanh mát đắng chát rau rừng'],
    nutritionInsight: 'Cung cấp năng lượng tức thì từ tinh bột và lipid dừa, bổ sung diệp lục tố và vitamin phong phú từ 20 loại thảo dược hoang dã.',
    artisanSecret: 'Muốn viền bánh mỏng giòn tan mà để lâu không ỉu: Pha thêm chút bia hoặc nước có gas vào bột gạo và phải dùng mỡ heo chắt thay vì dầu ăn công nghiệp.',
    comparisonId: 'so-sanh-banh-xeo'
  },
  {
    id: 'com-tam-sai-gon',
    code: 'HS-NAM-02',
    name: 'Cơm Tấm Sài Gòn',
    localName: 'Cơm sườn bì chả Sà Bì Chưởng',
    region: 'nam',
    province: 'Sài Gòn - TP.HCM',
    coordinates: { x: 52, y: 82 },
    eraTitle: 'Đầu thế kỷ XX (Thời Pháp thuộc & công nghiệp hóa)',
    eraCategory: 'can_dai',
    yearEstimate: 'Khoảng 1920 - 1930',
    summary: 'Từ hạt gạo gãy của phu xe nghèo trở thành món ăn danh bất hư truyền của đại đô thị Sài Gòn sôi động.',
    originStory: 'Hạt "tấm" là phần phôi hạt gạo bị vỡ nứt trong cối xay xát của các nhà máy xay lúa gạo Chợ Lớn đầu thế kỷ XX. Xưa kia, hạt tấm chỉ dùng cho gia súc hoặc người nghèo, phu xe kéo, công nhân phu hồ ít tiền mua về hấp ăn chống đói. Nhưng thật kỳ diệu, khi hấp chín hạt tấm có độ nở xốp mềm, ngọt bùi đặc biệt không ngấy. Khi Sài Gòn đô thị hóa mạnh mẽ, người bán đã kết hợp hạt cơm tấm với miếng sườn heo ướp nướng than thơm lừng theo khẩu vị giao thoa Việt - Pháp - Hoa, sợi bì trộn thính gạo rang giòn bùi, miếng chả trứng chưng vàng rực và mỡ hành phi sóng sánh, tạo nên bộ tứ kinh điển "Sườn - Bì - Chả - Ốp la".',
    historicalFigures: 'Tầng lớp công nhân bến cảng Ba Son, phu xe Chợ Lớn và các bà má bán cơm bình dân Sài Gòn.',
    literatureQuote: {
      text: 'Mùi sườn nướng mỡ hành bốc lên ngùn ngụt từ những bếp than ven đường buổi sớm là mùi hương thức tỉnh cả thành phố Sài Gòn. Cơm tấm không bao giờ dùng đũa mà phải dùng muỗng nĩa, phóng khoáng hệt như con người nơi đây.',
      author: 'Vương Hồng Sển',
      source: 'Sài Gòn năm xưa'
    },
    fiveElements: {
      kim: 'Tỏi băm ngâm giấm ớt nổi đều trên mặt bát nước mắm chua ngọt sánh dẻo.',
      moc: 'Dưa leo, cà chua thái lát và đồ chua củ cải trắng cà rốt giòn ngọt.',
      thuy: 'Nước mắm kẹo nấu đường thốt nốt mặn mà sóng sánh.',
      hoa: 'Miếng sườn cốt lết nướng than hoa xì xèo mỡ caramen hóa cháy cạnh.',
      tho: 'Hạt cơm tấm gạo gãy thơm bùi xốp mềm và chả trứng vàng ươm vị đất.'
    },
    signatureIngredients: [
      { name: 'Gạo tấm tẻ xơ mầm', role: 'Hạt gạo gãy nhỏ, nấu ráo hạt, dẻo bùi xốp tự nhiên', localSpecialty: 'Kho gạo miền Tây Nam Bộ' },
      { name: 'Sườn cốt lết ướp mật ong', role: 'Miếng sườn mềm mọng, nướng xém cạnh thơm nức mùi sả tỏi', localSpecialty: 'Sài Gòn' },
      { name: 'Bì heo trộn thính gạo', role: 'Da heo thái sợi mảnh tăm, trộn thính gạo thơm phức bùi giòn', localSpecialty: 'Gia Định' },
      { name: 'Mỡ hành lá phi tóp mỡ', role: 'Lá hành tươi phi ngập mỡ heo nóng, rưới lên đĩa cơm óng ánh', localSpecialty: 'Bếp Nam Bộ' }
    ],
    cookingMethod: 'Đồ hấp hơi hạt gạo tấm, nướng sườn than hoa tẩm mật ong, hấp chả trứng',
    cookingTime: '1 giờ',
    preparationSteps: [
      'Gạo tấm vo sạch ngâm 15 phút, nấu trong xửng hấp cách thủy hoặc nồi cơm điện canh lượng nước chuẩn để hạt cơm chín ráo, nở xốp.',
      'Sườn cốt lết dần mềm, ướp cùng sả băm, tỏi, mật ong, nước mắm ngon, dầu hào và sữa đặc trong 3 tiếng.',
      'Quạt than hoa đỏ rực nướng sườn chín từ từ, liên tục quết nước ướp lên miếng sườn cho bóng bẩy.',
      'Trộn da heo luộc thái chỉ với thịt nạc ram thái nhỏ và thính gạo rang thơm.',
      'Xới cơm tấm ra đĩa dẹt, đặt miếng sườn nướng thơm ngát, gắp nhúm bì, cắt góc chả trứng, rưới muỗng mỡ hành óng ả và dưa chua.'
    ],
    culturalEtiquette: 'Ăn bằng thìa và dĩa trên đĩa sứ dẹt, chan nước mắm tỏi ớt chua ngọt nấu kẹo ngập mặt cơm, kèm miếng dưa leo giòn rụm.',
    image: '/src/assets/images/hero_am_thuc_ba_mien_1792587191123.jpg',
    imageCaption: 'Đĩa cơm tấm Sài Gòn sườn bì chả ốp la với mỡ hành óng ả và chén nước mắm kẹo ớt.',
    tags: ['Cơm tấm', 'Sài Gòn', 'Sà Bì Chưởng', 'Đô thị'],
    tasteProfile: ['Ngọt đậm đà thịt nướng', 'Bùi thơm hạt tấm', 'Chua ngọt nước mắm kẹo'],
    nutritionInsight: 'Năng lượng bền vững từ tinh bột nguyên phôi hạt gạo, giàu protein và vitamin nhóm B.',
    artisanSecret: 'Cơm tấm nấu chuẩn không bao giờ được nhão hay ướt nước; hạt cơm phải tơi xốp từng hạt để khi rưới mỡ hành và chan nước mắm kẹo, hạt cơm ngấm trọn mà không nát.',
    comparisonId: 'so-sanh-com-tam'
  },
  {
    id: 'lau-mam-chau-doc',
    code: 'HS-NAM-03',
    name: 'Lẩu Mắm Châu Đốc',
    localName: 'Nồi lẩu mắm bách hoa',
    region: 'nam',
    province: 'An Giang',
    coordinates: { x: 48, y: 84 },
    eraTitle: 'Thế kỷ XIX (Giao thoa văn hóa Kinh - Khmer - Hoa)',
    eraCategory: 'can_dai',
    yearEstimate: 'Khoảng giữa thế kỷ XIX',
    summary: 'Tuyệt đỉnh hội tụ văn hóa sông nước miền Tây với cốt mắm cá linh cá sặc và hơn 35 loại rau đồng bách thảo.',
    originStory: 'Châu Đốc (An Giang) được mệnh danh là thủ phủ mắm của cả nước. Nơi đây hợp lưu dòng sông Tiền và sông Hậu mang theo hàng triệu con cá linh, cá sặc mùa nước nổi. Người Việt định cư nơi này đã tiếp thu món bún nước lèo và mắm Prohoc của đồng bào Khmer, gia giảm thêm gia vị thảo mộc của người Hoa và bàn tay khéo léo của người Kinh để biến nồi mắm kho gia đình thành "Lẩu mắm Châu Đốc" lừng danh. Món ăn này được gọi là "nồi lẩu bách hoa" bởi số lượng rau ăn kèm có thể lên tới 35-40 loại: Bông điên điển, bông súng, rau đắng, kèo nèo, so đũa...',
    historicalFigures: 'Các thế hệ nghệ nhân làm mắm xứ Châu Đốc và cộng đồng ba dân tộc Kinh - Khmer - Hoa.',
    literatureQuote: {
      text: 'Mùi mắm cá linh thoạt nghe ngỡ nồng nặc, nhưng khi đã sôi trên bếp lửa cùng nước dừa xiêm, sả ớt và cà tím thì tỏa ra hương thơm mê đắm. Ăn lẩu mắm là nếm trọn cả hương đồng cỏ nội miền Tây.',
      author: 'Nguyễn Tuân',
      source: 'Ký sự đất phương Nam'
    },
    fiveElements: {
      kim: 'Sả băm, ớt hiểm tươi cay xé lưỡi khử hoàn toàn mùi tanh của cá.',
      moc: 'Vựa rau đồng 35 loại: Bông súng tước vỏ, điên điển vàng rực, rau nhút, so đũa.',
      thuy: 'Cốt mắm cá linh và mắm cá sặc ủ mặn mòi sóng nước châu thổ.',
      hoa: 'Ngọn lửa củi đun sôi ùng ục nồi lẩu giữa đêm trăng sông nước.',
      tho: 'Nước dừa xiêm ngọt lịm đất mẹ phù sa hòa cùng thịt ba rọi và cá hú ngọt béo.'
    },
    signatureIngredients: [
      { name: 'Mắm cá linh & mắm cá sặc Châu Đốc', role: 'Nấu rã xương lọc lấy nước cốt ngọt đậm sâu', localSpecialty: 'Châu Đốc - An Giang' },
      { name: 'Nước dừa tươi Bến Tre', role: 'Hãm bớt độ mặn gắt của mắm, tạo vị ngọt thanh hậu vị', localSpecialty: 'Đồng bằng sông Cửu Long' },
      { name: 'Cá hú (hoặc cá ba sa, cá lóc đồng)', role: 'Thịt cá da trơn béo ngọt ngập trong nước lẩu mắm', localSpecialty: 'Sông Hậu' },
      { name: 'Bông điên điển & bông súng', role: 'Các loại hoa đồng nội giòn ngọt chỉ có ở miền sông nước', localSpecialty: 'Mùa nước nổi Nam Bộ' }
    ],
    cookingMethod: 'Nấu rã xương cốt mắm, lọc lấy nước cốt hầm cùng nước dừa xiêm, sả ớt và cà tím',
    cookingTime: '1 giờ 15 phút',
    preparationSteps: [
      'Cho mắm cá linh và mắm cá sặc vào nồi với nước dừa tươi, đun sôi cho mắm rã nát hoàn toàn.',
      'Đổ qua rây lưới mịn lọc sạch toàn bộ xương cá vụn, chỉ giữ lại phần nước cốt mắm đậm đà.',
      'Phi thơm sả băm, tỏi và ớt, cho thịt ba rọi vào xào săn rồi trút nước cốt mắm vào đun sôi.',
      'Thả cà tím thái khúc, cá hú, mực tươi, tôm sông và chả cá vào nấu chín tới.',
      'Đặt nồi lẩu lên bếp dã ngoại, dọn đĩa rau bách thảo khổng lồ và bún tươi xung quanh, nhúng rau ăn ngay khi nước sôi.'
    ],
    culturalEtiquette: 'Nhúng từng gắp bông súng, điên điển, kèo nèo vào nồi mắm sôi sùng sục vừa chín tới để giữ độ giòn ngọt, chan vào bát bún tươi bốc khói.',
    image: '/src/assets/images/hero_am_thuc_ba_mien_1792587191123.jpg',
    imageCaption: 'Nồi lẩu mắm Châu Đốc sôi sùng sục giữa rổ rau rừng bông điên điển bách thảo miền Tây.',
    tags: ['Lẩu mắm', 'Châu Đốc', 'Mùa nước nổi', 'Đồng tháp mười'],
    tasteProfile: ['Đậm đà hương mắm', 'Ngọt thanh nước dừa', 'Cay nồng nàn sả ớt'],
    nutritionInsight: 'Cực kỳ giàu axit amin lên men tự nhiên, canxi và chất xơ quý hiếm từ nhiều loài thực vật thủy sinh hoang dã.',
    artisanSecret: 'Bí quyết nước lẩu mắm không bị mặn chát: Phải kết hợp tỷ lệ 50% mắm cá linh (lấy vị béo ngọt) và 50% mắm cá sặc (lấy hương thơm ngát) nấu hoàn toàn bằng nước dừa xiêm thanh ngọt.',
    comparisonId: 'so-sanh-lau-mam'
  },
  {
    id: 'ca-loc-nuong-trui',
    code: 'HS-NAM-04',
    name: 'Cá Lóc Nướng Trui',
    localName: 'Cá nướng rơm rạ đồng bưng',
    region: 'nam',
    province: 'Đồng Tháp',
    coordinates: { x: 49, y: 86 },
    eraTitle: 'Thế kỷ XVII - XVIII (Thời kỳ khẩn hoang)',
    eraCategory: 'khan_hoang',
    yearEstimate: 'Khoảng thế kỷ XVII',
    summary: 'Phương thức chế biến nguyên sơ nhất của người mở cõi: Không đánh vảy, không mổ bụng, vùi trong rơm rạ đồng cháy đỏ.',
    originStory: 'Khi những lưu dân đầu tiên đặt chân đến vùng đất ngập nước Đồng Tháp Mười hoang vu, họ sống giữa bạt ngàn năn lác, cỏ dại và kênh rạch đầy ắp cá tôm. Không có xoong chảo, gia vị cầu kỳ, người đi khẩn hoang bắt con cá lóc đồng mập mạp bẻ một nhánh tre xiên từ miệng tới đuôi, cắm ngược xuống nền đất bùn rồi phủ cả đống rơm khô lên trên châm lửa đốt. Rơm tàn thì cá chín. Cạo sạch lớp tro đen bên ngoài lộ ra phần thịt cá trắng phau bốc khói ngào ngạt mùi khói rơm ngọt lịm. Món ăn này lưu giữ nguyên vẹn ký ức hoang sơ của buổi đầu dựng ấp lập làng.',
    historicalFigures: 'Nông dân khai hoang Đồng Tháp Mười và bưng biền Nam Bộ.',
    literatureQuote: {
      text: 'Con cá lóc đồng vùi trong đống rơm rạ vừa tàn lửa, lấy nhánh cây cạo lớp vảy cháy khét, rẽ đôi sống lưng bốc khói ngút ngàn... chẳng cần nêm nếm muối đường mà ngọt lịm cả bờ môi.',
      author: 'Đoàn Giỏi',
      source: 'Đất rừng phương Nam'
    },
    fiveElements: {
      kim: 'Muối hột đâm ớt hiểm xanh cay nồng đầu lưỡi.',
      moc: 'Đọt cóc non, chuối chát, khế chua và rau diếp cá tươi mát.',
      thuy: 'Nước mắm me chua ngọt dầm ớt hiểm sóng sánh.',
      hoa: 'Ngọn lửa rơm rạ vàng bùng cháy rừng rực trên cánh đồng chiều.',
      tho: 'Thịt cá lóc đồng béo ngậy ngọt tự nhiên từ bùn phù sa màu mỡ.'
    },
    signatureIngredients: [
      { name: 'Cá lóc đồng tươi sống', role: 'Cá lóc tự nhiên thịt chắc nịch, thơm ngọt không tanh như cá nuôi', localSpecialty: 'Đồng Tháp Mười' },
      { name: 'Rơm rạ lúa mùa khô', role: 'Tạo ngọn lửa đượm nhiệt và hương khói rơm mộc mạc đặc trưng', localSpecialty: 'Cánh đồng miền Tây' },
      { name: 'Nước mắm me chua ngọt', role: 'Vị chua của me chín hòa cùng nước mắm cốt tôn vị ngọt của cá', localSpecialty: 'Nam Bộ' },
      { name: 'Bánh tráng cuốn & rau rừng', role: 'Cuộn trọn thịt cá cùng rau sống xanh tươi', localSpecialty: 'Miệt vườn' }
    ],
    cookingMethod: 'Xiên que tre cắm xuống đất, đốt rơm rạ phủ kín nướng chín tới',
    cookingTime: '20 phút',
    preparationSteps: [
      'Cá lóc đồng rửa sạch bùn nhớt, tuyệt đối không đánh vảy, không mổ ruột để giữ nguyên độ ngọt và mật cá béo ngậy.',
      'Dùng que tre tươi xiên dọc từ miệng cá tới đuôi, cắm đầu cá chúc xuống mặt đất.',
      'Chất rơm rạ khô phủ kín ngập con cá, châm lửa đốt cháy đều xung quanh trong khoảng 15-20 phút.',
      'Khi rơm tàn, rút cá ra dùng thanh nẹp tre hoặc dao cạo sạch lớp vảy cháy xém đen bên ngoài.',
      'Rạch dọc sống lưng cá mở đôi, rưới mỡ hành đậu phộng lên trên và thưởng thức nóng hổi.'
    ],
    culturalEtiquette: 'Cuốn thịt cá nóng hổi cùng bánh tráng phơi sương, rau sống đọt xoài non, chuối chát, chấm ngập chén mắm me tỏi ớt cay nồng.',
    image: '/src/assets/images/hero_am_thuc_ba_mien_1792587191123.jpg',
    imageCaption: 'Cá lóc nướng trui rơm rạ thơm mùi khói đồng mộc mạc ăn kèm rau rừng và mắm me.',
    tags: ['Cá lóc', 'Nướng trui', 'Khẩn hoang', 'Đồng Tháp Mười'],
    tasteProfile: ['Ngọt tự nhiên thịt cá', 'Thơm nồng khói rơm rạ', 'Chua ngọt cay nồng mắm me'],
    nutritionInsight: 'Protein nạc cao, cực thấp chất béo xấu vì được nướng khô tự nhiên không tẩm dầu mỡ gia vị công nghiệp.',
    artisanSecret: 'Bộ lòng cá lóc nướng trui (ruột, gan, mật cá) là phần ngon và quý nhất; vị đắng nhẫn của mật hòa cùng vị béo của gan cá là khoái khẩu của người sành ăn.',
    comparisonId: 'so-sanh-nuong'
  }
];
