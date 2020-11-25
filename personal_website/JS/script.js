
var courseList = 
[
    {code: 'ACIT 1620',  name: 'Web Fundamental Technologies'}, 
    {code: 'ACIT 1420',  name: 'Introduction to System Administration'},
    {code: 'ACIT 1515',  name: 'Scripting for IT'}
];


function writefunction(userinput){
    var i;
    var x = 0;
    for (i = 0; i < courseList.length; i++){
        if ((courseList[i].code).includes(userinput)){
            console.log(`Yes I am taking the course:  ${courseList[i].code} - ${courseList[i].name}`);
            x = 1
        }

            
        }
    if(x == 0){
        var newcourse = {code: userinput, name: null};
        courseList.push(newcourse);
        }
};

function askfunction(){

    var userinput = prompt('Please enter a 4 digit number');
    var inputlength = userinput.length;
    var x;
    var y;
    if (isNaN(userinput) == false){
        x = 1
    }
    if (userinput.length == 4){
        y = 1
    }
    while (x!=1 || y !=1){
        userinput = prompt('Invalid input, please try again');
        x = 0;
        y = 0;
        if (!isNaN(userinput) == true){
            x = 1
        }
        if (userinput.length == 4){
            y = 1
        }

    }
    if(x==1 && y ==1){
    writefunction(userinput);
    }
};
