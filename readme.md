## fuel-core memory overflow / unknown panic crash repro

Steps to reproduce:

1. Make sure you have an instance of fuel-core@0.18.x running locally at http://127.0.0.1:4000/graphql.
2. Clone this repo and run `npm install` in the root directory.
3. Replace the private key for the wallet in `index.ts` with a valid one for your node.
4. Run `npm run dev` to run the script.
5. You should see the following output:

```
> fuel-memory-overflow-repro@1.0.0 dev
> ts-node index.ts

contract deployed at fuel1f503jt3kxtlvhuwkn3egdk882t2vanrfr2500ds08rmmwpc9fx8qkf6wv7
external-contract deployed at fuel1f9n6e654p6g99xq8dcr3m3rzum2g3776j7namhphua7783mpjvtsa7pet4
/Users/dhaiwat/code/fuel-memory-overflow-repro/node_modules/@fuel-ts/program/src/script-request.ts:94
    throw new ScriptResultDecoderError(
          ^
ScriptResultDecoderError: Expected returnReceipt

{
  "doc": "https://docs.rs/fuel-asm/latest/fuel_asm/enum.PanicReason.html#variant.MemoryOverflow",
  "reason": "MemoryOverflow"
}

Receipts:
[
  {
    "type": "Panic",
    "id": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "reason": "0x4604110a0000000",
    "pc": "0x2a98",
    "is": "0x2868",
    "contractId": "0x0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "type": "ScriptResult",
    "result": "0x2",
    "gasUsed": "0x6d"
  }
]
    at decodeCallResult (/Users/dhaiwat/code/fuel-memory-overflow-repro/node_modules/@fuel-ts/program/src/script-request.ts:94:11)
    at ScriptRequest.decodeCallResult (/Users/dhaiwat/code/fuel-memory-overflow-repro/node_modules/@fuel-ts/program/src/script-request.ts:189:12)
    at FunctionInvocationResult.getDecodedValue (/Users/dhaiwat/code/fuel-memory-overflow-repro/node_modules/@fuel-ts/program/src/functions/invocation-results.ts:60:47)
    at new InvocationResult (/Users/dhaiwat/code/fuel-memory-overflow-repro/node_modules/@fuel-ts/program/src/functions/invocation-results.ts:41:23)
    at new FunctionInvocationResult (/Users/dhaiwat/code/fuel-memory-overflow-repro/node_modules/@fuel-ts/program/src/functions/invocation-results.ts:96:5)
    at Function.build (/Users/dhaiwat/code/fuel-memory-overflow-repro/node_modules/@fuel-ts/program/src/functions/invocation-results.ts:111:22)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async main (/Users/dhaiwat/code/fuel-memory-overflow-repro/index.ts:26:21) {
  logs: []
}
```
