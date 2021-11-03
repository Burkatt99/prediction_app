import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addName } from "../../actions/actions";

class FindName extends Component {
  state = {
    name: "",
  };
  changeName = (e) => {
    this.setState({ name: e.target.value });
  };
  addNewName = () => {
    this.props.addName({
      name: this.state.name,
    });
  };

  render() {
    return (
      <div>
        <form className="findForm">
          <div className="enter">
            <label>Enter name:</label>
            <input type="text" onChange={this.changeName} />
          </div>
          <Link
            to={{
              pathname: `/${this.state.name}`,
              state: {
                name: this.state.name,
              },
            }}
          >
            <button className="but">Submit</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default connect(null, { addName })(FindName);
