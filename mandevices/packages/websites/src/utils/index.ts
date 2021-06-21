import { act } from 'react-dom/test-utils';

export const updateState = (): Promise<undefined> =>
    act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
    });

export const sliceText = (text: string): string => {
    let dem = 0;
    let textSliced = '';
    for (let i = 0; i < text.length; i += 1) {
        if (text[i] === ' ') {
            dem += 1;
        }
        if (dem === 20) {
            textSliced = text.slice(0, i).concat('...');
            // console.log(myString);
            break;
        }
    }
    if (dem < 20) {
        textSliced = text;
    }
    return textSliced;
};

export const uniqueArrayObject = <T>(array: T[]): T[] => {
    return Array.from(
        new Set(array?.map((item) => JSON.stringify(item)))
    ).map((item) => JSON.parse(item));
};

export function uniqueTextInArray<T>(arr: T[]): T[] {
    return Array.from(new Set(arr)); //
}
