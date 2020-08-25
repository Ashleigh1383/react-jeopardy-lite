import React, { Component } from "react";
// import GetCategoryService from "../../getCategories";
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
    // this.categoryClient = new GetCategoryService();
  }

  //   getCategory() {
  //       return this.categoryClient.getCategory().then((result) => {
  //           this.setState({
  //               data: result.data
  //           })
  //       })
  //   }

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
    // let propData = {};
    // let categoryChoice = 0;
    // if ((categoryChoice = 1)) {
    //   propData = this.state.data1;
    // } else if ((categoryChoice = 2)) {
    //   propData = this.state.data2;
    // } else if ((categoryChoice = 3)) {
    //   propData = this.state.data3;
    // }
    return (
      <div>
        <Display
          score={this.state.score}
          data={this.state.data}
          //   data={propData}
          formData={this.state.formData}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
export default Jeopardy;
