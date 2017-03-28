  const name = 'Snickers';
  const age = 2;
  const sentence = `My dog ${name} is ${age * 7} years old.`;
//   console.log(sentence);


/*  const user = {
      name: 'John Due',
      birthdate: '1988-08-15',
  };

const changeName = (user, newName) => {
    const newUser = user
    newUser.name = newName
    return newUser
};

const userWithNewName = changeName(user, 'Jojo');
// both users will have the name = 'Jojo'
console.log(user, userWithNewName);*/


const user = {
  name: 'John Due',
  birthdate: '1988-08-15',
};

// Example using destructuring assignment
const changeName = (user, newName) => ({
  ///...user,
  name: newName,
});

const userWithNewName = changeName(user, 'Jojo');
// the old user object has name = 'John Due' and the new object, name = 'Jojo'
console.log(user, userWithNewName);

