require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remain erosion inflict prison orange tomorrow'; 
let testAccounts = [
"0x0820fbebb59850fe54c77f58c82d7495ad920ab78f8ce6ff16ddc110e9a7d6be",
"0xb2cab1ed35cc62b83724e1961c6cbd619db100f407c14348678b114eac9fab89",
"0xa72ee171768af3e14e14c0e02897db8a83cf5d9ceba1e77581fba23506d8bbb5",
"0xe2afd8183281497f12d80f6025c95aa66dc1f07b47713cb804a7aa6223618387",
"0xa43edaf3829e5d409ab8879645fe4fec1458e5d53bb96cbf6919c98751b1e157",
"0x040db4cf0032d9f9059cc6ba391942877411fcc3d37a598ba4afd15b230caefc",
"0xaf4b3130fed6fc18760bf2106dc47a7d741bd875a7e9cfb22e0bf1879ab7364b",
"0x84a6e0a3ca1faaa82a2a67a21219c06150b9faf585815ee4ee90642c7054058b",
"0x0cadbe9d922aa6385108bee741d320331370665c513412b33d75269bae19fa52",
"0xb65b02fe5a6909d79a82794db185d8dfec31c0aaedbb8b753604a639683da246"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

