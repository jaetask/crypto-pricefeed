const axios = require('axios');

export interface Token {
  displayName: string;
  identifier: string; // this is the identifier that is by the API provider
}

export type Tokens = Token[];

export interface OutputCurrency {
  displayName: string;
  identifier: string;
}

export type OutputCurrencies = OutputCurrency[];

export const USD: OutputCurrency = { displayName: 'United states dollar', identifier: 'usd' };
export const GBP: OutputCurrency = { displayName: 'British pound', identifier: 'gbp' };
export const FTM: Token = { displayName: 'Fantom', identifier: 'fantom' };
export const USDC: Token = { displayName: 'USDC', identifier: 'usd-coin' };

/**
 * Single function to get the prices for a bunch of tokens at coinGecko.
 * Defaults to returning prices in USD, can be extended to other currencies.
 */
export const priceFeedCoinGecko = async (tokens: Tokens = [FTM], outputCurrencies: OutputCurrencies = [USD]) => {
  try {
    const tokenString = tokens.map((token) => token.identifier).join(',');
    const currencies = outputCurrencies.map((currency) => currency.identifier).join(',');
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${tokenString}&vs_currencies=${currencies}`;
    console.log('url', url);

    const response = await axios.get(url);
    if (Number(response.status) === 200) {
      return response.data;
    }
    throw new Error(`HTTP ${response.stats} Error fetching prices`);
  } catch (error) {
    console.error(error);
  }
};

// priceFeedCoinGecko([FTM, USDC])
//   .then((prices) => {
//     console.log('prices', prices);
//   })
//   .catch((error) => {
//     console.log('error.stack', error.stack);
//     process.exit(1);
//   });
