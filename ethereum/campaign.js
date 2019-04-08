import web3 from './web3'; // greift auf web3 von verzeichnis datei web3.js keine eigene Instanz
import Campaign from  './build/Campaign.json';

export default (address) =>{
    return new web3.eth.Contract(
        JSON.parse(Campaign.interface), //Nimmt dem ABI (Application Binary Interface)
        address //Adresse zum deployed Contract
    );
};

