import { MutableRefObject } from 'react';

export interface IProps {
    ref1: MutableRefObject<HTMLDivElement | undefined>;
    ref2: MutableRefObject<HTMLDivElement | undefined>;
    ref3: MutableRefObject<HTMLDivElement | undefined>;
    ref4: MutableRefObject<HTMLDivElement | undefined>;
    ref5: MutableRefObject<HTMLDivElement | undefined>;
    ref6: MutableRefObject<HTMLDivElement | undefined>;
    ref7: MutableRefObject<HTMLDivElement | undefined>;

};

export interface IPropsManual {
    ref1: MutableRefObject<HTMLDivElement | undefined>;
    ref2: MutableRefObject<HTMLDivElement | undefined>;
    ref3: MutableRefObject<HTMLDivElement | undefined>;
    ref4: MutableRefObject<HTMLDivElement | undefined>;
    ref5: MutableRefObject<HTMLDivElement | undefined>;
    ref6: MutableRefObject<HTMLDivElement | undefined>;
    ref7: MutableRefObject<HTMLDivElement | undefined>;
    width: number;
    height: number;
};