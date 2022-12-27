
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
//@ts-ignore
import namehash from 'eth-ens-namehash';

describe("Chess", function () {
    async function deployFixture() {
        const [owner] = await ethers.getSigners();

        const ENSRegistry = await ethers.getContractFactory("ENSRegistry");
        const registry = await ENSRegistry.deploy();

        return { owner, registry };
    }

    it("Contract should be deployed successful!", async () => {
        const { owner, registry } = await loadFixture(deployFixture);
        expect(registry.address).not.to.equals(ethers.constants.AddressZero);
        
        console.log(
            ethers.utils.keccak256(
                ethers.utils.toUtf8Bytes("ripper")
            )
        );

        // console.log(
        //     hash,
        //     ethers.constants.HashZero
        // )

        // await registry.setSubnodeOwner(
        //     ethers.constants.HashZero,
        //     hash,
        //     owner.address
        // )
    });
});