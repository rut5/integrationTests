import { describe, test, expect } from "vitest";
import { createDrink, prepareOrder } from '../../src/coffeeshop.js';

describe('Coffee Shop Unit Tests', () => {
    test('createDrink returns correct object for latte', () => {
        const result = createDrink('latte');
        expect(result).toEqual({ type: 'latte', price: 45 });
    });

    test('createDrink returns null price for unknown drink', () => {
        const result = createDrink('water');
        expect(result.price).toBeNull();
    });

    test('prepareOrder returns a valid ticket number', () => {
        const drink = { type: 'latte', price: 45 };
        const ticket = prepareOrder(drink);
        expect(ticket).toBeGreaterThanOrEqual(0);
        expect(ticket).toBeLessThan(1000);
        expect(Number.isInteger(ticket)).toBe(true);
    });
});