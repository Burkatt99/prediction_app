import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";

class ListNames extends Component {
  render() {
    return (
      <div className="list_name">
        <table>
          <tr>
            <th>Name</th>
            <th>Male</th>
            <th>Nationality</th>
          </tr>
          {this.props.users.map((el) => {
            return (
              <tr key={el.id}>
                <th>{el.name}</th>
                <th>{el.male}</th>
                <th>{el.country}</th>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.todo,
  };
}
export default connect(mapStateToProps)(ListNames);
