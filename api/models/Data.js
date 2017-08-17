/**
 * Data.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "data",
  attributes: {
    valor: { type: 'string', required: true },
    tipo_sensor: { type: 'string', required: true },
    direccion_estacion: { type: 'string', required: true },
  }
};

