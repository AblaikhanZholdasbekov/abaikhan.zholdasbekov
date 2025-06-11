import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';

/**
 * Компонент, который создает анимированный след за курсором.
 * @param color - строка с цветом (например, '#1976d2' или 'rgba(...)'), обычно берем из темы.
 */
type MouseTrailProps = {
    color?: string;
};

const MouseTrail: React.FC<MouseTrailProps> = ({ color }) => {
    // Если не передали цвет явно, возьмем из темы MUI
    const theme = useTheme();
    const effectiveColor = color || theme.palette.primary.main;

    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            // Создаем элемент для «следа»
            const circle = document.createElement('div');
            circle.className = 'mouse-trail-circle';

            // Позиционируем в точке курсора
            circle.style.left = `${e.pageX}px`;
            circle.style.top = `${e.pageY}px`;

            // Устанавливаем цвет (обводка или фон - на ваш выбор)
            circle.style.borderColor = effectiveColor;
            // Можно вместо borderColor использовать backgroundColor, если хотите залитый кружок:
            // circle.style.backgroundColor = effectiveColor;

            document.body.appendChild(circle);

            // Удаляем элемент из DOM через 500мс (время анимации)
            setTimeout(() => {
                circle.remove();
            }, 500);
        }

        // Навешиваем обработчик на document
        document.addEventListener('mousemove', handleMouseMove);

        // Чистим обработчик при размонтировании
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [effectiveColor]);

    return null; // Компонент ничего не рендерит сам
};

export default MouseTrail;
