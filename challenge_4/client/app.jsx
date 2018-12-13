import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
           data: 
           []
        }
     }
     render() {
        return (
            //seven-column, six-row
            <Square x={0} y={0}/>
            <Square x={1} y={0}/>
            <Square x={2} y={0}/>
            <Square x={3} y={0}/>
            <Square x={4} y={0}/>
        );
     }
}

class Square extends React.Component {
    render(){

    }
}


ReactDOM.render (<App/>, document.getElementById('app'))