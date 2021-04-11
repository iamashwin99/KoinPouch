import React from 'react';
import {Col, Card} from 'react-bootstrap';

const Balances = ({contract_name, contract_ticker_symbol, logo_url, balance, type, quote_rate, quote,nft_data}) => {
    return(
        <Col md={6} xl={4}>
        <Card className='card-social'>
            <Card.Body className='border-bottom'>
                <div className="row align-items-center justify-content-center">
                    <div className="col-auto">
                        <img className="rounded-circle" style={{width: '40px'}} src={logo_url} alt="activity-user"/>
                    </div>
                    <div className="col text-right">
                        <h3>{balance}</h3>
        <h5 className="text-c-purple mb-0">{contract_ticker_symbol} <span className="text-muted"> {contract_name}</span></h5>
                    </div>
                </div>
            </Card.Body>
            <Card.Body>
                <div className="row align-items-center justify-content-center card-active">
                    <div className="col-6">
                        <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Quote:</span>{quote}</h6>
                        {/* <div className="progress">
                            <div className="progress-bar progress-c-green" role="progressbar" style={{width: '40%', height: '6px'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"/>
                        </div> */}
                    </div>
                    <div className="col-6">
                        <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Rate:</span>{quote_rate}</h6>
                        {/* <div className="progress">
                            <div className="progress-bar progress-c-blue" role="progressbar" style={{width: '70%', height: '6px'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"/>
                        </div> */}
                    </div>
                </div>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default Balances;