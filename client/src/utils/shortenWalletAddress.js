// shorteningWalletAddressForImprovedDisplay
export const shortenWalletAddress = (address) =>
  `${address.slice(0, 7)}...${address.slice(address.length - 7)}`;
