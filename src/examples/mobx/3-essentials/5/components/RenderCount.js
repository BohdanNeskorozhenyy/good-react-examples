/* Core */
import { useEffect, useRef } from 'react';

export const RenderCount = ({ title }) => {
    const tmpStorage = useRef(0);

    useEffect(() => {
        tmpStorage.current += 1;
    });

    return <p>{ title } количество ререндеров: { tmpStorage.current }</p>;
};
