import React from 'react';
import { Table, Container} from 'reactstrap';
import moment from 'moment';

const CustomerExistingPurchases = (props) => {
      let customerPurchases = props.customerPurchases;
      return (
        <div>
          <Container  style={{padding: '1rem', border:'3px solid', margin:'20px', borderRadius:'20px'}} className='border-primary'>
            <Table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Gin</th>
                  <th>Shine</th>
                </tr>
              </thead>
              <tbody>
                {customerPurchases.map(purchase => {
                  return (
                    <tr>
                      <td>{moment(purchase.date).format('MM/DD/YY')}</td>
                      <td>{purchase.gin}</td>
                      <td>{purchase.shine}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
            </Container>
        </div>
    );
  }

export default CustomerExistingPurchases;