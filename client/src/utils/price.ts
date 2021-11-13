import {currency, currencyRate, sizeModifier, doughModifier} from "../config/price";

export const roundPrice = (price: number): number => Math.round(price * 100) / 100;

export const getPrice = (price: number, size: TSize, dough: TDough): number => roundPrice(price * currencyRate * sizeModifier[size] * doughModifier[dough]);

export const formatCurrency = (price: number) => `${currency}${price}`;
