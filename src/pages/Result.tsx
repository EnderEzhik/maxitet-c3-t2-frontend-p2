// import type { Answer } from "../types/Answer";
// import { questions } from "../data/questions";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Question } from "../types/Question";
import type { Answer } from "../types/Answer";

function Result() {
    const location = useLocation();
    const navigate = useNavigate();

    const [bestScore, setBestScore] = useState<number>(0);

    useEffect(() => {
        const saved = localStorage.getItem("bestScore");
        if (saved) {
            setBestScore(parseInt(saved));
        }
    }, []);

    if (!location.state) {
        return (
            <div className="container">
                <h2>Результат не найден</h2>
                <button onClick={() => navigate("/")}>На главную</button>
            </div>
        );
    }

    const { score, total, questions, answers } = location.state as {
        score: number;
        total: number;
        questions: Question[];
        answers: (Answer | null)[];
    };

    const questionsWithAnswers = useMemo(() => {
        return questions.map((question, index) => ({
            ...question,
            user_answer: answers[index] ? question.options[answers[index].selected_answer_id - 1].text : null,
            is_correct: answers[index]?.selected_answer_id === question.correct_option_id
        }));
    }, [questions, answers]);

    const handleResetBest = useCallback(() => {
        localStorage.removeItem("bestScore");
        setBestScore(0);
    }, []);

    return (
        <div className="container">
            <h2>Результат</h2>
            <p>Вы ответили правильно на</p>
            <p className="score">{score} из {total}</p>
            <div className="best-score">Лучший результат: {bestScore}</div>

            <div className="detailed-results">
                {questionsWithAnswers.map((question) => {
                    const { user_answer, is_correct } = question;
                    return (
                        <div key={question.id} className={`result-item ${is_correct ? 'correct' : 'wrong'}`}>
                            <p><strong>{question.id}. {question.text}</strong></p>
                            <p>Ваш ответ: {user_answer ?? 'Не отвечен'}</p>
                            <p>Правильный ответ: {question.options[question.correct_option_id -1].text}</p>
                        </div>
                    );
                })}
            </div>

            <button onClick={() => navigate("/")}>Новая викторина</button>
            <button onClick={handleResetBest} className="button secondary">Сбросить рекорд</button>

        </div>
    )
}

export default Result;
