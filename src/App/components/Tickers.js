import React from 'react';
import {Table} from 'react-bootstrap';

const Tickers = ({contract_name, contract_ticker_symbol, contract_address, quote_rate, rank, logo_url}) => {
    return(
        <Table responsive hover>
            <tbody>
            <tr className="unread">
                <td><img className="rounded-circle" style={{width: '40px'}} src={logo_url} alt="activity-user"/></td>
                <td>
                    <h6 className="mb-1">{contract_name}</h6>
                    <p className="m-0">{contract_address}</p>
                </td>
                <td>
                    <h6 className="text-muted">{contract_ticker_symbol}</h6>
                </td>
                <td>
                    <h6 className="mb-1">Rank: {rank}</h6>
                    <p className="m-0">{quote_rate}</p>
                </td>
            </tr>
            </tbody>
        </Table>
    ) 
}

export default Tickers;