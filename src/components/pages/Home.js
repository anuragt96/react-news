import React from 'react';
import { Container, Row , Col, Card, Button } from 'react-bootstrap';

const Home = (props) => {
    return (
        <Container fluid>
        <Row>
                <Col md="auto">
                <div className="grid-container">  
                {
                    props.name.map(value => {
                            return (
                               <div>
                               <Card >
                               <Card.Img variant="top" src={value.urlToImage} />
                               <Card.Body>
                               <Card.Title>{value.title}</Card.Title>
                               <Card.Text>{value.description}</Card.Text>
                               <b>Author :</b> {value.author}
                               <Card.Text><b>Time : </b> {value.publishedAt}</Card.Text>
                               <Button variant="primary" href={value.url}> Read more Details</Button>
                                </Card.Body>
                                </Card>
                               </div>
                           )
                            })
                }
                </div>
                </Col>
            </Row>
      </Container>
    )
}

export default Home;
