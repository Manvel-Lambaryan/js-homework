

const user = 
{
    id : 123,
    name : {
        firstName : "Mno",
        lastName : "Lambaryan",
    },
    contact : {
        email : "manwellllambaryaniii@gmail.com",
    phone : {
        phoneNumber : "091552267",

    }
  }
};

const {
    name : {firstName, lastName},
    contact : { email,
        phone : { phoneNumber },
    },
} = user;

console.log("My first Name --> ",firstName);
console.log("My Phone number --> ", phoneNumber);


