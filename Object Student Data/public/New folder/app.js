var student1 = {
    name: "Syed Bilal",
    fatherName: "Ali",
    age: 25,
    institute: "SAIMS",
    nationality: "Pakistani",
};

student1.result = "Pass"


var student2 = {
    name: "Imran",
    fatherName: "Khan",
    age: 22,
    institute: "DJ SCIENCE COLLEGE",
    nationality: "Pakistani",
};
student2.result = "Fail"


var student3 = {
    name: "Usman",
    fatherName: "Bey",
    age: 24,
    institute: "GTC COLLEGE",
    nationality: "Pakistani",
};
student3.result = "Pass"


var student4 = {
    name: "Faisal",
    fatherName: "Shaikh",
    age: 22,
    institute: "GOVT. ADAMJEE COLLEGE",
    nationality: "Pakistani",
};
student4.result = "Fail"


var student5 = {
    name: "Mohammad",
    fatherName: "Ibad",
    age: 20,
    institute: "GOVT. DEGREE BOYS COLLEGE",
    nationality: "Pakistani",
};
student5.result = "Pass"


var students = [student1, student2, student3, student4, student5];
var objectData = document.getElementById('objectData')

for (var i = 0; i < students.length; i++) {
    students[i].StudentId = i + 1
    objectData.innerHTML += '<tr><td>' + students[i].StudentId + '</td>' + '<td>' + students[i].name + '</td> ' + '<td>' + students[i].fatherName + '</td>' + '<td>' + students[i].age + '</td>' + '<td>' + students[i].institute + '</td> ' + '<td>' + students[i].result + '</td>  </tr>'  
}




var searchInp = document.getElementById('searchInp')

function inpSearch(){
    var inpSearchVal = searchInp.value;
for(var i = 0;i<students.length; i++){
    if(inpSearchVal == students[i].StudentId){
        var std = students[i]
        var StudentId = document.getElementById('id')
        var name = document.getElementById('name')
        var fname = document.getElementById('fname')
        var age = document.getElementById('age')
        var ins = document.getElementById('ins')
        var res = document.getElementById('res')
        StudentId.innerHTML = std.StudentId;
        name.innerHTML = std.name;
        fname.innerHTML = std.fatherName;
        age.innerHTML = std.age;
        ins.innerHTML = std.institute;
        res.innerHTML = std.result;

    }
    
    
}
}
