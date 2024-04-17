# Account Abstraction Thirdweb Demo Protocol

This folder contains a simple hardhat project for the `Colours.sol` contract.

## Setup

First, install the dependencies:
```
npm install 
```

Then, create a `.env` file following the `.env.example`.

## Deploy

If you want to deploy the contract:
```
npx hardhat ignition deploy ignition/modules/Colours.ts --network <your-network>
```

## Verify

You can verify your contract using 2 different ways: 
1. by adding the `--verify` flag on the command above for the deployment
2. you already deployed the contract, run `npx hardhat ignition verify chain-<your-network-id>`