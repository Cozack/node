module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('cars', [
            {
                model: 'Toyota',
                year: '1998',
            },
            {
                model: 'Skoda',
                year: '2000',
            },
            {
                model: 'Mazda',
                year: '2018',
            },
            {
                model: 'Moskvich',
                year: '1965',
            },
            {
                model: 'Lexus',
                year: '2015',
            },
        ]);
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('cars', {
            model: 'Moskvich'
        }, {});
    }
};
