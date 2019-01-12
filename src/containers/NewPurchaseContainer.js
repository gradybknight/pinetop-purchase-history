import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as purchaseActions from "../actions/purchaseActions";
import { Container, Row, Col } from "reactstrap";
import CustomerCard from "../components/CustomerCard";
import CustomerExistingPurchases from "../components/CustomerExistingPurchases";
import ProductCounterCardFunctional from "../components/generics/ProductCounterCardFunctional";
import LicenseTypeAheadFunctional from "../components/generics/LicenseTypeAheadFunctional";
import AllPurchaseTable from "../components/AllPurchaseTable";

class NewPurchaseContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerFullName: "",
      customerEMailName: "",
      customerLicenseNumber: "",
      customerState: "",
      gin: 0,
      shine: 0,
      customerPurchases: []
    };
    // try adding this.getAllPurchases = this.getAllActions.bind(this)
    // look at manage course page
  }

  componentDidMount() {
    this.props.purchaseActions.getAllPurchases();
    console.log(Date.now());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.purchases.length !== nextProps.purchases.length) {
      this.setState({ purchases: nextProps.purchases });
    }
  }

  incrementCounter = event => {
    if (event.target.name === "gin") {
      if (this.state.gin < 5) {
        let newGinCount = this.state.gin + 1;
        this.setState({ gin: newGinCount });
      }
    } else {
      if (this.state.shine < 5) {
        let newShineCount = this.state.shine + 1;
        this.setState({ shine: newShineCount });
      }
    }
  };

  decrementCounter = event => {
    if (event.target.name === "gin") {
      if (this.state.gin > 0) {
        let newGinCount = this.state.gin - 1;
        this.setState({ gin: newGinCount });
      }
    } else {
      if (this.state.shine > 0) {
        let newShineCount = this.state.shine - 1;
        this.setState({ shine: newShineCount });
      }
    }
  };

  prePopulateNameByLicense = licenseNumber => {
    let matchingPurchases = this.props.purchases.filter(
      purchase => purchase.customerLicenseNumber === licenseNumber
    );
    console.log(matchingPurchases);
    if (matchingPurchases.length > 0) {
      let customerFullName = matchingPurchases[0].customerFullName;
      let customerEMailName = matchingPurchases[0].customerEMailName;
      this.setState({
        customerEMailName: customerEMailName,
        customerFullName: customerFullName
      });
    }
    console.log(this.state);
  };

  handleFormChanges = event => {
    let value = event.target.value;
    const target = event.target.name;
    this.setState({
      [target]: value
    });
    // if (target === "customerLicenseNumber") {
    //   this.prePopulateNameByLicense(value);
    // }
  };

  submitNewPurchase = () => {
    let purchase = {
      customerFullName: this.state.customerFullName,
      customerEMailName: this.state.customerEMailName,
      customerLicenseNumber: this.state.customerLicenseNumber,
      customerState: this.state.customerState,
      epochTime: Date.now() / 1000,
      gin: parseInt(this.state.gin, 10),
      shine: parseInt(this.state.shine, 10)
    };
    if (this.state.customerState === "") {
      purchase.customerState = `NC`;
    }
    if (
      purchase.customerFullName &&
      purchase.customerLicenseNumber &&
      purchase.gin + purchase.shine > 0
    ) {
      // submit purchase
      this.props.purchaseActions.addTransaction(purchase);
      // clear form
      this.setState({
        customerFullName: "",
        customerEMailName: "",
        customerLicenseNumber: "",
        customerState: "",
        gin: 0,
        shine: 0,
        customerPurchases: []
      });
    } else {
      if (purchase.gin + purchase.shine === 0) {
        alert(`check the bottle quantities`);
      }
      if (purchase.customerFullName) {
        alert("missing license number");
      } else {
        alert("missing name");
      }
    }
  };

  render() {
    return (
      <Container>
        {/* <Row>
          <LicenseTypeAheadFunctional
            existingPurchases={this.props.purchases}
            handleFormChanges={this.handleFormChanges}
          />
        </Row> */}
        <Row>
          <Col
            md="7"
            style={{
              padding: "1rem",
              border: "3px solid",
              margin: "20px",
              borderRadius: "20px"
            }}
            className="border-primary"
          >
            <ProductCounterCardFunctional
              gin={this.state.gin}
              shine={this.state.shine}
              incrementCounter={this.incrementCounter}
              decrementCounter={this.decrementCounter}
            />
            <CustomerCard
              customerFullName={this.state.customerFullName}
              customerEMailName={this.state.customerEMailName}
              customerLicenseNumber={this.state.customerLicenseNumber}
              customerState={this.state.customerState}
              handleFormChanges={this.handleFormChanges}
              submitPurchaseAction={this.submitNewPurchase}
            />
          </Col>
          <Col md="4">
            {this.props.purchases.length > 0 ? (
              <CustomerExistingPurchases
                customerPurchases={this.props.purchases.filter(
                  purchase =>
                    purchase.customerLicenseNumber ===
                    this.state.customerLicenseNumber
                )}
              />
            ) : (
              <span />
            )}
          </Col>
        </Row>
        {/* <ProductCounterCard /> */}
        {/* <AllPurchaseTable purchases={this.props.purchases} /> */}
      </Container>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    purchases: state.purchases
  };
}

function mapDispatchToProps(dispatch) {
  return {
    purchaseActions: bindActionCreators(purchaseActions, dispatch) // could be naming conflict --> change purchaseActions to simply actions
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPurchaseContainer);
