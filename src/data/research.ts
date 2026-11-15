export interface ResearchDirection {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}

/** 实验室研究方向（展示在首页亮点与“关于”页） */
export const researchDirections: ResearchDirection[] = [
  {
    title: 'Web 安全',
    titleEn: 'Web Security',
    description: 'Web 应用漏洞挖掘、渗透测试与安全防护研究，覆盖 OWASP 常见攻击面。',
    descriptionEn:
      'Web vulnerability discovery, penetration testing and defense, covering common OWASP attack surfaces.',
  },
  {
    title: '二进制与逆向工程',
    titleEn: 'Binary & Reverse Engineering',
    description: '逆向分析、二进制漏洞利用（Pwn）与恶意样本分析。',
    descriptionEn:
      'Reverse engineering, binary exploitation (Pwn) and malware analysis.',
  },
  {
    title: '密码学',
    titleEn: 'Cryptography',
    description: '现代密码协议分析、密码算法实现与 CTF 中 Crypto 方向研究。',
    descriptionEn:
      'Analysis of modern cryptographic protocols, algorithm implementation and Crypto research in CTF.',
  },
  {
    title: '安全开发与防御',
    titleEn: 'Secure Development & Defense',
    description: '安全工具开发、代码审计与纵深防御体系建设实践。',
    descriptionEn:
      'Security tooling, code auditing and defense-in-depth practice.',
  },
];