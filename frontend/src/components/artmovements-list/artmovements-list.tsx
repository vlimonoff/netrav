import { useEffect, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  // FormControlLabel,
  // Checkbox,
  IconButton,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { endpoints } from '../../endpoints';
import { Loader } from '../loader';
// import { IArtmovements } from "../../types";
import { columns } from './constants';
import { styles } from './styles';
import { TableHeader } from '../tableHeader';
import { EditModal } from '../editModal';
import { DeleteModal } from '../deleteModal';
// import { DataCorrectionButtons } from "../dataCorrectionButtons";
import { CheckboxComponent } from '../checkboxComponent';
import { IArtist, IArtmovements, IAssociation } from '../../types';
import { DataCorrectionButtons } from '../dataCorrectionButtons';
import { TableRow } from './table-row';

export const ArtMovementsList = () => {
  const [rows, setRows] = useState<Array<IArtmovements> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [checkedList, setCheckedList] = useState<Array<number>>([]);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [currentRow, setCurrentRow] = useState<IArtmovements | null>(null);
  const [currentRows, setCurrentRows] = useState<
    (IAssociation | IArtist | IArtmovements)[]
  >([]);

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

  const handleChange = (id: number) => {
    setCheckedList(
      checkedList.includes(id)
        ? checkedList.filter((currentId) => currentId !== id)
        : [...checkedList, id]
    );
  };

  // const handleChangeAllRows = () => {
  //   setCheckedList(
  //     checkedList.length === rows?.length ? [] : rows?.map((row) => row.id) || []
  //   );
  // };

  const openModalEdit = (row: IArtmovements) => {
    setIsOpenEditModal(!isOpenEditModal);
    setCurrentRow(row);
  };

  const openModalDelete = (row: IArtmovements) => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
    setCurrentRow(row);
  };

  return (
    <Paper sx={styles.paper}>
      {isLoading && <Loader />}

      <TableContainer sx={styles.container}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHeader
            type='artmovements'
            columns={columns}
            // handleChangeAllRows={handleChangeAllRows}
            currentRows={currentRows}
            checkedCount={checkedList.length}
            rowsCount={rows?.length || 0}
            setCheckedList={setCheckedList}
            checkedList={checkedList}
            rows={rows}
            currentRow={currentRow}
          />

          <TableBody>
            {rows?.map((row: IArtmovements) => (
              <TableRow
                key={row.id}
                row={row}
                checked={checkedList.includes(row.id)}
                onChange={() => handleChange(row.id)}
                openModalEdit={openModalEdit}
                openModalDelete={openModalDelete}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {isOpenEditModal && (
        <EditModal
          type='artmovements'
          isOpenEditModal={isOpenEditModal}
          currentRowArtmovements={currentRow}
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
