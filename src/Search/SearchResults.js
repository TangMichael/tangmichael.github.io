import React, { Component } from "react";
import { addFavorites } from "./../actions/index";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    // on search, render new searchedItems and maps them into the list
    const listItems = this.props.searchedItems.map((element, index) => (
      <li key={index}>
        <div className="list-container">
          <div className="name">{element.title}</div>
          <div className="language">{element.body}</div>

          <Button
            disabled={this.props.favorites.some(favs => favs.title === element.title)}
            onClick={() => {
              this.props.addFavorites(element);
            }}
          >
            Add
          </Button>
        </div>
      </li>
    ));

    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch, state) {
  return {
    addFavorites: function(element) {
      dispatch(addFavorites(element));
    }
  };
}

const mapStateToProps = state => {
  return {
    favorites: state.favorites
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
