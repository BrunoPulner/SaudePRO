/**Verificar se, a partir de um slot inicial, existe uma sequencia de requiredSlots disponivel
 * Exemplo: Se um serviço tem dois required slots e começa no time 15:30,
 * precisa garantir que 15:00 e 15:30 não estejam no nosso blockedSlots
 */

export function isToday(date: Date) {
  const now = new Date();

  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
}

/**
 * Verificar se determinado slot já passou.
 */

export function isSlotInThePast(slotTime: string) {
  const [slotHour, slotMinute] = slotTime.split(":").map(Number);

  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  if (slotHour < currentHour) {
    return true; // quer dizer que a hora ja passou
  } else if (slotHour === currentHour && slotMinute <= currentMinute) {
    return true;
  }

  return false;
}

export function isSlotSequenceAvailable(
  startSlot: string, // primeiro horario disponivel
  requiredSlots: number, // Quantidade de slots necessario
  allSlots: string[], //Todos horarios da clinica
  blockedSlots: string[] // horarios bloqueados
) {
  const startIndex = allSlots.indexOf(startSlot);
  if (startIndex === -1 || startIndex + requiredSlots > allSlots.length) {
    return false;
  }

  for (let i = startIndex; i < startIndex + requiredSlots; i++) {
    const slotTime = allSlots[i];

    if (blockedSlots.includes(slotTime)) {
      return false;
    }
  }

  return true;
}
