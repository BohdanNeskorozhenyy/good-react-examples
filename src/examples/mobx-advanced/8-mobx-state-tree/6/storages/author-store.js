// Core
import { types } from 'mobx-state-tree';

export const Author = types
    .model('Author', {
        id:     types.identifier,
        name:   types.string,
        gender: types.union(types.literal('m'), types.literal('f')),
    });
