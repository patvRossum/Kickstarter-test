import React from 'react';
import { Container , Label, Grid } from 'semantic-ui-react';
import Head from 'next/head'; //Reacht helper function für den Header des HTML document z.B. für stylesheet Link
import Header from './Header';
import CurrentBlock from './testComponents/CurrentBlock';
import AddressIcon from  './testComponents/AddressIcon';

export default props => {
    
    return(
        <div> 
        <Container>
           <Grid>
               <Grid.Column floated = 'left' width={12}><AddressIcon /></Grid.Column>
               <Grid.Column floated = 'right' width={4} > 
               <Label style={{ marginRight: 15, marginTop: 15} } attached='top right' horizontal='true' size='small' > <CurrentBlock/></Label> </Grid.Column>
            </Grid>
          
         
            <Head>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
            </Head>
            <Header />
            {props.children} 
            <h1><center>{props.nameFetch} Made by Patrick van Rossum</center></h1>

        </Container>
        </div>
    );//props.children ist der inhalt als Objekt der das Layout nutzt
};