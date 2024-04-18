'use client'

import { useState } from "react"
import { TraditionalLogin } from "./TraditionalLogin";
import { InAppLogin } from "./InAppLogin";
import { AALogin } from "./AALogin";
import { RadioGroup, Stack, Radio } from "@chakra-ui/react";

export const Connection = () => {
  const [flow, setFlow] = useState<string>("basic");

  const login = () => {
    if (flow === "basic")
      return <TraditionalLogin />;
    else if (flow === "in_app")
      return <InAppLogin />;
    else if (flow === "aa")
      return <AALogin />;
    else
      return <p>Error: flow not set correctly</p>;
  }

  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <RadioGroup onChange={setFlow} value={flow} style={{marginRight: 20}}>
        <Stack direction='row' spacing={5} >
          <Radio colorScheme="green" value='basic'>Basic Wallet</Radio>
          <Radio colorScheme="green" value='in_app'>In App</Radio>
          <Radio colorScheme="green" value='aa'>Account Abstraction</Radio>
        </Stack>
      </RadioGroup>
      {login()}
    </div>
  )
}