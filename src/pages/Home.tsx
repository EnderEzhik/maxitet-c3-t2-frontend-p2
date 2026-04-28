import { useNavigate } from "react-router-dom"

function Home() {
    const navigator = useNavigate();

    return (
        <div className="container">
            <h1>Добро пожаловать в квиз-викторину!</h1>
            <p>Ответьте на несколько вопросов и узнайте насколько Вы программист!</p>
            <button onClick={() => navigator("/quiz")}>Тап тап хомяка</button>
        </div>
    )
}

export default Home
