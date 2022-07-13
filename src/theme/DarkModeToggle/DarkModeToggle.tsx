/* Core */
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ReactDarkModeToggle from 'react-dark-mode-toggle';

/* Instruments */
import './styles.scss';

export const DarkModeToggle = () => {
    const [theme, setTheme] = useState<Theme>('light');
    const [isSystem, setSystem] = useState(true);
    const [isVisible, setVisible] = useState(false);

    const saveTheme = (nextTheme: Theme) => {
        localStorage.setItem('theme', nextTheme);
        document.documentElement.setAttribute('data-theme', nextTheme);
        setTheme(nextTheme);
    };

    const switchTheme = () => {
        setSystem(false);

        if (theme === 'light') {
            saveTheme('dark');
        } else if (theme === 'dark') {
            saveTheme('light');
        }
    };

    const toggleSystem = () => {
        if (isSystem) {
            setSystem(false);
        } else {
            setSystem(true);
            setTheme(detectOSTheme());
            localStorage.setItem('theme', 'system');
        }
    };

    useEffect(() => {
        (async () => {
            const { initialTheme, persistedIsSystem } = detectInitialTheme();
            saveTheme(initialTheme);
            setSystem(persistedIsSystem);

            // TODO: add listener for OS-wide theme change.
        })();

        const timerId = setTimeout(() => {
            setVisible(true);
        }, 0);

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    return (
        darkModeToggleRef &&
        createPortal(
            <div className={`dark-mode-portal ${isVisible && 'visible'}`}>
                <label className="system">
                    <input
                        type="checkbox"
                        checked={isSystem}
                        onChange={toggleSystem}
                    />
                    Системная
                </label>
                <ReactDarkModeToggle
                    className="dark-mode-toggle"
                    onChange={switchTheme}
                    checked={theme === 'dark'}
                    size={50}
                />
            </div>,
            darkModeToggleRef,
        )
    );
};

/* Helpers */
const darkModeToggleRef = document.getElementById('dark-mode-toggle');

function detectOSTheme() {
    if (!window.matchMedia) {
        return 'dark'; // ? matchMedia method not supported
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        const osTheme = 'dark'; // ? OS theme identified as dark

        document.documentElement.setAttribute('data-theme', osTheme);

        return osTheme;
    } else {
        return 'light';
    }
}

function detectInitialTheme() {
    let initialTheme: Theme = 'light';

    const persistedTheme = localStorage.getItem('theme') ?? 'system';
    const persistedIsSystem = persistedTheme === 'system';

    if (persistedTheme === 'dark') {
        initialTheme = 'dark';
    } else if (persistedIsSystem) {
        initialTheme = detectOSTheme();
    }

    document.documentElement.setAttribute('data-theme', initialTheme);

    return { initialTheme, persistedIsSystem };
}

/* Types */
type Theme = 'dark' | 'light';
