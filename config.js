export const Framework = require("@superfluid-finance/sdk-core");
export const ethers = require("ethers");

// Ethers.js provider initialization
export const url =
  "https://eth-goerli.g.alchemy.com/v2/R186eFIp2jW8po3emm2tvaT_XzxR06ar";
export const customHttpProvider = new ethers.providers.JsonRpcProvider(url);