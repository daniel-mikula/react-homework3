import React, { Component } from "react";

class AddPerson extends Component {
    state = {
        name: "",
        surname: "",
        phone: ""
    };

    handleChangeName = event => {
        this.setState({
            name: event.target.value
        });
    };

    handleChangeSurname = event => {
        this.setState({
            surname: event.target.value
        });
    };

    handleChangePhone = event => {
        this.setState({
            phone: event.target.value
        });
    };

    handleAddAndReset = () => {
        this.props.handleAddNew(
            this.state.name,
            this.state.surname,
            this.state.phone
        );
        this.setState({
            name: "",
            surname: "",
            phone: ""
        });
    };

    render() {
        return (
            <div >
                <label for="name">Name</label>
                <input
                    id="name"
                    type="text"
                    onChange={this.handleChangeName}
                    value={this.state.name}
                />  <br />

                <label for="surname">Surname</label>
                <input
                    id="surname"
                    type="text"
                    onChange={this.handleChangeSurname}
                    value={this.state.surname}
                />  <br/>
                <label for="phone">Phone</label>
                <input
                    id="phone"
                    type="phone"
                    onChange={this.handleChangePhone}
                    value={this.state.phone}
                />  <br/>
                <button onClick={() => this.handleAddAndReset()}>Add</button>
            </div>
        );
    }
}

export default AddPerson;