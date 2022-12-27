

import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const deployENSRegistry: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const {deployments, getNamedAccounts} = hre;
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();

    const { address: contractAddress } = await deploy('ENSRegistry', {
        from: deployer,
        args: [],
        log: true,
        deterministicDeployment: false
      });
};

deployENSRegistry.tags = ["REGISTRY"];

export default deployENSRegistry;
