import { useTheme } from "../contexts/ThemeContext";

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Переключить тему">
            {theme === 'light' ? '🌙' : '☀'}
        </button>
    )
}

export default ThemeToggle
