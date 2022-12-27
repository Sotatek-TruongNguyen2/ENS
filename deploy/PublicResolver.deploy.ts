

import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const deployPublicResolver: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const {deployments, getNamedAccounts} = hre;
    const {deploy} = deployments;
    const {deployer, platform} = await getNamedAccounts();

    const registryAddress = (await deployments.get("ENSRegistry")).address;

    const { address: contractAddress } = await deploy('PublicResolver', {
        from: deployer,
        args: [
            registryAddress
        ],
        log: true,
        deterministicDeployment: false
      });
};

deployPublicResolver.tags = ["RESOLVER"];
deployPublicResolver.dependencies = ["REGISTRY"];

export default deployPublicResolver;
