import React from "react";

function QuestionItem({question, onDeleteQuestion, onUpdateQuestion}) {
    const {id, prompt, answers, correctIndex} = question;

    const options = answers.map((answer, index) => (
        <option key={index} value={index}>
            {answer}
        </option>
    ));

    function handleDeleteQuestion() {
        fetch("http://localhost:4000/questions/" + id,
            {
                method: "DELETE"
            }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            onDeleteQuestion(id)
            console.log('Item deleted successfully');
        })
            .catch(error => {
                console.error('There was a problem deleting the item:', error);
            });
    }

    function handleUpdateQuestion(e) {
        const updatedQuestion = {...question, correctIndex: e.target.value}
        fetch("http://localhost:4000/questions/" + id,
            {
                method: "PATCH",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(updatedQuestion)
            }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            onUpdateQuestion(updatedQuestion)
        })
            .catch(error => {
                console.error('There was a problem updating the item:', error);
            });
    }


    return (
        <li>
            <h4>Question {id}</h4>
            <h5>Prompt: {prompt}</h5>
            <label>
                Correct Answer:
                <select
                    defaultValue={correctIndex}
                    onChange={handleUpdateQuestion}
                >{options}</select>
            </label>
            <button onClick={handleDeleteQuestion}>Delete Question</button>
        </li>
    );
}

export default QuestionItem;
