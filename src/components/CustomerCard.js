import React from 'react';
import { Form, FormGroup, Label, Input, Col} from 'reactstrap';

const CustomerCard =(props) => {
      let listOfStateAbbreviations = [ 'NC', 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
      return (
        <div>
          <Form style={{padding: '1rem', border:'3px solid', margin:'20px', borderRadius:'20px'}} className='border-primary'>
            <FormGroup row>
              <Label for="customerFullName" sm={2}>Name</Label>
              <Col sm={10}>
                <Input type="input" name="customerFullName" id="customerFullName" placeholder="please enter your full name" onChange={event => {props.handleFormChanges(event)}}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="stateSelect" sm={2}>State</Label>
              <Col sm={2}>
                <Input 
                  type="select" 
                  name="customerState" 
                  id="stateSelect" 
                  onChange={event => {props.handleFormChanges(event)}}
                >
                  {listOfStateAbbreviations.map((state, index)=>{
                    return(
                      <option key={index}>
                        {state}
                      </option>
                    )
                  })}
                </Input>
              </Col>
              <Label for="licenseNumber" sm={2}>License</Label>
              <Col sm={6}>
                <Input 
                  type="input" 
                  name="customerLicenseNumber" 
                  id="licenseNumber" 
                  onChange={event => {props.handleFormChanges(event)}}
                  placeholder="please enter your drivers license number" />
              </Col>
              
            </FormGroup>
            <FormGroup row>
              <Label for="customerEMail" sm={2}>Email</Label>
              <Col sm={10}>
                <Input 
                  type="email" 
                  name="customerEMailName" 
                  id="customerEMail" 
                  placeholder="enter your e-mail if you would like to receive updates" 
                  onChange={event => {props.handleFormChanges(event)}}
                />
              </Col>
            </FormGroup>
          </Form> 
        </div>
    );
  }

export default CustomerCard;