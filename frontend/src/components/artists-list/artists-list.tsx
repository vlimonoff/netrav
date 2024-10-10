import { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  // Checkbox,
  // FormControlLabel,
  IconButton,
} from "@mui/material";

import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { endpoints } from "../../endpoints";
import { Loader } from "../loader/loader";
// import { IArtist } from "../../types";
import { columns } from "./constants";
import { styles } from "./styles";
import { TableHeader } from "../tableHeader";
import { EditModal } from "../editModal";
import { DeleteModal } from "../deleteModal";
// import { DataCorrectionButtons } from "../dataCorrectionButtons";
import { CheckboxComponent } from "../checkboxComponent";


import { IArtist, IArtmovements, IAssociation } from "../../types";

export const ArtistsList = () => {
  const [rows, setRows] = useState<Array<IArtist> | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [checkedList, setCheckedList] = useState<Array<number>>([]);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [currentRow, setCurrentRow] = useState<IArtist | null>(null);
  // const [currentRows, setCurrentRows] = useState<Array<IArtist> | null>(null);
  const [currentRows, setCurrentRows] = useState<(IAssociation | IArtist | IArtmovements)[]>([]);
  // const [currentRowsClick, setCurrentRowsClick] = useState(false);

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

  // const handleChange = (id: number) => {
  //   setCheckedList(
  //     checkedList.includes(id)
  //       ? checkedList.filter((currentId) => currentId !== id)
  //       : [...checkedList, id]
  //   );
  // };

  // const handleChangeAllRows = () => {
  //   setCheckedList(
  //     checkedList.length === rows?.length
  //       ? []
  //       : rows?.map((row) => row.id) || []
  //   );
  // };

  const openModalEdit = (row: IArtist) => {
    setIsOpenEditModal(!isOpenEditModal);
    setCurrentRow(row);
  };

  const openModalDelete = (row: IArtist) => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
    setCurrentRow(row);
  };

  // const getCurrentRows = (row: IArtist) => {
  //   setCurrentRows([...currentRows, row]);
  // };

  return (
    <Paper sx={styles.paper}>
      {isLoading && <Loader />}

      <TableContainer sx={styles.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeader
            type="artist"
            columns={columns}
            currentRows={currentRows}
            checkedCount={checkedList.length}
            rowsCount={rows?.length || 0}
            setCheckedList={setCheckedList}
            checkedList={checkedList}
            rows={rows}
            currentRow={currentRow}
            // setCurrentRow={setCurrentRow}
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

              return (
                <TableRow hover tabIndex={-1} key={idx}>
                  <TableCell>
                    {/* <FormControlLabel
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
                    /> */}
                    <CheckboxComponent
                      id={id}
                      idx={idx}
                      checkedList={checkedList}
                      setCheckedList={setCheckedList}
                      rows={rows}
                      currentRows={currentRows}
                      setCurrentRows={setCurrentRows}
                      // rows={rows} 
                      // currentRows={currentRows} 
                      // setCurrentRows={setCurrentRows}    
                      // rowsArtist={rows}
                      // setCurrentRowsArtist={setCurrentRows}
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
                    {/* <DataCorrectionButtons
                      // row={row}
                      openModalEdit={openModalEdit(row)}
                      openModalDelete={openModalDelete(row)}
                    /> */}
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
          currentRowArtist={currentRow}
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
