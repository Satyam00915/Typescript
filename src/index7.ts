interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function filterLegal(users: User[]): User[] {
  return users.filter((user) => user.age > 18);
}

console.log(
  filterLegal([
    {
      firstName: "satyam",
      lastName: "upadhyay",
      age: 20,
    },
    {
      firstName: "shreya",
      lastName: "upadhyay",
      age: 15,
    },
    {
      firstName: "nilam",
      lastName: "upadhyay",
      age: 45,
    },
  ])
);
