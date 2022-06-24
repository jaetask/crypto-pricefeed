export interface Token {
    displayName: string;
    identifier: string;
}
export declare type Tokens = Token[];
export interface OutputCurrency {
    displayName: string;
    identifier: string;
}
export declare type OutputCurrencies = OutputCurrency[];
export declare const USD: OutputCurrency;
export declare const GBP: OutputCurrency;
export declare const FTM: Token;
export declare const USDC: Token;
/**
 * Single function to get the prices for a bunch of tokens at coinGecko.
 * Defaults to returning prices in USD, can be extended to other currencies.
 */
export declare const priceFeedCoinGecko: (tokens?: Tokens, outputCurrencies?: OutputCurrencies) => Promise<any>;
