// var b = [1 , 2];

// b.pop();

// console.log(b);

// var rows  = 8;

// for(i = 1; i <= rows; i++){

//     for( j = 1; j <= i; j++){

//         document.write("*");

//     }
//     document.write("<br>");
// }

// var arr = [1,2,3,4];

// arr.pop;

// // arr.splice(2,1);
// console.log(arr);


var num_1 = +prompt("Enter Your First Number");
var signs = prompt("Enter your operation");
var num_2 = +prompt("enter your second number");

var total;

if(signs === '+'){

    total = num_1 + num_2;
}

else if(signs === '-'){

   total = num_1 - num_2;
}
else if(signs === '*'){

   total = num_1 * num_2;
}

else{

  total = num_1 / num_2;
}


alert("your total is "+ total);
