module.exports = function (sequelize, DataTypes) {
    var Favorites = sequelize.define(
        "Favorites",
        {
            parkCode: DataTypes.STRING,
            campgroundId: DataTypes.STRING,
            userId: DataTypes.STRING
        },
        {
            indexes: [
                {
                    fields: ["campgroundId", "userId"],
                    unique: true 
                }
            ]
        });

    return Favorites;
};
