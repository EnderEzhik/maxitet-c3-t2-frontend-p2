import { useNavigate } from "react-router-dom"

function Home() {
    const navigator = useNavigate();

    return (
        <div className="container">
            <h1 className="home-title">Добро пожаловать в квиз-викторину!</h1>
            <p className="home-description">Проверьте свои знания, ответив на несколько вопросов.</p>
            <button className="btn" onClick={() => navigator("/quiz")}>Начать</button>
        </div>
    )
}

export default Home
