const { Cat, User, db } = require('./server/models');


const users = [
  {
  	name: 'Friday Jones',
  	email: 'marjoriebaldwin@botanybay.gov'
  },
  {
  	name: 'Lilith Iyapo',
  	email: 'mom@newearth.edu'
  },
  {
  	name: 'Sophie Bangs',
  	email: 'promethea@weepinggorilla.com'
  },
  {
  	name: 'Meg Murry',
  	email: 'tesseraction@camazotz.net'
  },
  {
  	name: 'Halo Jones',
  	email: 'piratequeen@thecrunch.io'
  },
  {
  	name: 'Jillian Boardman',
  	email: 'materdeum@thenest.net'
  },
  {
  	name: 'Helen Justineau',
  	email: 'history@hotelecho.gov'
  }
]

const cats = [
  {
  	name: 'Ellis',
  	ageMonths: 39,
  	breed: 'domestic short hair',
  	hasShots: true,
  	description: 'Ellis is an independent tuxedo who likes climbing and butter.',
  	userId: 1
  },
   {
  	name: 'Sol',
  	ageMonths: 14,
  	breed: 'domestic short hair',
  	hasShots: true,
  	description: 'Sol is gray and loves brushing and biting, especially at the same time.',
  	userId: 4
  },
   {
  	name: 'Bento',
  	ageMonths: 62,
  	breed: 'sphinx',
  	hasShots: true,
  	description: 'Bento is a ginger cat who will chase ALL the birds and loves yelling.',
  	userId: 3
  },
   {
  	name: 'Thomas',
  	ageMonths: 75,
  	breed: 'bengal',
  	hasShots: true,
  	description: 'Thomas is a stately gentleman and a beverage criminal.',
  	userId: 1
  },
   {
  	name: 'Roxie',
  	ageMonths: 8,
  	breed: 'siamese',
  	hasShots: false,
  	description: 'If Roxie is not already in your lap, she wants to be.',
  	userId: 2
  },
   {
  	name: 'Ampersand',
  	ageMonths: 22,
  	breed: 'bengal',
  	hasShots: true,
  	description: 'Ampersand is happiest when plotting with his brother, Interrobang.',
  	userId: 7
  },
  {
  	name: 'Interrobang',
  	ageMonths: 22,
  	breed: 'bengal',
  	hasShots: true,
  	description: 'Interrobang is happiest when plotting with his brother, Ampersand.',
  	userId: 7
  },
  {
  	name: 'M.O.M.A',
  	ageMonths: 43,
  	breed: 'domestic short hair',
  	hasShots: false,
  	description: 'M.O.M.A likes dogs. For breakfast.',
  	userId: 5
  },
  {
    name: 'Pammy',
    age: 76,
    breed: 'domestic short hair',
    hasShots: true,
    description: 'Do you have turkey?',
    userId: 4
  }
]


const seed = () =>
	Promise.all(users.map( user => User.create(user)))
	.then(() =>
	Promise.all(cats.map( cat => Cat.create(cat))));

const main = () => {
  console.log('Syncing kitty seed db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();






