export interface Member {
  name: string;
  role: string;
  roleEn: string;
  bio: string;
  bioEn: string;
  /** 头像图片路径，例如 '/members/zhangsan.jpg'；不填则用姓名首字占位 */
  avatar?: string;
}

/** 成员 / 导师名单（可按需增删改） */
export const members: Member[] = [
  {
    name: '马莉',
    role: '教授',
    roleEn: 'Professor',
    bio: '研究方向：网络安全、访问控制、网络攻防。',
    bioEn: 'Research interests: network security, access control, and network attack and defense.',
    avatar: '/members/t-2.png',
  },
  {
    name: '钟勇',
    role: '教授',
    roleEn: 'Professor',
    bio: '研究方向：数据库安全、人工智能。',
    bioEn: 'Research interests: database security and artificial intelligence.',
    avatar: '/members/t-1.png',
  },
  {
    name: '杨文茵',
    role: '副教授',
    roleEn: 'Associate Professor',
    bio: '研究方向：数据安全存储、人工智能安全、网络攻防。',
    bioEn: 'Research interests: secure data storage, AI security, and network attack and defense.',
    avatar: '/members/t-4.png',
  },
  {
    name: '刘芬',
    role: '博士',
    roleEn: 'Ph.D.',
    bio: '研究方向：对称密码设计与分析、数据安全、隐私保护。',
    bioEn: 'Research interests: symmetric cipher design and analysis, data security, and privacy protection.',
    avatar: '/members/t-5.png',
  },
  {
    name: '廖钰盈',
    role: '讲师',
    roleEn: 'Lecturer',
    bio: '研究方向：人工智能模型安全、安全多方计算、隐私保护。',
    bioEn: 'Research interests: AI model security, secure multi-party computation, and privacy protection.',
    avatar: '/members/t-6.png',
  },
  {
    name: '张宇',
    role: '讲师',
    roleEn: 'Lecturer',
    bio: '研究方向：经典深度学习模型安全、语言大模型安全、大语言模型应用。',
    bioEn: 'Research interests: classical deep learning model security, large language model security, and large language model applications.',
    avatar: '/members/t-3.png',
  },
];