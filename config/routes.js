module.exports.routes = {
  //user
  'POST /app/data': 'DataController.create',  
  'GET /app/data': 'DataController.findAll',  
  'GET /app/data/:direccion_estacion': 'DataController.findStation',  
  'GET /app/data/:direccion_estacion/:tipo_sensor': 'DataController.findStationType',  
  'GET /app/data/:direccion_estacion/:tipo_sensor/:limite_definido': 'DataController.findStationTypeLimit',    
  '/': {
    view: 'homepage'
  }
};