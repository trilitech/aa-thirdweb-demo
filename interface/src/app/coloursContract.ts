import { getContract } from "thirdweb";
import { client } from "./client";
import { etherlinkTestnet } from "./chain";
import Colours from "../../abi/Colours.json";

const ABI: any = Colours.abi;
const contractAddress = process.env.NEXT_PUBLIC_COLOURS_ADDRESS || "";
console.log("aaaaa", contractAddress);
// get a contract
export const coloursContract = getContract({
  // the client you have created via `createThirdwebClient()`
  client,
  // the chain the contract is deployed on
  chain: etherlinkTestnet,
  // the contract's address
  address: contractAddress,
  // address: process.env.NEXT_COLOURS_ADDRESS || "",
  // OPTIONAL: the contract's abi
  abi: ABI,
});