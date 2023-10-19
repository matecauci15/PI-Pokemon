const { DataTypes, UUID } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },    
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },    
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {

        min: 0,
        max: 100
      }
    },
    attack: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {

        min: 0
      }
    },   
    defense: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        min: 0
      }
    },   
    speed: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        min: 0
      }
    },   
    height: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        min: 0
      }
    },    
    weight: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        min: 0
      }
    },    
  }, 
    { timestamps: false }
  );
};

