import {getCustomTheme} from "./index";

// debugger

jest.mock('../native-base-theme/components/index.ts', () => ({
    getTheme: () => ({
        test: true
    })
}));

// debugger

describe('Custom theme', () => {
    // debugger
    it('getCustomTheme', () => {
        // debugger
        const expectedOverrides = {
            'NativeBase.Button': {}
        };
        const expectedResult = {
            test: true,
            ...expectedOverrides
        };
        const result = getCustomTheme();
        expect(result).toEqual(expectedResult);
    });
});