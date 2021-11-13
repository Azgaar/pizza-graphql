import {currency, currencyRate} from "../config/price";

export const roundPrice = (price: number): number => Math.round(price * 100) / 100;
export const getPrice = (price: number): number => roundPrice(price * currencyRate);
export const formatCurrency = (price: number) => `${currency}${price}`;
