import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions"
import QuestionCard from "../components/QuestionCard"
import type { Answer } from "../types/Answer";

function Quiz() {
    const navigate = useNavigate();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>(
        Array(questions.length).fill(null)
    );

    function handleOptionChange(answer_id: number, correct_answer_id: number) {
        const newSelected = [...selectedAnswers];
        newSelected[currentIndex] = { selected_answer_id: answer_id, correct_answer_id: correct_answer_id };
        setSelectedAnswers(newSelected);
    }

    function handleNext() {
        if (selectedAnswers[currentIndex] === null) {
            alert("Выберите вариант ответа");
            return;
        }

        setCurrentIndex(currentIndex + 1);
        if (currentIndex === questions.length - 1) {
            localStorage.setItem("answers", JSON.stringify(selectedAnswers));
            navigate("/result");
        }
    }

    function handlePrev() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="container">
            <p className="progress">Вопрос {currentIndex + 1} / {questions.length}</p>
            <QuestionCard question={questions[currentIndex]} onSelectChange={handleOptionChange} selectedOption={selectedAnswers[currentIndex]}/>
            {
                currentIndex > 0 ?
                <button className="secondary" onClick={handlePrev}>Назад</button>
                : null
            }
            <button onClick={handleNext}>
                {currentIndex === questions.length - 1 ? "Завершить" : "Далее"}
            </button>
        </div>
    )
}

export default Quiz
