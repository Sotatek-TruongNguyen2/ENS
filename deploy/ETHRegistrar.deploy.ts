

import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const deployETHRegistrar: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const {deployments, getNamedAccounts} = hre;
    const {deploy} = deployments;
    const {deployer, platform} = await getNamedAccounts();

    const baseRegistrarAddress = (await deployments.get("BaseRegistrarImplementation")).address;

    const { address: contractAddress } = await deploy('ETHRegistrarController', {
        from: deployer,
        args: [
            baseRegistrarAddress,
            deployer,
            0,
            1
        ],
        log: true,
        deterministicDeployment: false
      });
};

deployETHRegistrar.tags = ["REGISTRAR"];
deployETHRegistrar.dependencies = ["BASE_REGISTRAR"];

export default deployETHRegistrar;
