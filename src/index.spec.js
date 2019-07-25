import isValidACN from './index';

describe('isValidACN', () => {
  it('returns false for no input', () => {
    const result = isValidACN();

    expect(result).toBe(false);
  });

  it('returns false for non-numeric input', () => {
    const result = isValidACN('elephants');

    expect(result).toBe(false);
  });

  it('returns false for partially numeric input', () => {
    const result = isValidACN('010499966fox');

    expect(result).toBe(false);
  });

  it('returns false for invalid input with invalid length', () => {
    const result = isValidACN('123');

    expect(result).toBe(false);
  });

  it('returns false for invalid input with valid length', () => {
    const result = isValidACN('123456789');

    expect(result).toBe(false);
  });
  it('returns true for valid numeric input', () => {
    const result = isValidACN(143526096);

    expect(result).toBe(true);
  });

  it('returns true for valid input', () => {
    const result = isValidACN('010499966');

    expect(result).toBe(true);
  });

  it('returns true for valid input with spaces', () => {
    const result = isValidACN('010 499 966');

    expect(result).toBe(true);
  });

  it('returns true for valid input with dashes', () => {
    const result = isValidACN('010-499-966');

    expect(result).toBe(true);
  });
});
