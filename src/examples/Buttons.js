import { Button, Row, Col } from "reactstrap";
const Buttons = () => {
  return (
    <div class="container">
      <Row>
        <Col>
          <div className="btn btn-primary"> Register me</div>
        </Col>
        <Col>
          <Button color="primary"> Register me</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Buttons;
