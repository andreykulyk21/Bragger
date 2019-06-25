import React from "react";
import { instance } from "../../api/Api";

export class Provider extends React.Component {
  constructor() {
    super();
    this.state = {
      twits: []
    };
  }

  componentDidMount() {
    instance
      .get("http://localhost:4000/twit")
      .then(({ data: { twits } }) => this.setState({ twits }))
      .catch(e => console.error(e));
  }

  render() {
    return this.props.children(this.state.twits);
  }
}
