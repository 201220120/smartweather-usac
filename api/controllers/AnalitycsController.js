/**
 * AnalitycsController
 *
 * @description :: Server-side logic for managing Analitycs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
  /**
   * `AnalitycsController.climate()`
   */

  climate: function (req, res) {
    let direccion_estacion = req.params.direccion_estacion;
    if (!direccion_estacion) return res.badRequest({ err: 'El campo estacion es obligatorio' });
    sails.log('pe');
    var exec = require('child_process').exec;
    var child = exec('sudo java -jar ' + 'analitycs/Predecir-Clima.jar ' + direccion_estacion +' '+ __dirname,
      function (error, stdout, stderr) {
        return res.ok(stdout);
        if (error !== null) {
          res.serverError({ err: error });
        }
      });
  }
};