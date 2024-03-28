const showtable = (sum)=>{
   const num =sum(3,4)
   for (let i =1; i <=10; i++) {
  console.log(`${num} *  ${i} = ${num*i}`);
    
   }

}
const a=3
const b=4
const sum =(a,b)=>{
  return a+b
}
// sum(a,b)
showtable(sum)