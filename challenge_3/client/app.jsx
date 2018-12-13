class CheckOut extends React.Component {
    render() {
        return <button onClick={() => this.props.func()}>Checkout</button>;
    }
}

class F1 extends React.Component {
    render(){
        return (<form>
            Name : <input type="text" name="name" /> <br />
            E-mail : <input type="text" name="e-mail" /> <br />
            Password <input type="text" name="password" /> <br />
            <input type="submit" value="Next" />
            </form>);
    }

}

class Shopping extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checkout: false
        }}
    handleCheckout(){
        this.setState({checkout: true})
    }
    render(){
        // let page;
        console.log(this.state.checkout)
        let page;
        if (this.state.checkout){
            page = <F1 />;
        }else{
            page = <CheckOut func={() => this.handleCheckout()} />;
        }
        return (page);
        
        
    }

}

ReactDOM.render(
    <Shopping />,
    document.getElementById('root')
);