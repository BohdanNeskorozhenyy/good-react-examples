import {FC, ReactNode, ReactElement} from 'react';

type GreetingPropTypes = {
    name: string;
}

type GreetingWrapperPropTypes = {
    // children: ReactNode;
    children: ReactElement;
}

// Компонент
const Greeting: FC<GreetingPropTypes> = ({ name }) => {
    return <h1>Привет {name}!</h1>;
}

// Обёртка
const GreetingWrapper: FC<GreetingWrapperPropTypes> = ({ children }) => {
   return <div>
       {children}
   </div>
}

// Родительский компонент
const Parent: FC = () => {
    return <GreetingWrapper>
        <Greeting name='Андрей' />
    </GreetingWrapper>;
}

export default Parent;
