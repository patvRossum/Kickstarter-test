import web3 from './web3'; // greift auf web3 von verzeichnis datei web3.js keine eigene Instanz
import CampaignFactory from  './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), //Nimmt dem ABI (Application Binary Interface)
    '0xe8E55c6Ea6B43ecBB57B3e1AfF76Fad00fa9dCce' //Adresse zum deployed Contract
);

export default instance;