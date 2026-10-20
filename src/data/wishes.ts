import type { PredefinedWish, Relationship, WishStyle } from '../types';

export const RELATIONSHIP_LABELS: Record<Relationship, string> = {
  mother: 'Mẹ & Bà kính yêu',
  teacher: 'Cô giáo kính mến',
  lover: 'Người yêu / Một nửa đặc biệt',
  friend: 'Bạn bè & Tri kỷ',
  colleague: 'Đồng nghiệp & Đối tác',
  all: 'Tất cả phụ nữ tuyệt vời',
};

export const STYLE_LABELS: Record<WishStyle, string> = {
  gentle: 'Dịu dàng & Sâu lắng',
  sincere: 'Chân thành & Tôn vinh',
  romantic: 'Ngọt ngào & Lãng mạn',
  playful: 'Tươi vui & Trẻ trung',
  formal: 'Trang trọng & Biết ơn',
};

export const PREDEFINED_WISHES: PredefinedWish[] = [
  {
    id: 'wish-mother',
    category: 'mother',
    categoryLabel: 'Mẹ & Bà',
    recipientLabel: 'Gửi Mẹ và Bà kính yêu',
    title: 'Bến đỗ bình yên của cuộc đời con',
    badge: 'Đấng sinh thành & Yêu thương vô điều kiện',
    quote: 'Mọi đóa hoa trên đời đều nghiêng mình trước sự hy sinh thầm lặng của Mẹ.',
    content: [
      'Gửi người phụ nữ vĩ đại nhất trong trái tim con,',
      'Cảm ơn Mẹ đã luôn là vòng tay ấm áp nhất, che chở con qua mọi bão giông của cuộc đời. Từng nếp nhăn nơi khóe mắt, từng sợi tóc bạc màu sương gió là minh chứng cho biết bao tảo tần Mẹ dành trọn cho gia đình.',
      'Nhân ngày Phụ nữ Việt Nam 20/10, con không mong gì hơn ngoài việc Mẹ luôn dồi dào sức khỏe, tâm an yên và nụ cười rạng rỡ luôn nở trên môi. Mong thời gian trôi thật chậm, để con được đền đáp yêu thương và ở bên Mẹ thật lâu.',
      'Chúc Mẹ một ngày 20/10 ngập tràn niềm vui và bình yên vô bờ!'
    ],
    signature: 'Dương — Đứa con luôn biết ơn và yêu Mẹ vô cùng'
  },
  {
    id: 'wish-teacher',
    category: 'teacher',
    categoryLabel: 'Cô giáo',
    recipientLabel: 'Kính gửi Cô giáo kính mến',
    title: 'Người gieo mầm tri thức và niềm tin',
    badge: 'Tri ân người lái đò thầm lặng',
    quote: 'Dưới ánh mặt trời, không có nghề nào cao quý hơn nghề dạy học.',
    content: [
      'Kính gửi Cô, người đã thắp sáng ngọn lửa tri thức trong con,',
      'Cảm ơn Cô đã không quản nhọc nhằn, luôn kiên nhẫn dìu dắt và truyền cảm hứng cho chúng con trên từng trang sách. Những bài học của Cô không chỉ là kiến thức, mà còn là hành trang nhân cách giúp con vững bước vào đời.',
      'Nhân ngày 20/10, con kính chúc Cô luôn dồi dào sức khỏe, tràn đầy nhiệt huyết và luôn tìm thấy niềm hạnh phúc trọn vẹn trong sự nghiệp trồng người cao quý. Mong Cô luôn giữ mãi nụ cười hiền từ và niềm vui rạng rỡ bên mái trường thân thương.',
      'Tri ân tấm lòng bao la và sự tận tụy của Cô!'
    ],
    signature: 'Dương — Người học trò luôn kính trọng Cô'
  },
  {
    id: 'wish-lover',
    category: 'lover',
    categoryLabel: 'Người yêu / Đặc biệt',
    recipientLabel: 'Gửi Em — Bông hoa dịu dàng nhất của anh',
    title: 'Điều ngọt ngào nhất thế gian',
    badge: 'Dành riêng cho một nửa trái tim',
    quote: 'Em không cần phải rực rỡ như ánh dương, bởi sự dịu dàng của em đã sưởi ấm cả thế giới của anh.',
    content: [
      'Em yêu à,',
      'Cảm ơn em đã bước vào cuộc sống của anh, mang theo hương hoa dịu dàng và những thanh âm ngọt ngào nhất. Ở bên em, anh học được cách nâng niu từng khoảnh khắc bình dị và cảm nhận sâu sắc vẻ đẹp của tình yêu chân thành.',
      'Hôm nay 20/10, anh chúc em luôn xinh đẹp, tự tin và ngập tràn hạnh phúc. Mong em luôn có đủ dịu dàng để yêu thương chính mình, đủ can đảm để theo đuổi mọi ước mơ, và hãy nhớ rằng phía sau em luôn có anh đồng hành, bảo vệ và chở che.',
      'Yêu em nhiều hơn mỗi ngày trôi qua!'
    ],
    signature: 'Dương — Người luôn hướng về em'
  },
  {
    id: 'wish-friend',
    category: 'friend',
    categoryLabel: 'Bạn bè & Tri kỷ',
    recipientLabel: 'Gửi Cô bạn tuyệt vời của tôi',
    title: 'Rực rỡ theo cách của riêng bạn',
    badge: 'Tình bạn gắn kết qua năm tháng',
    quote: 'Hãy luôn là phiên bản tự do, độc bản và kiêu hãnh nhất của chính mình.',
    content: [
      'Chào người bạn tri kỷ thân thiết,',
      'Cảm ơn bạn vì đã luôn đồng hành, cùng tôi chia sẻ những niềm vui vụn vặt và cả những ngày chông chênh khó nhọc. Tình bạn của chúng ta như một tách trà thơm, nhẹ nhàng mà ấm lòng.',
      'Nhân ngày 20/10, chúc bạn luôn giữ được nét hồn nhiên, nụ cười tỏa nắng và một trái tim kiên cường trước mọi sóng gió. Chúc bạn luôn được yêu thương đúng cách, tự tin bước đi trên con đường mình chọn và tỏa sáng theo cách rực rỡ nhất.',
      'Mãi luôn là đóa hoa kiêu sa và hạnh phúc nhé!'
    ],
    signature: 'Dương — Người bạn luôn sát cánh bên bạn'
  },
  {
    id: 'wish-colleague',
    category: 'colleague',
    categoryLabel: 'Đồng nghiệp & Đối tác',
    recipientLabel: 'Gửi Những nữ đồng nghiệp xuất sắc',
    title: 'Bản lĩnh, rạng ngời và thành công',
    badge: 'Tôn vinh trí tuệ và sự duyên dáng',
    quote: 'Sự chuyên nghiệp kết hợp cùng nét duyên ngầm tạo nên sức mạnh diệu kỳ.',
    content: [
      'Kính gửi những đóa hồng tài năng và nhiệt huyết,',
      'Cảm ơn sự đóng góp thầm lặng nhưng vô cùng to lớn của các chị em trong mỗi dự án. Sự thông minh, cẩn trọng và tinh thần trách nhiệm của mọi người luôn là nguồn động lực và niềm tự hào lớn của cả tập thể.',
      'Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn và toàn thể chị em luôn dồi dào năng lượng tích cực, công việc thuận lợi thăng tiến, cuộc sống vẹn tròn hạnh phúc và luôn duy trì phong thái tự tin, thanh lịch trong từng bước đi.',
      'Chúc mừng ngày của các đóa hoa rạng ngời nơi công sở!'
    ],
    signature: 'Dương — Đồng nghiệp trân trọng và đồng hành'
  },
  {
    id: 'wish-all',
    category: 'all',
    categoryLabel: 'Tất cả phụ nữ',
    recipientLabel: 'Gửi đến một nửa dịu dàng của thế giới',
    title: 'Bình yên, tự tại và đáng được nâng niu',
    badge: 'Lời chúc trân quý gửi muôn hoa',
    quote: 'Có những điều dịu dàng xứng đáng được nâng niu. Hôm nay, hãy để mọi yêu thương được gọi tên.',
    content: [
      'Gửi những người phụ nữ tuyệt vời xung quanh ta,',
      'Chúc bạn luôn có đủ dịu dàng để yêu thương, đủ mạnh mẽ để theo đuổi những điều mình mong muốn và đủ bình yên để tận hưởng những điều giản dị mỗi ngày.',
      'Mong rằng không chỉ hôm nay, mà cả những ngày bình thường nhất, bạn vẫn luôn cảm nhận được giá trị và vẻ đẹp của chính mình. Hãy luôn yêu bản thân trước tiên, vì bạn chính là một kiệt tác độc nhất vô nhị của tạo hóa.',
      'Chúc bạn một ngày 20/10 đong đầy hoa tươi, quà tặng và những nụ cười hạnh phúc nhất!'
    ],
    signature: 'Dương — Trân trọng gửi gắm yêu thương'
  }
];

