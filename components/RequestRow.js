import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import { Router } from '../routes';

class RequestRow extends Component {
  onApprove = async () => {
    const campaign = Campaign(this.props.address);

    const accounts = await web3.eth.getAccounts();
    await campaign.methods.approveRequest(this.props.id).send({
      from: accounts[0]
    });
    Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
  };

  onFinalize = async () => {
    const campaign = Campaign(this.props.address);

    const accounts = await web3.eth.getAccounts();
    await campaign.methods.finalizeReqeust(this.props.id).send({
      from: accounts[0]
    });
  };



  render() {
    const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props; //Kommt von pages/requests/index
    const readyToFinalize = request.approvalCount > approversCount / 2;

    return (
      <Row
        disabled={request.complete} //Row wird disabled wenn true ist
        positive={readyToFinalize && !request.complete} //readytoFinalize true und request.complete false
      >
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>
          {request.approvalCount}/{approversCount}
        </Cell>
        <Cell>
          {request.complete ? null : ( //Wenn request.complete true ist zeige null(nichts) ansonsten den Button
            <Button color="green" basic onClick={this.onApprove}>
              Approve
            </Button>
          )}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button color="teal" basic onClick={this.onFinalize}>
              Finalize
            </Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
