/* Integración Continua con Circle

-CI => Continuous Integration
-Es un proceso que corre a traves de una herramienta para llevar nuestro codigo de forma automatizada de nuestra computadora a un servidor externo.
 Una integración continua es una especie de barrera automatizada para no deployar codigo roto en ambiente que no sean nuestro ambiente local.


En nuestro proyecto React:
    -Creamos una carpeta que se llama .circleci
    -Adentro creamos el archivo config.yml


workflow => Nos sirven para tener distintos casos de uso para nuestra integracion continua. Ej: branch develop y branch master
Job => Son un conjunto de pasos que tienen un nombre para poder identificarlos
Steps => Cuales son:
    -Instalar las dependencias
    -Generar un bid
    -Correr los test
    -Deployar a testing        

https://circleci.com/


-Se me rompió en npm run build y nose porque.

*/