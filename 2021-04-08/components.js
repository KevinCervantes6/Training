//Class component
const Navbar = (props) => {

    return (
        <div>
             <ul>
                <li><a href="">{props.homePage}</a></li>
                <li><a href="">{props.contactPage}</a></li>
                <li><a href="">{props.aboutPage}</a></li>
            </ul> 
        </div>
    );
}

const Main = (props) => {

    return (
        <div className="Box">
            <h1>Hi, this example was made with {props.tool}</h1>
        </div>
    );
}

const Footer = (props) => {

    return (
        <div>
            <footer>
                <p>Author: {props.author}</p>
                <p>Date: {props.date}</p>
            </footer> 
        </div>
    );
}

let app = (
    <div>
        <Navbar homePage="Home" contactPage="Contact" aboutPage="About us" />
        <Main tool="JSX components" />
        <Footer author="Kevin Cervantes" date="04/08/2021"/>

    </div>
);


ReactDOM.render(app, document.getElementById('root'));