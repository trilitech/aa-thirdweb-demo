import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ColoursModule = buildModule("ColoursModule", (m) => {
  const colours = m.contract("Colours", []);

  return { colours };
});

export default ColoursModule;
