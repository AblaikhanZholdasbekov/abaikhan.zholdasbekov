import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import  { useState } from 'react';
import { IconButton, Collapse } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';


const experiences = [
  {
    date: 'Июль 2023 — по настоящее время',
    company: 'MN Partners',
    location: 'Астана',
    role: 'Frontend-разработчик',
    descriptions: [
      'Разработка и доработка функционала проекта Единой информационно-аналитической системы для государственных правоохранительных органов. Стек технологий: JavaScript, TypeScript, React Hook, React Hook Form, React Router, Mobx, Material UI и взаимодействие с REST API. Работа с подписанием ЭЦП.',
      'Разработка и доработка функционала проекта Интегрированной системы управления образованием для учебных заведений. Стек технологий: JavaScript, TypeScript, React Hook, React Hook Form, React Router, Mobx, Material UI и взаимодействие с REST API. Работа с подписанием ЭЦП.'
    ]
  },
  {
    date: 'Январь 2023 — май 2023',
    company: 'Asterra Solutions',
    location: 'Астана',
    role: 'Frontend-разработчик',
    descriptions: [
      'Разработка и улучшение проекта Inlot — аналога Крыша.кз, предназначенного для поиска квартир, а также расчёта инвестиций и доходности с использованием технологий искусственного интеллекта. Стек технологий: JavaScript, React, Mobx, React Router, RESTful API, react-hook-form, Material UI.',
      'Aqjol — разработка и внедрение системы электронного документооборота для политической партии. Стек технологий: JavaScript, React, Mobx, React Router, RESTful API, react-hook-form, Material UI.'
    ]
  }
];

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  return (
    <Box
      sx={{
        width: '67%',
        mx: 'auto',
        mt: 4,
        position: 'relative',
        // Чтобы было пространство для анимации точки:
        minHeight: 400
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
        {t('experinece')}
      </Typography>

      {/* Вертикальная линия слева */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 60,      // линия начинается чуть ниже заголовка
          bottom: 0,    // тянется до "низа" контейнера
          width: '2px',
          // Анимированный градиент, если хотите оставить «переливание»:
          background: theme =>
            `linear-gradient(
              to top,
              transparent 0%,
              ${theme.palette.primary.main} 50%,
              transparent 100%
            )`,
          backgroundSize: '100% 200%',
          animation: 'flow 2s linear infinite'
        }}
      />

      {/* Единственная анимированная точка, двигается снизу вверх, затем пульсирует */}
      <Box
        sx={{
          position: 'absolute',
          left: '-7px', // чтобы точка была по центру 2px-линии
          bottom: 0,    // старт анимации внизу линии
          width: 16,
          height: 16,
          borderRadius: '50%',
          backgroundColor: theme => theme.palette.primary.main,
          boxShadow: '0 0 8px rgba(0,0,0,0.2)',
          // Запускаем две анимации:
          // 1) moveUp (2s) – точка перемещается вверх и «замирает» там (forwards).
          // 2) pulse (1.5s infinite), но стартует с задержкой 2s, чтобы началось пульсирование уже наверху.
          animation: `
            moveUp 2s ease-in-out forwards,
            pulse 1.5s infinite 2s
          `
        }}
      />

      {/* Список опыта – просто текст справа от линии */}
      {experiences.map((exp, index) => {
        const isOpen = openIndex === index;

        return (
          <Box
            key={index}
            sx={{
              position: 'relative',
              pl: 4,
              mb: 4
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {exp.date}
                </Typography>
                <Typography variant="h6" component="span">
                  {exp.company}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {exp.role} — {exp.location}
                </Typography>
              </Box>

              <IconButton onClick={() => setOpenIndex(isOpen ? null : index)}>
                {isOpen ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Box>

            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              {exp.descriptions.map((desc, idx) => (
                <Typography key={idx} variant="body2" sx={{ mt: 1 }}>
                  {desc}
                </Typography>
              ))}
            </Collapse>
          </Box>
        );
      })}

      {/* Ключевые кадры для анимаций */}
      <style>
        {`
          /* "переливание" линии снизу вверх */
          @keyframes flow {
            0% {
              background-position: 100% 100%;
            }
            100% {
              background-position: 100% 0%;
            }
          }
          
          /* Анимация движения точки снизу вверх */
          @keyframes moveUp {
            0% {
              bottom: 0;
            }
            100% {
              /* поднимаемся к верху линии (100% высоты контейнера минус top: 60px) */
              bottom: calc(100% - 60px);
            }
          }

          /* Пульсация (увеличение/уменьшение) точки */
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Experience;
