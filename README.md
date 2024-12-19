# FlashRPC SDK

## Example

```ts
import { sendTransaction } from 'flashrpc-sdk';

// Ask wallet to sign the transaction.
const signedTransaction = await provider.signTransaction(transaction);
const serializedTransaction = signedTransaction.serialize();

// Send the transaction to FlashRPC (don't forget to await on it).
await sendTransaction(serializedTransaction);

// Submit the transaction as usual.
const signature = await connection.sendRawTransaction(serializedTransaction);
```
