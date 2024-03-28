const a=2;
const b=3;
const sum =(a,b)=>{
    if(typeof a==="number"&& typeof b==="number"){
        const sum = a+b;
        for(let i=1; i<=10; i++){
            console.log(sum*i);
    }
}else{
    console.log("Please enter  integer numbers");
}
};

sum(a,b);