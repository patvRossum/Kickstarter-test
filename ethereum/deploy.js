const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3'); //Konstrukt von web3
//const { interface, bytecode } = require('./compile'); //ist im selben Pfad wie compile
const compiledFactory = require('./build/CampaignFactory.json');

//Rinkelby deploy
const provider = new HDWalletProvider(
    'funny taste tiger tongue choice scrap recipe pear lemon private lounge frozen',
    'https://rinkeby.infura.io/E2Vi7TW6F0SPsNfmylRJ'
);

const web3 = new Web3(provider); //Instanz von web3 mit kleinen w

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({
            data: '0x' + compiledFactory.bytecode //0x da probleme mit truffle hdwallet provider hexadezimal
            //,arguments: ['Hello'] falls es Constructor gibt
        })
        .send({
            gas: '1000000',
            from: accounts[0]
        });


    console.log('Contract deployed to', result.options.address);
};
deploy(); // wurde so geschrieben weil man async nicht außerhalb einer funktion schreiben kann