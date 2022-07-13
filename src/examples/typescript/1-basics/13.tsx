const links = { dev: 'https://example.com/dev', prod: 'https://example.com/prod' };

// Оператор keyof формирует тип на основании ключей
type LinksType = typeof links; // { dev: string, prod: string }

const Component = () => {
    let componentLinks: LinksType = { dev: 'some dev link', prod: 'some prod link' };

    return <h1>Dev: { componentLinks.dev }</h1>;
}

export default Component;
