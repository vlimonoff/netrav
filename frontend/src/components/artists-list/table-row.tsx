import { FC, useCallback, useEffect, useState } from "react";
import {
  TableCell,
  TableRow as MuiTableRow,
  Tooltip,
  Link,
  IconButton,
} from "@mui/material";
import { DataCorrectionButtons } from "../dataCorrectionButtons";
import { IRowProps } from "./types";
import { CheckboxComponent } from "../checkboxComponent";
import LinkIcon from "@mui/icons-material/Link";
import { IArtMovement } from "../create-artist-form/types";
import { endpoints } from "../../endpoints";
import { IArtist } from "../../types";

export const TableRow: FC<IRowProps> = ({
  row,
  checkedList,
  setCheckedList,
  openModalEdit,
  openModalDelete,
}) => {
  const [artMovements, setArtMovements] = useState<Array<IArtMovement>>([]);

  const fetchArtMovements = useCallback(async () => {
    try {
      const response = await fetch(endpoints.ART_MOVEMENTS);
      const data = await response.json();

      if (data) {
        setArtMovements(data);
      }
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchArtMovements();
  }, [fetchArtMovements]);

  const returnArtMovements = (row: IArtist) => {
    return artMovements
      .filter((artmovement) => row?.artMovements.includes(artmovement.id))
      .map((artmovement) => artmovement.title)
      .join(", ");
  };

  return (
    <MuiTableRow hover role="checkbox" tabIndex={-1}>
      <TableCell>
        <CheckboxComponent
          row={row}
          checkedList={checkedList}
          setCheckedList={setCheckedList}
        />
      </TableCell>
      <TableCell>{row.lastName || "-"}</TableCell>
      <TableCell>{row.firstName || "-"}</TableCell>
      <TableCell>{row.patronymic || "-"}</TableCell>
      <TableCell>{`${row.birthDate || "-"}${
        row.birthPlace ? `\n(${row.birthPlace})` : ""
      }`}</TableCell>
      <TableCell>{`${row.deathDate || "-"}${
        row.deathPlace ? `\n(${row.deathPlace})` : ""
      }`}</TableCell>
      <TableCell>
        {row.artMovements.length > 0 ? returnArtMovements(row) : "-"}
      </TableCell>
      <TableCell>
        {row.wikiUrl ? (
          <Tooltip title={"Ссылка на Wiki"}>
            <Link href={row.wikiUrl}>
              <IconButton aria-label="link">
                <LinkIcon />
              </IconButton>
            </Link>
          </Tooltip>
        ) : (
          "-"
        )}
      </TableCell>
      <TableCell>
        <DataCorrectionButtons
          openModalEdit={() => openModalEdit(row)}
          openModalDelete={() => openModalDelete(row)}
        />
      </TableCell>
    </MuiTableRow>
  );
};
