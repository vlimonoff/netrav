import { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";

import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { DataGrid } from "@mui/x-data-grid";

import { endpoints } from "../../endpoints";
import { Loader } from "../loader/loader";
import { IArtist } from "../../types";
import { columns, columnsForDataGrid, Artist } from "./constants";
import { styles } from "./styles";
import { TableHeader } from "../tableHeader";
import { EditModal } from "../editModal";
import { DeleteModal } from "../deleteModal";

export const ArtistsList = () => {
  const [rows, setRows] = useState<Array<IArtist> | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);
  const [checkedList, setCheckedList] = useState<Array<number>>([]);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [currentRow, setCurrentRow] = useState<IArtist>();
  const [currentRows, setCurrentRows] = useState<Array<IArtist>>([]);

  // const deleteButton = (
  //   <IconButton aria-label="delete">
  //     {" "}
  //     <DeleteIcon />{" "}
  //   </IconButton>
  // );
  // const editButton = (
  //   <IconButton aria-label="edit">
  //     {" "}
  //     <EditIcon />{" "}
  //   </IconButton>
  // );

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

  const handleChange = (id: number) => {
    setCheckedList(
      checkedList.includes(id)
        ? checkedList.filter((currentId) => currentId !== id)
        : [...checkedList, id]
    );
  };

  const handleChangeAllRows = () => {
    setCheckedList(
      checkedList.length === rows?.length ? [] : rows?.map((row) => row.id) || []
    );
  };

  const openModalEdit = (row: IArtist) => {
    setIsOpenEditModal(!isOpenEditModal);
    setCurrentRow(row);
  };

  const openModalDelete = (row: IArtist) => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
    setCurrentRow(row);
  };

  // const gettingArray = (rows?: Array<IArtist> | null) => {
  //   const array: Array<Artist> = [];
  //   // const rowsArray1: Artist[] = new Array<Artist>();

  //   rows?.forEach((row: IArtist) => {
  //     const {
  //       id,
  //       lastName,
  //       firstName,
  //       patronymic,
  //       birthDate,
  //       deathDate,
  //       birthPlace,
  //       deathPlace,
  //     } = row;
  //     array.push({
  //       id,
  //       lastName,
  //       firstName,
  //       patronymic,
  //       birthDate,
  //       deathDate,
  //       birthPlace,
  //       deathPlace,

  //     });
  //   });

  //   const rowsArray: readonly any[] = array;

  //   return rowsArray;
  // };

  // const rowsArray: readonly any[] = gettingArray(rows);

  // let rowsArray;
  // console.log(gettingArray(rows));

  return (
    <Paper sx={styles.paper}>
      {isLoading && <Loader />}

      {/* {rows?.map((row: IArtist, idx) => {
        const rowsArray: readonly any[] = gettingArray(rows);
        return (
          <DataGrid
            rows={rowsArray}
            columns={columnsForDataGrid}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        );
       
      })} */}

      {/* <DataGrid
            rows={gettingArray(rows)}
            columns={columnsForDataGrid}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          /> */}

      <TableContainer sx={styles.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeader
            columns={columns}
            handleChangeAllRows={handleChangeAllRows}
            currentRows={currentRows}
            checkedCount={checkedList.length}
            rowsCount={rows?.length || 0}
          />
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
                id,
              } = row;

              // gettingArray(rows);
              // const rowsArray: readonly any[] = gettingArray(rows);

              return (
                <TableRow hover tabIndex={-1} key={idx}>
                  <TableCell>
                    <FormControlLabel
                      label=""
                      control={
                        <Checkbox
                          defaultChecked
                          checked={checkedList.includes(id)}
                          onChange={() => handleChange(id)}
                          inputProps={{
                            "aria-label": `${idx}`,
                          }}
                        />
                      }
                    />
                  </TableCell>
                  <TableCell>{lastName || "-"}</TableCell>
                  <TableCell>{firstName || "-"}</TableCell>
                  <TableCell>{patronymic || "-"}</TableCell>
                  <TableCell>{`${birthDate || "-"}${
                    birthPlace ? `\n(${birthPlace})` : ""
                  }`}</TableCell>
                  <TableCell>{`${deathDate || "-"}${
                    deathPlace ? `\n(${deathPlace})` : ""
                  }`}</TableCell>
                  <TableCell>
                    <Tooltip title="Редактировать запись">
                      <IconButton
                        aria-label="edit"
                        onClick={() => openModalEdit(row)}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Удалить запись">
                      <IconButton
                        aria-label="delete"
                        onClick={() => openModalDelete(row)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {isOpenEditModal && (
        <EditModal
          type="artist"
          isOpenEditModal={isOpenEditModal}
          currentRow={currentRow}
          setIsOpenEditModal={setIsOpenEditModal}
        />
      )}
      {isOpenDeleteModal && (
        <DeleteModal
          isOpenDeleteModal={isOpenDeleteModal}
          currentRow={currentRow}
          setIsOpenDeleteModal={setIsOpenDeleteModal}
        />
      )}
    </Paper>
  );
};
