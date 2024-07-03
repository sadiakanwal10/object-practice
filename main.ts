// example of student data(educational website type) //
let student = {
    name:["ayesha","fiza","maira"],
    rollNumber:[12,15,20],
    percentage:[80,86,95],
};
console.log("PRINTING WHOLE STUDENT DATA BY USING OBJECT:", student); // if we want to print whole data

// E-commerce website //
let products={
    name:["laptop","computer","smart phone"],
    price:[50000,20000,40000],
    description:["best performance","low performance","good performance"],
};
console.log("PRINTING ONLY PRICE OF PRODUCT BY USING OBJECT:",products.price); // if we want to print only price 

// syntax to create an object //
let object={
    key1:"value1",
    key2:"value2",
    key3:"value3",
};
console.log ("SYNTAX TO CREATE AN OBJECT:", object); 

// type interface example 1 // (ek aesa feature hain jo custom data type ko design krny mai help krta hai)
 interface itemToSell {
    name:string;
    price:number;
    description:string;}   
    
    // type interface example 2 //
    interface Person {
        name:string;
        age:number;
        city:string;
    }

    // enter data by using upper interface //
let person01:Person={
    name:"sadia",
    age:22,
    city:"karachi",

    } 
    console.log("PRINTING OBJECT BY USING INTERFACE:", person01);

    let person02:Person={
        name:"ayesha",
        age:26,
        city:"lahore",
    }
console.log("PRINTING ANOTHER OBJECT BY USING INTERFACE:",person02);

// how to update a property //
let employeeData = {
    name:"amir",
    designation:"accountant",
    employeeId:"1234",
    location:"karachi",
}
 console.log("original data without update it:", employeeData);

 // update a property //
 employeeData.designation="manager";
 employeeData.location = "lahore";
 console.log("data after update a property:", employeeData);