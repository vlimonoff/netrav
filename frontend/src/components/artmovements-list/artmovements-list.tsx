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

export const ArtMovementsList = () => {
  const [rows, setRows] = useState<Array<IArtmovements> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [checkedList, setCheckedList] = useState<
    (IAssociation | IArtist | IArtmovements)[]
  >([]);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [currentRow, setCurrentRow] = useState<IArtmovements | null>(null);

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

  const openModalEdit = (row: IArtmovements) => {
    setIsOpenEditModal(!isOpenEditModal);
    setCurrentRow(row);
    console.log(checkedList);
  };

  const openModalDelete = (row: IArtmovements) => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
    setCurrentRow(row);
  };

  return (
    <Paper sx={styles.paper}>
      {isLoading && <Loader />}

      <TableContainer sx={styles.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeader
            type="artmovements"
            rows={rows}
            columns={columns}
            checkedCount={checkedList.length}
            rowsCount={rows?.length || 0}
            checkedList={checkedList}
            setCheckedList={setCheckedList}
          />
          <TableBody>
            {rows?.map((row: IArtmovements) => (
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
          type="artmovements"
          isOpenEditModal={isOpenEditModal}
          currentRowArtmovements={currentRow}
          setIsOpenEditModal={setIsOpenEditModal}
        />
      )}

      {isOpenDeleteModal && (
        <DeleteModal
          type="artmovements"
          isOpenDeleteModal={isOpenDeleteModal}
          currentRow={currentRow}
          setIsOpenDeleteModal={setIsOpenDeleteModal}
        />
      )}
    </Paper>
  );
};
