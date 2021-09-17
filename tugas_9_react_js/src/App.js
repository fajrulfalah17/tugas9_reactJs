import React, {Component} from "react";
import { Spinner, Nav, Navbar, NavDropdown, Form, Button, Container, Breadcrumb, Table, Tab, Tabs, ProgressBar, Pagination, OverlayTrigger, Popover, Col, Row} from "react-bootstrap"

class App extends Component {
    render() {
        const showInformation = <Popover title="Informasi Website">Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olahraga</Popover>
        return (
            
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="/home">Akses Sport</Navbar.Brand>
                        <Navbar.Toggle />
                        <Nav  className="d-flex justify-content-end">
                            <Nav.Item>
                                <Nav.Link href="/home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/berita">Berita</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/live-score">Live Scores</Nav.Link>
                            </Nav.Item>
                            <NavDropdown title="Piala & Liga" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1">Liga Inggris</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">La Liga</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3">Piala BRI</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.4">Champions League</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                                <Nav.Link href="/transfer">Transfer Pemain</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/team">Tim</Nav.Link>
                            </Nav.Item>
                            
                        </Nav>
                        <Form className="d-flex justify-content-end">
                                <Form.Control type="text" placeholder="Search" className="mr-2" />
                                <Button type="submit" variant="outline-info">Search</Button>
                            </Form>
                    </Container>
                </Navbar>

                <Container>
                    <Breadcrumb className="d-flex justify-content-end">
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/">Liga Inggris</Breadcrumb.Item>
                        <Breadcrumb.Item href="/" active>Transfer Pemain</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>

                <Container>
                    <Row>
                        <Col md={4}>
                            <h2>Rumor transfer pemain</h2>
                        </Col>
                        <Col md={{ span: 4, offset: 4 }}>
                            <Spinner animation="border" variant="success" size="sm" />
                            <Spinner animation="grow" variant="success" size="sm" /> 
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Tabs>
                        <Tab eventKey="allTransfer" title="Semua Transfer">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nama Pemain</th>
                                        <th>Tim</th>
                                        <th>Transfer</th>
                                        <th>Proses Transfer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>MAROUAN FELLAINI</td>
                                        <td>MANCHESTER UNITED</td>
                                        <td>SHANDONG LUNENG</td>
                                        <td><ProgressBar now={85} label="85%" /></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>LUIS NANI</td>
                                        <td>ORLANDO CITY</td>
                                        <td>SHANDONG LUNENG</td>
                                        <td><ProgressBar now={55} label="55%" /></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>MAREK HAMSIK</td>
                                        <td>NAPOLI</td>
                                        <td>DALIAN ZIFANG</td>
                                        <td><ProgressBar now={95} label="95%" /></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>SARDAR ASMOUN</td>
                                        <td>RUBIN KAZAN</td>
                                        <td>ZENIT ST PETERSBURG</td>
                                        <td><ProgressBar now={100} label="100%" /></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>MICHY BATSHUAYI</td>
                                        <td>CHELSEA</td>
                                        <td>CRYSTAL PALACE</td>
                                        <td><ProgressBar now={50} label="50%" /></td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>LUCAS PIAZON</td>
                                        <td>CHELSEA</td>
                                        <td>CHIEVO</td>
                                        <td><ProgressBar now={100} label="100%" /></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="ligaInggris" title="Liga Inggris">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nama Pemain</th>
                                        <th>Tim</th>
                                        <th>Transfer</th>
                                        <th>Proses Transfer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>MAROUAN FELLAINI</td>
                                        <td>MANCHESTER UNITED</td>
                                        <td>SHANDONG LUNENG</td>
                                        <td><ProgressBar now={85} label="85%" /></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>MICHY BATSHUAYI</td>
                                        <td>CHELSEA</td>
                                        <td>CRYSTAL PALACE</td>
                                        <td><ProgressBar now={50} label="50%" /></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>LUCAS PIAZON</td>
                                        <td>CHELSEA</td>
                                        <td>CHIEVO</td>
                                        <td><ProgressBar now={100} label="100%" /></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="ligaItalia" title="Serie A">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nama Pemain</th>
                                        <th>Tim</th>
                                        <th>Transfer</th>
                                        <th>Proses Transfer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>MAREK HAMSIK</td>
                                        <td>NAPOLI</td>
                                        <td>DALIAN ZIFANG</td>
                                        <td><ProgressBar now={95} label="95%" /></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="divisiPrimera" title="Divisi Primera">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nama Pemain</th>
                                        <th>Tim</th>
                                        <th>Transfer</th>
                                        <th>Proses Transfer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td><ProgressBar now={0} label="0%" /></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="bundesliga" title="Bundesliga">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nama Pemain</th>
                                        <th>Tim</th>
                                        <th>Transfer</th>
                                        <th>Proses Transfer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td><ProgressBar now={0} label="0%" /></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="ligaIndonesia" title="Liga Indonesia">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nama Pemain</th>
                                        <th>Tim</th>
                                        <th>Transfer</th>
                                        <th>Proses Transfer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td><ProgressBar now={0} label="0%" /></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                    </Tabs>
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Ellipsis />
    
                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>
    
                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                    <OverlayTrigger trigger="click" placement="right" overlay={showInformation}>
                        <Button variant="primary">Informasi</Button>
                    </OverlayTrigger>
                    <Button className="ml-2" type="submit" variant="primary">Versi Website</Button>
                </Container>
            </div>
        );
    }
}

export default App;
