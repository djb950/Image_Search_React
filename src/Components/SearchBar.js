import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //Event Handlers
  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Images</label>
            <input
              type="text"
              /*These next two lines get the value that is 
              typed into the input field and assigns it 
              to the term object in state. This is so 
              the value is CONTROLLED and we can know what 
              it is at any point in time.
              */
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
