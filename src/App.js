import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
import { setSearchField, requestRobots } from '../src/redux/action/action';



import '../src/App.css'




class App extends Component {
  



  componentDidMount() {
    this.props.onRequestRobots();
  }



  
  render() {

    const { monsters, searchField,onSearchChange,isPending } = this.props;
    const filterMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))



    return (
      <div className='App'>
        <h1>Monster Friends</h1>
        <SearchBox placeholder='search monsters ....'
          handleChange={onSearchChange}
        />
        {
          isPending ? <h1>Loading</h1> :
          <CardList monsters={filterMonster} />
        }


      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    monsters: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}


export default connect(mapStateToProps,mapDispatchToProps )(App)
