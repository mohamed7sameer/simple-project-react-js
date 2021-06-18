
import { Container,Col,Form, Row, FormControl, Button } from 'react-bootstrap';
import './style.css';
const  AboutComponent = () => {
  return (
    <div className="contact">
      <Container>
          <h2 className="contact-title"><span>Drop </span>Me A line</h2>
          <Form action="">
              <Row>
                <Col>
                    <FormControl className="mb-3" type="text" placeholder="Your Name" />
                </Col>
                <Col>
                    <FormControl className="mb-3" type="email" placeholder="Your Email" />
                </Col>
              </Row>
              
              <FormControl className="mb-3" type="text" class="sub" placeholder="Your Subject" />
              <FormControl className="mb-3" as="textarea" cols="30" rows="10" placeholder="Your Message" />
              <Button variant="primary" type="submit">
                Send Message
              </Button>
          </Form>
      </Container>
    </div>
  );
}

export default AboutComponent;
