export interface Member {
  name: string;
  role: string;
  roleEn: string;
  bio: string;
  bioEn: string;
}

/** 成员 / 导师名单（示例数据，可按需增删改） */
export const members: Member[] = [
  {
    name: '（导师姓名）',
    role: '指导老师',
    roleEn: 'Advisor',
    bio: '研究方向：网络空间安全、系统安全。负责实验室整体方向规划与指导。',
    bioEn: 'Research interests: cyberspace security and system security. Leads the lab direction.',
  },
  {
    name: '（成员示例）',
    role: 'Web 方向成员',
    roleEn: 'Web Security Member',
    bio: '专注 Web 漏洞挖掘与渗透测试，参与多场 CTF 竞赛。',
    bioEn: 'Focuses on Web vulnerability discovery and penetration testing.',
  },
  {
    name: '（成员示例）',
    role: 'Pwn 方向成员',
    roleEn: 'Pwn Member',
    bio: '专注二进制漏洞利用与逆向工程。',
    bioEn: 'Focuses on binary exploitation and reverse engineering.',
  },
  {
    name: '（成员示例）',
    role: 'Crypto 方向成员',
    roleEn: 'Crypto Member',
    bio: '专注密码学与安全协议分析。',
    bioEn: 'Focuses on cryptography and protocol analysis.',
  },
];