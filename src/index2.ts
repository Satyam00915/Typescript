//INTERFACE

interface UserType {
  firstName: string;
  lastName?: string;
  readonly age: number;
}

function logDetails(user: UserType) {
  console.log(user.firstName + " " + user.lastName);
  console.log("My age is " + user.age);
}

let user: UserType = {
  firstName: "satyam",
  //   lastName: "upadhyay",
  age: 20,
};

logDetails(user);

// logName({
//   name: "Satyam",
//   age: 20,
// });

type userType = {
  name: string;
  age: number;
};

type admin = userType & { role: "admin" };
