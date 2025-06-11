import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

type ThemeToggleProps = {
    mode: 'light' | 'dark';
    handleLightTheme: () => void;
    handleDarkTheme: () => void;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({
                                                     mode,
                                                     handleLightTheme,
                                                     handleDarkTheme
                                                 }) => {
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newMode: 'light' | 'dark' | null
    ) => {
        if (newMode === 'light') {
            handleLightTheme();
        } else if (newMode === 'dark') {
            handleDarkTheme();
        }
        // Если newMode === null, значит пользователь кликнул по уже выбранной кнопке;
        // можно игнорировать или сбрасывать тему — на ваше усмотрение.
    };

    return (
        <ToggleButtonGroup
            exclusive
            value={mode}
            onChange={handleChange}
            sx={{
                // Общий контейнер: скругляем углы, делаем тонкую рамку
                borderRadius: 2,
                border: 1,
                overflow: 'hidden',
                // при желании можно настроить цвета, отступы и т.д.
            }}
        >
            <ToggleButton
                value="light"
                sx={{
                    // Убираем стандартную границу между кнопками
                    border: 0,
                    textTransform: 'none',
                    // Стили для выбранной (selected) кнопки
                    '&.Mui-selected': {
                        // Мягкая подложка + цвет иконки/текста
                        backgroundColor: theme =>
                            theme.palette.mode === 'light'
                                ? `${theme.palette.primary.main}10` // прозрачный цвет
                                : `${theme.palette.primary.main}20`,
                        color: theme => theme.palette.primary.main,
                        // При наведении на выбранную кнопку
                        '&:hover': {
                            backgroundColor: theme =>
                                theme.palette.mode === 'light'
                                    ? `${theme.palette.primary.main}20`
                                    : `${theme.palette.primary.main}30`
                        }
                    }
                }}
            >
                <WbSunnyIcon sx={{ mr: 1 }} />
                Светлая
            </ToggleButton>

            <ToggleButton
                value="dark"
                sx={{
                    border: 0,
                    textTransform: 'none',
                    '&.Mui-selected': {
                        backgroundColor: theme =>
                            theme.palette.mode === 'light'
                                ? `${theme.palette.primary.main}10`
                                : `${theme.palette.primary.main}20`,
                        color: theme => theme.palette.primary.main,
                        '&:hover': {
                            backgroundColor: theme =>
                                theme.palette.mode === 'light'
                                    ? `${theme.palette.primary.main}20`
                                    : `${theme.palette.primary.main}30`
                        }
                    }
                }}
            >
                <DarkModeIcon sx={{ mr: 1 }} />
                Тёмная
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default ThemeToggle;
