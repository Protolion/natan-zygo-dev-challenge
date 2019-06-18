import React from "react";

class AdvancedSearch extends React.Component {
  constructor(){
    super();
    this.state = {
      distilled : true,
      temperature : '',
      base_ingredient : '',
      drinkware : '',
      ibu : 0,
      alcohol_level : 0,
      rating_avg : 0
    }
  }

  handleInputChange(event) {
    let target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    if(name === 'ibu' || name === 'alcohol_level' || name === 'rating_avg')
    {
      value = parseFloat(value);
    }
    this.setState({
      [name]: value
    },function () {
      this.props.updateAdvancedSearch(this.state);
  });
    
  }

  render () {
    return (
    <div className="advanced-form" >
        <form>
          <div className="row">
            <div className="advanced-form-field">
              Distilled : 
                <input
                  name="distilled"
                  type="checkbox"
                  className="form-control"
                  checked={this.state.distilled}
                  onChange={this.handleInputChange.bind(this)} />
              </div>
            <div className="advanced-form-field custom-dropdown">
              Temperature : 
              <select name="temperature" 
                      className="form-control" 
                      value={this.state.temperature} 
                      onChange={this.handleInputChange.bind(this)}>
                <option value="">All</option>
                <option value="extra_cold">Extra cold</option>
                <option value="cold">Cold</option>
                <option value="ambient">Ambient</option>
                <option value="warm">Warm</option>
                <option value="hot">Hot</option>
              </select>
            </div>
            <div className="advanced-form-field custom-dropdown">
            Base ingredient : 
            <select name="base_ingredient" 
                    className="form-control"
                    value={this.state.base_ingredient} 
                    onChange={this.handleInputChange.bind(this)}>
                <option value="">All</option>
                <option value="cachaca">Cachaca</option>
                <option value="gin">Gin</option>
                <option value="rum">Rum</option>
                <option value="sake">Sake</option>
                <option value="tequila">Tequila</option>
                <option value="vodka">Vodka</option>
                <option value="whiskey">Whiskey</option>
                <option value="wine">Wine</option>
                <option value="liqueur">Liqueur</option>
                <option value="beer">Beer</option>
              </select>
            </div>
            <div className="advanced-form-field custom-dropdown">
            Drinkware : 
            <select name="drinkware" 
                    className="form-control"
                    value={this.state.drinkware} 
                    onChange={this.handleInputChange.bind(this)}>
                <option value="">All</option>
                <option value="Old Fashioned Glass">Old Fashioned Glass</option>
                <option value="Cocktail Glass">Cocktail Glass</option>
                <option value="Collins Glass">Collins Glass</option>
                <option value="Shot Glass">Shot Glass</option>
                <option value="Margarita Glass">Margarita Glass</option>
                <option value="Highball Glass">Highball Glass</option>
                <option value="Copper Mug">Copper Mug</option>
                <option value="Irish Coffe Mug">Irish Coffe Mug</option>
                <option value="Champagne Flute">Champagne Flute</option>
                <option value="Pint Glass">Pint Glass</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="advanced-form-field">
              Bitterness : 
              <input
              name="ibu"
              type="number"
              className="form-control"
              value={this.state.ibu}
              onChange={this.handleInputChange.bind(this)} />
            </div>
            <div className="advanced-form-field">
              Alcohol level : 
              <input
              name="alcohol_level"
              type="number"
              className="form-control"
              value={this.state.alcohol_level}
              onChange={this.handleInputChange.bind(this)} />
            </div>
            <div className="advanced-form-field">
              Rating : 
              <input
              name="rating_avg"
              type="number"
              step="0.01"
              max="5"
              className="form-control"
              value={this.state.rating_avg}
              onChange={this.handleInputChange.bind(this)} />
            </div>
          </div>
        </form>
        
    </div>
    );
  }
}

export default AdvancedSearch;