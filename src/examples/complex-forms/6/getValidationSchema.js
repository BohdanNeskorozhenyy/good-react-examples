import * as Yup from 'yup';

export const getValidationSchema = (data) => {
    const shape = {};

    for (const { name, validationRules } of data) {
        if (validationRules) {
            const { min, max, type } = validationRules;

            if (type === 'string') {
                shape[ name ] = Yup[ type ]()
                    .min(min)
                    .max(max);
            } else if (type === 'email') {
                shape[ name ] = Yup.string().email();
            }
        }
    }

    return Yup.object().shape(shape);
};
