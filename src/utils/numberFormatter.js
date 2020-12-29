
const numberFormatter = (number: number) => {
    if (number >= 1000) {
        const formattedNumber = (number / 1000).toFixed(1) + 'k';
        return formattedNumber;
    }
   return number;
};

export default numberFormatter;