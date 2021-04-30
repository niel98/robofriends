import React, { Component } from 'react'
import CardList from '../components/CardList'
import Searchbox from '../components/Searchbox'
import Scroll from '../components/Scroll'
import '../containers/App.css'

class App extends Component  {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}))
    }

    onSearchChange = (e) => {
        this.setState({
            searchField: e.target.value
        })
    }

    render() {
        const { robots, searchField } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !robots.length ? <h2 className='tc'>Loading</h2>
         :   (<div className='tc'>
                    <h2 className='f1'>RoboFriends</h2>
                    <Searchbox searchChange = {this.onSearchChange}/>
                    <Scroll>
                    <CardList robots = {filteredRobots}/>
                    </Scroll>
                </div>
         )
    }
}

export default App