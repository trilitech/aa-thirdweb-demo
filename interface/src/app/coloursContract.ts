import { getContract } from "thirdweb";
import { client } from "./client";
import { etherlinkTestnet } from "./chain";
import { COLOURS_ADDRESS } from "../../const/addresses";
import Colours from "../../const/Colours.json";

const ABI: any = Colours.abi;

// get a contract
export const coloursContract = getContract({
  // the client you have created via `createThirdwebClient()`
  client,
  // the chain the contract is deployed on
  chain: etherlinkTestnet,
  // the contract's address
  address: COLOURS_ADDRESS,
  // OPTIONAL: the contract's abi
  abi: ABI,
});