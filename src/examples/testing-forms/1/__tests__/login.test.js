// Core
import {
    render, screen, fireEvent, waitFor,
} from '@testing-library/react';

// Components
import { Form } from '..';

const init = (func = jest.fn()) => {
    const { container, rerender } = render(<Form handleFormSubmit = { func } />);

    return {
        container,
        rerender,
    };
};

describe('Form component', () => {
    test('input with name email should exist', () => {
        init();
        const input = screen.getByRole('textbox', { name: /электропочта/i });

        expect(input).toBeInTheDocument();
    });

    test('input with name password should exist', () => {
        init();
        const input = screen.getByLabelText(/пароль/i);

        expect(input).toBeInTheDocument();
    });

    test('submit button should exist', () => {
        init();
        const button = screen.getByRole('button', { name: /зарегистрироваться/i });

        expect(button).toBeInTheDocument();
    });

    test('reset button should exist', () => {
        init();
        const button = screen.getByRole('button', { name: /сбросить/i });

        expect(button).toBeInTheDocument();
    });

    test('should call a function inside submit handler', async () => {
        const mockSave = jest.fn();
        init(mockSave);
        const email = screen.getByRole('textbox', { name: /электропочта/i });
        const password = screen.getByRole('textbox', { name: /пароль/i });
        const submitBtn = screen.getByRole('button', { name: /зарегистрироваться/i });
        const emailValue = 'jdoe@example.com';
        const passwordValue = 'aB12345678bC';

        fireEvent.input(email, {
            target: {
                value: emailValue,
            },
        });

        fireEvent.input(password, {
            target: {
                value: passwordValue,
            },
        });

        fireEvent.submit(submitBtn);

        await waitFor(() => {
            expect(mockSave).toHaveBeenNthCalledWith(1, {
                email:    emailValue,
                password: passwordValue,
            });
        });
    });
});
