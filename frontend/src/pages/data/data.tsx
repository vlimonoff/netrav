import { Route, Routes } from 'react-router-dom';
import { ArtistsList } from '../../components/artists-list';
import { CreateArtistForm } from '../../components';
import { CreateAssociationForm } from '../../components/create-association-form';
import { DataNavigation } from '../../components/data-navigation';

export const Data = () => {
  return (
    <>
      <DataNavigation />

      <Routes>
        <Route path='/data/artists' element={<ArtistsList />} />
        <Route path='/data/artists/create' element={<CreateArtistForm />} />
        <Route
          path='/data/associations/create'
          element={<CreateAssociationForm />}
        />
      </Routes>
    </>
  );
};
