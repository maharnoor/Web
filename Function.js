var name = 'Noor';
var number = 10;

const printDetails = () => {
    console.log("The name is " + noor);

    console.log(`Table of ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }

    console.log(`Square of ${number}: ${number * number}`);
}

printDetails();
