import Web3 from "web3";
let isItConnected = false;
const networks = {
  bsc: {
   
    chainId: `0x${Number(5).toString(16)}`, // archie testnet
    chainName: "Goerli test network",
    nativeCurrency: {
      name: "Goerli test network",
      symbol: "GoerliETH",
      decimals: 18,
    },
    rpcUrls: ["https://goerli.infura.io/v3/"],
    blockExplorerUrls: ["https://goerli.etherscan.io/"],
  },
};
const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    const web3 = window.web3;
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: web3.utils.toHex(5) }]
    });
    window.location.reload();

  } catch (err) {
    console.log(err, "not found");
  }
};
const handleNetworkSwitch = async (networkName) => {
  await changeNetwork({ networkName });
};
let accounts;
const getAccounts = async () => {
  const web3 = window.web3;
  try {
    accounts = await web3.eth.getAccounts();
    return accounts;
  } catch (error) {
    console.log("Error while fetching acounts: ", error);
    return null;
  }
};
export const disconnectWallet = async () => {
  await window.ethereum.request({
    method: "eth_requestAccounts",
    params: [{ eth_accounts: {} }],
  });
  console.log("disconnect");
};
export const loadWeb3 = async () => {
  try {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      await window.web3.eth.getChainId((err, netId) => {
        // console.log("networkId==>", netId);
        switch (netId.toString()) {
          case "5":
            isItConnected = true;
            break;
          default:
            handleNetworkSwitch("bsc");
            isItConnected = false;
        }
      });
      if (isItConnected == true) {
        let accounts = await getAccounts();
        return accounts[0];
      } else {
        let res = "Wrong Network";
        return res;
      }
    } else {
      let res = "No Wallet";
      return res;
    }
  } catch (error) {
    let res = "No Wallet";
    return res;
  }
};