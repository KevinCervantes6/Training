class Form extends React.Component {

    state = {fstName: '', lstName: '', age: ''}

    fstNameHandler = (event) => {
        this.setState( {...this.state, fstName: event.target.value} );
    }

    lstNameHandler = (event) => {
        this.setState( {...this.state, lstName: event.target.value} );
    }

    ageHandler = (event) => {
        this.setState( {...this.state, age: event.target.value} );
    }

    submitButtonHandler = (event) => {
        console.log(`
            FirstName: ${this.state.fstName}
            LastName: ${this.state.lstName}
            Age: ${this.state.age}`);
    }

    render() {
        return (
            <div className="Box">
                <label>Type your first name</label> <br/>
                <input type="text" onChange={this.fstNameHandler}/> <br/>
                <label>Type your last name</label> <br/>
                <input type="text" onChange={this.lstNameHandler}/> <br/>
                <label>Type your age</label> <br/>
                <input type="text" onChange={this.ageHandler}/> <br/>
                <button onClick={this.submitButtonHandler}>Send</button>      
            </div>
        );
    }
}


class App extends React.Component {

    render () {
      return ( 
        <div className="App">
            <Form/>
        </div>
      );
    }
}

ReactDOM.render( <App/>, document.getElementById('root'));