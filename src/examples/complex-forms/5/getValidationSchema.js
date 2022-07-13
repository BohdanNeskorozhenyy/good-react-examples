import * as Yup from 'yup';

export const getValidationSchema = (data) => {
    const shape = {};

    for (const { name, validationRules } of data) {
        if (validationRules) {
            const { min, max, type } = validationRules;

            shape[ name ] = Yup[ type ]()
                .min(min)
                .max(max);

            // {
            //     fullname: Yup.string().min().max();
            // }
        }
    }

    return Yup.object().shape(shape);
};
