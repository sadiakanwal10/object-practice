// example of student data(educational website type) //
var student = {
    name: ["ayesha", "fiza", "maira"],
    rollNumber: [12, 15, 20],
    percentage: [80, 86, 95],
};
console.log("PRINTING WHOLE STUDENT DATA BY USING OBJECT:", student); // if we want to print whole data
// E-commerce website //
var products = {
    name: ["laptop", "computer", "smart phone"],
    price: [50000, 20000, 40000],
    description: ["best performance", "low performance", "good performance"],
};
console.log("PRINTING ONLY PRICE OF PRODUCT BY USING OBJECT:", products.price); // if we want to print only price 
// syntax to create an object //
var object = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
};
console.log("SYNTAX TO CREATE AN OBJECT:", object);
// enter data by using upper interface //
var person01 = {
    name: "sadia",
    age: 22,
    city: "karachi",
};
console.log("PRINTING OBJECT BY USING INTERFACE:", person01);
var person02 = {
    name: "ayesha",
    age: 26,
    city: "lahore",
};
console.log("PRINTING ANOTHER OBJECT BY USING INTERFACE:", person02);
// how to update a property //
var employeeData = {
    name: "amir",
    designation: "accountant",
    employeeId: "1234",
    location: "karachi",
};
console.log("original data without update it:", employeeData);
// update a property //
employeeData.designation = "manager";
employeeData.location = "lahore";
console.log("data after update a property:", employeeData);
