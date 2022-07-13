export const selectPlanetsWithFetchingState = (state) => {
    const { data } = state.planets;
    const { isFetching } = state.ui;

    return {
        planets: data,
        isFetching,
    };
};

