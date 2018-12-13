class CheckOut extends React.Component {
  render() {
    return <button onClick={() => this.props.func("F1")}>Checkout</button>;
  }
}

class F1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        Name :{" "}
        <input
          type="text"
          name="name"
          value={this.props.name}
          onChange={() => this.props.func()}
        />{" "}
        <br />
        E-mail : <input type="text" name="e-mail" /> <br />
        Password <input type="text" name="password" /> <br />
        <input type="submit" value="Next" />
      </form>
    );
  }
}
class F2 extends React.Component {
  render() {
    return (
      <form>
        address 1 : <input type="text" name="address 1" /> <br />
        address 2 : <input type="text" name="address 2" /> <br />
        Password <input type="text" name="password" /> <br />
        <input type="submit" value="Next" />
      </form>
    );
  }
}

class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "",
      name: "",
      email: "",
      password: ""
    };
    this.handleSubmitF1 = this.handleSubmitF1.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }
  handleTransition(page) {
    this.setState({ currentPage: page });
    // console.log(this.state.currentPage);
  }
  handleSubmitF1(event) {
    const name = target.name;
    const target = event.target;
    this.setState({ [name]: value});
    // this.setState({
    //     currentPage: "F1",
    //     name: event.target.value,
    //     email: "",
    //     password: ""
    //   });

    console.log(this.state);
  }
  handleInputChange(event) {

  }

  render() {
    let page;

    if (this.state.currentPage === "F1") {
      page = (
        <form onSubumit={this.handleSubmitF1}>
          Name :
          <input
            type="text" name="name" value={this.state.name} onChange={this.handleInputChange}
          />
          <br />
          E-mail : <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} /> <br />
          Password <input type="text" name="password" /> <br />
          <input type="submit" value="Next" />
        </form>
      );
    } else if (this.state.currentPage === "F2") {
      page = <F2 />;
    } else {
      page = <CheckOut func={page => this.handleTransition(page)} />;
    }
    return page;
  }
}

ReactDOM.render(<Shopping />, document.getElementById("root"));
