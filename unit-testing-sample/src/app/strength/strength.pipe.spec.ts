import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('should display weak if strength is 5', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(5)).toBe('5 (weak)');
  });

  it('should display strong if strength is 10', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(10)).toBe('10 (strong)');
  });

  it('should display unbelievable if strength is 25', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(25)).toBe('25 (unbelievable)');
  });
});
