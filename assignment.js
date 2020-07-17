// Feet to Mile conversion function

function feetToMile(feet){
    // 1 mile = 5280 feet
    let mile   = 5280;
    if(feet < 0){
        return "Distance can't be negative.";
    }else{
        let result = (feet / mile).toFixed(2);
        return result;
    }

}
let feet   = 8280;
let result = feetToMile(feet);
console.log(feet+" feet = "+ result + " mile");

//wood Calculation function

function woodCalculator(chair, table, bed){
    let result = 0;
    if(chair < 0 || table < 0 || bed < 0){
        return "Negative value can't be measurable";
    }else{
        result = (chair * 1) + (table * 3) + (bed * 5);
        return result;
    }
}
let chair  = 2;
let table  = 5;
let bed    = 10;
let result2 = woodCalculator(chair, table, bed);
console.log("We need "+result2+" cubic feet wood for : "+chair+" chair,"+table+" table and "+bed+" bed.");

//Brick calculation function

function brickCalculator(floorNum){
    let brick  = 1000;
    let result = 0;
    if(floorNum < 0){
        return "Height can't be negative.";
    }else if(floorNum <= 10){
        result = floorNum * 15 * brick;
    }else if(floorNum <=20){
        result = (10 * 15 * brick) + ((floorNum - 10) * 12 * brick);
    }else if(floorNum >20){
        result = (10 * 15 * brick) + (10 * 12 * brick) + ((floorNum - 20) * 10 * brick);
    }
    return result;
}

let floorNum = 21;
let result3  = brickCalculator(floorNum);
console.log("We need "+result3+" bricks for "+floorNum+" floor.");

//Finding short name's friend

function tinyFriend(names){
    let numOfFriends = names.length;
    if(numOfFriends == 0){
        return "Empty array shouldn't be provided.";
    }else{
        let tinyName = names[0];
        for(let i = 1;i< numOfFriends;i++){
            if(tinyName.length >= names[i].length){
                tinyName = names[i];
                if(tinyName.length == 0){
                    return "Provide a  name, please.";
                }
            }
        }
        return tinyName;
    }
}
let names=["Sam",'Fokhrul','Mamun',"Tareq","Rony","Somrat","Ovi","manna"];
let result4 = tinyFriend(names);
console.log("Short name's friend is : "+result4);