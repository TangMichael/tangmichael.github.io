import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import {deleteFavorites} from './../actions/index'
class Favorites extends Component {
  render() {
    const listItems = this.props.state.map((element, index) => (
      <li key={index}>
        <div className="list-container">
          <div className="name">{element.title}</div>
          <div className="language">{element.body}</div>
          <Button onClick={() => this.props.deleteFavorites(element)}>Delete</Button>
        </div>
      </li>
    ));

    return (
      <div>
        Favorites
        <ul>{listItems}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.favorites
  };
};

function mapDispatchToProps(dispatch, state) {
  return {
    deleteFavorites: function(element) {
      dispatch(deleteFavorites(element));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
