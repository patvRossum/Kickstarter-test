import React, { Component } from 'react';
import { Card, Button, Label } from 'semantic-ui-react';
import factory from '../ethereum/factory';// ein verzeichnis zurück
import Layout from '../components/Layout';
import { Link } from '../routes';
import web3 from '../ethereum/web3';
import CurrentBlock from '../components/testComponents/CurrentBlock';

//export default () => {
//   return(
//      <h2>This is the campaign page!!</h2>
//    );
//}

class CampaignIndex extends Component{

    static async getInitialProps(){   //Server Render (kommt von Next.js) static spricht das Objekt direkt an ohne ein neues zu erstellen, also muss er das obkjekt nicht rendern (schneller)
        const campaigns = await factory.methods.getDeployedCampaigns().call(); 
        const blockNumber = await web3.eth.getBlockNumber();
        
        return { campaigns, blockNumber } ; // Hier sind die props
    }



    


 /*   async componentDidMount(){
       const campaigns = await factory.methods.getDeployedCampaigns().call();  
        console.log(campaigns);
    }
*/

    //Sementic wird genutzt in renderCampaign
    renderCampaigns(){ //map durchläuft alle in array
        
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (
                <Link route={`/campaigns/${address}`}>
                    <a>View Project</a>
                </Link>
                ),
                fluid: true //fluid passt den container an die passende größe an

            };
        });






        return <Card.Group items={items} />;
    }
    
  //Beispiel mit   '../components/testComponents/CurrentBlock'; um Serverseitig zu rendern und an component zu geben
 /* renderCurrentBlock(){
    return (
       <CurrentBlock
         blockNumber = {this.props.blockNumber} />
    );
  }
*/

    render()
    { // React erwartet ein js render zurück, sonst würde ein error kommen

            //return<div>{this.props.campaigns[0]}</div>;
            //Layout kommt von components/Layout.js
            return (
                <div>                    
                      
                    <Layout> 
                        <div>
                                <h3>Open Projects</h3>
                                <Link route="/campaigns/new">
                                    <a> 
                                        <Button
                                            floated = "right"
                                            content="Create Project"
                                            icon="add circle"
                                            primary//ist das selbe wie primary={true} primary style den button blau
                                        />
                                    </a>
                                </Link>
                                {this.renderCampaigns()}
                        </div>
                    </Layout>
                </div>
        );
    }
}

export default CampaignIndex; //Next erwartet das ein react component exportiert wird wenn eins importiert wird

