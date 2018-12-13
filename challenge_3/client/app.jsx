class CheckOut extends React.Component {
  render() {
    return <button onClick={() => this.props.func("F1")}>Checkout</button>;
  }
}

class F1 extends React.Component {
  render() {
    return (
      <form>
        Name : <input type="text" name="name" /> <br />
        E-mail : <input type="text" name="e-mail" /> <br />
        Password <input type="text" name="password" /> <br />
        <input type="submit" value="Next"/>
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
      currentPage: null,
      name:null,
      email:null,
      password:null
    };
  }
  handleTransition(page) {
    this.setState({ currentPage: page });
    // console.log(this.state.currentPage);
  }
  handleSubmitF1(name, email, password) {
    this.setState({currentPage:'F2', name, email, password});
  }

  render() {
    let page;
    if (this.state.currentPage === "F1") {
      page = <F1 func={page => this.handleTransition(page)} onSubmit={this.handleSubmitF1} />;
    } else if (this.state.currentPage === "F2") {
      page = <F2 />;
    } else {
      page = <CheckOut func={page => this.handleTransition(page)} />;
    }
    return page;
  }
}

ReactDOM.render(<Shopping />, document.getElementById("root"));
