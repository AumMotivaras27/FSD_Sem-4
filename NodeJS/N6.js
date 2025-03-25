var fs = require("fs")

// fs.mkdirSync("dict")
fs.writeFileSync("dict/txt1.txt","10 5 20 2")
data = fs.readFileSync("dict/txt1.txt","UTF-8")
sp = data.split(" ")
sum=0
for(i=0;i<sp.length;i++){
    sum+=parseInt(sp[i]);
}
console.log(sum)
a=sum+""
fs.writeFileSync("dict/txt2.txt",a);