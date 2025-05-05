import './index.css';
import logo from './assets/flutterra_logo.svg';

function App() {
    return (
        <main className="container">
            <img src={logo} alt="Flutterra logo" className="logo" />

            <div className="list">
                <p>
                    Меня зовут Анастасия. Я занимаюсь созданием сайтов и мобильных приложений уже более 10 лет — с 2012 года.
                    В последние годы сосредоточилась на разработке приложений на <strong>Flutter</strong> и Telegram-ботов на <strong>React</strong> и Telegram Web Apps.
                </p>
                <p>
                    Работаю быстро, без лишних заморочек, и умею слушать. Если нужен сайт, приложение или бот — пишите, буду рада вам помочь.
                </p>
            </div>

            <a
                className="btn"
                href="https://t.me/FlutterraBot"
                target="_blank"
                rel="noopener noreferrer"
            >
                Связаться
            </a>
        </main>
    );
}

export default App;