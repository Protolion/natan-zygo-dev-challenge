import React from "react"
import PropTypes from "prop-types"

/*Components*/
import Drinks from './Drinks';
import SearchType from './SearchType'
import EasySearch from './EasySearch';
import AdvancedSearch from './AdvancedSearch';
/*Components*/

class MainPage extends React.Component {

  constructor(){
    super();
    this.state = {
      searchType : 'simple',
      test : 'simple',
      simpleSearch : '',
      advancedSearch : false
    }
  }

  updateSearchType(event){
    this.setState({simpleSearch : '' , advancedSearch : false , searchType: event.target.value});
  }

  updateSimpleSearch(event){
    this.setState({simpleSearch: event.target.value});
  }

  updateAdvancedSearch(filter){
    this.setState({advancedSearch : filter});
  }

  renderSearchType(){
    let ret = <EasySearch simpleSearch={this.state.simpleSearch} 
                          updateSimpleSearch={this.updateSimpleSearch.bind(this)}/>;
    
    if(this.state.searchType === 'advanced'){
      ret = <AdvancedSearch updateAdvancedSearch={this.updateAdvancedSearch.bind(this)}/>;
    }
    else if(this.state.searchType === 'random'){
      ret = <p>This is a totally random drink</p>
    }
    return ret;
  }

  render () {

    return (
      <React.Fragment>
        <div>
          
          <div className="searcher">

            <SearchType  updateSearchType={this.updateSearchType.bind(this)}/>

            {this.renderSearchType()}

          </div>

            <Drinks drinks={this.props.data}
                    searchType={this.state.searchType}
                    simpleSearch={this.state.simpleSearch} 
                    advancedSearch={this.state.advancedSearch}/>

        </div>
      </React.Fragment>
    );
  }
}

MainPage.propTypes = {
  data: PropTypes.node
};
export default MainPage;
