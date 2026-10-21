import { RegionComparison } from '../types';

export const COMPARISONS_DATA: RegionComparison[] = [
  {
    id: 'so-sanh-pho',
    title: 'Phở Bắc (Hà Nội - Nam Định) vs. Phở Nam (Sài Gòn)',
    subtitle: 'Hành trình di cư và biến thiên khẩu vị từ kinh kỳ đến đất phương Nam phóng khoáng',
    dishA: {
      name: 'Phở Bắc (Hà Nội / Nam Định)',
      region: 'Miền Bắc',
      origin: 'Đầu thế kỷ XX, giao thoa xáo trâu đồng bằng và súp bò Pháp',
      brothOrBase: 'Nước dùng trong vắt, vị ngọt sâu tự nhiên từ tủy xương ninh 12-14 giờ. Không cho đường cát, chỉ điểm xuyết gừng nướng, hoa hồi, thảo quả thanh nhẹ.',
      keyIngredients: 'Bánh phở tráng mỏng bản nhỏ mềm mướt; thịt bò thái mỏng (tái, chín, gầu giòn); quẩy giòn.',
      sauceOrDipping: 'Giấm ỏi ớt tươi ngâm truyền thống, chanh cốm, tương ớt xay thủ công (ớt chỉ thiên cay thanh).',
      herbsAndSides: 'Chỉ rắc hành hoa làng Láng chẻ cọng và lá mùi tàu (ngò gai) xắt mịn. Tuyệt đối không ăn kèm giá đỗ hay húng quế.',
      philosophy: 'Triết lý thanh tao, chuẩn mực, chú trọng vị nguyên bản của nước dùng và kỹ thuật ninh xương tinh tế.'
    },
    dishB: {
      name: 'Phở Nam (Sài Gòn)',
      region: 'Miền Nam',
      origin: 'Thập niên 1950, theo dòng người di cư vào Nam và bản địa hóa theo khẩu vị Sài Gòn',
      brothOrBase: 'Nước dùng đậm đà, màu hơi sẫm, vị ngọt béo rõ rệt do ninh xương kèm củ cải, hành tây nướng và nêm đường phèn.',
      keyIngredients: 'Bánh phở bản to hơn hoặc sợi hủ tiếu; đủ các loại thịt: Tái, nạm, gầu, gân, bò viên, lá lách, tiết.',
      sauceOrDipping: 'Chén tương đen (tương ngọt đậu nành lên men) và tương đỏ (tương ớt ngọt kiểu Chợ Lớn).',
      herbsAndSides: 'Rổ rau thơm phong phú: Rau húng quế, ngò gai, giá đỗ sống (hoặc trụng), chanh tươi và ớt hiểm xắt lát.',
      philosophy: 'Triết lý trù phú, phóng khoáng, tùy biến gia vị tự do theo sở thích cá nhân của người ăn.'
    },
    culturalInsight: 'Phở Bắc coi nước dùng là tác phẩm nghệ thuật hoàn chỉnh của người nấu, khách chỉ cần thêm chút giấm ớt để mở khẩu vị. Phở Nam lại coi bát phở là một không gian sáng tạo mở, người ăn tự do hòa trộn tương đen, tương đỏ, ngắt cả nắm lá húng quế và dầm giá trụng vào tô.'
  },
  {
    id: 'so-sanh-banh-xeo',
    title: 'Bánh Xèo Miền Trung vs. Bánh Xèo Miền Tây',
    subtitle: 'Sự đối lập giữa khuôn gang nhỏ giòn đanh xứ nắng gió và chảo lớn mỏng ren đất miệt vườn',
    dishA: {
      name: 'Bánh Xèo Miền Trung (Bình Định - Quảng Nam - Huế)',
      region: 'Miền Trung',
      origin: 'Vùng duyên hải Nam Trung Bộ, đúc trong khuôn gang nhỏ trên lò than hồng',
      brothOrBase: 'Bột gạo nguyên chất ngâm xay, pha chút bột nghệ hoặc giữ màu trắng ngà tự nhiên, vỏ bánh tương đối dày dặn, giòn đanh mép ngoài, mềm dẻo bên trong.',
      keyIngredients: 'Tôm đất nhảy tanh tách, mực cơm biển tươi, thịt ba chỉ thái mỏng, giá đỗ xanh.',
      sauceOrDipping: 'Nước lèo đậu phộng (nước tương đậu phộng xay nhuyễn nấu cùng gan heo, mè rang bùi béo sánh đặc) hoặc nước mắm tỏi ớt đậm đà.',
      herbsAndSides: 'Bánh tráng cuốn mỏng dẻo, rau cải non, xà lách, rau thơm Trà Quế, chuối chát, khế chua.',
      philosophy: 'Thực dụng, đậm đà, từng chiếc bánh nhỏ gọn đủ cuốn trọn một cuốn vừa miệng nhai giòn rụm.'
    },
    dishB: {
      name: 'Bánh Xèo Miền Tây (Nam Bộ)',
      region: 'Miền Nam',
      origin: 'Vùng sông nước đồng bằng sông Cửu Long thời khẩn hoang thế kỷ XVIII',
      brothOrBase: 'Bột gạo hòa nhiều nước cốt dừa béo ngậy, hành lá, trứng vịt và bột nghệ vàng ươm. Đổ chảo gang lớn đường kính 40-50cm, lắc thật mỏng, viền bánh giòn tan như ren.',
      keyIngredients: 'Tép bạc sông, thịt ba rọi, củ hũ dừa (hoặc sắn bào sợi), đậu xanh hấp nguyên hạt, bông điên điển mùa nước nổi.',
      sauceOrDipping: 'Nước mắm chua ngọt pha nước dừa xiêm, tỏi ớt băm nổi bồng bềnh và đồ chua củ cải trắng, cà rốt bào sợi.',
      herbsAndSides: 'Mẹt rau rừng hơn 20 loại: Lá cách, lá xoài non, đọt cóc, chùm ruột, cải bẹ xanh, đọt vừng, đọt lụa.',
      philosophy: 'Hào sảng, sum vầy gia đình, chiếc bánh khổng lồ thể hiện sự trù phú và hào phóng của thiên nhiên miệt vườn.'
    },
    culturalInsight: 'Bánh xèo miền Trung thường ăn vào những ngày mưa lạnh buốt, chiếc bánh nhỏ cuốn bánh tráng chấm nước lèo nóng sốt tạo cảm giác ấm cúng. Bánh xèo miền Tây là món ăn của những ngày hội làng, giỗ chạp, người dân quây quần bên bếp củi canh chảo xèo xèo và chia nhau từng góc bánh.'
  },
  {
    id: 'so-sanh-bun-cha',
    title: 'Bún Chả Hà Nội vs. Bún Thịt Nướng Nam Bộ',
    subtitle: 'Nét thanh lịch nướng que tre đất Thăng Long đối thoại cùng đĩa bún thịt ram sả mè phương Nam',
    dishA: {
      name: 'Bún Chả Hà Nội',
      region: 'Miền Bắc',
      origin: 'Văn hóa ẩm thực phố cổ Hàng Mành, Hàng Than thế kỷ XIX',
      brothOrBase: 'Bát nước chấm pha ấm với nước mắm cốt, giấm thanh, đường và nước lọc; thả dưa góp đu đủ xanh giòn ngập bên trong cùng chả nóng.',
      keyIngredients: 'Chả miếng ba chỉ và chả băm viên nướng trên que tre hoặc vỉ than hoa bén cạnh cháy xém.',
      sauceOrDipping: 'Nước chấm dùng chan hoặc nhúng bún trực tiếp, hương vị thanh tao, chua dịu ấm áp.',
      herbsAndSides: 'Rau kinh giới, tía tô, hoa chuối thái chỉ, xà lách sạch; ăn kèm bún lá hoặc bún rối Phú Đô.',
      philosophy: 'Thanh lịch, chậm rãi, vừa gắp vừa chấm thưởng thức từng cung bậc hài hòa của gia vị.'
    },
    dishB: {
      name: 'Bún Thịt Nướng Nam Bộ',
      region: 'Miền Nam',
      origin: 'Sài Gòn - Nam Bộ đầu thế kỷ XX với lối kết hợp tô bún trộn tiện lợi',
      brothOrBase: 'Không dùng nước chấm loãng ấm, mà dùng nước mắm chua ngọt tỏi ớt nấu sánh dẻo rưới trực tiếp lên tô bún khô.',
      keyIngredients: 'Thịt nạc vai thái mỏng ướp sả băm, mật ong, mè rang vàng thơm nức; thường kèm thêm chả giò chiên giòn rụm.',
      sauceOrDipping: 'Nước mắm tỏi ớt chua ngọt rưới trực tiếp, chan ngập tô bún rồi trộn đều.',
      herbsAndSides: 'Giá đỗ sống, dưa leo băm nhỏ, rau thơm, đậu phộng rang giã dập và muỗng mỡ hành phi xanh mướt.',
      philosophy: 'Nhanh gọn, tiện dụng, đầy ắp màu sắc và hương vị bùng nổ ngay trong một tô trộn tổng lực.'
    },
    culturalInsight: 'Bún chả Hà Nội giữ nét quý phái khi tách bạch đĩa bún, đĩa rau và bát chả nước chấm riêng biệt để người ăn tự do kết hợp nhịp nhàng. Bún thịt nướng Nam Bộ đưa tất cả vào trong một tô lớn, rưới mỡ hành đậu phộng tạo nên bữa ăn năng động, căng tràn nhựa sống.'
  }
];
