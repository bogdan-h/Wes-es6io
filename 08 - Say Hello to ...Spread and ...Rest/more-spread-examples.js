
  const people = ['Wes', 'Kait','Randy'];
  //const  = Array.from(document.querySelectorAll('.people p'));
  const names = people.map((person) => person );
console.log(names);
  const deepDish = {
    pizzaName: 'Deep Dish',
    size: 'Medium',
    ingredients: ['Marinara', 'Italian Sausage', 'Dough', 'Cheese']
  };

  const shoppingList = ['Milk', 'Flour', ...deepDish.ingredients];
  console.log(shoppingList);

  const comments = [
    { id: 209384, text: 'I love your dog!' },
    { id: 523423, text: 'Cuuute! 🐐' },
    { id: 632429, text: 'You are so dumb' },
    { id: 192834, text: 'Nice work on this wes!' },
  ];
  const id = 632429;
  const commentIndex = comments.findIndex(comment => comment.id === id);

  const newComments = [...comments.slice(0,commentIndex), ...comments.slice(commentIndex + 1)];
  console.log(newComments);
