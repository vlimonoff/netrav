import { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { endpoints } from "../../endpoints";
import { Loader } from "../loader";
import { IArtmovements } from "../../types";
import { columns } from "./constants";
import { styles } from "./styles";
import { TableHeader } from "../tableHeader";

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
    <Paper sx={styles.paper}>
      {isLoading && <Loader />}

      <TableContainer sx={styles.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeader columns={columns}/>
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
