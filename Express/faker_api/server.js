// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require('@faker-js/faker');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// we can create a function to return a random / fake "Product"
const createUserObject = () => {
    const UserObject = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phonenumber: faker.phone.number(),
        lastname: faker.person.lastName(),
        firstname: faker.person.firstName(),
        id:faker.database.mongodbObjectId()
    };
    return UserObject;
};
const createCompanyObject = () => {
    const CompanyObject = {
        id:faker.database.mongodbObjectId(),
        name:faker.company.name(),
        adress:{
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode:faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    return CompanyObject;
};
    
// const newuser = createUserObject();
// console.log(newuser);
const newcompany = createCompanyObject();
console.log(newcompany);

app.get("/api/users/new",(req,res)=>{
    const newuser = createUserObject();
    res.json(newuser);
})
app.get("/api/companies/new",(req,res)=>{
    const newcompany = createCompanyObject();
    res.json(newcompany);
})
app.get("/api/users/company",(req,res)=>{
    const newuser = createUserObject();
    const newcompany = createCompanyObject();
    res.json({newuser,newcompany});
})


app.listen(8000,()=>{
    console.log("server ok")
})
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */
