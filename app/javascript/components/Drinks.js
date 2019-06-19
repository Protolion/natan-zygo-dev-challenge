import React from "react";

class Drinks extends React.Component {

  constructor(){
    super();
    this.state = {
      
    }
  }

  //modelo de bebida "html" que irá ser renderizado
  model(drink, key){
    return <div key={key} className="card drink-card">
              <img src={drink.image_url} className="drink-card__img" ></img>
              <div className="drink-card__body">
              <h2> {drink.name} </h2>
              <p>  distilled : {drink.distilled ? "true" : "false"} </p>
              <p>  {drink.description} </p>
              </div>
            </div>
  }

  //Algoritimo de busca avaçada, retorna verdadeiro ou falso para saber se a bebida vai ser renderizada ou não
  filterDrink(drink, filter){
    let fields =[ 'alcohol_level',
                  'distilled',
                  'temperature',
                  'base_ingredient',
                  'ibu',
                  'drinkware',
                  'rating_avg'];

    let ret = true;
    let i = 0;
    while(i < 7 && ret){
      if( fields[i]  === 'alcohol_level'){
        console.log(typeof(filter[ fields[i] ]));
      }
      console.log( fields[i] );
      if(typeof(filter[ fields[i] ]) === 'number'){
          //console.log("field "+ fields[i] + " number");
          ret = drink[fields[i]] > filter[fields[i]];
      }
      else if(typeof(filter[ fields[i] ]) === 'string'){
          //console.log("field "+ fields[i] + " is string");
          ret = drink[fields[i]].indexOf(filter[fields[i]]) !== -1 
      }
      else if(typeof(filter[ fields[i] ]) === 'boolean'){
          //console.log("field "+ fields[i] + " bolean")
          ret = filter[fields[i]] ? drink[fields[i]] : !drink[fields[i]] ;
      }

      i++;
    }

    return ret;
  }

  //Filtra e retorna o array contendo as bebidas para serem renderizadas
  drawDrinks(drinkArray, searchFilter , advancedFilter){
    let ret = <p>No drinks exist</p>

    if(drinkArray.length > 0){
      drinkArray = drinkArray.sort(function(a, b) {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
        });

    let drinks = drinkArray.filter(
      (drink) => {
        let toRet;
        
        if( !!advancedFilter ){
          toRet = this.filterDrink(drink, advancedFilter);
        }
        else {
          toRet = drink.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1;
        }
        return toRet;
      }
      );

      if(this.props.searchType === 'random'){
        let rand = Math.floor(Math.random() * (drinks.length - 1) );
        ret = this.model(drinks[rand], 'random');
      }
      else {
        ret = drinks.map((drink, key) => this.model(drink, key) );
      }
  
    }

    return ret;
  }

  render () {
    return (
      <div className="drinks-list">
        {this.drawDrinks(this.props.drinks, this.props.simpleSearch, this.props.advancedSearch)}
      </div>
    );
  }
}
export default Drinks;