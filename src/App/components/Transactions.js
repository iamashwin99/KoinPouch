import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Transactions = ({tx_hash, successful, from_address, to_address, value, gas_spent, block_signed_at}) => {

    return (
        <Col md={6} xl={6}>
        <Card>
            <Card.Body>
    <h6 className='mb-4'><i className="feather icon-box text-c-green f-10 m-r-5"/>Tx Hash: {tx_hash} </h6>
                <div className="row d-flex mb-4 align-items-center">
                    <div className="col-9">
    <h4 className="f-w-300 d-flex align-items-center m-b-0"> Value: {value} </h4>
                    </div>

                    <div className="col-3 text-right">
                        <p className="m-b-0">{successful}</p>
                    </div>
                </div>
                <h6 className='mb-4'>Sender: {from_address}</h6>
                <h6 className='mb-4'>Receiver: {to_address}</h6>
                <div className="row d-flex mb-4 align-items-center">
                    <div className="col-9">
                    <h5 className="f-w-300 d-flex align-items-center m-b-0"> Gas Spent: {gas_spent}</h5>
                    </div>

                    <div className="col-3 text-right">
                        <p className="m-b-0">{block_signed_at}</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </Col>
    )
}

export default Transactions;