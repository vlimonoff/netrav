import { FC, useState } from 'react';
import { Button as MuiButton } from '@mui/material';
import { Props } from './types';

export const Button: FC<Props> = ({ title, flag }): React.ReactElement => {
  const [variant, setVariant] = useState<'contained' | 'outlined'>('contained');

  const handleClick = (): void => {
    setVariant((prev) => (prev === 'outlined' ? 'contained' : 'outlined'));
  };

  return (
    <MuiButton variant={variant} onClick={handleClick}>
      {title}
    </MuiButton>
  );
};
