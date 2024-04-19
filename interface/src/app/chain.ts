import { defineChain } from "thirdweb";
import { arbitrumSepolia } from "thirdweb/chains";

export const etherlinkTestnet = defineChain({
    id: 128123,
    name: "Etherlink Testnet",
    rpc: "https://node.ghostnet.etherlink.com",
    nativeCurrency: {
      name: "Tezos",
      symbol: "XTZ",
      decimals: 18,
    },
    blockExplorers: [
      {
        name: "Blockscout",
        url: "https://testnet-explorer.etherlink.com",
        apiUrl: "https://testnet-explorer.etherlink.com/api"
      },
    ],
    testnet: true
});

export const arbitrumSepoliaChain = defineChain(arbitrumSepolia);