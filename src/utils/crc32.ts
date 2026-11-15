/**
 * CRC32 implementation — abbrlink plugin.
 *
 * Hexo config reference:
 *   abbrlink:
 *     alg: crc32
 *     rep: hex
 *
 * Algorithm: standard CRC-32 (polynomial 0xEDB88320) on UTF-8 encoded string,
 * final XOR with 0xFFFFFFFF, output as 8-char lowercase hex.
 */

const CRC_TABLE = new Int32Array(256)

function buildTable() {
  for (let i = 0; i < 256; i++) {
    let crc = i
    for (let j = 0; j < 8; j++) {
      if (crc & 1) {
        crc = 0xEDB88320 ^ (crc >>> 1)
      } else {
        crc = crc >>> 1
      }
    }
    CRC_TABLE[i] = crc
  }
}

buildTable()

/**
 * Compute CRC32 hash of a string (matches Python binascii.crc32).
 * Uses TextEncoder to get proper UTF-8 bytes before computing CRC32.
 * @param str - input string
 * @returns unsigned 32-bit CRC32 value
 */
export function crc32(str: string): number {
  const utf8 = new TextEncoder().encode(str)
  let crc = 0xFFFFFFFF
  for (let i = 0; i < utf8.length; i++) {
    crc = (crc >>> 8) ^ CRC_TABLE[(crc ^ utf8[i]) & 0xFF]
  }
  return (crc ^ 0xFFFFFFFF) >>> 0
}

/**
 * Generate abbrlink from post title — identical to hexo-abbrlink with crc32+hex.
 * @param title - post title from frontmatter
 * @returns 8-char lowercase hex string
 */
export function generateAbbrlink(title: string): string {
  return crc32(title).toString(16).padStart(8, '0')
}