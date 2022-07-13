/* Core */
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const back = 'back';
    const forward = 'forward';

    const setStep = (event) => {
        const currentStep = Number(location.pathname.replace(/^\D+/g, ''));
        const nextDirection = event.target.dataset.direction;
        const nextStep
            = nextDirection === 'forward' ? currentStep + 1 : currentStep - 1;

        const navigateTo = nextStep === 0 ? 'start' : `step-${nextStep}`;

        navigate(navigateTo);
    };

    const isNavVisible
        = !location.pathname.includes('start')
        && !location.pathname.includes('step-3')
        && !location.pathname.includes('finish');

    return (
        <>
            <Outlet />

            { isNavVisible && (
                <nav>
                    <button
                        type = 'button'
                        data-direction = { back }
                        onClick = { setStep }>
                        &larr; Назад
                    </button>
                    <button
                        type = 'button'
                        data-direction = { forward }
                        onClick = { setStep }>
                        Дальше &rarr;
                    </button>
                </nav>
            ) }
        </>
    );
};
