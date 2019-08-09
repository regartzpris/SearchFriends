import React, { Component } from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';



import '../src/App.css'




class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }



  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      // .then(users=>console.log(users))
      .then(users => this.setState({ monsters: users }))
  }


  render() {

    const { monsters, searchField } = this.state;
    const filterMonster=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))



    return (
      <div className='App'>
        <SearchBox placeholder='search monsters ....'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filterMonster} />


      </div>
    )
  }
}

export default App;
