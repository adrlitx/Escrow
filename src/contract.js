import Web3 from 'web3';
import NFTEscrowABI from './NFTEscrowABI.json'; // Assuming you have the ABI in a separate JSON file

const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR-PROJECT-ID'); // Replace with your Ethereum provider URL
const web3 = new Web3(provider);

const contractAddress = '0x...'; // Replace with the actual contract address
const NFTEscrowContract = new web3.eth.Contract(NFTEscrowABI, contractAddress);

export default NFTEscrowContract;
