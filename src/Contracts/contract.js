export const ico_contract = "0x78A4fE1aE422E87ba5FFD867825aD12e449df2c1";
export const contractabi = [{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Recovered","type":"event"},{"inputs":[],"name":"ARCpricePerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"BuyARCWithUSDC","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"}],"name":"changeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractbalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"deposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"getARCvalue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"recoverARC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"releaseFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"resumePresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"}],"name":"setRewardARCPricepertoken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stopPresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

// export const WARC_Contract = "0xAbbBD6448C526831d72dC338aFA17D13a38b5Ca0";
// export const WARC_ABI = [{
//     "inputs": [],
//     "stateMutability": "nonpayable",

//     "type": "constructor"
// }, {
//     "anonymous": false,
//     "inputs": [{
//         "indexed": true,
//         "internalType": "address",
//         "name": "owner",
//         "type": "address"
//     }, {
//         "indexed": true,
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//     }, {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "value",
//         "type": "uint256"
//     }],
//     "name": "Approval",
//     "type": "event"
// }, {
//     "anonymous": false,
//     "inputs": [{
//         "indexed": true,
//         "internalType": "address",
//         "name": "from",
//         "type": "address"
//     }, {
//         "indexed": true,
//         "internalType": "address",
//         "name": "to",
//         "type": "address"
//     }, {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "value",
//         "type": "uint256"
//     }],
//     "name": "Transfer",
//     "type": "event"
// }, {
//     "inputs": [{
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//     }],
//     "name": "Mint",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
// }, {
//     "inputs": [{
//         "internalType": "address",
//         "name": "owner",
//         "type": "address"
//     }, {
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//     }],
//     "name": "allowance",
//     "outputs": [{
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//     }],
//     "stateMutability": "view",
//     "type": "function"
// }, {
//     "inputs": [{
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//     }, {
//         "internalType": "uint256",
//         "name": "value",
//         "type": "uint256"
//     }],
//     "name": "approve",
//     "outputs": [{
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//     }],
//     "stateMutability": "nonpayable",
//     "type": "function"
// }, {
//     "inputs": [{
//         "internalType": "address",
//         "name": "account",
//         "type": "address"
//     }],
//     "name": "balanceOf",
//     "outputs": [{
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//     }],
//     "stateMutability": "view",
//     "type": "function"
// }, {
//     "inputs": [{
//         "internalType": "uint256",
//         "name": "_value",
//         "type": "uint256"
//     }],
//     "name": "burn",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
// }, {
//     "inputs": [],
//     "name": "decimals",
//     "outputs": [{
//         "internalType": "uint8",
//         "name": "",
//         "type": "uint8"
//     }],
//     "stateMutability": "view",
//     "type": "function"
// }, {
//     "inputs": [{
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//     }, {
//         "internalType": "uint256",
//         "name": "subtractedValue",
//         "type": "uint256"
//     }],
//     "name": "decreaseAllowance",
//     "outputs": [{
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//     }],
//     "stateMutability": "nonpayable",
//     "type": "function"
// }, {
//     "inputs": [{
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//     }, {
//         "internalType": "uint256",
//         "name": "addedValue",
//         "type": "uint256"
//     }],
//     "name": "increaseAllowance",
//     "outputs": [{
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//     }],
//     "stateMutability": "nonpayable",
//     "type": "function"
// }, {
//     "inputs": [],
//     "name": "name",
//     "outputs": [{
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//     }],
//     "stateMutability": "view",
//     "type": "function"
// }, {
//     "inputs": [],
//     "name": "symbol",
//     "outputs": [{
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//     }],
//     "stateMutability": "view",
//     "type": "function"
// }, {
//     "inputs": [],
//     "name": "totalSupply",
//     "outputs": [{
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//     }],
//     "stateMutability": "view",
//     "type": "function"
// }, {
//     "inputs": [{
//         "internalType": "address",
//         "name": "recipient",
//         "type": "address"
//     }, {
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//     }],
//     "name": "transfer",
//     "outputs": [{
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//     }],
//     "stateMutability": "nonpayable",
//     "type": "function"
// }, {
//     "inputs": [{
//         "internalType": "address",
//         "name": "sender",
//         "type": "address"
//     }, {
//         "internalType": "address",
//         "name": "recipient",
//         "type": "address"
//     }, {
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//     }],
//     "name": "transferFrom",
//     "outputs": [{
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//     }],
//     "stateMutability": "nonpayable",
//     "type": "function"
// }]
export const USDT_contract = "0xAbbBD6448C526831d72dC338aFA17D13a38b5Ca0";
export const USDTabi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]