import React, { Component } from 'react'
import './InputForm.css';

class InputForm extends Component {
  state = { 
    fullName: '',
    email: '',
    contactNumber: '',
    address:'',
    message: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  generateCsv(e) {
    e.preventDefault();
    var data = [["Full Name", "Email", "Contact Number", "Address", "Message"]];
    console.log(document.querySelectorAll('.formField > input')[0]);

    let j = document.querySelectorAll('.formField > input');

    console.log(j);
    console.log(j.label);


    j.forEach(function(d,i){
      console.log(d.value);
      data.push([d.value]);
    });
    console.log(data);
      
    let csvContent = "data:text/csv;charset=utf-8,";

    data.forEach(function (d, i) {
      var dataString = d.join(",");
      csvContent += i < data.length ? dataString + "\n" : dataString;
      console.log(csvContent);
    });
    console.log(csvContent);

    let encodedUri = encodeURI(csvContent);

    console.log(encodedUri);
    let link = document.createElement("a");
    console.log(link);
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "ContactForm.csv");
    link.click(); 
  }

  render() { 
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
            <button onClick={this.generateCsv} className="generateCSV" id="download">Generate CSV File</button>
          </form>
      </div>  
      </div>
    );
  }
}

export default InputForm;



