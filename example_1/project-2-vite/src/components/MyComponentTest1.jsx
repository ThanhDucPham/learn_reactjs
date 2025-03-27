import React, { Component } from 'react';
import './DisplayInfor.scss'
class MyComponentTest1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello, World!',
            userName: "",
            age: 30,
            listUsers: []
        };
    }

    handleClick = (event) => {
        this.setState({ message: 'You clicked the button!' });
        console.log('Button was clicked!', event);
    };

    onHover = (event) => {
        console.log('Hovered over the button!', event);
    }

    handleOnChangeName = (event) => {
        console.log('Form is texting!', event);
        this.setState({
            ...this.state,
            userName: event.target.value, message: `Welcome, ${this.state.userName}(${this.state.age})!`
        });
    }

    handleOnChangeAge = (event) => {
        console.log('Form is texting!', event);
        this.setState({
            ...this.state,
            age: event.target.value, message: `Welcome, ${this.state.userName}(${this.state.age})!`
        });
    }


    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log('Form was submitted! -> add new user: ', this.state.userName, this.state.age);
        let newUser = {
            name: this.state.userName,
            age: this.state.age
        }
        this.setState({
            ...this.state,
            listUsers: [...this.state.listUsers, newUser],
        });
    }
    render() {
        return (
            <div>
                <h1 className='display-message' >{this.state.message}</h1>
                <button onClick={this.handleClick}>Click Me</button>
                <button onMouseOver={this.onHover}>Hover Me</button>
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="name">Input new user:</label>
                    <input type="text"
                        id="name"
                        name="name"
                        placeholder='username...'
                        value={this.state.userName}
                        onChange={this.handleOnChangeName} />

                    <input type="text"
                        id="age"
                        name="age"
                        placeholder='age...'
                        value={this.state.age}
                        onChange={this.handleOnChangeAge} />
                    <input type="submit" value="Submit" />
                </form>
                <ul>
                    {this.state.listUsers.map((user, index) => {
                        return <li key={index}>{user.name} - ({user.age})</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default MyComponentTest1;