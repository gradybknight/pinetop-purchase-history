import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as purchaseActions from '../actions/purchaseActions'
import { Container, Row, Col } from 'reactstrap';
import CustomerCard from '../components/CustomerCard';
import ProductCounterCard from '../components/ProductCounterCard';
import CustomerExistingPurchases from '../components/CustomerExistingPurchases';

class NewPurchaseContainer extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.state = {
      customerFullName:'',
      customerEMailName:'',
      customerLicenseNumber:'',
      customerState:'',
      gin:0,
      shine:0,
      customerPurchases:[]
    };

  }  

  componentDidMount(){
    this.props.purchaseActions.getAllPurchases();
  }

  handleFormChanges = async (event) => {
    let value = event.target.value;
    const target = event.target.name;
    console.log(target);
    // value = event.target.type === 'checkbox' ? target.checked : target.value;
    console.log(`field: ${target} has value: ${value}`)
    await this.setState({
      [ target ]: value,
    });
  }

  submitNewPurchase = () =>{
    let purchase = {
      customerFullName:this.state.customerFullName,
      customerEMailName:this.state.customerEMailName,
      customerLicenseNumber:this.state.customerLicenseNumber,
      customerState:this.state.customerLicenseNumber,
      epochTime:Date.now(),
      gin:this.state.gin,
      shine:this.state.shine
    };
    if (purchase.customerFullName && purchase.customerLicenseNumber) {
      // submit purchase
      this.props.purchaseActions.addTransaction(purchase)
      // clear form
      this.setState({
        customerFullName:'',
        customerEMailName:'',
        customerLicenseNumber:'',
        customerState:'',
        gin:0,
        shine:0,
        customerPurchases:[]
      });
    } else {
      // alert that missing info
      if (purchase.customerFullName) {
        alert('missing license number');
      } else {
        alert('missing name');
      }
    }
    this.props.purchaseActions.getAllPurchases();
  }

  render() {
    return (
        <Container>
          <Row>
            <Col md="8">
              <CustomerCard 
                customerFullName = {this.state.customerFullName}
                customerEMailName = {this.state.customerEMailName}
                customerLicenseNumber = {this.state.customerLicenseNumber}
                customerState = {this.state.customerState}
                handleFormChanges = {this.handleFormChanges}
                submitPurchaseAction = {this.submitNewPurchase}
              />
            </Col>
            <Col md="4">
              {this.props.purchases.length>0?<CustomerExistingPurchases customerPurchases={this.props.purchases.filter(purchase => purchase.customerLicenseNumber === this.state.customerLicenseNumber)}/>:<span></span>}
            </Col>
          </Row>
          <ProductCounterCard />

        </Container>
    );
  }
}


function mapStateToProps(state, ownProps){
  return {
      purchases:state.purchases,
  };
}

function mapDispatchToProps(dispatch){
  return {
    purchaseActions:bindActionCreators(purchaseActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewPurchaseContainer)
