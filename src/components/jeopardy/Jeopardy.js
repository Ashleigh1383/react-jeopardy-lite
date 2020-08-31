import React, { Component } from "react";

import JeopardyService from "../../jeopardyService";
import Display from "../display/Display";

class Jeopardy extends Component {
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: { category: "" },
      score: 0,
      formData: {
        answer: "",
      },
    };
  }

  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }

  componentDidMount() {
    this.getNewQuestion();
  }

  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({ formData });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let newScore = 0;
    this.getNewQuestion();
    if (this.state.formData.answer === this.state.data.answer) {
      newScore = this.state.score + this.state.data.value;
    } else {
      newScore = this.state.score - this.state.data.value;
    }

    this.setState({
      score: newScore,
      formData: { answer: "" },
    });
  };

  render() {
    return (
      <div>
        <Display
          score={this.state.score}
          data={this.state.data}
          formData={this.state.formData}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
export default Jeopardy;
