import { merge } from 'lodash';
import {getTheme} from '../native-base-theme/components'
import buttonTheme from "../native-base-theme/components/Button";

export const getCustomTheme = () => {
    const nbTheme = getTheme();

    const overrides = {
        'NativeBase.Button': {
            ...buttonTheme(),
            '.bordered': {
                ...buttonTheme()['.bordered'],
                '.info': {
                    ...buttonTheme()['.bordered']['.info'],
                    'NativeBase.Text': {
                        color: 'COLORS.ORANGE'
                    },
                    'NativeBase.Icon': {
                        color: 'COLORS.ORANGE'
                    },
                    borderColor: 'COLORS.ORANGE',
                    backgroundColor: 'COLORS.WHITE',
                    opacity: 0.6,
                    borderWidth: 2
                }
            }
        }
    };

    return merge(nbTheme, overrides);
};