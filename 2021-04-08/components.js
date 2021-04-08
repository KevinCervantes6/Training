//Class component
const Navbar = (props) => {

    return (
        <div className="Box">
            <h1>Navbar with color {props.backgroundColor}</h1>
        </div>
    );
}

const Main = (props) => {

    return (
        <div className="Box">
            <h1>Main with color {props.backgroundColor}</h1>
        </div>
    );
}

const Footer = (props) => {

    return (
        <div className="Box">
            <h1>Footer with color {props.backgroundColor}</h1>
        </div>
    );
}

let app = (
    <div>
        <Navbar backgroundColor="blue" />
        <Main backgroundColor="green" />
        <Footer backgroundColor="pink" />

    </div>
);


ReactDOM.render(app, document.getElementById('root'));