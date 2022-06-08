import health from '../components/health';

describe('Health color function:', () => {
  test('should return false', () => {
    expect(health({})).toBeFalsy();
  });
  test('should return healthy', () => {
    expect(health({ health: 55 })).toBe('healthy');
  });
  test('should return wounded', () => {
    expect(health({ health: 50 })).toBe('wounded');
    expect(health({ health: 49 })).toBe('wounded');
    expect(health({ health: 15 })).toBe('wounded');
  });
  test('should return critical', () => {
    expect(health({ health: 14 })).toBe('critical');
  });
});