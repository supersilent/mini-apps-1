import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentColor: "red",
      data: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
      ]
    };
  }
  render() {
    
        <Square x={i} y={j} value={this.state.data[i][j]} onClick={()=> {this.setState(
            (state, props)=>{
                let obj=state.data;
                obj[i][j]='test';
                return obj;
            }
            
        )} } />
     
    }
    return (
      //seven-column, six-row

      <div>
        {rows[0]}
        {rows[1]}
        {rows[2]}
        {rows[3]}
        {rows[4]}
        {rows[5]}
      </div>
    );
  }
}

class Square extends React.Component {
  render() {
    return (
        <button className="square" onClick={props.onClick}>
          {props.value}
        </button>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
