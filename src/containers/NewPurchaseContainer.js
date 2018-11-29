import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as purchaseActions from '../actions/actionTypes'
import { Container } from 'reactstrap';
import CustomerCard from '../components/CustomerCard';
import ProductCounterCard from '../components/ProductCounterCard';

class NewPurchaseContainer extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.state = {
      customerFullName:'',
      customerEMailName:'',
      customerLicenseNumber:'',
      customerState:'',
      customerPurchases:[],
    };
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

  render() {
    return (
        <Container>
          <CustomerCard 
            customerFullName = {this.state.customerFullName}
            customerEMailName = {this.state.customerEMailName}
            customerLicenseNumber = {this.state.customerLicenseNumber}
            customerState = {this.state.customerState}
            handleFormChanges = {this.handleFormChanges}
          />
          <ProductCounterCard />

        </Container>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    purchaseActions:bindActionCreators(purchaseActions, dispatch)
  }
}

function mapStateToProps(state, ownProps){
  return {
      purchases:state.purchases,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPurchaseContainer)
