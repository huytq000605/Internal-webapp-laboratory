const getTimeDistance = (input: number) => {
    const hours = (a: number, b: number) => {
        return a - b < 3600000
            ? `${Math.round((a - b) / 60000)} phút `
            : `${Math.round((a - b) / 3600000)} giờ `;
    };
    const getDistance = () => {
        const a = new Date().getTime();
        return a - input < 24 * 3600000
            ? hours(a, input)
            : ` ${Math.round((a - input) / (24 * 3600000))} ngày `;
    };

    return getDistance();
};

export default getTimeDistance;
