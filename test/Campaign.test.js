const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //eine Instanz
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/campaign.json');

require('events').EventEmitter.defaultMaxListeners = 0; //Um Bug aufzuheben

let accounts; //Alle accounts von local ganache
let factory; // deployed refference von compiledFacotry
let campaignAddress;
let campaign;

beforeEach(async () => { //beforeEach vor jedem Test Szenario(it), da before nur einmal vor den komletten test Szenario oder after nach den Test Szenario oder afterEach nach jedem Test Szenario
    accounts = await web3.eth.getAccounts();

    //Neuer Contract
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)) //Json wird in javascript geparset
        .deploy({
            data: compiledFactory.bytecode
        })
        .send({
            from: accounts[0],
            gas: '1000000'
        });

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });//100 ist minimum Contribution

    /*
    const addresse = await factory.methods.getDeployedCampaigns().call();
    campaignAddress = addresse[0];
    */

    [campaignAddress] = await factory.methods.getDeployedCampaigns().call(); //[campaignAddress] sagt javascript das erste array nehmen soll 
    //Für bereits vorhandene Contracts
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );
});

describe('Campaigns', () => {
    it('deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('marks caller as the campaign manager',async () => {
        const manager = await campaign.methods.manager().call(); 
        assert.equal(accounts[0],manager);
    });

    it('allows people to contribute money and marks them as approvers',async () => {
        await campaign.methods.contribute().send({
            value: '200',
            from: accounts[1]
        });
        const isConstributor = await campaign.methods.approvers(accounts[1]).call();
        assert(isConstributor); //ist true?
    });
    
    it('requires a minimum contribution',async () => {
        try {
            await campaign.methods.contribute().send({
                value: '99',
                from: accounts[1]
            });
            assert(false);
        } catch(err) {
            assert(err);
        }
    });

    it('allows a manager to make a payment request',async () => {
        await campaign.methods
            .createRequest('Buy batteries', '100',  accounts[1])
            .send({
                from: accounts[0],
                gas: '1000000'
            });
        const request = await campaign.methods.requests(0).call();
        assert.equal(request.description,'Buy batteries');
    });

    it('processes request',async () => {
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10', 'ether')
        });


        await campaign.methods
            .createRequest('A', web3.utils.toWei('5','ether'),  accounts[5])
            .send({
                from: accounts[0],
                gas: '1000000'
        });

        await campaign.methods.approveRequest(0)
            .send({
            from: accounts[0],
            gas: '1000000'
        });

        await campaign.methods.finalizeReqeust(0)
            .send({            
            from: accounts[0],
            gas: '1000000'
        });

        let balance = await web3.eth.getBalance(accounts[5]); //wird als String zurückgegeben in Wei
        balance = web3.utils.fromWei(balance,'ether');
        balance = parseFloat(balance); // Casten in dezimalnummer
        //console.log(balance); Zum balance nachschauen
        assert(balance,'105'); //Account 5 startet mit 100 ether 100 + 5 = 105
    });




    it('deploys a second campaign',async () => {

        let campaignAddress2;
  

        await factory.methods.createCampaign('50000').send({
            from: accounts[0],
            gas: '1000000'
        });//50000 ist minimum Contribution

        const addresse = await factory.methods.getDeployedCampaigns().call();
        campaignAddress2 = addresse[1];

        //Für bereits vorhandene Contracts
        campaign2 = await new web3.eth.Contract(
            JSON.parse(compiledCampaign.interface),
            campaignAddress2
        );

            
        //const minCon = await campaign2.methods.minimumContribution().call();
        //console.log(minCon); Zeigt Minimal Contribution

        assert.ok(campaign2.options.address);
    });






});

