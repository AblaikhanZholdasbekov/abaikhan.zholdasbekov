import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const educationData = [
    {
        institution: 'Astana IT University',
        period: '2020 — 2023',
        degree: 'degreeAITU',
    },
    {
        institution: 'Maqsut Narikbayev University',
        period: '2023 — 2025',
        degree: 'degreeMNU',
    },
];

const Education: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ width: '67%', mx: 'auto', mt: 8 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                Education
            </Typography>

            {educationData.map((edu, index) => (
                <Box
                    key={index}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        mb: 2,
                    }}
                >
                    {/* Левая часть: Название вуза и степень */}
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            {edu.institution}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {t(edu.degree)}
                        </Typography>
                    </Box>

                    {/* Правая часть: период (годы обучения) */}
                    <Typography variant="body2" color="text.secondary">
                        {edu.period}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

export default Education;
