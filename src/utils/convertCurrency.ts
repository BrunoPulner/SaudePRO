//valor em centavos = valor em real * 100
// valor em reais = valor em centavos / 100

/**
 * Converte um valor monetário em reais (BRL) para centavos
 * @param {string} amount - O valor monerário em reias (BRL) a ser convertido
 * @returns {number} o valor convertido em centavos
 */
export function convertRealToCents(amount: string) {
  const numericPrice = parseFloat(amount.replace(/\./g, "").replace(",", "."));
  const priceInCents = Math.round(numericPrice * 100);

  return priceInCents;
}
