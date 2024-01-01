import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
    }

    render() {
        return (
            <div>
                <h1>Profile</h1>
                <h1>name: {this.props.name}</h1>
                <h1>count: {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }
                }>Click Me</button>
            </div>
        );
    }
}

export default Profile;