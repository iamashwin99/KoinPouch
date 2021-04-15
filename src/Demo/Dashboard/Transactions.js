import React, { useState, useEffect } from "react";
import { Row, Col, InputGroup, FormControl, Card } from "react-bootstrap";
import Transactions from "../../App/components/Transactions";
import Aux from "../../hoc/_Aux";
// import ContentLoader from "react-content-loader";
import Axios from "axios";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  // const [fetching, setFetching] = useState(true);
  const [walletAddress, setWalletAddress] = useState('');
  const [ queryWallet, setQueryWallet ] = useState('')

  
  const getWalletAdd = e => {
    setQueryWallet(e.target.value)
    console.log(queryWallet)
}

const searchResult = e => {
    e.preventDefault()
    setWalletAddress(queryWallet)
    
    // setWalletAddress('')
    console.log(walletAddress)
    console.log('here3')
}
  
  useEffect(() => {
    let url = `https://api.covalenthq.com/v1/1/address/${walletAddress}/transactions_v2/?key=ckey_4cd27b24d9c248e0a0727d3a7dd`;

    const getTicker = async (value) => {
      const response = await Axios({
        url: url,
        method: "GET",
      });

      const data = response.data.data.items;
      console.log("here");
      console.log(data);
      setTransactions(data);
      // setFetching(false);
    };

    getTicker(walletAddress);
  }, [setTransactions, walletAddress]);

  // if (fetching) return  <Card.Body>
  //                           <Row>
  //                               <Col md={12}>   <h5>Data Loading...</h5> 
  //                                   <ContentLoader 
  //                                       speed={2}
  //                                       width={'75%'}
  //                                       height={160}
  //                                       viewBox="0 0 400 160"
  //                                       backgroundColor="#f3f3f3"
  //                                       foregroundColor="#ecebeb"
                                        
  //                                   >
  //                                   <rect x="80" y="40" rx="3" ry="3" width="400" height="100" /> 
  //                                   <rect x="80" y="40" rx="4" ry="4" width="400" height="100" />
  //                                   <rect x="80" y="40" rx="3" ry="3" width="400" height="100" />
  //                                   </ContentLoader>
  //                               </Col>
  //                           </Row>
  //                       </Card.Body>
                        
  return (
    <Aux>
      <Card>
        <Card.Header>
          <Card.Title as="h6">Enter a Wallet address to view all Transactions</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={12}>
              <InputGroup className="mb-4">
                <InputGroup.Prepend>
                <InputGroup.Text variant="primary" type="submit"  onClick={searchResult}>Search   </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="With textarea" value={queryWallet} onChange={getWalletAdd} />
              </InputGroup>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Row>
        {/* <Card className='card-social'> */}
        {transactions.map((transaction) => (
          <Transactions
            key={transaction.tx_hash}
            tx_hash={transaction.tx_hash}
            successful={transaction.successful}
            from_address={transaction.from_address}
            to_address={transaction.to_address}
            value={transaction.value}
            gas_spent={transaction.gas_spent}
            block_signed_at={transaction.block_signed_at}
          />
        ))}
        {/* </Card> */}
        {/* <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'><i className="feather icon-box text-c-green f-30 m-r-5"/>Tx Hash: </h6>
                                <div className="row d-flex mb-4 align-items-center">
                                    <div className="col-9">
                                        <h4 className="f-w-300 d-flex align-items-center m-b-0"> Value: </h4>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">successful</p>
                                    </div>
                                </div>
                                <h6 className='mb-4'>Sender Address: </h6>
                                <h6 className='mb-4'>Receiver Address: </h6>
                                <div className="row d-flex mb-4 align-items-center">
                                    <div className="col-9">
                                        <h5 className="f-w-300 d-flex align-items-center m-b-0"> Gas Spent: </h5>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">Date</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col> */}
      </Row>
    </Aux>
  );
};
// }

export default Dashboard;
