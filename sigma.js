var num = 1;
var sum = 0;

while(num<=100){
    sum += num;     

    if(num!=100){
        process.stdout.write(num + " + ");
    }
    else{
        process.stdout.write(num + "");
    }
    num++;
}
console.log("\nThe sum is: " + sum);