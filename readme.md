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

Contract deployed at fuel1tj3r0n65taj7kt3qn0v9fpl3j9wwpg9t4kta5mr799pm2n3urz4sg62v8v
/Users/dhaiwat/code/fuel-memory-overflow-repro/node_modules/@fuel-ts/program/src/script-request.ts:94
    throw new ScriptResultDecoderError(
          ^
ScriptResultDecoderError: Expected returnReceipt

{
  "doc": "https://docs.rs/fuel-asm/latest/fuel_asm/enum.PanicReason.html",
  "reason": "unknown"
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
    at InvocationCallResult.getDecodedValue (/Users/dhaiwat/code/fuel-memory-overflow-repro/node_modules/@fuel-ts/program/src/functions/invocation-results.ts:60:47)
    at new InvocationResult (/Users/dhaiwat/code/fuel-memory-overflow-repro/node_modules/@fuel-ts/program/src/functions/invocation-results.ts:41:23)
    at new InvocationCallResult (/Users/dhaiwat/code/fuel-memory-overflow-repro/node_modules/@fuel-ts/program/src/functions/invocation-results.ts:130:5)
    at Function.build (/Users/dhaiwat/code/fuel-memory-overflow-repro/node_modules/@fuel-ts/program/src/functions/invocation-results.ts:139:28)
    at FunctionInvocationScope.dryRun (/Users/dhaiwat/code/fuel-memory-overflow-repro/node_modules/@fuel-ts/program/src/functions/base-invocation-scope.ts:259:47)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async main (/Users/dhaiwat/code/fuel-memory-overflow-repro/index.ts:19:21) {
  logs: []
}
```
