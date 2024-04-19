'use client'

import { etherlinkTestnet, arbitrumSepoliaChain } from "@/app/chain"
import { client } from "@/app/client"
import { ConnectButton } from "thirdweb/react"
import { createWallet } from "thirdweb/wallets";

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet")
];

export const TraditionalLogin = () => {
  return (
    <ConnectButton
      client={client}
      chain={etherlinkTestnet}
      wallets={wallets}
    />
  )
}