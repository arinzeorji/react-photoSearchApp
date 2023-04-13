import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import { robots } from './robots';
import { Component } from 'react/cjs/react.development';

class App extends Component {
    constructor() {
        super();
        this.state = {
            // robots: robots,
            robots: [],
            searchfield: ''
        }
    }

    //React Mounting Life Cycle using an API to fetch a json file
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());

        })

        return !robots.length ?
            <h1>Robots Loading</h1>
            :
            <div className="tc">
                <h1 className="f-headline lh-solid">
                    MOJA Robots APP
                     </h1>
                <SearchBox searchchange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>

    }


}
export default App;
