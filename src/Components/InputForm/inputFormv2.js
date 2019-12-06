import React, { Component } from 'react'
import { CSVLink } from 'react-csv';
import './InputForm.css';

const csvHeaders = [
  { label: "Full Name"},
  { label: "Email"},
  { label: "Contact Number" },
  { label: "Address" },
  { label: "Message" }
];

class InputForm extends Component {
  state = {
    fullName:'',
    email: '',
    contactNumber: '',
    address: '',
    message: '',
    csvData:[],
    csvHeaders: csvHeaders,
    object:[]
  }

  onChange = (e, indx) => {
    e.preventDefault();

    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
      csvData: this.state.csvData.concat(e.target.value), 
      // object: this.state.object
    })

    console.log(this.state.csvData);
    console.log(this.state.object);

  }

  render() { 
    console.log(this.state);
    console.log('csvHeaders', csvHeaders);
    console.log('csvData', this.state.csvData);


    let object = [{ fullName: this.state.fullName, 
                  email: this.state.email, 
                  contactNumber: this.state.contactNumber, 
                  address: this.state.address,   
                  message: this.state.message
                }];

    let keys = Object.keys(object[0]);
    console.log(keys);

    let keyValue = keys.map(key => {
      console.log(key);
      return ( key )
    })
    console.log(keyValue);

    let headerKey = Object.create({}, { key: {value: keys} });

    console.log(headerKey);
    

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
                data = {this.state.object}
                headers={csvHeaders}
                filename={"my-file.csv"}
              >
                {/* <button className="generateCSV"  onClick={this.generateCsv} >Generate CSV File</button> */}
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



