list = createCourseArray();

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
        };
    };
    if(x == 0){
        var newcourse = {code: userinput, name: null};
        courseList.push(newcourse);
        };
};

function askfunction(){
    ///the extra code was to just help me clearify some things, will try to simplify in future
    var userinput = prompt('Please enter a 4 digit number');
    var inputlength = userinput.length;
    var x;
    var y;
    if (isNaN(userinput) == false){
        x = 1
    };
    if (userinput.length == 4){
        y = 1
    };
    while (x!=1 || y !=1){
        userinput = prompt('Invalid input, please try again');
        x = 0;
        y = 0;
        if (!isNaN(userinput) == true){
            x = 1
        };
        if (userinput.length == 4){
            y = 1
        };

    };
    if(x==1 && y ==1){
        return userinput;
    };
};

function createCourseArray(){
    var course = document.querySelectorAll(".course"); 
    var date = document.querySelectorAll(".date");
    var i;
    var list = [];
    var listitem;
    for (i = 0; i< course.length; i++){
        listitem = {code: course[i].innerHTML, date: date[i].innerHTML};
        list.push(listitem)
    };
    return list;
};

function findCourse(list){
    var userinput = askfunction();
    var i = 0;
    var notinlist = 1;
    while(i< list.length){
        if(list[i].code.includes(userinput)){
            document.getElementsByClassName("block")[i].style.backgroundColor = "green";
            document.getElementsByClassName("divide")[i].style.backgroundColor = "green";
            notinlist = 0;
        }
        i++;
    };
        

    if(notinlist==1){
        var newdesc = document.createElement("P");
        var newclass = document.createElement("DIV");
        var newa = document.createElement("A");
        var newcourse = document.createElement("B");
        var newblock = document.createElement("DIV");
        var newdate = document.createElement('P');
        newblock.className = 'block';
        newcourse.className = 'course';
        newcourse.innerHTML = userinput;
        newclass.className = 'class';
        newdesc.className = 'description';
        newdesc.innerHTML = 'N/A';
        newdate.className = 'date';
        newdate.innerHTML = 'Fall 2020';
        newblock.appendChild(newclass);
        newblock.appendChild(newdesc);
        newclass.appendChild(newa);
        newa.appendChild(newcourse);
        newa.appendChild(newdate);
        document.getElementById('courses').appendChild(newblock);
    };
};
findCourse(list);

