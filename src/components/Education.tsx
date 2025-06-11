import React from 'react';
import { Box, Typography } from '@mui/material';

const educationData = [
    {
        institution: 'Astana IT University',
        period: '2020 — 2023',
        degree: 'B.Sc. in Information and Communication Technologies',
    },
    {
        institution: 'Maqsut Narikbayev University',
        period: '2023 — 2025',
        degree: 'Master degree',
    },
];

const Education: React.FC = () => {
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
                            {edu.degree}
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
