import React, { Component } from "react";
import "./Search.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchResults from "./SearchResults";
import SearchIcon from '@material-ui/icons/Search';
export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchedItems: []
    };
  }

  // search api and filter the keyword
  search = () => {
    fetch(
      "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000"
    )
      .then(res => res.json())
      .then(json => {
        const x = json.filter(element => {
          return element.keywords.includes(this.searchValue.value.toLowerCase());
        });
        this.setState({searchedItems: x})
        console.log(this.state.searchedItems);
      });
  };

  // onChange to listen to empty field to reset search results
  onChange = (e) => {
    if(e.target.value ===""){
      this.setState({searchedItems: []});
    }
  }

  keyPress = (e) =>{
    if(e.keyCode === 13){
      this.search();
    }
  }

  render() {
    return (
      <div className="searchContainer">
        <div className="searchFieldButton">
          <TextField
            className="searchfield"
            id="outlined-bare"
            placeholder="Search Field"
            inputRef={input => (this.searchValue = input)}
            onChange={this.onChange}
            margin="normal"
            variant="outlined"
            onKeyDown={this.keyPress}
          />
          <div className="button">
            <Button onClick={this.search} variant="contained">
              <SearchIcon className="white"></SearchIcon>
            </Button>
          </div>
        </div>
        <div>
          <SearchResults
            searchedItems={this.state.searchedItems}
          />
        </div>
      </div>
    );
  }
}
