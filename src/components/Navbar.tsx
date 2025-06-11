import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Popover,
  Card,
  CardContent,
  ToggleButtonGroup,
  ToggleButton,
  Button,
} from "@mui/material";

import SettingsIcon from "@mui/icons-material/Settings";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useTranslation } from 'react-i18next';

type NavbarProps = {
  mode: "light" | "dark";
  toggleColorMode: () => void;
  onColorChange: (colorKey: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({
  mode,
  toggleColorMode,
  onColorChange,
}) => {
  const [language, setLanguage] = React.useState<"KZ" | "RU" | "EN">("EN");
  const { t, i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (
    event: React.MouseEvent<HTMLElement>,
    newMode: "light" | "dark" | null,
  ) => {
    if (!newMode) return;
    if (newMode !== mode) {
      toggleColorMode();
    }
  };

  const handleLanguageChange = (
    event: React.MouseEvent<HTMLElement>,
    newLang: "KZ" | "RU" | "EN" | null,
  ) => {
    if (!newLang) return;
    setLanguage(newLang);
    const langMap = {
      KZ: "kk",
      RU: "ru",
      EN: "en",
    };
    i18n.changeLanguage(langMap[newLang]);
  };



  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ mt: 5 }}>
      <Toolbar
        sx={{
          width: "70%",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Левая часть: имя, должность, локация, соцсети */}
        <Box>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            {t('fio')}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Frontend Engineer @ MN Partners
          </Typography>
          <Box
            sx={{ display: "flex", gap: "5px", alignItems: "center", mt: 0.5 }}
          >
            <LocationOnIcon sx={{ fontSize: "18px" }} />
            <Typography variant="body2" color="text.secondary">
              {t('Astana')}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
            <IconButton
              aria-label="GitHub"
              onClick={() =>
                window.open(
                  "https://github.com/AblaikhanZholdasbekov",
                  "_blank",
                )
              }
              sx={{ border: 1, borderRadius: 2 }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/ablaikhan-zholdasbekov-ab0368266/",
                  "_blank",
                )
              }
              sx={{ border: 1, borderRadius: 2 }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              aria-label="Email"
              onClick={() =>
                (window.location.href = "mailto:zholdasbekov0303@gmail.com")
              }
              sx={{ border: 1, borderRadius: 2 }}
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              aria-label="Telegram"
              onClick={() => window.open("https://t.me/ablaikhanzh", "_blank")}
              sx={{ border: 1, borderRadius: 2 }}
            >
              <TelegramIcon />
            </IconButton>
            <Button
              variant="outlined"
              sx={{
                borderRadius: 2,
                minWidth: "auto",
                padding: "6px 16px",
              }}
            >
              {t('resume')}
            </Button>
          </Box>
        </Box>

        {/* Правая часть: кнопка-иконка, открывающая Popover */}
        <Box>
          <IconButton onClick={handleOpen} sx={{ border: 1, borderRadius: 2 }}>
            <SettingsIcon />
          </IconButton>

          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            PaperProps={{ sx: { mt: 1, borderRadius: 5 } }}
          >
            <Card sx={{ minWidth: 260 }}>
              <CardContent>
                {/* 1. Выбор языка */}
                <Typography variant="subtitle1" gutterBottom>
                  {t('lang')}
                </Typography>
                <ToggleButtonGroup
                  exclusive
                  value={language}
                  onChange={handleLanguageChange}
                  sx={{
                    mb: 2,
                    borderRadius: 2,
                    border: 1,
                    overflow: "hidden",
                    width: "100%", // Растягиваем на всю ширину родителя
                  }}
                >
                  <ToggleButton
                    value="EN"
                    sx={{
                      flex: 1,
                      justifyContent: "center",
                    }}
                  >
                    EN
                  </ToggleButton>
                  <ToggleButton
                    value="KZ"
                    sx={{
                      flex: 1, // Кнопка занимает всю доступную ширину внутри группы
                      justifyContent: "center", // Текст (KZ) по центру
                    }}
                  >
                    KZ
                  </ToggleButton>

                  <ToggleButton
                    value="RU"
                    sx={{
                      flex: 1,
                      justifyContent: "center",
                    }}
                  >
                    RU
                  </ToggleButton>
                </ToggleButtonGroup>

                {/* 2. Переключатель темы */}
                <Typography variant="subtitle1" gutterBottom>
                  {t('theme')}
                </Typography>
                <ToggleButtonGroup
                  exclusive
                  value={mode}
                  onChange={handleThemeChange}
                  sx={{
                    borderRadius: 2,
                    border: 1,
                    overflow: "hidden",
                  }}
                >
                  <ToggleButton
                    value="light"
                    sx={{
                      border: 0,
                      textTransform: "none",
                      "&.Mui-selected": {
                        backgroundColor: (theme) =>
                          theme.palette.mode === "light"
                            ? `${theme.palette.primary.main}10`
                            : `${theme.palette.primary.main}20`,
                        color: (theme) => theme.palette.primary.main,
                        "&:hover": {
                          backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                              ? `${theme.palette.primary.main}20`
                              : `${theme.palette.primary.main}30`,
                        },
                      },
                    }}
                  >
                    <WbSunnyIcon sx={{ mr: 1 }} />
                    {t('lightTheme')}
                  </ToggleButton>

                  <ToggleButton
                    value="dark"
                    sx={{
                      border: 0,
                      textTransform: "none",
                      "&.Mui-selected": {
                        backgroundColor: (theme) =>
                          theme.palette.mode === "light"
                            ? `${theme.palette.primary.main}10`
                            : `${theme.palette.primary.main}20`,
                        color: (theme) => theme.palette.primary.main,
                        "&:hover": {
                          backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                              ? `${theme.palette.primary.main}20`
                              : `${theme.palette.primary.main}30`,
                        },
                      },
                    }}
                  >
                    <DarkModeIcon sx={{ mr: 1 }} />
                    {t('dark')}
                  </ToggleButton>
                </ToggleButtonGroup>

                {/* 3. Блок выбора цветовой схемы */}
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    {t('сolorGamma')}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        backgroundColor: "#7d35e1",
                        cursor: "pointer",
                      }}
                      onClick={() => onColorChange("purple")}
                    />
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        backgroundColor: "#1976d2",
                        cursor: "pointer",
                      }}
                      onClick={() => onColorChange("blue")}
                    />
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        backgroundColor: "#f50057",
                        cursor: "pointer",
                      }}
                      onClick={() => onColorChange("pink")}
                    />
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        backgroundColor: "#FFC107",
                        cursor: "pointer",
                      }}
                      onClick={() => onColorChange("yellow")}
                    />
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        backgroundColor: "#4CAF50",
                        cursor: "pointer",
                      }}
                      onClick={() => onColorChange("green")}
                    />
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        backgroundColor: "#FF9800",
                        cursor: "pointer",
                      }}
                      onClick={() => onColorChange("orange")}
                    />
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        backgroundColor: "#13b7f6",
                        cursor: "pointer",
                      }}
                      onClick={() => onColorChange("ocean")}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Popover>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
