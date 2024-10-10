import { useEffect, useRef, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  IconButton,
  Box,
} from "@mui/material";

import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { endpoints } from "../../endpoints";
import { Loader } from "../loader";
import { IArtist, IArtmovements, IAssociation } from "../../types";
import { columns } from "./constants";
import { styles } from "./styles";
import { TableHeader } from "../tableHeader";
import { CheckboxComponent } from "../checkboxComponent";
import { DeleteModal } from "../deleteModal";
import { EditModal } from "../editModal";
// import { DataCorrectionButtons } from "../dataCorrectionButtons";

export const AssociationsList = () => {
  const [rows, setRows] = useState<Array<IAssociation> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [checkedList, setCheckedList] = useState<Array<number>>([]);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [currentRow, setCurrentRow] = useState<IAssociation | null>(null);
  const [currentRows, setCurrentRows] = useState<(IAssociation | IArtist | IArtmovements)[]>([]);
  // const [currentRowsClick, setCurrentRowsClick] = useState(false);

  const checkedListRef = useRef<Array<Number>>([]);

  // useEffect(() => {
  //   checkedListRef.current = checkedList;
  // }, [checkedList]);

  checkedListRef.current = checkedList;
  const fetchArtists = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(endpoints.ASSOCIATIONS);

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

  const openModalEdit = (row: IAssociation) => {
    setIsOpenEditModal(!isOpenEditModal);
    setCurrentRow(row);
  };

  const openModalDelete = (row: IAssociation) => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
    setCurrentRow(row);
  };

  return (
    <Paper sx={styles.paper}>
      {isLoading && <Loader />}

      <TableContainer sx={styles.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeader
            type="associations"
            columns={columns}
            checkedCount={checkedList.length}
            rowsCount={rows?.length || 0}
            setCheckedList={setCheckedList}
            checkedList={checkedList}
            rows={rows}
            currentRows={currentRows}
            currentRow={currentRow}
            // setCurrentRows={setCurrentRows}
            // currentRowsClick={currentRowsClick}
            // setCurrentRowsClick={setCurrentRowsClick}
          />
          <TableBody>
            {rows?.map((row: IAssociation, idx) => {
              const {
                title,
                workStart,
                workEnd,
                status,
                city,
                members,
                otherInfo,
                owners,
                id,
              } = row;

              return (
                <TableRow hover tabIndex={-1} key={idx}>
                  <TableCell>
                    <CheckboxComponent
                      id={id}
                      idx={idx}
                      checkedList={checkedList}
                      setCheckedList={setCheckedList}
                      // setCurrentRowsClick={setCurrentRowsClick}
                      rows={rows}
                      currentRows={currentRows}
                      setCurrentRows={setCurrentRows}
                      checkedListRef={checkedListRef}
                    />
                  </TableCell>
                  <TableCell>
                    <Box sx={styles.scroll}> {title || "-"} </Box>
                  </TableCell>
                  <TableCell>{`${workStart || "?"}-${
                    workEnd || "?"
                  }`}</TableCell>
                  <TableCell>{status || "-"}</TableCell>
                  <TableCell>{city || "-"}</TableCell>
                  <TableCell>{otherInfo || "-"}</TableCell>
                  <TableCell>
                    <Box sx={styles.scroll}>
                      {owners
                        ?.map(
                          (owner: IArtist) =>
                            `${owner.lastName} ${owner.firstName?.[0]}.${
                              owner.patronymic ? `${owner.patronymic[0]}.` : ""
                            }`
                        )
                        .join(", ") || "-"}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={styles.scroll}>
                      {members
                        ?.map(
                          (member: IArtist) =>
                            `${member.lastName} ${member.firstName?.[0]}.${
                              member.patronymic
                                ? `${member.patronymic[0]}.`
                                : ""
                            }`
                        )
                        .join(", ") || "-"}
                    </Box>
                  </TableCell>
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
          type="associations"
          isOpenEditModal={isOpenEditModal}
          currentRowAssociation={currentRow}
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
