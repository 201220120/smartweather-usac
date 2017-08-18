module.exports.routes = {
  //user
  'POST /data': 'DataController.create',  
  'GET /create': 'DataController.create',  
  'GET /createAll': 'DataController.createAll',  
  'GET /data': 'DataController.findAll',  
  'GET /data/:direccion_estacion': 'DataController.findStation',  
  'GET /data/:direccion_estacion/:tipo_sensor': 'DataController.findStationType',  
  'GET /data/:direccion_estacion/:tipo_sensor/:limite_definido': 'DataController.findStationTypeLimit',    
  '/': {
    view: 'homepage'
  }
};