import React from "react";

class EditContact extends React.Component {
    constructor(props) {
        super(props);
      
        const { id, name, email } = props.location?.state || {};
      
        if (!id || !name || !email) {
          // Handle missing props here (e.g., show error message, redirect)
          console.error("Missing contact information in props");
        }
      
        this.state = {
          id,
          name: name ?? "",
          email: email ?? "",
        };
      }
      update = (e) => {
        e.preventDefault();
        const { id, name, email } = this.state;
    
        // Trim whitespace from input values
        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
    
        if (trimmedName === "" || trimmedEmail === "") {
            alert("All the fields are mandatory!");
            return;
        }
    
        // Pass the correct id along with the updated contact details
        this.props.updateContactHandler({ id, name: trimmedName, email: trimmedEmail });
    
        // Navigate back to the home route
        this.props.navigateBack();
    };
    

    render() {
        return (
            <div className="ui main">
                <h2>Update Contact</h2>
                <form className="ui form" onSubmit={this.update}>
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
                        Update
                    </button>
                </form>
            </div>
        );
    }
}

export default EditContact;
