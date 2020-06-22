import React, {Component} from 'react';
import Search from './Search';
import Add from './add';
import './Menu.css';


class Menu extends Component{

    constructor(props) {
        super(props);

        this.state = {newItem: false};
    }

    add= () => {
        this.setState({newItem : true});

    }
    onCancel = () => {
    this.setState({newItem: false});
    }

render() {
    return(
<div className="container">
    <div className="subcontainer">
        <div className="logo">
            {this.props.title}
            <div className="search">
                <Search onSearch={this.props.onSearch}/>
                <div className="actions">
                    <button onClick={this.add} className="button btn-blue">Add new album</button>
                </div>
            </div>
        </div>
        {
            (this.state.newItem)?
                <Add onCancel={this.onCancel} onAdd={this.props.onAdd} />
                :
                ''
        }

    </div>

</div>

);
}
}

export default Menu;