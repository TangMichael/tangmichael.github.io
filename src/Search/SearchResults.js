import React, { Component } from "react";
import { addFavorites } from "./../actions/index";
import { connect } from "react-redux";
import Star from "@material-ui/icons/Star";

import "./SearchResults.css";
class SearchResults extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    // on search, render new searchedItems and maps them into the list
    const listItems = this.props.searchedItems.map((element, index) => {
      var elem = document.createElement("textarea");
      elem.innerHTML = element.body;
      var decoded = elem.value;
      
     return <div style={{ display: "flex"}}>
        <Star
          className={
            this.props.favorites.some(favs => favs.title === element.title)
              ? "green"
              : "gray"
          }
          onClick={() => {
            if (
              this.props.favorites.some(favs => favs.title === element.title)
            ) {
            } else {
              this.props.addFavorites(element);
            }
          }}
        />
        <div className="title">{element.title}</div>
        <div className="description" dangerouslySetInnerHTML={{ __html: decoded }}></div>
      </div>;
    });

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
