
const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

const piz = featured.concat(specialty);
console.log(piz);

const pizzas = [...featured, 'veg', ...specialty];
console.log(pizzas);
const fridayPizzas = [...pizzas];
console.log(fridayPizzas);
console.log(pizzas === fridayPizzas);
// because the fridayPizzas is a COPY of the pizzas array and not a pointer to the same stack address !!
// the same thing could be done using : [].concat(pizzas) --> that is a new empty array concatenated with the pizzas array. (old way)


const deepDish = {
  pizzaName: 'Deep Dish',
  size: 'Medium',
  ingredients: ['Marinara', 'Italian Sausage', 'Dough', 'Cheese']
};
