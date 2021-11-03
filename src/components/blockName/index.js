import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addName } from "../../actions/actions";

class BlockName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  componentDidMount = () => {
    const mainName = window.location.pathname.slice(1);
    this.setState({ name: mainName });
    this.props.addName(mainName);
  };
  render() {
    const newUser = this.props.user.filter((el) => el.id === this.state.name);
    return (
      <div>
        {newUser.map((el) => {
          return (
            <form className="name_inf">
              <div>
                <span className="ent">Your entered:</span>
                <span>{el.name}</span>
              </div>
              <div>
                <span className="ent">Description</span>
                <span>
                  {el.name} is a {el.male} name from the {el.country}
                </span>
              </div>
              <Link to={`/`}>
                <button className="but">Enter another name</button>
              </Link>
            </form>
          );
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.todo,
  };
}

export default connect(mapStateToProps, { addName })(BlockName);
