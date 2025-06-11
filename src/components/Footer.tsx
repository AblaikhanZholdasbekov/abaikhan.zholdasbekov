import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: isMobile ? 3 : 4,         // больше вертикального паддинга на мобилке
        px: isMobile ? 2 : 4,
        mb: isMobile ? 4 : 0,
        textAlign: 'center',
        // backgroundColor: theme.palette.grey[100],
        // borderTop: '1px solid',
        // borderColor: theme.palette.divider
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontSize: isMobile ? '0.75rem' : '0.875rem',
          wordWrap: 'break-word'
        }}
      >
        © 2025 ABLAIKHAN ZHOLDASBEKOV All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
