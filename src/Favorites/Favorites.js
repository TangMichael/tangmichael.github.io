import React, { Component } from "react";
import { connect } from "react-redux";
import {deleteFavorites} from './../actions/index'
import Star from "@material-ui/icons/Star";
import './../Search/SearchResults.css';

class Favorites extends Component {
  render() {
    const listItems = this.props.state.map((element, index) => (
      <div style = {{display:'flex', paddingBottom: 40}}>
      <Star className="green" onClick={() => this.props.deleteFavorites(element)}/>
          <div className="title">{element.title}</div>
          <div className="description">{element.body}</div>
        </div>
    ));

    return (
      <div>
        <big style={{color: 'green', fontSize: 35, paddingLeft: 10}}>Favourites</big>
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
