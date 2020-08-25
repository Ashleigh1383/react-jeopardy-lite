import React from "react";

function Display(props) {
  let category = "loading...";
  if (props.data.category) {
    category = props.data.category.title;
  }

  return (
    <div>
      {/* <strong>Choose a category:</strong> <br />
      <button id="1">1.{}</button>
      <br />
      <button id="2">2.{}</button>
      <br />
      <button id="3">3.{}</button> */}
      <strong>User's score: </strong> {props.score} <br />
      <strong>Question: </strong> {props.data.question} <br />
      <strong>Point Value:</strong> {props.data.value} <br />
      <strong>Category:</strong> {category} <br />
      <form onSubmit={props.handleSubmit}>
        <div>
          <label htmlFor="answer">Answer:</label>
          <input
            type="text"
            name="answer"
            value={props.formData.answer}
            onChange={props.handleChange}
          />
        </div>

        <button>Submit Answer</button>
      </form>
    </div>
  );
}

export default Display;
