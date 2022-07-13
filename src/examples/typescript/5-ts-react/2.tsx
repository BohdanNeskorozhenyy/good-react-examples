import { FC } from 'react';

type ComponentProps = {
    name: string;
}

const Component: FC<ComponentProps> = ({ name }) => {
    return (
        <>
            <h1>Привет {name}!</h1>
        </>
    );
}


const Parent: FC = () => {
    return <Component name='Андрей' />
}

export default Parent;
