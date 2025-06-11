import React, { useState } from 'react';
import { Box, Typography, IconButton, Collapse } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const experiences = [
  {
    date: 'dateMnPartners',
    company: 'MN Partners',
    location: 'Astana',
    role: 'roleMN',
    descriptions: [
      'descMn1',
      'descMn2'
    ]
  },
  {
    date: 'dateAs',
    company: 'Asterra Solutions',
    location: 'Astana',
    role: 'roleMN',
    descriptions: [
      'descAs1',
      'descAs2'
    ]
  }
];
const Experience: React.FC = () => {
  const { t } = useTranslation();

  // Массив состояний для каждой секции
  const [openStates, setOpenStates] = useState<boolean[]>(
    Array(experiences.length).fill(false)
  );

  const toggleSection = (index: number) => {
    setOpenStates(prev =>
      prev.map((open, i) => (i === index ? !open : open))
    );
  };

  return (
    <Box sx={{ width: '67%', mx: 'auto', mt: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
        {t('experinece')}
      </Typography>

      <Box sx={{ position: 'relative', display: 'flex' }}>
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '2px',
            background: theme =>
              `linear-gradient(
                to top,
                transparent 0%,
                ${theme.palette.primary.main} 50%,
                transparent 100%
              )`,
            backgroundSize: '100% 200%',
            animation: 'flow 2s linear infinite',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            left: '-7px',
            width: 16,
            height: 16,
            borderRadius: '50%',
            backgroundColor: theme => theme.palette.primary.main,
            boxShadow: '0 0 8px rgba(0,0,0,0.2)',
            animation: `
              moveUp 2s ease-in-out forwards,
              pulse 1.5s infinite 2s
            `
          }}
        />

        <Box sx={{ pl: 4, flex: 1 }}>
          {experiences.map((exp, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    {t(exp.date)}
                  </Typography>
                  <Typography variant="h6" component="span">
                    {exp.company}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {t(exp.role)} — {t(exp.location)}
                  </Typography>
                </Box>

                <IconButton onClick={() => toggleSection(index)}>
                  {openStates[index] ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </Box>

              <Collapse in={openStates[index]} timeout="auto" unmountOnExit>
                {exp.descriptions.map((desc, idx) => (
                  <Typography key={idx} variant="body2" sx={{ mt: 1 }}>
                    {t(desc)}
                  </Typography>
                ))}
              </Collapse>
            </Box>
          ))}
        </Box>
      </Box>

      <style>
        {`
          @keyframes flow {
            0% {
              background-position: 100% 100%;
            }
            100% {
              background-position: 100% 0%;
            }
          }

          @keyframes moveUp {
            0% {
              transform: translateY(100%);
            }
            100% {
              transform: translateY(0%);
            }
          }

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
