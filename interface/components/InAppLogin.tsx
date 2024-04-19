'use client'

import { etherlinkTestnet, arbitrumSepoliaChain } from "@/app/chain"
import { client } from "@/app/client"
import { ConnectButton } from "thirdweb/react"
import { inAppWallet } from "thirdweb/wallets";

const wallets = [
  inAppWallet()
];

export const InAppLogin = () => {
  return (
    <ConnectButton
      client={client}
      chain={etherlinkTestnet}
      wallets={wallets}
      connectButton={{
        label: "Login"
      }}
    />
  )
}