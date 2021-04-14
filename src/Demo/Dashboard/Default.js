import React from 'react';
import {Row, Col } from 'react-bootstrap';
import Card from "../../App/components/MainCard";

import Aux from "../../hoc/_Aux";

const Dashboard = () => {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='About the project' isOption>
                            <p> This project is an entry for onemillionwallets hackathon </p>
                            <p> Use the Sidebar for Navigation through the various use cases of the Dashboard!</p>
                            <p>  Powered by: <img src="https://www.covalenthq.com/static/images/covalent-logo.png" alt="Covalent Logo" style={{width : '10%'}} /> </p>
                            
                        </Card>
                    </Col>
                </Row>
        </Aux>
        );
    }
// }

export default Dashboard;