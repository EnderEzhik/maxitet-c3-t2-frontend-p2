import type { Answer } from "../types/Answer";
import type { Question } from "../types/Question";

interface Props {
    question: Question,
    onSelectChange: (answer_id: number, correct_answer_id: number) => void,
    selectedOption: Answer
}

function QuestionCard({ question, onSelectChange, selectedOption }: Props) {
    return (
        <div>
            <h2>{question.text}</h2>
            {
                question.options.map(o =>
                <label key={o.id} className={`option ${o.id === selectedOption?.selected_answer_id ? "selected" : ""}`}>
                    <input
                        type="radio"
                        name="option"
                        value={o.id}
                        checked={ o.id === selectedOption?.selected_answer_id }
                        onChange={() => onSelectChange(o.id, question.correct_option_id)}
                    />
                    {o.text}
                </label>
                )
            }
        </div>
    )
}

export default QuestionCard
