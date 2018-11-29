import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button, Row, Col} from 'reactstrap';

const ProductIncrementer = (props) => {
  let imagePath = `./images/${props.image}`;
  return (
    <div>
      
      <Row>
        <Col sm={{ size: 4, offset: 3 }}><img className='fluid' alt={props.image} src={imagePath} height="150px" style={{align:'middle'}}/></Col>
      </Row>
      <Row>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <Button onClick={props.decrementCounter} color='primary' name={props.productName}>-</Button>
          </InputGroupAddon>
          <Input placeholder={props.counter} />
          <InputGroupAddon addonType="append">
            <Button onClick = {props.incrementCounter} color='primary' name={props.productName}>+</Button>
          </InputGroupAddon>
        </InputGroup>
      </Row>
    </div>
  )
}

export default ProductIncrementer;