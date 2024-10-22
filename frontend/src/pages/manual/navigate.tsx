import { Typography } from "@mui/material";
import { FC, MutableRefObject } from "react";
import { IProps } from "./types";

export const Navigate: FC<IProps> = ({
  ref1,
  ref2,
  ref3,
  ref4,
  ref5,
  ref6,
  ref7,
}) => {
  const executeScroll = (ref: MutableRefObject<HTMLDivElement | undefined>) =>
    ref?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  return (
    <>
      <Typography onClick={() => executeScroll(ref7)}>Предисловие</Typography>
      <Typography onClick={() => executeScroll(ref1)}>
        Понятийный аппарат
      </Typography>
      <Typography onClick={() => executeScroll(ref2)}>
        Техническая часть
      </Typography>
      <Typography onClick={() => executeScroll(ref3)}>
        Глобальные характеристики
      </Typography>
      <Typography onClick={() => executeScroll(ref4)}>
        Этический момент
      </Typography>
      <Typography onClick={() => executeScroll(ref5)}>Заключение</Typography>
      <Typography onClick={() => executeScroll(ref6)}>Case studies</Typography>
    </>
  );
};
