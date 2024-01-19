
const printReverseTable = (number) => {
    console.log(`Reverse Table of ${number}:`);
    for (let i = 10; i >= 1; i--) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
};


printReverseTable(10);
