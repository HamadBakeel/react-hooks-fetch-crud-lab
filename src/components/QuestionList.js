import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onDeleteQuestion, onUpdateQuestion}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
          {/* display QuestionItem components here after fetching */}
          {questions.map((question, index) =>{
              return <QuestionItem
                  question={question}
                  onDeleteQuestion={onDeleteQuestion}
                  onUpdateQuestion={onUpdateQuestion}
                  key={index}/>
          })}
      </ul>
    </section>
  );
}

export default QuestionList;
