import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() { 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
          () => { 
            console.log(this.state.monsters)
            this.setState(() => {
              return { filteredMonsters: users }
            });
          }
        ));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField: searchField };
    }
    );
  };

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

  return (
    <div className="App">
      <input
        className='search-box px-2'
        type="search"
        placeholder="search monsters"
        onChange={onSearchChange} />
      
      {filteredMonsters.map((monster) => { 
        return <h1 key={monster.id}>{monster.name}</h1>
      }) }
    </div>
    );
  };
}

export default App;
