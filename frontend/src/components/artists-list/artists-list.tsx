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
import { Loader } from "../loader/loader";
import { IArtist } from "../../types";
import { columns } from "./constants";
import { styles } from "./styles";
import { TableHeader } from "../tableHeader";

export const ArtistsList = () => {
  const [rows, setRows] = useState<Array<IArtist> | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchArtists = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(endpoints.ARTISTS);

      const data = await response.json();

      if (data) {
        setRows(data);
      }
    } catch (error) {}

    setIsLoading(false);
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  return (
    <Paper sx={styles.paper}>
      {isLoading && <Loader />}

      <TableContainer sx={styles.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeader columns={columns} />
          <TableBody>
            {rows?.map((row: IArtist, idx) => {
              const {
                lastName,
                firstName,
                patronymic,
                birthDate,
                deathDate,
                birthPlace,
                deathPlace,
              } = row;

              return (
                <TableRow hover tabIndex={-1} key={idx}>
                  <TableCell>{lastName || "-"}</TableCell>
                  <TableCell>{firstName || "-"}</TableCell>
                  <TableCell>{patronymic || "-"}</TableCell>
                  <TableCell>{`${birthDate || "-"}${
                    birthPlace ? `\n(${birthPlace})` : ""
                  }`}</TableCell>
                  <TableCell>{`${deathDate || "-"}${
                    deathPlace ? `\n(${deathPlace})` : ""
                  }`}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
