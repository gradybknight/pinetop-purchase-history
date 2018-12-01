import React from 'react';
import { Row, Col, Container} from 'reactstrap';
import ProductIncrementer from './ProductIncrementer';

const ProductCounterCardFunctional = (props) => {
  let {gin, shine, decrementCounter, incrementCounter} = props;
  
  
  return (
    <Container >
      <Row>
        <Col style={{margin:'5px'}} >
          <ProductIncrementer 
            incrementCounter={incrementCounter}
            decrementCounter={decrementCounter}
            counter={gin}
            productName='gin'
            image='gin.png'
          />  
        </Col>
        <Col style={{margin:'5px'}}>
          <ProductIncrementer 
            incrementCounter={incrementCounter}
            decrementCounter={decrementCounter}
            counter={shine}
            productName='shine'
            image='shine.png'
          />  
        </Col>
      </Row>
    </Container>
  );
}

export default ProductCounterCardFunctional;