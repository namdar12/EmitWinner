
const newContractAddress = "0x75f9e417fd90c896F604e4EEC113066d23011B17";
const contractAddress = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

const hre = require("hardhat");

async function main() {
  const newContract = await hre.ethers.getContractAt("NewContract",newContractAddress);
 

 const tx =  await newContract.sendEvent(contractAddress);

  console.log(tx);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
