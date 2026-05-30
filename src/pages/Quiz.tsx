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

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
        else if (window.confirm("Завершить викторину?")) {
            finishQuiz();
        }
    }

    function handlePrev() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    function finishQuiz() {
        let score = 0;

        selectedAnswers.forEach((selected, index) => {
            if (selected?.correct_answer_id === questions[index].correct_option_id) {
                score++;
            }
        });

        const bestScore = localStorage.getItem("bestScore");
        const currentBestScore = bestScore ? parseInt(bestScore) : 0;

        if (score > currentBestScore) {
            localStorage.setItem("bestScore", score.toString());
        }

        navigate("/result", { state: { score, total: questions.length, questions, answers: selectedAnswers }});
    }

    return (
        <div className="container">
            <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{width: `${((currentIndex + 1) / questions.length) * 100}%`}}></div>
            </div>
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
