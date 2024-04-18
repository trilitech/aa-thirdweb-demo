'use client'

import { Stack, Skeleton, useToast } from "@chakra-ui/react";
import { TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { coloursContract } from "@/app/coloursContract";
import { prepareContractCall } from "thirdweb";

export const ColoursInteraction = () => {
  const toast = useToast();
  const activeAccount = useActiveAccount();
  const [color, setColor] = useColor("#561ecb");
  const { data: userColor, isLoading: isUserColorLoading, refetch: refetchUserColor } = useReadContract({
    contract: coloursContract,
    method: "function color(address userAddress) public view returns(string memory)",
    params: [activeAccount?.address || ""]
    
  });

  const userColorSquare = () => {
    if (!userColor || userColor === "") {
      return (
        <div style={{
          display: "flex",
          height: 100,
          width: 100,
          borderColor: "grey",
          borderWidth: 2,
          borderRadius: 6,
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <p>No color set</p>
        </div>
      );
    } else {
      return (
        <div style={{
          height: 100,
          width: 100,
          borderColor: "grey",
          borderWidth: 2,
          borderRadius: 6,
          backgroundColor: userColor
        }}></div>
      );
    }
  };

  console.log("user color:", userColor);
  return (
    <div>
      {!activeAccount ?
        <div>
          <p>Connect/Log in to the app before interact.</p>
        </div>
        :
        <Stack direction="row" spacing='200px' justifyContent="center" alignItems="center">
          <Stack alignItems="center">
            <p style={{ fontWeight: "bold" }}>Your actual color:</p>
            <Skeleton isLoaded={!isUserColorLoading}>
              {userColorSquare()}
            </Skeleton>
          </Stack>
          <Stack alignItems="center">
            <p style={{ fontWeight: "bold" }}>Pick a color:</p>
            <ColorPicker color={color} onChange={setColor} />
            <TransactionButton
              transaction={() => {
                // Create a transaction object and return it
                const tx = prepareContractCall({
                  contract: coloursContract,
                  method: "function changeColor(string memory newColor)",
                  params: [color.hex]
                })
                return tx;
              }}
              onTransactionSent={(result) => {
                console.log("Transaction submitted:", result.transactionHash);
              }}
              onTransactionConfirmed={(receipt) => {
                console.log("Transaction confirmed:", receipt.transactionHash);
                refetchUserColor();
                toast({
                  title: "Success: color changed",
                  description: 'You successfully changed the color.',
                  status: 'success',
                  duration: 5000,
                  isClosable: true
                });
              }}
              onError={(error) => {
                console.log("Transaction error:", error);
                toast({
                  title: "Error: can't change the color",
                  description: 'See the console for details.',
                  status: 'error',
                  duration: 5000,
                  isClosable: true
                });
              }}
            >
              Change color
            </TransactionButton>
          </Stack>
        </Stack>
      }
    </div>
  )
}