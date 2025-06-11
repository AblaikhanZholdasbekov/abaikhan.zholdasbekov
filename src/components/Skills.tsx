import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Пример списка навыков
const skillList = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Next.js',
  'React',
  'Redux',
  'MobX',
  'Material UI',
  'Git'
];

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: '67%', // Как в Navbar
        mx: 'auto', // Горизонтальный центр
        mt: 4 // Отступ сверху (при необходимости)
      }}
    >
      <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 2 }}>
        {t('skills')}
      </Typography>

      {/* Контейнер для чипов */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {skillList.map(skill => (
          <Chip
            key={skill}
            label={skill}
            variant='outlined' // Чтобы были с обводкой, как на скриншоте
          />
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
