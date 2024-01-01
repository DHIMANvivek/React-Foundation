import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";
import userContext from "../utils/userContext";

// const About = () => {
//     return (
//         <>
//             <div className="center">
//                 <h1>About Us Page</h1>
//                 <h1>Hi My Name Is Vivek</h1>
//             </div>
//             <ProfileClass name={"Profile Class"} />
//         </>
//     )
// }

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Vivek Dhiman",
                age: 23
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/DHIMANvivek");
        const json = await data.json();

        this.setState({  // update mount
            userInfo: json,
        });

        this.interval = setInterval(() => {
            console.log("ika");
        }, 1000);

        console.log("componetDidMount");
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <>

                <userContext.Consumer>
                    {
                        ({ user }) => {
                            return <h1>here we are {user.name}</h1>
                        }
                    }
                </userContext.Consumer>

                <div className="center">
                    <h1>{this.state.userInfo.name}</h1>
                    <h2>Followers: {this.state.userInfo.followers}</h2>
                    <a href={this.state.userInfo.blog}>PortFolio</a>
                </div>
                <ProfileClass name={"Profile Class"} />
            </>
        )
    }
}


export default About;