pragma solidity ^ 0.4 .7;

contract CampaignFactory {

    string public name = "Patrick";
    address[] public deployedCampaigns;


    function createCampaign(uint _minimum) public {
        address newCampaign = new Campaign(_minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns(address[]) {
        return deployedCampaigns;
    }

}


contract Campaign {

    address public manager;
    uint public minimumContribution;
    uint public approversCount;
    mapping(address => bool) public approvers;

    Request[] public requests;
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }


    modifier restricted() {
        require(msg.sender == manager);
        _;
    }


    constructor(uint _minimum, address _creator) public {
        manager = _creator;
        minimumContribution = _minimum;
    }

    function contribute() public payable {
        require(msg.value >= minimumContribution);

        approvers[msg.sender] = true;
        //require(approvers[msg.sender]) checken ob die Adresse true approver ist
        //approvers.push(msg.sender); Da wir mapping benutzen und kein Array
        approversCount++;
    }

    function createRequest(string _description, uint _value, address _recipient)
    public restricted {
        Request memory newRequest = Request({ //memory da komplett neu ähnlich ram
            description: _description,
            value: _value,
            recipient: _recipient,
            complete: false,
            approvalCount: 0
            //approvals muss nicht mapping(reference typ) nur value typ    
        });

        //Request(_description, _value, _recipient, false); Alternative schreibweise

        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index]; //storage da wir die variable verändern wollen ähnlich festplatte

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]); //! macht false ==

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeReqeust(uint index) public restricted {
        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);

        request.recipient.transfer(request.value); //recipient ist von typ address und hat deshalb die methode transfer
        request.complete = true;

    }

    function getSummary() public view returns (uint, uint, uint, uint, address){
        

        return (
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint){
        return requests.length;
    }
}