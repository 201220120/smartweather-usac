module.exports.routes = {
  //user
  'POST /api/data': 'DataController.create',  
  'GET /api/data': 'DataController.findAll',  
  'GET /api/data/:direccion_estacion': 'DataController.findStation',  
  'GET /api/data/:direccion_estacion/:tipo_sensor': 'DataController.findStationType',  
  'GET /api/data/:direccion_estacion/:tipo_sensor/:limite_definido': 'DataController.findStationTypeLimit',    
};