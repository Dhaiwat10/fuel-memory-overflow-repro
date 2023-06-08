import { Provider, Wallet, ContractFactory } from 'fuels';
import fs from 'fs';

const bytecode = fs.readFileSync('./contract/out/debug/contract.bin');
const abi = JSON.parse(
  fs.readFileSync('./contract/out/debug/contract-abi.json', 'utf-8')
);

const main = async () => {
  const provider = new Provider('http://127.0.0.1:4000/graphql');
  const wallet = Wallet.fromPrivateKey('0x01', provider); // Replace '0x01' with a valid private key from your node if needed

  const factory = new ContractFactory(bytecode, abi, wallet);
  const contract = await factory.deployContract();

  console.log(`Contract deployed at ${contract.id}`);

  const { value } = await contract.functions.test_function().get();

  console.log(`Value: ${value}`);
};

main();
