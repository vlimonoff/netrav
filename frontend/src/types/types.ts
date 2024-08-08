export interface IArtist {
    artMovements: Array<number>;
    lastName: string | null;
    firstName: string | null;
    patronymic: string | null;
    isArtist: boolean | null;
    birthDate: string | null;
    deathDate: string | null;
    birthPlace: string | null;
    deathPlace: string | null;
    otherInfo: string | null;
    wikiUrl: string | null;
  }
  
  export interface IAssociation {
      id: string;
      members: Array<IArtist>;
      owners: Array<IArtist>;
      title: string | null;
      workStart: string | null;
      workEnd: string | null;
      status: string | null;
      city: string | null;
      url: string | null;
      otherInfo: string | null;
  }
  export interface IArtmovements {
      id: string;
      title: string | null;
      info: string | null;
  }

//   TODO: разобраться потом почему ошибка экспорта
  export {};