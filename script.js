function q1(speedLimit) {
    let speed  = 70;
    if(speed > speedLimit) {
        console.log(`you are over speeding`);
    
    }else {
        console.log(`you are not over speeding`)
    }
   
}
q1(70);

function q2(isLogin) {
        if(isLogin) {
            console.log('You are Logged In');
        }else {
            console.log('You are Logged Out');

        }
}
q2(true);

function q3(temprature) {
    if(temprature > 40) {
        console.log("IMPORTANT ANNOUNCEMENT!!! UIT is closed tomorrow due to heat wave");
    }
}
q3(50);

function q4(accountBalance) {
    if(accountBalance >= 1000000) {
        console.log("Congratulations! You are a millionaire");

    }else {
        console.log("I'm sorry, you are not a millionaire");

    }
}
q4(1000000);

function q5(car) {
    if(car === 'electric') {
        console.log('car is made by Telsa')
    }else {
        console.log('car is NOT made by Telsa')

    }
}

q5('electric');

function q6(cunrrentScore) {
    let highScore = 1000;
    if(cunrrentScore > highScore) {
        console.log(`Congratulations!! Your new high score is ${cunrrentScore}`);
    }else {
        console.log(`You just need ${highScore - cunrrentScore} to win!`);

    }
}
q6(100);

function q7(num) {
    if(num % 2 === 0){
        console.log('even');
    }else {
        console.log('odd');

    }
}
q7(1);

function q8(balance) {
    if(balance < 1) {
        console.log(`Moazziz Sarif, aap ka mojooda balance iss call k lye naa kaafi hai. Please re-charge karain If the user has Rs. 1 to 10, it prints Moazziz sarif, aap ka balance khatam honay wala hai , and then prints Ring Ring!!`)
    }else if(balance >= 1 && balance <= 10) {
        console.log(`oazziz sarif, aap ka balance khatam honay wala hai`)
    }else {
        console.log('Ring Ring')
    }
}

q8()


function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    let sourceKeys = Object.keys(source);
    let sourceValues = Object.values(source);
    // Only change code below this line
    for(let i = 0; i < collection.length; i++) {
      let objeKeys = Object.keys(collection[i]);
      let objeValues = Object.values(collection[i]);
              let count = 0;
        for(let  n = 0; n < sourceKeys.length; n++) {
            if(objeKeys.includes(sourceKeys[n])) {
                count++;
            }
        }
          if(count === sourceKeys.length) {
              arr.push(collection[i]);
          }
         }
    
    
    
    // Only change code above this line
    return  arr
   }
  
  
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1});
