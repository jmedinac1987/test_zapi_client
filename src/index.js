require("dotenv").config();
const ZAPI = require('zephyr_api')
global.__ZAPIcreds = [process.env.ZAPI_ACCESS_KEY, process.env.ZAPI_SECRET_KEY, process.env.ASSIGNEE];

/**Obtener la información de todos los ciclos de prueba de acuerdo con el id y versión de un proyecto
* @param: projectId, versionId
* @returns: json con información de nombre del ciclo de prueba, el id del ciclo y otro tipo información que puede ser relevante
*
*/
ZAPI.getAllCycles('10455', '-1').then(res => console.log(res)).catch(error => console.error(error));

/**Obtener la información de un ciclos de prueba de acuerdo con el nombre del ciclo de prueba
* @param: projectId, versionId, cycleName
* @returns: json con la información del id del ciclo de prueba, id del proyecto e id de la versión
*/
ZAPI.getCycleIdFromCycleName('10455', '-1', 'Consulta movimiento cuenta corriente').then(res => console.log(res)).catch(error => console.error(error));

/**Crea una ejecución de prueba la cual se asocia a un caso de prueba y a un determinado ciclo de prueba (test plan)
* @param: cycleId, projectId, versionId, issueId, testStatus, assignee
* @returns: json con la información del execution id, información del ciclo de prueba y el caso de prueba al cual se asigna el
* la ejecución creada
*/
ZAPI.createExecution('4c753c5e323d217eda038b17fd7' , '10455', '-1', '641', '1' , 'nombre@email.com').then(res => console.log(res)).catch(error => console.error(error));