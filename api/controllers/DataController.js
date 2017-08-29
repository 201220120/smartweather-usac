/**
 * DataController
 *
 * @description :: Server-side logic for managing data
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const limiteDefecto=100
module.exports = {
  /**
   * `DataController.create()`
   */
  create: function (req, res) {
    let valor = req.param('valor'),
      tipo_sensor = req.param('tipo_sensor'),
      direccion_estacion = req.param('direccion_estacion');
    if (!valor) {
      return res.badRequest({ err: 'El parametro de valor es obligatorio' });
    }
    if (!tipo_sensor) {
      return res.badRequest({ err: 'El parametro de tipo de tipo_sensor es obligatorio' });
    }
    if (!direccion_estacion) {
      return res.badRequest({ err: 'El parametro de tipo de direccion del direccion_estacion es obligatorio' });
    }
    Data.create({
      valor: valor,
      tipo_sensor: tipo_sensor,
      direccion_estacion: direccion_estacion
    })
      .then(_data => {
        if (!_data) return res.serverError({ err: 'Unable to create user' });
        return res.ok(_data); //to learn more about responses check api/responses folder
      })
      .catch(err => res.serverError(err.message));
  },
  /**
   * `DataController.createAll()`
   */
  
  createAll: function (req, res) {
    let valor = req.param('valor'),
      tipo_sensor = req.param('tipo_sensor'),
      direccion_estacion = req.param('direccion_estacion');      
    if (!valor) {
      return res.badRequest({ err: 'El parametro de valor es obligatorio' });
    }
    if (!tipo_sensor) {
      return res.badRequest({ err: 'El parametro de tipo de tipo_sensor es obligatorio' });
    }
    if (!direccion_estacion) {
      return res.badRequest({ err: 'El parametro de tipo de direccion del direccion_estacion es obligatorio' });
    }
    //var valores = valor.split(",").map(val => Number(val) + 1);
    //var valores = valor.split(",");
    var listaValores = valor.split(",");
    var listaSensores = tipo_sensor.split(",");
    for(var i=0; i<listaValores.length; i++){
      Data.create({
      valor: listaValores[i],
      tipo_sensor: listaSensores[i],
      direccion_estacion: direccion_estacion
    })
      .then(_data => {
        if (!_data) return res.serverError({ err: 'Unable to create user' });
        return res.ok(_data); //to learn more about responses check api/responses folder
      })
      .catch(err => res.serverError(err.message));
    }    
  },
  
  /**
   * `DataController.findAll()`
   */
  findAll: function (req, res) {
    Data.find().sort({id:-1}).limit(limiteDefecto)
      .then(_data => {
        if (!_data || _data.length === 0) {
          throw new Error('No se encontro información');
        }
        return res.ok(_data);

      })
      .catch(err => res.serverError(err));
  },

  /**
   * `DataController.findSensor()`
   * 
   */
  findStation: function (req, res) {
    let direccion_estacion = req.params.direccion_estacion;
    if (!direccion_estacion) return res.badRequest({ err: 'El campo estacion es obligatorio' });
    Data.find({ direccion_estacion: direccion_estacion }).sort({id:-1}).limit(limiteDefecto)
      .then(_data => {
        if (!_data) return res.notFound({ err: 'No se encontró información' });
        return res.ok(_data);
      })
      .catch(err => res.serverError(err));
  },
  findStationType: function (req, res) {
    let direccion_estacion = req.params.direccion_estacion,
      tipo_sensor = req.params.tipo_sensor;
    if (!direccion_estacion) return res.badRequest({ err: 'El campo direccion_estacion es obligatorio' });
    if (!tipo_sensor) return res.badRequest({ err: 'El campo tipo_sensor es obligatorio' });    
    Data.find({ direccion_estacion: direccion_estacion ,tipo_sensor:tipo_sensor}).sort({id:-1}).limit(limiteDefecto)
      .then(_data => {
        if (!_data) return res.notFound({ err: 'No se encontró información' });
        return res.ok(_data);
      })
      .catch(err => res.serverError(err));
  },
  findStationTypeLimit: function (req, res) {
    let direccion_estacion = req.params.direccion_estacion,
      tipo_sensor = req.params.tipo_sensor,
      limite_definido = req.params.limite_definido;
    if (!direccion_estacion) return res.badRequest({ err: 'El campo direccion_estacion es obligatorio' });
    if (!tipo_sensor) return res.badRequest({ err: 'El campo tipo_sensor es obligatorio' });
    if (!limite_definido) return res.badRequest({ err: 'El campo limite_definido es obligatorio' });    
    Data.find({ direccion_estacion: direccion_estacion ,tipo_sensor:tipo_sensor})
    .sort({id:-1})
    .limit(limite_definido)
      .then(_data => {
        if (!_data) return res.notFound({ err: 'No se encontró información' });
        return res.ok(_data);
      })
      .catch(err => res.serverError(err));
  },
};

