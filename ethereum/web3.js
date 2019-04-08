import Web3 from 'web3';


// const web3 = new Web3(window.web3.currentProvider); // Kann nur lokal von browser un nicht server seitig, da window 

let web3; // '!==' operator heißt not equal value or equal type
if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){ //undefined Javascript browser //checken auf dem server mit "node" und dann typeof window//
    //We are in the Browser and metamask is running.
    web3 = new Web3(window.web3.currentProvider);
}else{
    //We are on the server or the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/E2Vi7TW6F0SPsNfmylRJ'
    );
    web3 = new Web3(provider);
}

export default web3;