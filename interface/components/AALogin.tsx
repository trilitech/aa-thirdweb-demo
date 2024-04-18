'use client'

import { etherlinkTestnet } from "@/app/chain"
import { client } from "@/app/client"
import { ConnectButton } from "thirdweb/react"
import { inAppWallet } from "thirdweb/wallets";

const wallets = [
  inAppWallet()
];

const accountAbstraction = {
  chain: etherlinkTestnet,
  factoryAddress: process.env.NEXT_PUBLIC_ACCOUNT_FACTORY_ADDRESS || "",
  gasless: true
}

export const AALogin = () => {
  return (
    <ConnectButton
      client={client}
      chain={etherlinkTestnet}
      wallets={wallets}
      accountAbstraction={accountAbstraction}
      connectButton={{
        label: "AA Login"
      }}
    />
  )
}