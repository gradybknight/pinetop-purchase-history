import React from 'react';

export default class Header extends React.Component {
  
  
    render() {
    return (
        <div>
            <div className="jumbotron bg-primary text-light">
                <h1 className="display-4">Thank you for choosing Pinetop</h1>
                <hr className="my-4"/>
            </div>
        </div>
    );
  }
}