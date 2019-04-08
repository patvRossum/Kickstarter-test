import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from'../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {

    static async getInitialProps(props){   //Server Render (kommt von Next.js) static spricht das Objekt direkt an ohne ein neues zu erstellen, also muss er das obkjekt nicht rendern (schneller)
        //props.query.address; // kommt von routing die contract address von :address aus route.js file
        const campaign = Campaign(props.query.address); 

        const summary = await campaign.methods.getSummary().call(); //hier wird ein objekt zurückgegeben(kein array)
        console.log(summary);

        return { 
            address: props.query.address, //damit andere Components in anderen Datein auf den Contract zugreifen können
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
         } ; // Hier sind die props -- es wird ein Objekt erwartet
    }

    renderCards(){
        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount,
        } = this.props;
    
        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create requests to withdraw.',
                style: { overflowWrap: 'break-word'}
            },
            {
                header: web3.utils.fromWei(minimumContribution,'ether'),
                meta: 'Minimum Contribution (ETH)',
                description: 'You must contribute at least this much ETH to become an approver.'
            },
            {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw from the contract. Requests must be approved by approvers'
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this campaign',
            },
            {
                header: web3.utils.fromWei(balance,'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much miney this campaign has left to spend.',
            }
        ];

        return <Card.Group items={items} />;

    }


    render() {
        return  (
            <Layout>
                <h3>Campaign Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>

            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>

        </Grid>
            </Layout>
        );
    }
}

export default CampaignShow;