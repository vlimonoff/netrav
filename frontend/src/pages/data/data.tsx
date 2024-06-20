import { Route, Routes } from 'react-router-dom';
import { ArtistsList } from '../../components/artists-list';
import { CreateArtistForm } from '../../components';
import { CreateAssociationForm } from '../../components/create-association-form';
import { DataNavigation } from '../../components/data-navigation';
import { AssociationsList } from '../../components/associations-list';

export const Data = () => {
  return (
    <>
      <DataNavigation />

      <Routes>
        <Route path='/data/artists' element={<ArtistsList />} />
        <Route path='/data/artists/create' element={<CreateArtistForm />} />
        <Route
          path='/data/associations'
          element={<AssociationsList />}
        />
        <Route
          path='/data/associations/create'
          element={<CreateAssociationForm />}
        />
      </Routes>
    </>
  );
};
