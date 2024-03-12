import React, { Component } from "react";



class LifeCycleComponents extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        fetch('https://todo-redev.herokuapp.com/api/auth/login', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: 'p9999s@gmail.com', password: 'Velcom2023!' })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Ошибка при получении данных:', error));
    }


    componentDidUpdate() {
        console.log(`Component Updated: ${this.state.count}`);
    }



    shouldComponentUpdate(nextProps, nextState) {
        return nextState.count % 2 === 0;
    }

    handleClick = () => {
        this.setState(state => ({ count: state.count + 1 }));
    }


    componentWillUnmount() {
        console.log('Component unmounting');
    }


    render() {
        return (
            <div>
                <h3>Первая отрисовка.</h3>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick}>+++</button>
            </div>

        )
    }

}




export default LifeCycleComponents;