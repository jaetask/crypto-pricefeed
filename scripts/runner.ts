const { FTM, priceFeedCoinGecko, USDC } = require('../src/index');

priceFeedCoinGecko([FTM, USDC])
  .then((prices: any) => {
    console.log('prices', prices);
  })
  .catch((error: Error) => {
    console.log('error.stack', error.stack);
    process.exit(1);
  });
