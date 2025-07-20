import { getNextOccurrences } from './getNextOccurrences';
import { describe, it, expect } from 'vitest';

describe('getNextOccurrences', () => {
  it('should return 5 monthly recurring dates', () => {
    const results = getNextOccurrences('2025-07-19', 'monthly', []);
    expect(results.length).toBe(5);
    expect(results[0].formattedDate).toContain('July');
    expect(results[1].recurrenceType).toBe('monthly');
  });

  it('should return weekly dates only for selected days', () => {
    const results = getNextOccurrences('2025-07-19', 'weekly', ['Saturday']);
    expect(results.length).toBe(5);
    results.forEach(date => {
      expect(date.weekday).toBe('Saturday');
    });
  });
});
