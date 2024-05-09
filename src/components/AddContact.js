import React from "react";
import './App.css';

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();
        // Trim whitespace from input values
        const trimmedName = this.state.name.trim();
        const trimmedEmail = this.state.email.trim();

        if (trimmedName === "" || trimmedEmail === "") {
            alert("All the fields are mandatory!");
            return;
        }
        
        // Pass trimmed values to the addContactHandler
        this.props.addContactHandler({ name: trimmedName, email: trimmedEmail });
        
        // Clear input fields after submission
        this.setState({ name: "", email: "" });

        // Navigate back to the home route
        this.props.navigateBack();
    };

    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <button className="ui button ok green" type="submit">
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

export default AddContact;
