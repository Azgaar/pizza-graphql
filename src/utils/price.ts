import {currency, currencyRate, sizeModifier} from "../config/price";

export const getPrice = (price: number, size: TSize): number => Math.round(price * currencyRate * sizeModifier[size] * 100) / 100;
export const formatCurrency = (price: number) => `${currency} ${price}`;
