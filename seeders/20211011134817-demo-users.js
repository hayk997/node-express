'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:

    */
    let users = [];
    for (let i = 0;i<5000,i++;){
      users.push({
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('Users', [
        {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohDoe@mai.ru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohDoe@mai.ru',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
