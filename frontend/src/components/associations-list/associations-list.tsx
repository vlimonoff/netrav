import { useEffect, useState } from "react";
import { Paper, Table, TableBody, TableContainer } from "@mui/material";

import { IArtist, IArtmovements, IAssociation } from "../../types";
import { endpoints } from "../../endpoints";
import { Loader } from "../loader";
import { columns } from "./constants";
import { styles } from "./styles";
import { TableHeader } from "../tableHeader";
import { TableRow } from "./table-row";
import { EditModal } from "../editModal";
import { DeleteModal } from "../deleteModal";

export const AssociationsList = () => {
  const [rows, setRows] = useState<Array<IAssociation> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [checkedList, setCheckedList] = useState<
    (IAssociation | IArtist | IArtmovements)[]
  >([]);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [currentRow, setCurrentRow] = useState<IAssociation | null>(null);

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
    console.log(checkedList);
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
            rows={rows}
            columns={columns}
            checkedCount={checkedList.length}
            rowsCount={rows?.length || 0}
            checkedList={checkedList}
            setCheckedList={setCheckedList}
          />
          <TableBody>
            {rows?.map((row: IAssociation, idx) => (
              <TableRow
                key={row.id}
                row={row}
                checkedList={checkedList}
                setCheckedList={setCheckedList}
                openModalEdit={openModalEdit}
                openModalDelete={openModalDelete}
              />
            ))}
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
          type="associations"
          isOpenDeleteModal={isOpenDeleteModal}
          currentRow={currentRow}
          setIsOpenDeleteModal={setIsOpenDeleteModal}
        />
      )}
    </Paper>
  );
};
