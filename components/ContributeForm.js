import React, { Component } from 'react';
import {Button, Form, Input, Message} from 'semantic-ui-react'; //https://react.semantic-ui.com/collections/form/ und https://react.semantic-ui.com/elements/input/ und https://react.semantic-ui.com/collections/message/#variations-negative
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component{

    state = {
        value: '',
        errorMessage: '',
        loading: false
    };


    onSubmit = async event =>{

        event.preventDefault();
        const campaign = Campaign(this.props.address);

        this.setState({ loading: true , errorMessage: ''});

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
              from: accounts[0],
              value: web3.utils.toWei(this.state.value, 'ether')
      });


       /* try {
            console.log(this.state.value);
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: this.state.value
               // value: web3.utils.toWei(this.state.value, 'ether')
            });
        */
            Router.replaceRoute(`/campaigns/${this.props.address}`); //unterschied zu pushroute ist das nicht historisiert wird also keine neue seite geöffnet wird nur die aktuelle aktualisiert
        } catch (err) {
            this.setState({ errorMessage: err.message});
        }
        this.setState({ loading: false, value: '' })// loading symbol weg und input

        //Zum testen des letzten Blocks
        const blocknumber = await web3.eth.getBlockNumber();
        console.log(blocknumber);
    };

    render(){
        return(
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input
                        value={this.state.value}
                        onChange={event => this.setState({value: event.target.value})}
                        label="ETH"
                        labelPosition="right"
                    />
                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMessage}/>
                <Button primary loading={this.state.loading}>
                    Contribute
                </Button>
            </Form>
        );
    }
}
    
export default ContributeForm;