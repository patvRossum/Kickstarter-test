const path = require('path'); //path
const fs = require('fs-extra'); //fs-extra ist ähnlich wie fs nur von der community
const solc = require('solc'); //Solidity compiler solc


const buildPath = path.resolve(__dirname, 'build'); //Zeigt auf den Path in selben Ordner "build"

fs.removeSync(buildPath); //Löscht Ordner und Inhalt von buildPath, damit die alten deployments gelöscht werden

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol'); // Zeigt auf path von SC 
const source = fs.readFileSync(campaignPath, 'utf8'); //Liest den source code aus campaignPath in utf8 encoding
const output = solc.compile(source, 1).contracts; //Contracts da uns nur die contracts interessieren (wir wollen den Contract nur 1 mal deployen)

fs.ensureDirSync(buildPath); //Checkt ob directory exisitiert wenn nicht wird es hinzugefügt

//console.log(output); //Zwei Objekte für Zwei contracte
for (let contract in output) { //Loop für jeden Contract z.B Campaign und CampaignFactory (Referenz)
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'), //.replace(':', replaced den Key vor den contract namen mit einen empty string
        output[contract] // schreibt alles aus den contract objekt in die Datei
    );
}