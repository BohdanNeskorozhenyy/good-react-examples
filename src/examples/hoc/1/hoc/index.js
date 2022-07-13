export const hoc = (Component) => {
    return () => <Component msg = { 'Текст из HOC.' } />;
};
