// With Function Name
const message = function(){
    console.log("After 3 Second..");
}
// setTimeout(message,3000);

// Anonymous Function
setTimeout(function(){
    console.log("After 3 Second..");
},3000);

// Arrow Function
setTimeout(()=>{
    console.log("Arrow")
},1000)