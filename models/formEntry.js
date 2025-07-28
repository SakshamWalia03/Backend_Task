import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const FormEntry = sequelize.define('FormEntry', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isEmail: true }
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: true
});

export default FormEntry;
