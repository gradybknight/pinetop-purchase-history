import React from 'react';
import { Row, Col, Container} from 'reactstrap';
import ProductIncrementer from './generics/ProductIncrementer';

export default class ProductCounterCard extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        gin:0,
        shine:0
      }
    }

    incrementCounter = (event) => {
      console.log(event.target.name);
      if (event.target.name === 'gin') {
        this.setState({gin:this.state.gin+1})
      } else {
        this.setState({shine:this.state.shine+1})
      }
    };
    decrementCounter = (event) => {
      if (event.target.name === 'gin') {
        if (this.state.gin>0) {
          this.setState({gin:this.state.gin-1})
        }
      } else {
        if (this.state.shine>0){
          this.setState({shine:this.state.shine-1})
        }
      }
    }


    render() {
      return (
        <Container >
          <Row>
            <Col style={{margin:'5px'}} >
              <ProductIncrementer 
                incrementCounter={this.incrementCounter}
                decrementCounter={this.decrementCounter}
                counter={this.state.gin}
                productName='gin'
                image='gin.png'
              />  
            </Col>
            <Col style={{margin:'5px'}}>
              <ProductIncrementer 
                incrementCounter={this.incrementCounter}
                decrementCounter={this.decrementCounter}
                counter={this.state.shine}
                productName='shine'
                image='shine.png'
              />  
            </Col>
          </Row>
          
        </Container>
        
      );
  }
}