import { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { endpoints } from "../../endpoints";
import { Loader } from "../loader/loader";
import { IArtmovements } from "../../types";

interface Column {
  id: string;
  label: string;
  minWidth?: number;
}

const columns: readonly Column[] = [
  {
    id: "title",
    label: "Наименование",
  },
  {
    id: "info",
    label: "Определение",
    minWidth: 300,
  },
];

export const ArtMovementsList = () => {
  const [rows, setRows] = useState<Array<IArtmovements> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchArtmovements = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(endpoints.ART_MOVEMENTS);

      const data = await response.json();

      if (data) {
        setRows(data);
      }
    } catch (error) {}

    setIsLoading(false);
  };

  useEffect(() => {
    fetchArtmovements();
  }, []);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      {isLoading && <Loader />}

      <TableContainer sx={{ maxHeight: "80vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row: IArtmovements, idx) => {
              const { title, info } = row;

              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                  <TableCell>{title || "-"}</TableCell>
                  <TableCell>{info || "-"}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
