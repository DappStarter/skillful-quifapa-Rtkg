require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict forget force sugar guard render remind concert harvest credit foster sense'; 
let testAccounts = [
"0x21aba7f37ea6c58842dc47b2c4398533761dffcdfe69ff4b5a4c049db1b2fb79",
"0x2ea13b6a9349bc1164c929d99e9c4c4ef05a146c16ecc4c2728caa9241072240",
"0x9b72817a01d3b46af23f38542109124ddd3c1925bada08fbe1f8c941e67f5166",
"0xaf4c914d07b40609df78f687a9340d69824f088664f5a3aa2d618ca5780db1aa",
"0x8da85379911f04b22dc2b13fb15d8d1637bbcc7857d96af8364280ba941ce72f",
"0x7ec64aeb0ad969f60db71accd2e54d4d3feb2bb0d9c985659b82f311042f0806",
"0x6c055e2ed90d0fe5cd1f6fb57adfbe87a04f3c38b41244fc677e28ebf864e56f",
"0x1e9d09dcea9c8cd22340a85bf4e0904ca7ace31160060f5924429c09ac5cc376",
"0x965c80c46218c699f9d6f72aefdb64a1d09591ea18e294c2b7ae94d7dc68b9be",
"0x463f19d4de393dcef5250502a38adcc206beed47418cef7333846da1335d471b"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


