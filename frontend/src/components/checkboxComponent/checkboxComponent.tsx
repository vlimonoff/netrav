import { FC } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { IProps } from './types';
import { IArtist, IArtmovements, IAssociation } from '../../types';

export const CheckboxComponent: FC<IProps> = ({
  row,
  checkedList,
  setCheckedList,
}) => {

  const handleChange = (row: IArtist | IAssociation | IArtmovements) => {
    setCheckedList(
      checkedList?.find((elem) => elem.id === row.id) 
      ? checkedList?.filter((elem) => elem.id !== row.id) 
      : [...checkedList, row]
    );
  };

  return (
    <FormControlLabel
      label=''
      control={
        <Checkbox
          checked={checkedList.some((elem) => elem.id === row.id)}
          onChange={() => handleChange(row)}
        />
      }
    />
  );
};
