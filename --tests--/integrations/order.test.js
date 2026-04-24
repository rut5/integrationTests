import { describe, test, expect } from "vitest";
import { orderDrink } from '../../src/coffeeshop.js';

describe('Coffee Shop Integration', () => {
    test('full flow for ordering a latte should succeed', () => {
        const result = orderDrink('latte');
        expect(result).toBe(true);
    });
});
