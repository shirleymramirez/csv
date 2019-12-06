import React, { Component } from 'react'
import { CSVLink } from 'react-csv';
import './InputForm.css';

const csvHeaders = [
  { label: "Full Name", key: "fullName"},
  { label: "Email", key: "email"},
  { label: "Contact Number", key: "contactNumber" },
  { label: "Address", key: "address" },
  { label: "Message", key: "message" }
];

class InputForm extends Component {
  state = {
    fullName:'',
    email: '',
    contactNumber: '',
    address: '',
    message: '',
    csvHeaders: csvHeaders
  }

  onChange = (e, indx) => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value, 
    })

  }

  render() { 

    let object = [{ fullName: this.state.fullName, 
                  email: this.state.email, 
                  contactNumber: this.state.contactNumber, 
                  address: this.state.address,   
                  message: this.state.message
                }];

    return ( 
      <div>
        <div className="App">
          <form className="formField" id="csvForm">
            <h1>Contact Form</h1>
            <h4>Please fill all entries.</h4>
            <hr />
              <label className="fullName">
                <span>Full Name:</span>&nbsp; 
              </label>
              <input 
                id="a"
                type="text"
                name="fullName" 
                placeholder="Full Name"
                value={this.state.fullName}
                onChange={e => this.onChange(e)}>
              </input>
              <label className="email">
                <span>Email:</span>&nbsp;
              </label>
              <input 
                id="b"
                type="email" 
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e=>this.onChange(e)}>
              </input>
              <label className="contactNumber">
                <span>Contact Number: </span>&nbsp; 
              </label>
              <input 
                id="c"
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                value={this.state.contactNumber}
                onChange={e => this.onChange(e)}>
              </input>
              <label className="address">
                <span>Address:</span>&nbsp;
              </label>
              <input 
                id="d"
                type="text" 
                placeholder="Address"
                name="address"
                value={this.state.address}
                onChange={e => this.onChange(e)}>
              </input>
              <label className="message">
                <span>Message:</span>&nbsp;
              </label>
              <input 
                id="e"
                type="text"
                placeholder="Message"
                name="message"
                value={this.state.message}
                onChange={e => this.onChange(e)}>
              </input>
            {/* <button onClick={this.generateCsv} className="generateCSV" id="download">Generate CSV File</button> */}
            {
              <CSVLink ar
                className="generateCSV"
                data = {object}
                headers={csvHeaders}
                filename={"my-file.csv"}
              >
                Generate CSV File
              </CSVLink>
            }
          </form>
      </div>  
      </div>
    );
  }
}

export default InputForm;



