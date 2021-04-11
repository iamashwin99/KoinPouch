import React, { useState, useEffect } from 'react';
import {Row, Col, Card, Form, FormGroup, Button } from 'react-bootstrap';
// import ContentLoader from "react-content-loader";
import Transfers from '../../App/components/Transfers'

import Aux from "../../hoc/_Aux";

import Axios from 'axios';

const Dashboard = () => {

    const [transfers, setTransfers] = useState([]);
    // const [fetching, setFetching] = useState(true);
    
    const [walletAddress, setWalletAddress] = useState('');
    const [ queryWallet, setQueryWallet ] = useState('')
    const [ tokenContract, setTokenContract ] = useState('')


    const getWalletAdd = e => {
        setQueryWallet(e.target.value)
        console.log(queryWallet)
    }

    const searchResult = e => {
        e.preventDefault()
        setWalletAddress(queryWallet)
        setTokenContract(tokenContract)
        // setWalletAddress('')
        console.log(walletAddress, tokenContract)
        console.log('here3')
    }

    const getTokenContract = e => {
        setTokenContract(e.target.value)
        console.log(tokenContract)
    }

    
    useEffect(() => {

        let url = `https://api.covalenthq.com/v1/1/address/${walletAddress}/transfers_v2/?key=ckey_4cd27b24d9c248e0a0727d3a7dd&contract-address=${tokenContract}`
    
        const getTransfers = async (value1, value2) => {

            // if ( value != null && value !== '') {
            //     url += "&tickers=" + value
            // }
        
                const response = await Axios ({
                url: url,
                method: "GET"
            })
            
            const data = response.data.data.items;
            // const data = response.data.data.items[0].tranfers[0];
            const data1 = data[0].transfers
            console.log('here1')
            console.log(data1)
            console.log(data[0].transfers[0].contract_address)
            setTransfers(data1)
            // setFetching(false);
        }

      getTransfers(walletAddress, tokenContract)  

    }, [setQueryWallet, tokenContract, walletAddress])


    // if (fetching) return    <Card.Body>
    //                             <Row>
    //                                 <Col md={12}>   <h5>Data Loading...</h5> 
    //                                     <ContentLoader 
    //                                         speed={2}
    //                                         width={'75%'}
    //                                         height={160}
    //                                         viewBox="0 0 400 160"
    //                                         backgroundColor="#f3f3f3"
    //                                         foregroundColor="#ecebeb"
                                            
    //                                     >
    //                                     <rect x="80" y="40" rx="3" ry="3" width="400" height="100" /> 
    //                                     <rect x="80" y="40" rx="4" ry="4" width="400" height="100" />
    //                                     <rect x="80" y="40" rx="3" ry="3" width="400" height="100" />
    //                                     </ContentLoader>
    //                                 </Col>
    //                             </Row>
    //                         </Card.Body>

        return (
            <Aux>
                <Card>
                    <Card.Header>
                    <Card.Title as="h6">Enter a Wallet address to view all Transfers</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <Row>
                        <Col md={12}>
                            <Form>
                                <FormGroup>
                                    <Form.Row>
                                        <Col>
                                        <Form.Control placeholder="Wallet" type="text" value={queryWallet} onChange={getWalletAdd} />
                                        </Col>
                                        <Col>
                                        <Form.Control placeholder="Token Contract" type="text" value={tokenContract} onChange={getTokenContract} />
                                        {/* <Form.Control as="select" placeholder="Token Contract">
                                            <option>Default select</option>
                                            <option>Default select 2</option>
                                            <option>Default select 2</option>
                                            <option>Default select 2</option>
                                            <option>Default select 2</option>
                                        </Form.Control> */}
                                        </Col>
                                    </Form.Row>
                                    </FormGroup>
                                    <Button variant="primary" type="submit" onClick={searchResult}>
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                    </Row>
                    </Card.Body>
                </Card>
                <Row>
                {transfers.map(transfer => (
                    <Transfers
                        key={transfer.tx_hash}
                        tx_hash={transfer.tx_hash}
                        transfer_type={transfer.transfer_type}
                        from_address={transfer.from_address}
                        to_address={transfer.to_address}
                        delta={transfer.delta}
                        gas_spent={transfer.gas_spent}
                        block_signed_at={transfer.block_signed_at}
                        // contract_ticker_symbol={contract_ticker_symbol}
                        // contract_name={contract_name} 
                        // logo_url={logo_url}
                    />
                ))}
                </Row>
            </Aux>
        );
    }
// }

export default Dashboard;