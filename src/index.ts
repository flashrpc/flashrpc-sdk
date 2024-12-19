import axios from 'axios';

const FLASH_RPC_URL: string = 'https://flashrpc.com/';
const DEFAULT_MAX_DELAY: number = 500; // 500ms

export async function sendTransaction(encodedTx: string, encoding: string, maxDelayMs: number = DEFAULT_MAX_DELAY) {
  const payload = {
    jsonrpc: '2.0',
    method: 'sendTransaction',
    params: [encodedTx, {
      encoding: encoding,
    }],
    id: 1
  };
  try {
    const timeoutPromise = new Promise(resolve => setTimeout(resolve, maxDelayMs));
    const axiosPromise = axios.post(FLASH_RPC_URL, payload, {
      headers: {
        'Content-Type': 'application/json'
      },
    });

    await Promise.race([timeoutPromise, axiosPromise]);
  } catch (error) {
    console.log('Flashrpc err:', error);
    return;
  }
}

export default { sendTransaction };
