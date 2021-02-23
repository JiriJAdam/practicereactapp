import React from 'react';

class MyInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: "",
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({ value: event.target.value });
    }
    render() {
      return (
        <div>
          <input
            name="firstName"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div value={this.state.value}>{this.state.value}</div>
        </div>
      );
    }
  }
  export default MyInput;