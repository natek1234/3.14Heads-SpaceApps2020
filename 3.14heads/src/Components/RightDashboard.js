import React from 'react';
import { Card, Col, Row, Tabs, Tab, Form, Button } from 'react-bootstrap';


class RightDashboard extends React.Component {

    constructor(props) {
      super(props);
      this.state = {

      };
    }

    render() {
        return (

            <Card
            bg='dark'
            text='white'
        >
            <Card.Body>
            <Tabs defaultActiveKey="About" id="uncontrolled-tab-example" className="my-3 mb-4 ml-1">
                <Tab eventKey="Parameters" title='Parameters' style={{ padding: '5px'}}>
                <div id='style-14' style={{ height: '70vh', overflowY: 'scroll', overflowX: 'hidden', paddingRight:'10px' }}>
                    <b>Basic</b>
                    <Row>
                        <Col>
                            <Form.Group controlId="Location">
                                <Form.Label>Location</Form.Label>
                                <Form.Control as="select"
                                    value={this.props.location} 
                                    onChange={(event) => this.props.updateLocation(event.target.value)}>
                                    <option>Toronto, Canada</option>
                                </Form.Control>                            
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="date">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type='date'
                                value={this.props.date} 
                                onChange={this.props.updateText} />                            
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="Relays">
                                <Form.Label>Relays</Form.Label>
                                <Form.Control as="select" 
                                value={this.props.numberRelays} 
                                onChange={(event) => this.props.updateNumberRelays(event.target.value)}>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </Form.Control>  
                            </Form.Group>                       
                        </Col>
                    </Row>
                    <b>Wave</b>
                    <Row>
                        <Col>
                            <Form.Group controlId="Frequency">
                                <Form.Label>Frequency</Form.Label>
                                <Form.Control type="number" placeholder={0} style={{ width: '70%', display: 'inline-block', marginRight: '5px'}}
                                        value={this.props.frequency} 
                                        onChange={(event) => this.props.updateFrequency(event.target.value)}/>Hz
                            </Form.Group>
                        </Col>
                            
                        <Col>
                            <Form.Group controlId="Bandwidth">
                                <Form.Label>Bandwidth</Form.Label><br></br>
                                <Form.Control type="number" placeholder={0} style={{ width: '70%', display: 'inline-block', marginRight: '5px'}}
                                            value={this.props.bandwidth} 
                                            onChange={(event) => this.props.updateBandwidth(event.target.value)}/>bps
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="ReqBitRate">
                                <Form.Label>Required Bit Rate</Form.Label><br></br>
                                <Form.Control type="number" placeholder={0} style={{ width: '70%', display: 'inline-block', marginRight: '5px'}}
                                            value={this.props.reqBitRate} 
                                            onChange={(event) => this.props.updateReqBitRate(event.target.value)}/>bps
                            </Form.Group>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <b>Transmitter and Receiver</b>
                    <Row>
                        <Col>
                            <Form.Group controlId="Power">
                                <Form.Label>Earth Transmitter Power</Form.Label><br></br>
                                <Form.Control type="number" placeholder={0} style={{ width: '70%', display: 'inline-block', marginRight: '5px'}}
                                            value={this.props.transmitterPowerE} 
                                            onChange={(event) => this.props.updateTransmitterPowerE(event.target.value)}/>W
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="transmitterPowerM">
                                <Form.Label>Mars Transmitter Power</Form.Label><br></br>
                                <Form.Control type="number" placeholder={0} style={{ width: '70%', display: 'inline-block', marginRight: '5px'}}
                                            value={this.props.transmitterPowerM} 
                                            onChange={this.props.updateText}/>W
                            </Form.Group>
                        </Col>
                    </Row>
                    </div>
                </Tab>

                <Tab eventKey="Advanced Params" title="Advanced Params" >
                <div id='style-14' style={{ height: '70vh', overflowY: 'scroll', overflowX: 'hidden' }}>
                <b>Earth</b>
                <Row>
                    <Col>
                        <Form.Group controlId="transmitterEffE">
                            <Form.Label>Transmitter Efficiency</Form.Label><br></br>
                            <Form.Control type="number" placeholder={0} style={{ width: '70%', display: 'inline-block', marginRight: '5px'}}
                                        value={this.props.transmitterEffE} 
                                        onChange={this.props.updateText} /> %
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="transmitterGainE">
                            <Form.Label>Transmitter Gain</Form.Label><br></br>
                            <Form.Control type="number" placeholder={0} style={{ width: '70%', display: 'inline-block', marginRight: '5px'}}
                                        value={this.props.transmitterGainE} 
                                        onChange={this.props.updateText}/>dB
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="receiverGainE">
                            <Form.Label>Receiver Gain</Form.Label><br></br>
                            <Form.Control type="number" placeholder={0} style={{ width: '70%', display: 'inline-block', marginRight: '5px'}}
                                        value={this.props.receiverGainE} 
                                        onChange={this.props.updateText}/>dB
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="pointingErrorE">
                            <Form.Label>Pointing Error</Form.Label><br></br>
                            <Form.Control type="number" placeholder={0} style={{ width: '70%', display: 'inline-block', marginRight: '5px'}}
                                        value={this.props.pointingErrorE} 
                                        onChange={this.props.updateText}/>º
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="noiseFigureE">
                            <Form.Label>Noise Figure</Form.Label><br></br>
                            <Form.Control type="number" placeholder={0} style={{ width: '70%', display: 'inline-block', marginRight: '5px'}}
                                        value={this.props.noiseFigureE} 
                                        onChange={this.props.updateText}/>dB
                        </Form.Group>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <b>Mars</b>
                <Row>
                    <Col>
                        <Form.Group controlId="transmitterEffM">
                            <Form.Label>Transmitter Efficiency</Form.Label><br></br>
                            <Form.Control type="number" placeholder={0} style={{ width: '70%', display: 'inline-block', marginRight: '5px'}}
                                        value={this.props.transmitterEffM} 
                                        onChange={this.props.updateText}/>%
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="transmitterGainM">
                            <Form.Label>Transmitter Gain</Form.Label><br></br>
                            <Form.Control type="number" placeholder={0} style={{ width: '70%', display: 'inline-block', marginRight: '5px'}}
                                        value={this.props.transmitterGainM} 
                                        onChange={this.props.updateText}/>dB
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="receiverGainM">
                            <Form.Label>Receiver Gain</Form.Label><br></br>
                            <Form.Control type="number" placeholder={0} style={{ width: '70%', display: 'inline-block', marginRight: '5px'}}
                                        value={this.props.receiverGainM} 
                                        onChange={this.props.updateText}/>dB
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="pointingErrorM">
                            <Form.Label>Pointing Error</Form.Label><br></br>
                            <Form.Control type="number" placeholder={0} style={{ width: '70%', display: 'inline-block', marginRight: '5px'}}
                                        value={this.props.pointingErroM} 
                                        onChange={this.props.updateText}/>º
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="noiseFigureM">
                            <Form.Label>Noise Figure</Form.Label><br></br>
                            <Form.Control type="number" placeholder={0} style={{ width: '70%', display: 'inline-block', marginRight: '5px'}}
                                        value={this.props.noiseFigureM} 
                                        onChange={this.props.updateText}/>dB
                        </Form.Group>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                </div>
                </Tab>

                <Tab eventKey="About" title="About">

                    <div id='style-14' style={{ height: '70vh', overflowY: 'scroll', overflowX: 'hidden' }}>
                    <b>LinkedUp Earth-Mars Communication Simulation Tool</b>
                    <p>
                        As humans take to the stars, we will face many novel challenges.
                        One such challenge is communication over long distances. Many factors affect how
                        effectively you can communicate with astronauts as they travel far from Earth. Some of these
                        challenges include distance, signal interference, and orbital dynamics.
                    </p>
                    <p>
                        This tool was inspired by the "Can you Hear Me Now?" challenge for the 2020 SpaceApps
                        hackathon. The goal is to simulate/explore how communication would look like with 
                        people on Mars. With this tool, we hope to explore the effects of placing relays to boost
                        communication capabilities as well as investigating the physics surrounding
                        link budgets.
                    </p>
                    <p>
                        A <b>link budget</b> represents an amalgamation of various signal strength factors, including natural
                        factors such as atmospheric interference and losses over free space. In general, the <b>link margin </b>
                        is meant to simulate the end behaviour of the signal, showing whether or not the signal is likely
                        to get through to the other side. In general, a positive link margin represents the fact that a signal
                        is likely to get through, and a negative represents a signal that is unlikely to get through.
                    </p>
                    <p>
                        This tool will allow you to get a hands on experience of how sensitive communications systems are by
                        varying some parameters and creating a link budget. You will also have an opportunity to investigate the
                        effects of adding relay stations along the way to Mars. We also briefly investigate a potential solution
                        to the issue of falling out of contact with Mars for parts of the year.
                    </p>
                    </div>
                </Tab>
            </Tabs>

            <Button variant="success" className="float-right" onClick={() => this.props.updateParameters()} style={{ marginTop: '25px' }}>Update Parameters</Button>
            </Card.Body>
            </Card>
        );
    }
}

export default RightDashboard;