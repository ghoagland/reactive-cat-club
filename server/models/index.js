const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/catClub', {logging: false});

const Cat = db.define('cat', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ageMonths: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  breed: {
    type: Sequelize.ENUM('domestic short hair', 'Maine coon', 'bengal', 'sphinx', 'siamese'),
    defaultValue: 'domestic short hair'
  },
  hasShots: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  }
}, {
  getterMethods: { //virtual property
    ageInYears: function () {
      return Math.round(this.ageMonths / 12);
    }
  },

  hooks: {
    beforeCreate: function (cat) {
      if (!cat.hasShots) {
        cat.name = cat.name + 'NEEDS SHOTS!!!!'
      }
    }
  }
})

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
})

Cat.belongsTo(User);
User.hasMany(Cat);

module.exports = { db, Cat, User }; // same as {db: db, Cat: Cat}
