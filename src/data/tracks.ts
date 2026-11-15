export interface CtfTrack {
  /** 短标签，如 PWN / REVERSE */
  tag: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}

/** 招新方向（CTF 五大题型，展示在「加入我们」页） */
export const ctfTracks: CtfTrack[] = [
  {
    tag: 'PWN',
    title: 'PWN 二进制安全',
    titleEn: 'PWN · Binary Exploitation',
    description:
      'PWN 在黑客中代表「攻破、获取权限」。在 CTF 比赛中它代表溢出类题目，常见类型有整数溢出、栈溢出、堆溢出等。参赛者需要分析二进制程序的源代码、汇编代码与运行时内存状态，以获取目标的敏感信息或控制权限。',
    descriptionEn:
      'In hacker culture, "PWN" means to compromise a target and seize control. In CTF it refers to exploitation challenges — integer overflow, stack overflow, heap overflow and more. Players analyze source code, assembly and runtime memory state to extract sensitive information or gain control.',
  },
  {
    tag: 'REVERSE',
    title: '逆向工程',
    titleEn: 'Reverse Engineering',
    description:
      '逆向是对软件（Windows、Linux 平台）的结构、流程、算法等进行逆向破解，要求较强的反汇编、反编译功底。常见挑战包括逆向二进制程序、解密加密算法、分析协议等，需要通过静态分析与动态调试来理解程序的逻辑、算法与功能。',
    descriptionEn:
      'Reverse engineering dissects the structure, flow and algorithms of software (Windows/Linux), demanding strong disassembly and decompilation skills. Common challenges include reversing binaries, decrypting algorithms and analyzing protocols, using static analysis and dynamic debugging to understand logic and behavior.',
  },
  {
    tag: 'WEB',
    title: 'Web 安全',
    titleEn: 'Web Security',
    description:
      'Web 是 CTF 的主要题型，涉及许多常见漏洞，如 XSS、文件包含、代码执行、上传漏洞、SQL 注入等；也会考察网络基础知识，如返回包、TCP/IP、数据包内容与构造。题目环境比较接近真实环境。',
    descriptionEn:
      'Web is a core CTF category covering common vulnerabilities — XSS, file inclusion, code execution, upload flaws, SQL injection and more — plus network fundamentals like responses, TCP/IP and packet crafting. Challenges closely mirror real-world environments.',
  },
  {
    tag: 'CRYPTO',
    title: '密码学',
    titleEn: 'Cryptography',
    description:
      '密码学考察各种加解密技术，包括古典加密、现代加解密技术，甚至出题者自创的加密算法。CTF 常见题型有经典密码破解、RSA、哈希碰撞、数字签名伪造等。',
    descriptionEn:
      'Cryptography challenges cover all kinds of encryption and decryption, from classical ciphers to modern schemes and even custom algorithms. Common topics include classical cipher cracking, RSA, hash collisions and digital signature forgery.',
  },
  {
    tag: 'MISC',
    title: '安全杂项',
    titleEn: 'Miscellaneous',
    description:
      '安全杂项覆盖面广，涉及流量分析、电子取证、人肉搜索、数据分析、大数据统计等。常见内容包括隐写术、编码与解码、数据分析与取证、脚本与自动化、文件分析与修复等。',
    descriptionEn:
      'Misc covers a broad range — traffic analysis, digital forensics, OSINT, data analysis and statistics. Common content includes steganography, encoding/decoding, forensics, scripting & automation, and file analysis & repair.',
  },
];