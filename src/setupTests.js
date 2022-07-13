// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import axios from 'axios';

const errorMessage = 'Error message';

const getVehicle = () => ({
    id:              'uuid-1',
    name:            'Sand Crawler',
    manufacturer:    'Corellia Mining Corporation',
    cost_in_credits: 150000,
});

const responseDataFail = {
    message: errorMessage,
};

const fetchResponseFail400 = {
    status: 400,
    json:   jest.fn().mockImplementation(() => Promise.resolve(responseDataFail)),
};

const responseDataSuccess = { data: { results: [getVehicle()] } };

const fetchResponseSuccess = {
    status: 200,
    json:   jest
        .fn()
        .mockImplementation(() => Promise.resolve(responseDataSuccess)),
};

global.__ = {
    getVehicle,
    responseDataFail,
    responseDataSuccess,
    fetchResponseSuccess,
    fetchResponseFail400,
};

axios.defaults.adapter = require('axios/lib/adapters/http');
