var num = 1;
var prod = 1;
for(var i=1; i<13; i++){
    prod *= i;

    if(i!=12){
        process.stdout.write(i + " * ");
    }
    else{
        process.stdout.write(i + "");
    }
}
console.log("\n" + prod);