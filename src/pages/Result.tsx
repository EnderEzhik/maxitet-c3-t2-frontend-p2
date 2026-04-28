import type { Answer } from "../types/Answer";
import { questions } from "../data/questions";
import { useNavigate } from "react-router-dom";

function Result() {
    const navigate = useNavigate();

    function getRating() {
        const answers_data = localStorage.getItem("answers");
        if (!answers_data) {
            return 0;
        }

        const answers: Answer[] = JSON.parse(answers_data);
        let rating = 0;
        answers.forEach(a => {
            if (a.selected_answer_id === a.correct_answer_id) {
                rating += 1;
            }
        });
        return rating;
    }

    const rating = getRating();
    const storedBestResult = Number(localStorage.getItem("best-rating") ?? 0);
    const bestResult = Math.max(storedBestResult, rating);

    if (bestResult !== storedBestResult) {
        localStorage.setItem("best-rating", String(bestResult));
    }

    return (
        <div className="container">
            <h2 className="title">Результат</h2>
            <p>Вы ответили правильно на</p>
            <p className="score">{rating} из {questions.length}</p>
            <div className="result-actions">
                <div className="best-score">Лучший результат: {bestResult}</div>
                <button className="btn" onClick={() => navigate("/")}>Новая викторина</button>
            </div>
        </div>
    )
}

export default Result
