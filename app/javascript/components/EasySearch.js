import React from "react";

class EasySearch extends React.Component {
  //busca simples por texto
  render () {
    return (
      <div className="simple-form">
          
                <div className="simple-form__input">
                    <input className="form-control form-control-lg" 
                          type="text" value={this.props.simpleSearch} 
                          onChange={this.props.updateSimpleSearch.bind(this)} 
                          placeholder="Try a Martini.."/>
                </div>
          </div>
    );
  }
}

export default EasySearch;
