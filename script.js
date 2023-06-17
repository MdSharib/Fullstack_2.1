/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
let currId = arr.length;

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((val,i) => {
    if(val.profession === "developer"){
      console.log(val);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((val,i) => {
    if(val.profession === "developer"){
      console.log(val);
    } 
  });
}

function addData() {
  //Write your code here, just console.log

  currId++;
  const employee = {id: currId , name:"susan", age:"20", profession:"intern"};
  arr.push(employee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.forEach((val, i) => {
    if(val.profession === "admin"){
      arr.splice(i,1);
      // currId--;
    }
  });
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: ++currId, name: "honey", age: "28", profession: "doctor" },
    { id: ++currId, name: "varun", age: "23", profession: "receptionist" },
    { id: ++currId, name: "Sharib", age: "29", profession: "unemployed" },
  ];

  const concatedResult = arr.concat(...arr2);
  console.log(concatedResult);
}
