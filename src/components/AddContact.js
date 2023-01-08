import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("fields with(*) are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", lastname: "", email: "", number: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2 className="text-2xl !mb-3">Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>First Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
           <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={this.state.lastname}
              onChange={(e) => this.setState({ lastname: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email *</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
           <div className="field">
            <label>Mobile Number *</label>
            <input
              type="number"
              name="number"
              placeholder="Name"
              value={this.state.number}
              onChange={(e) => this.setState({ number: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
