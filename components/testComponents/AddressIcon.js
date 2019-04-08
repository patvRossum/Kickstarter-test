import React, { Component } from 'react';
import makeBlockie from 'ethereum-blockies-base64';
import web3 from '../../ethereum/web3';
import { Image } from 'semantic-ui-react'

class RequestAddressIcon extends Component{

    state= {       
        addressIcon: 'null',
        addressName: 'loading...'
    };


    async getUserAddress(){
        const accounts = await web3.eth.getAccounts();
        this.setState({addressIcon : accounts[0] , addressName : accounts[0] });
    }



    async componentDidMount(){
        
        await this.getUserAddress();
        console.log("componentDidMount222 Test " );
    }
    



    render() {
        return (

            <div>
            <Image src={makeBlockie(this.state.addressIcon)} avatar />
            <span>{this.state.addressName}</span>
             </div>


        );
    }

}

export default RequestAddressIcon;

//<img src={makeBlockie(this.state.address)}
//height="42" width="42"/>