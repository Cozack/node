module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('cars', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,

            },
            model: {
                type: Sequelize.STRING
            }
        });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('cars');
    }
};
