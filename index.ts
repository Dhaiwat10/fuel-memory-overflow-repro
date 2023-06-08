import { Provider, Wallet, ContractFactory } from 'fuels';
import fs from 'fs';

const deployContract = async (contractName: string) => {
  const provider = new Provider('http://127.0.0.1:4000/graphql');
  const wallet = Wallet.fromPrivateKey('0x01', provider); // Replace '0x01' with a valid private key from your node if needed
  const bytecode = fs.readFileSync(
    `./${contractName}/out/debug/${contractName}.bin`
  );
  const abi = JSON.parse(
    fs.readFileSync(
      `./${contractName}/out/debug/${contractName}-abi.json`,
      'utf-8'
    )
  );
  const factory = new ContractFactory(bytecode, abi, wallet);
  const contract = await factory.deployContract();
  console.log(`${contractName} deployed at ${contract.id}`);
  return contract;
};

const main = async () => {
  const mainContract = await deployContract('contract');
  const externalContract = await deployContract('external-contract');

  const { value } = await mainContract.functions
    .call_external_foo(1336, externalContract.id)
    .call();

  console.log(`Value returned from contract call: ${value}`);
};

main();
