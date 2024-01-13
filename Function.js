const printDetails = (name, number) => {
   
    console.log("The name is " + name);
  

    console.log(`Table of ${number}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} * ${i} = ${number * i}`);
    }
  

    
}
  