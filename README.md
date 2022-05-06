# Test zapi client
Programa que utiliza el plugin "zephyr_api" para obtener la información de los ciclos de prueba de zephyr, crear ciclos de prueba, crear ejecuciones entre otras funcionalidades.

La documentación del módulo "zephyr_api" y sus funcionalidades se pueden consultar en el siguiente enlace: https://www.npmjs.com/package/zephyr_api?activeTab=readme

## Como ejecutar el proyecto

1. Una vez clonado el proyecto en su equipo debe ingresar a la carpeta del proyecto y abrir una consola de comandos para ejecutar el comando `npm install` (tener en cuenta que este comando se ejecuta dentro de la ruta del proyecto).

2. Realizar los cambios indicados en la sección "NOTAS PARA AJUSTAR EL PLUGUIN "zephyr_api" del presente README.md

3. Cambiar el nombre del archivo .env_Example por .env y ajustar los valores de las variables ahí indicadas

4. Descomentariar el método deseado en el archivo src/index.js

5. En la consola de comandos ejecutar el comando `npm start` y el resultado de la operación se reflejara en la consola.


## NOTAS PARA AJUSTAR EL PLUGUIN "zephyr_api"

1. en la ruta node_modules > zephyr_api > index.js función "createExecution", se ajusta la variable "body" para que la propiedad 'assigneeType' tenga el valor de 'currentUser', originalmente el pluguin tendra el valor de 'assignee' para dicha propiedad.

2. en la ruta node_modules > zephyr_api > index.js función "getCycleIdFromCycleName", se ajusta la función "findCycleByName" que esta contenido en el modulo "getCycleIdFromCycleName" para reemplazar la línea `item.name === name ? id = item.id : id = false` por un if sin else que solo haga el cambio de valor para la variable id solo si encuentra la coincidencia, ejemplo: `if(item.name === name){	id = item.id }`			