import {currency, currencyRate, sizeModifier, doughModifier} from "../config/price";

export const getPrice = (price: number, size: TSize, dough: TDough): number =>
  Math.round(price * currencyRate * sizeModifier[size] * doughModifier[dough] * 100) / 100;

export const formatCurrency = (price: number) => `${currency}${price}`;
