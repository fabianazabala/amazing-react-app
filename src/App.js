import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';
import adramatic from './images/adramatic.jpg'
import arepa from './images/arepa.jpg'
import californication from './images/californication.jpg.jpg'
import jonas from './images/jonas.jpg'
import scenes from './images/scenes.jpg'
import thewall from './images/thewall.jpg'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            albums:[
        {id:0, rating: 5, title: 'A dramatic turn of events', image: adramatic},
        {id:1, rating: 4, title: 'Arepa 3000', image: arepa},
        {id:2, rating: 4, title: 'Californication', image: californication},
        {id:3, rating: 5, title: 'Jonas brothers', image: jonas},
        {id:4, rating: 5, title: 'Scenes from a memory', image: scenes},
        {id:5, rating: 5, title: 'The wall', image: thewall},
    ],
            copyAlbums: []
    };
    }

    componentDidMount() {
        this.initAlbums();
    }
    initAlbums = () => {

        this.setState((state,props) =>({
        copyAlbums: [...state.albums]
        }));
    }

    onAdd = (item) => {
    let temp = [...this.state.albums];
    const id = temp[temp.length-1].id ++;
    item['id'] = id;
    temp.push(item);

    this.setState({albums: [...temp]});
    this.initAlbums()
        }

     onSearch = (query) => {
    if(query === ''){
     this.initAlbums()
    }else{
        const temp = [...this.state.albums];
        let res = [];

        temp.forEach(item => {
            if(item.title.toLowerCase().indexOf(query) > -1){
                res.push(item);
            }
          }
        )
    };
     }

  render(){
  return (
    <div className="app">
      <Menu title="This is amazing" onAdd={this.onAdd} onSearch={this.onSearch}/>
      <List items={this.state.copyAlbums}/>


    </div>
  );
  }
}

export default App;
