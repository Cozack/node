module.exports = {
    up: async (queryInterface, sequelize) => {
        await queryInterface.changeColumn('cars', 'engine', {
            type: sequelize.INTEGER
        });
    },
};
