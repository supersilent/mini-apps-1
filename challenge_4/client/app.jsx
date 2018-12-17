import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i, j) {
    for (let i = 0; i < 6; i++) {
      if (!this.state.data[5-i][j]){
        this.setState((state, props) => {
          let obj = state;
          obj.data[5-i][j] = state.currentColor;
          if (obj.currentColor === "red") {
            obj.currentColor = "blue";
          }else {
            obj.currentColor = "red";
          }
          console.table(this.state.data);
          return obj;
        });
        return;
      }
    }

  }

  // checkWin(){
  //   let board = this.state.data;
  //   //horizontal
  //   for (let i = 3; i < 7; i++) {
  //     if (board[j][i-3]===board[j][i-2])
      
  //   }


  // }

  render() {
    // <Square x={i} y={j} value={this.state.data[i][j]} onClick={()=> {this.setState(
    //     (state, props)=>{
    //         let obj=state.data;
    //         obj[i][j]='test';
    //         return obj;
    //     }

    // )} } />
    return (
      //seven-column, six-row

      <div>
        <Row data={this.state.data[0]} onClick={i => this.handleClick(0, i)} />
        <Row data={this.state.data[1]} onClick={i => this.handleClick(1, i)} />
        <Row data={this.state.data[2]} onClick={i => this.handleClick(2, i)} />
        <Row data={this.state.data[3]} onClick={i => this.handleClick(3, i)} />
        <Row data={this.state.data[4]} onClick={i => this.handleClick(4, i)} />
        <Row data={this.state.data[5]} onClick={i => this.handleClick(5, i)} />
      </div>
    );
  }
}

class Row extends React.Component {
  render() {
    return (
      <div>
        {/* <button className="square" onClick={props.onClick}>
          {props.value}
        </button> */}
        <button id={this.props.data[0]} onClick={() => this.props.onClick(0)} />
        <button id={this.props.data[1]} onClick={() => this.props.onClick(1)} />
        <button id={this.props.data[2]} onClick={() => this.props.onClick(2)} />
        <button id={this.props.data[3]} onClick={() => this.props.onClick(3)} />
        <button id={this.props.data[4]} onClick={() => this.props.onClick(4)} />
        <button id={this.props.data[5]} onClick={() => this.props.onClick(5)} />
        <button id={this.props.data[6]} onClick={() => this.props.onClick(6)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
