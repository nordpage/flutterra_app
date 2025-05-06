declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        initData?: string;
        initDataUnsafe?: {
          user?: {
            id?: number;
            first_name?: string;
            last_name?: string;
            username?: string;
            language_code?: string;
            photo_url?: string;
          };
        };
        ready?: () => void;
      };
    };
  }
}

import './index.css';
import logo from './assets/flutterra_logo.svg';
import reactLogo from './assets/stack/react.svg'
import {useEffect} from "react";

function App() {
    const tg = window.Telegram?.WebApp;
    const user = tg?.initDataUnsafe?.user;

    useEffect(() => {
        if (tg?.ready) {
            tg.ready();
        }
    }, []);

    return (
        <main className="container">
            <img src={logo} alt="Flutterra logo" className="logo"/>

            {user && (
                <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
                    Привет, {user.first_name}!
                </p>
            )}

            <div className="list">
                <p>
                    Меня зовут Анастасия. Я занимаюсь созданием сайтов и мобильных приложений уже более 10 лет — с 2012
                    года.
                    В последние годы сосредоточилась на разработке приложений на <strong>Flutter</strong> и
                    Telegram-ботов на <strong>React</strong> и Telegram Web Apps.
                </p>
                <p>
                    Работаю быстро, без лишних заморочек, и умею слушать. Если нужен сайт, приложение или бот — пишите,
                    буду рада вам помочь.
                </p>

            </div>

            <h2 className="section-heading">Технологии</h2>
            <div className="stack-logos">
                <img src={reactLogo} alt="React" />
                <img src="./assets/stack/typescript.svg" alt="TypeScript" />
                <img src="./assets/stack/flutter.svg" alt="Flutter" />
                <img src="./assets/stack/telegram.svg" alt="Telegram API" />
                <img src="./assets/stack/css.svg" alt="CSS" />
            </div>

            <h2 className="section-heading">Что я делаю</h2>
            <ul className="service-list">
              <li><strong>Разработка сайтов</strong> — быстро, без шаблонности</li>
              <li><strong>Flutter-приложения</strong> — от идеи до релиза</li>
              <li><strong>Telegram-боты</strong> — на React и Web Apps</li>
              <li><strong>Дизайн интерфейсов</strong> — с учётом пожеланий пользователя</li>
            </ul>

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