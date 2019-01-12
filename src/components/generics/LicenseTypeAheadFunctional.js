import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";

const LicenseTypeAheadFunctional = props => {
  let { existingPurchases, handleFormChanges } = props;
  let existingLicenses = [];
  if (existingPurchases.length > 0) {
    existingLicenses = existingPurchases.map(purchase => {
      return purchase.customerLicenseNumber;
    });
  }
  // = existingPurchases.map(
  //   purchase => purchase.customerLicense
  // );
  console.log(existingLicenses);

  return (
    <Typeahead
      // onChange={handleFormChanges}
      name={"customerLicenseNumber"}
      options={existingLicenses}
    />
    // <div>{existingLicenses}</div>
  );
};

export default LicenseTypeAheadFunctional;
