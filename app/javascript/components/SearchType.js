import React from "react";

class SearchType extends React.Component {
  render () {
    return (
        <div className="searcher__radio">
        <div className="form-check form-check-inline">
            <input  className="form-check-input" 
                    type="radio" name="searchRadio" 
                    id="simpleSearch" 
                    value="simple" defaultChecked 
                    onChange={this.props.updateSearchType.bind(this)}  />
            <label className="form-check-label" htmlFor="simpleSearch">Easy search</label>
        </div>
        
        <div className="form-check">
            <input  className="form-check-input" 
                    type="radio" name="searchRadio" 
                    id="advancedSearch" 
                    value="advanced"
                    onChange={this.props.updateSearchType.bind(this)} />
            <label className="form-check-label" htmlFor="advancedSearch">Recommend me ;)</label>
        </div>

        <div className="form-check">
            <input  className="form-check-input" 
                    type="radio" name="searchRadio" 
                    id="random" 
                    value="random"
                    onChange={this.props.updateSearchType.bind(this)} />
            <label className="form-check-label" htmlFor="random">Random ^^</label>
        </div>
      </div>
    );
  }
}

export default SearchType;
