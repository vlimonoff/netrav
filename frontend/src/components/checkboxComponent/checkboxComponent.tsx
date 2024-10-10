import { FC } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { IProps } from "./types";

export const CheckboxComponent: FC<IProps> = ({
  id,
  idx,
  checkedList,
  setCheckedList,
  // setCurrentRowsClick,
  rows,
  currentRows,
  setCurrentRows,
  checkedListRef,
}) => {

  // const checkedListRef = useRef<Array<Number>>([]);

  // useEffect(() => {
  //   checkedListRef.current = checkedList;
  // }, [checkedList]);

  const handleChange = (id: number) => {
    setCheckedList((prev) =>
      prev.includes(id)
        ? prev.filter((currentId) => currentId !== id)
        : [...prev, id]
    );

    // checkedListRef.current = checkedList;
    // console.log(checkedListRef);

    getRowsChecked();
    // console.log(currentRows);
    // console.log(checkedList);
    // setCurrentRows([]);
    // console.log(currentRows);
    // rows?.forEach((row) => {
    //   checkedList.forEach((currentId) => {
    //     currentId === row.id && setCurrentRows([...currentRows, row]);
    //   });
    // });
    // console.log(currentRows);

    // let arr : SetStateAction<IArtist[]> | SetStateAction<IAssociation[]> | SetStateAction<IArtmovements[]> = [];

    // setCurrentRows(rows?.filter((row) => row.id === checkedList.indexOf(row.id)));
    // rows.forEach((row) =>
    //   checkedList.forEach((currentId) => {
    //     currentId === row.id && arr.push(row);
    //   })
    // );
    // setCurrentRows(arr);
  };

  const getRowsChecked = () => {
    console.log(checkedList);
    console.log(checkedListRef);
    rows?.forEach((row) => {
      checkedListRef?.current.forEach((currentId) => {
        currentId === row.id && setCurrentRows([...currentRows, row]);
      });
    });
    // console.log(currentRows);
  };

  return (
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
  );
};
