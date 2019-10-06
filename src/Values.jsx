import React, { Component, Fragment} from "react";
import valueService from './services/valueService';

class Values extends Component {
  state = {
    values : []
   };

async componentDidMount() {
    const { data: values } = await valueService.getValues();
    this.setState({ values });
    console.log("state", this.state);

}

  render() {
    const {values} = this.state;
    // console.log("response", values);
    // const name = this.props.name;
    return (
        <Fragment>
           <h1>Values List </h1>
           {
             values.map(item => (
               <p key={item.id}>Id: {item.id}, Name: {item.name} </p>
             ))
           }
        </Fragment>
    )
  }
}

export default Values;
