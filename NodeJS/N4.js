// Write a node js script to copy contents of one file to another data should be fetch from source.txt and insert into destination.txt display it on
// console from destination.txt

var sd = require("fs");

sd.writeFileSync("Source.txt","Hello World!! This is FSD Program");
data=sd.readFileSync("Source.txt");
sd.writeFileSync("Destination.txt",data);
display= sd.readFileSync("Destination.txt","UTF-8");
console.log(display)