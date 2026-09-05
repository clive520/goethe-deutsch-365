/**
 * Utility to parse German sentences with optional parenthetical Chinese hints.
 * If the string contains Chinese characters in parentheses, e.g. "Frage? (中文提示)",
 * it separates them into { de: "Frage?", zh: "中文提示" }.
 * Non-Chinese parentheticals like "Österreich (Austria)" remain untouched in 'de'.
 */
export function parseGermanWithChineseHint(text: string): { de: string; zh?: string } {
  if (!text) return { de: '' };

  // Match parenthetical content containing at least one Chinese character
  const match = text.match(/^(.*?)\s*[(（]([^(（]*[\u4e00-\u9fa5]+[^)）]*)[)）]\s*$/);
  if (match) {
    return {
      de: match[1].trim(),
      zh: match[2].trim(),
    };
  }

  return { de: text.trim() };
}
