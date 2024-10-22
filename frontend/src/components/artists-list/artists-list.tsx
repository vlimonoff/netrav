import { useEffect, useState } from "react";
import { Paper, Table, TableBody, TableContainer } from "@mui/material";

import { IArtist, IArtmovements, IAssociation } from "../../types";
import { endpoints } from "../../endpoints";
import { Loader } from "../loader/loader";
import { columns } from "./constants";
import { styles } from "./styles";
import { TableHeader } from "../tableHeader";
import { TableRow } from "./table-row";
import { EditModal } from "../editModal";
import { DeleteModal } from "../deleteModal";

export const ArtistsList = () => {
  const [rows, setRows] = useState<Array<IArtist> | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [checkedList, setCheckedList] = useState<
    (IAssociation | IArtist | IArtmovements)[]
  >([]);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [currentRow, setCurrentRow] = useState<IArtist | null>(null);

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

  const openModalEdit = (row: IArtist) => {
    setIsOpenEditModal(!isOpenEditModal);
    setCurrentRow(row);
  };

  const openModalDelete = (row: IArtist) => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
    setCurrentRow(row);
  };

  return (
    <Paper sx={styles.paper}>
      {isLoading && <Loader />}

      <TableContainer sx={styles.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeader
            type="artist"
            rows={rows}
            columns={columns}
            checkedCount={checkedList.length}
            rowsCount={rows?.length || 0}
            checkedList={checkedList}
            setCheckedList={setCheckedList}
          />
          <TableBody>
            {rows?.map((row: IArtist) => (
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
          type="artist"
          isOpenEditModal={isOpenEditModal}
          currentRowArtist={currentRow}
          setIsOpenEditModal={setIsOpenEditModal}
        />
      )}
      {isOpenDeleteModal && (
        <DeleteModal
          type={"artist"}
          isOpenDeleteModal={isOpenDeleteModal}
          currentRow={currentRow}
          setIsOpenDeleteModal={setIsOpenDeleteModal}
        />
      )}
    </Paper>
  );
};
