const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const addresses = require("./addresses.json")
const leaves = addresses.map(x => keccak256(x))
const tree = new MerkleTree(leaves, keccak256, { sortPairs: true })
const buf2hex = x => '0x' + x.toString('hex')
console.log(tree.toString())
const proof=[]
console.log(buf2hex(tree.getRoot()))
for(let i=0;i<addresses.length;i++){
const leaf = keccak256(addresses[i]) // address from wallet using walletconnect/metamask
const proof = tree.getProof(leaf).map(x => buf2hex(x.data))
console.log(proof)}






