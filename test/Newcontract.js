const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");


describe('NewContract', function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployContractAndSetVariables() {
    const NewContract = await ethers.getContractAt('NewContract',"0x75f9e417fd90c896F604e4EEC113066d23011B17");

    return { NewContract };
  }

  it('should emit the event', async function () {
    const { NewContract } = await loadFixture(deployContractAndSetVariables);
    expect( await NewContract.sendEvent("0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"));

  });

  it('should not emit the event', async function () {
    const { NewContract } = await loadFixture(deployContractAndSetVariables);
    expect( await NewContract.sendEvent("0x75f9e417fd90c896F604e4EEC113066d23011B17"));

  });
  



});