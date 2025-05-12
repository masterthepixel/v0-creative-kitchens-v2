/**
 * Calculates the contrast ratio between two colors
 * @param color1 - Hex color code (e.g., "#ffffff")
 * @param color2 - Hex color code (e.g., "#000000")
 * @returns Contrast ratio (WCAG requires 4.5:1 for normal text, 3:1 for large text)
 */
export function getContrastRatio(color1: string, color2: string): number {
  // Convert hex to RGB
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)

  if (!rgb1 || !rgb2) return 1

  // Calculate luminance
  const luminance1 = calculateLuminance(rgb1.r, rgb1.g, rgb1.b)
  const luminance2 = calculateLuminance(rgb2.r, rgb2.g, rgb2.b)

  // Calculate contrast ratio
  const ratio =
    luminance1 > luminance2 ? (luminance1 + 0.05) / (luminance2 + 0.05) : (luminance2 + 0.05) / (luminance1 + 0.05)

  return Number.parseFloat(ratio.toFixed(2))
}

/**
 * Converts hex color to RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
      }
    : null
}

/**
 * Calculates relative luminance
 */
function calculateLuminance(r: number, g: number, b: number): number {
  const a = [r, g, b].map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

/**
 * Checks if a color combination meets WCAG AA standards
 * @param foreground - Foreground color (text)
 * @param background - Background color
 * @param isLargeText - Whether the text is large (18pt+ or 14pt+ bold)
 * @returns Whether the combination meets WCAG AA standards
 */
export function meetsWCAGAA(foreground: string, background: string, isLargeText = false): boolean {
  const ratio = getContrastRatio(foreground, background)
  return isLargeText ? ratio >= 3 : ratio >= 4.5
}
