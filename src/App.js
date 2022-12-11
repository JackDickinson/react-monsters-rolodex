import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import SortBy from './components/sort-by/sort-by.component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      sortMethod: 'name(a-z)'
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

  onSortChange = (event) => {
    this.setState(() => {
      return { sortMethod: event.value };
    },
      () => {
        console.log(this.state.sortMethod)
        this.setState({
          monsters: this.state.monsters.sort((a, b) => {
            if (this.state.sortMethod === 'name(a-z)') {
              return a.name.localeCompare(b.name);
            } else {
              return b.name.localeCompare(a.name);
            }
          })
        })
      }
    );
  };

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const { onSortChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

  return (
    <div className="App mx-auto h-full px-4 lg:px-8 xl:px-24 pb-8 flex flex-col justify-center items-center">
      <SearchBox onChangeHandler={onSearchChange} className="search-box pl-4 pr-8 my-12 border w-full outline-none transition-all duration-200 focus:rounded-none focus:translate-y-2 focus:shadow-2xl max-w-xs shadow-md border-black rounded-xl py-3" placeholder="search monsters" />
      <SortBy onChangeHandler={onSortChange} className="sort-by pl-4 pr-8 my-12 border w-full outline-none transition-all duration-200 focus:rounded-none focus:translate-y-2 focus:shadow-2xl max-w-xs shadow-md border-black rounded-xl py-3" />
      <CardList monsters={filteredMonsters} className="flex flex-wrap justify-start mx-auto w-full" />
    </div>
    );
  };
}

export default App;
