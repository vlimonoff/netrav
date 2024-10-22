import { FC, MutableRefObject, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  Menu,
  Tooltip,
  useTheme,
} from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import NavigationIcon from "@mui/icons-material/Navigation";
import { ColorModeContext } from "../../theme";

import { styles } from "./styles";
import { routes } from "../../routes";
import { IProps } from "./types";
import React from "react";

import { Navigate as NavigateManual } from "../../pages/manual/navigate";

export const Navigation: FC<IProps> = ({
  ref1,
  ref2,
  ref3,
  ref4,
  ref5,
  ref6,
  ref7,
  width,
  height,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const handleClick = (link: string): void => {
    navigate(link);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickNavigation = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const executeScroll = (ref: MutableRefObject<HTMLDivElement | undefined>) => {
    setAnchorEl(null);
    ref?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <Box sx={styles.wrapper}>
      {(width < 1338 || height < 325) && (
        <>
          <Tooltip title="Навигация">
            <IconButton
              id="navigation"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickNavigation}
            >
              <NavigationIcon />
            </IconButton>
          </Tooltip>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={executeScroll}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <NavigateManual
              ref1={ref1}
              ref2={ref2}
              ref3={ref3}
              ref4={ref4}
              ref5={ref5}
              ref6={ref6}
              ref7={ref7}
            />
            </Menu>   
        </>
      )}
      {routes.map((route) => (
        <Button
          key={route.source}
          sx={styles.button}
          onClick={() => handleClick(route.source)}
          color={
            route.source.indexOf("data") >= 0
              ? location.pathname.indexOf("data") >= 0
                ? "primary"
                : "secondary"
              : location.pathname === route.source
              ? "primary"
              : "secondary"
          }
          size="small"
        >
          {route.title}
        </Button>
      ))}

      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "light" ? (
          <LightMode color="secondary" />
        ) : (
          <DarkMode color="secondary" />
        )}
      </IconButton>
    </Box>
  );
};
