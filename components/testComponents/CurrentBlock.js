import React, { Component } from 'react';
import { Popup , Label} from 'semantic-ui-react'
import web3 from '../../ethereum/web3';
import factory from '../../ethereum/factory';



class RequestCurrentBlock extends Component {
   

    state = {
        blockNumber: 'Loading...',
        blockIntervalCounter: null 
        
    };

 

    async setCurrentBlock(){
        const currentBlock = await web3.eth.getBlockNumber();
        this.setState({blockNumber : currentBlock});
    };

    async componentDidMount(){
        
        await this.setCurrentBlock();

        this.interval = await setInterval( 
            () => 
            this.setCurrentBlock(),
            10000);

        //console.log("componentDidMount Test " + this.interval);
    }

    
    async componentWillUnmount(){
        clearInterval(this.interval);
        //console.log("componentWillUnmount Test " + this.interval)
    }

    async componentDidUpdate(){
       
        /*
        const blockTimer = await setInterval(this.setCurrentBlock(),1000);
        this.setState({blockIntervalTimer: blockTimer})*/
        //console.log("componendidUpdate Test " + this.interval);
    }
  
    render(){
        return(
            <div> 
                Last Block :
                    <Popup      
                        trigger={<span> {this.state.blockNumber}</span>}
                        content='Ethereum'
                        size='big'                        
                    />
            </div>
        );
    }
    
}

export default RequestCurrentBlock;
//trigger={<span>{blockNumber}</span>}
//HTML Tags <span>
//The <span> tag is used to group inline-elements in a document.

//The <span> tag provides no visual change by itself. {this.renderBlockNumber()}

//The <span> tag provides a way to add a hook to a part of a text or a part of a document.


// const { blockNumber } = this.props; in render funktion damit serverseitig angezeigt werden kann und an dieses Component weitergegeben wird