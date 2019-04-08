import React, { Component } from 'react';
import Layout from '../../components/Layout';
import {Button, Form, Input, Message} from 'semantic-ui-react'; //https://react.semantic-ui.com/collections/form/ und https://react.semantic-ui.com/elements/input/ und https://react.semantic-ui.com/collections/message/#variations-negative
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes'; // Router redirected leute zu neuen pages / Link hilft für navigation (wird gerade nicht genutzt)


class CampaignNew extends Component{
    state = { //Für den Input
        minimumContribution: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => { //async da wir mit der Blockchain interagieren
       try{
            event.preventDefault(); //Default value wird nicht ausgeführt, da es immer neu gerendert wird
            
            this.setState({loading: true, errorMessage: ''});

            const accounts = await web3.eth.getAccounts();
            await factory.methods
                //.createCampaign(web3.utils.toWei(this.state.value, 'ether'))
                .createCampaign(web3.utils.toWei(this.state.minimumContribution, 'ether'))
                .send({
                    from: accounts[0]
                });
            
        
                const signature = await web3.eth.sign("Hello world", accounts[0]);
                console.log("This is the signature" + signature);

            Router.pushRoute('/'); //User wird weitergeleitet
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({loading: false});
    };
    
    render() {
        return ( 
            <Layout>
                <h3>Create a Campaign</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Minimum Contribution
                        <Input 
                            label="ETH" 
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={event =>
                                this.setState({ minimumContribution : event.target.value })}
                        />
                        </label>
                    </Form.Field>

                    <Message error header="Oops!" content={this.state.errorMessage} />

                    <Button loading={this.state.loading} primary>
                        Create!
                    </Button>
                </Form>
            </Layout>
        ); 
    }
}

export default CampaignNew;

//<Form> - A Form.field is a form element containing a label and an input.
//Input für minimumContribution
