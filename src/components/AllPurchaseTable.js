import React from "react";
import { Table, Container } from "reactstrap";
import moment from "moment";

const AllPurchaseTable = props => {
  let purchases = props.purchases;
  purchases.sort((firstPurchase, secondPurchae) => {
    return secondPurchae.epochTime - firstPurchase.epochTime;
  });
  console.log(purchases);

  return (
    <div>
      <Container
        style={{
          padding: "1rem",
          border: "3px solid",
          margin: "20px",
          borderRadius: "20px"
        }}
        className="border-primary"
      >
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Gin</th>
              <th>Shine</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase, index) => {
              return (
                <tr key={index}>
                  <td>
                    {moment(purchase.epochTime * 1000).format("MM/DD/YY")}
                  </td>
                  <td>{purchase.customerFullName}</td>
                  <td>{purchase.gin}</td>
                  <td>{purchase.shine}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AllPurchaseTable;
