import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
//@ts-ignore
import namehash from 'eth-ens-namehash';

const deployBaseRegistrar: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const {deployments, getNamedAccounts} = hre;
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();

    const registryAddress = (await deployments.get("ENSRegistry")).address;
    const baseNode = namehash.hash('ripper')

    const { address: contractAddress } = await deploy('BaseRegistrarImplementation', {
        from: deployer,
        args: [
            registryAddress,
            baseNode
        ],
        log: true,
        deterministicDeployment: false
      });
};

deployBaseRegistrar.tags = ["BASE_REGISTRAR"];
deployBaseRegistrar.dependencies = ["REGISTRY"];

export default deployBaseRegistrar;