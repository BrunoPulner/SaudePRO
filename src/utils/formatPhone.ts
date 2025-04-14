export function formatPhone(value: string) {
  //Remover todos os caracteres não numéricos

  const cleanedValue = value.replace(/\D/g, "");

  //Verifica se o numero possui 11 caracteres
  if (cleanedValue.length > 11) {
    return value.slice(0, 15);
  }

  //Aplicar a mascara
  const formattedValue = cleanedValue
    .replace(/^(\d{2})(\d)/g, "($1) $2")
    .replace(/(\d{4,5})(\d{4})$/, "$1-$2"); //barrinha

  return formattedValue;
}

export function extractPhoneNumber(phone: string) {
  const phoneValue = phone.replace(/[\(\)\s-]/g, "");

  return phoneValue;
}