export const SMART_WISH_TEMPLATES: Record<Relationship, Record<WishStyle, string>> = {
  mother: {
    gentle: 'Mẹ ơi, con chúc Mẹ một ngày 20/10 thật bình yên và ấm áp. Cảm ơn Mẹ đã dành cả cuộc đời lo lắng cho chúng con. Mong Mẹ mỗi ngày đều vui khỏe, không còn âu lo muộn phiền.',
    sincere: 'Nhân ngày Phụ nữ Việt Nam 20/10, con xin gửi trọn lòng biết ơn sâu sắc nhất đến Mẹ. Tình yêu và sự hy sinh của Mẹ là tài sản vô giá nhất đời con. Chúc Mẹ luôn mạnh khỏe và an vui.',
    romantic: 'Gửi người phụ nữ đẹp nhất và tuyệt vời nhất trong lòng con! Mẹ chính là mùa xuân vĩnh cửu của gia đình mình. Chúc Mẹ ngày 20/10 ngập tràn niềm vui và hoa tươi thắm!',
    playful: 'Chúc Mẹ yêu ngày 20/10 nhận được cả giỏ hoa, cả kho quà và nụ cười lúc nào cũng rạng rỡ như tuổi đôi mươi! Mẹ nhớ nghỉ ngơi thật nhiều hôm nay nhé, việc nhà đã có chúng con lo!',
    formal: 'Kính chúc Mẹ nhân ngày 20/10 luôn dồi dào sức khỏe, trường thọ an khang và mãi là chỗ dựa tinh thần vững chãi, bình an nhất cho con cháu trong gia đình.'
  },
  teacher: {
    gentle: 'Kính chúc Cô ngày 20/10 thật nhiều niềm vui nhẹ nhàng. Cảm ơn Cô vì những lời dạy ân cần và ánh mắt bao dung luôn soi sáng từng bước đường chúng em đi.',
    sincere: 'Nhân ngày 20/10, em xin bày tỏ lòng tri ân sâu sắc tới Cô. Chúc Cô luôn mạnh khỏe, giữ vững ngọn lửa nhiệt huyết để tiếp tục dìu dắt bao thế hệ học trò cập bến bờ tri thức.',
    romantic: 'Tấm lòng người dạy học như dòng suối mát lành tưới tắm tâm hồn non trẻ. Chúc Cô giáo kính yêu một ngày 20/10 đong đầy hoa thơm, quà đẹp và ngập tràn hạnh phúc.',
    playful: 'Chúc Cô giáo của chúng em 20/10 luôn tươi trẻ, tràn đầy năng lượng, bài giảng lúc nào cũng cuốn hút và lớp chúng em lúc nào cũng ngoan ngoãn nghe lời Cô!',
    formal: 'Kính chúc Quý Cô nhân ngày Phụ nữ Việt Nam 20/10 luôn dồi dào sức khỏe, hạnh phúc gia đình và gặt hái thêm nhiều thành tựu rực rỡ trong sự nghiệp giáo dục cao quý.'
  },
  lover: {
    gentle: 'Chúc em một ngày 20/10 thật dịu êm. Cảm ơn em đã đến và mang sự dịu dàng sưởi ấm cuộc đời anh. Mong em luôn mỉm cười và cảm nhận được tình yêu thương anh dành cho em.',
    sincere: 'Với anh, mỗi ngày có em đều là một ngày đặc biệt. Chúc em 20/10 luôn bình an, tự tin và hạnh phúc. Anh sẽ luôn ở đây, đồng hành và trân trọng em từng phút giây.',
    romantic: 'Em là đóa hoa đẹp nhất, ngát hương nhất trong khu vườn cuộc đời anh. Chúc người yêu của anh một ngày 20/10 ngọt ngào như tình yêu của đôi mình. Mãi yêu em!',
    playful: '20/10 chúc cô gái của anh ăn mãi không béo, xinh đẹp không đối thủ, mua sắm thả ga và đặc biệt là yêu anh nhiều hơn nữa! Mọi mong ước của em hôm nay anh đều duyệt hết!',
    formal: 'Nhân ngày Phụ nữ Việt Nam 20/10, chúc em luôn thành công trong sự nghiệp, rạng rỡ trong cuộc sống và luôn là niềm tự hào to lớn nhất của anh.'
  },
  friend: {
    gentle: 'Chúc bạn một ngày 20/10 thật bình yên bên tách trà ấm và những giai điệu yêu thích. Hãy luôn sống chậm lại một chút để cảm nhận bản thân thật tuyệt vời nhé.',
    sincere: 'Cảm ơn vì đã luôn là người bạn tốt, chân thành và đáng tin cậy. Chúc bạn ngày 20/10 ngập tràn may mắn, hạnh phúc và luôn vững vàng trên hành trình bạn đã chọn.',
    romantic: 'Gửi người bạn tri kỷ những đóa hoa tươi thắm nhất! Chúc bạn sớm tìm được một nửa đích thực biết yêu thương, trân trọng và nâng niu bạn như một báu vật.',
    playful: '20/10 chúc bạn tôi nhan sắc thăng hạng, tiền vào như nước, sớm thoát ế và nhận quà mỏi tay! Nếu chưa có ai tặng hoa thì nhớ bảo tôi nhé!',
    formal: 'Nhân dịp 20/10, chúc bạn luôn giữ vững bản lĩnh, tự tin bứt phá trong công việc và có một cuộc sống viên mãn, tràn đầy niềm tự hào.'
  },
  colleague: {
    gentle: 'Chúc bạn một ngày 20/10 nhẹ nhàng, tan làm đúng giờ và có những phút giây thư thái tuyệt vời bên người thân thương sau những giờ làm việc hăng say.',
    sincere: 'Rất may mắn khi được làm việc cùng một đồng nghiệp tận tâm và tài năng như bạn. Chúc bạn ngày 20/10 nhiều niềm vui, công việc suôn sẻ và gặt hái nhiều thắng lợi mới.',
    romantic: 'Chúc những đóa hoa xinh đẹp của văn phòng ta luôn tỏa sáng rạng ngời, mang lại nguồn cảm hứng tươi mới và ấm áp cho toàn thể đồng nghiệp mỗi ngày.',
    playful: 'Chúc chị em đồng nghiệp 20/10 KPI đạt đỉnh, sếp cưng thưởng lớn, cà phê không bao giờ đắng và ngày nào cũng xinh đẹp như đi trẩy hội!',
    formal: 'Trân trọng chúc các nữ đối tác và đồng nghiệp một ngày 20/10 ý nghĩa, thành công rực rỡ trong sự nghiệp và luôn giữ vững vị thế tiên phong xuất sắc.'
  },
  all: {
    gentle: 'Chúc bạn luôn có đủ dịu dàng để yêu thương, đủ mạnh mẽ để theo đuổi ước mơ và đủ bình yên để tận hưởng từng khoảnh khắc giản dị của cuộc đời.',
    sincere: 'Mọi phụ nữ đều là một kỳ quan đáng được trân trọng. Chúc bạn ngày 20/10 ngập tràn niềm vui chân thật và luôn tự hào về chính bản thân mình.',
    romantic: 'Mong rằng cả thế giới này sẽ luôn dịu dàng với bạn, như cách những cánh hoa khẽ mở trong nắng mai. Chúc bạn một ngày 20/10 ngập tràn yêu thương!',
    playful: 'Chúc một nửa thế giới 20/10 luôn xinh tươi, rạng rỡ, tiêu tiền không cần nhìn giá và luôn được cưng chiều như công chúa!',
    formal: 'Kính chúc toàn thể phụ nữ Việt Nam ngày 20/10 dồi dào sức khỏe, hạnh phúc viên mãn và luôn khẳng định vị thế cao quý trong xã hội.'
  }
};
