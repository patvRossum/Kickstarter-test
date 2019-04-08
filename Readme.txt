- NPM init
- npm install --save next@4.1.4 react react-dom
- next dev hinzugefügt in package.json     "dev": "next dev"
- npm install --save semantic-ui-react 
- npm install --save semantic-ui-css
- npm install --save next-routes      Fürs routing der Page namen
- Um routes zu nutzen wird in package.json dev ersetzt durch  "dev": "node server.js" und "main": "index.js" durch  "main": "routes.js" damit er ein customizing benutzt statt next dev
-- server.js und routes.js Datei erstellen
-npm install -- save fs-extra
-npm install --save truffle-hdwallet-provider
-npm install --save solc@0.4.25
-npm install --save web3@^1.0.0-beta.26 (git muss installiert sein)
setx PYTHON "C:\Users\Patrick\.windows-build-tools\python27\python.exe"
-- You actually need to have python and Visual Studio Build Tools installed on your windows PC for this to work.


- npm install --global --production windows-build-tools  https://www.npmjs.com/package/windows-build-tools
hilfe . > npm install -g node-gyp
cdm -> npm --add-python-to-path='true' --debug install --global windows-build-tools
cdm -> npm config set python "%USERPROFILE%\.windows-build-tools\python27\python.exe"

-npm install --save ethereum-blockies-base64

http://localhost:3002/
npm run dev -> zum starten des webservers (Lokal)
crtl C -> Server stoppen