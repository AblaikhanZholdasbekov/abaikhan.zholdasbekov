import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { alpha } from '@mui/material'; // для прозрачного фона при hover
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from './components/Footer';

export const colorMap: Record<string, string> = {
    purple: '#9c27b0',
    blue: '#1976d2',
    pink: '#f50057',
    yellow: '#FFC107',
    green: '#4CAF50',
    orange: '#FF9800',
    ocean: '#13b7f6'
};
function App() {
    const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
    const [primaryColor, setPrimaryColor] = React.useState<string>(colorMap.blue);

    // Функция переключения темы (светлая/тёмная)
    const toggleColorMode = () => {
        setMode(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    // Функция для смены основного цвета (primary)
    const handleColorChange = (colorKey: string) => {
        setPrimaryColor(colorMap[colorKey]);
    };

    // Создаём тему с глобальными styleOverrides
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: primaryColor
                    }
                },
                components: {
                    // Настройки для обычных кнопок (MuiButton)
                    MuiButton: {
                        defaultProps: {
                            variant: 'outlined', // Все кнопки по умолчанию outlined
                            color: 'inherit'     // Будут брать цвет из styleOverrides (ниже)
                        },
                        styleOverrides: {
                            root: ({ theme }) => ({
                                // Пример скруглённой рамки
                                borderRadius: 8,
                                // Рамка = основной цвет
                                borderColor: theme.palette.primary.main,
                                // Текст и иконки в кнопке = основной цвет
                                color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                                textTransform: 'none', // убираем CAPSLOCK
                                // При наведении — полупрозрачная заливка
                                '&:hover': {
                                    backgroundColor: alpha(theme.palette.primary.main, 0.08)
                                }
                            })
                        }
                    },
                    MuiChip: {
                        styleOverrides: {
                            root: ({ theme, ownerState }) => ({
                                ...(ownerState.variant === 'outlined' && {
                                    borderColor: theme.palette.primary.main,
                                    // Устанавливаем текст белым для тёмной темы, чёрным для светлой
                                    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                                }),
                            }),
                        },
                    },

                    // Настройки для иконок (MuiIconButton)
                    MuiIconButton: {
                        defaultProps: {
                            color: 'inherit' // То же самое, чтобы взять цвет из styleOverrides
                        },
                        styleOverrides: {
                            root: ({ theme }) => ({
                                borderRadius: 8,
                                borderStyle: 'solid',
                                borderWidth: 1,
                                borderColor: theme.palette.primary.main,
                                color: theme.palette.primary.main,
                                '&:hover': {
                                    backgroundColor: alpha(theme.palette.primary.main, 0.08)
                                }
                            })
                        }
                    }
                }
            }),
        [mode, primaryColor]
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/*<MouseTrail />*/}
            <Navbar
                mode={mode}
                toggleColorMode={toggleColorMode}
                onColorChange={handleColorChange}
            />
            <Skills/>
            <Experience/>
            <Education/>
            <Footer/>
        </ThemeProvider>
    );
}

export default App;
