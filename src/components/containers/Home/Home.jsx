import React, { Component } from "react";
import Button from "../../UI/Button";
import Register from "../../Register/Register";

class Home extends Component {
  state = {
    registerToggle: false
  };

  registerToggleHandler = () => {
    this.setState(({ registerToggle }) => ({
      registerToggle: !registerToggle
    }));
  };

  render() {
    let registerComponent = <p>Nothing to see here</p>;

    registerComponent = this.state.registerToggle ? (
      <div className="container">
        <div className="row justify-content-center">
          <div className="text-center">
            <Register onCancel={this.registerToggleHandler}></Register>
            
          </div>
        </div>
      </div>
    ) : (
      <div style={{ textAlign: "center" }}>
        <h1>Find your match</h1>
        <p className="lead">
          Come on in to view your matches... All you need to do is sign up!
        </p>
        <div className="text-center">
          <Button
            inputClasses="btn-primary btn-lg mr-2"
            onClick={this.registerToggleHandler}
          >
            Register
          </Button>
          <Button inputClasses="btn-info btn-lg">Learn more</Button>
        </div>
      </div>
    );

    return <div className="container mt-5">{registerComponent}</div>;
  }
}

export default Home;
