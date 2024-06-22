import { Outlet } from 'react-router-dom';
import { DataNavigation } from '../../components/data-navigation';

export const Data = () => {
  return (
    <>
      <DataNavigation />
      <Outlet />
    </>
  );
};
