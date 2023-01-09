const weights = [8, 7, 6, 5, 4, 3, 2, 1];

export default function isValidACN(rawAcn: string | number): boolean {
  if (!rawAcn) {
    return false;
  }

  // strip non-alphanumeric characters
  const acn = rawAcn.toString().replace(/[^a-z\d]/gi, '');

  // check if length is 9 digits
  if (acn.length !== 9) {
    return false;
  }

  // apply ato check method
  let sum = 0;
  for (let position = 0; position < weights.length; position += 1) {
    const weight = weights[position];
    const digit = parseInt(acn[position], 10);
    sum += weight * digit;
  }

  const checksum = (10 - (sum % 10)) % 10;

  return checksum === parseInt(acn[8], 10);
}
