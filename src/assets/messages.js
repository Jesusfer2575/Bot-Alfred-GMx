const channels = require('./IDs/channels');
const messages = {
  alfred: 'Dígame joven Wayne :)',
  welcome: `
    Hola, bienvenido a la comunidad mas cool de músicos y guitarristas Guitarristas Mx,
    siéntase libre de compartir lo que quiera joven Wayne, espere, usted no es el joven Wayne!\n

    Jóvenes denle un vistazo a nuestras <#${channels.rules}> y si tienen algún problema, busquen a cualquiera de nuestros administradores @adfernvndez, @Erick Lainuz y @Vick_Esquivel.\n
   
    También pueden ir a <#${channels.general}> y presentarse!\n
    
    <#${channels.randomTalks}> es el canal para decir lo que gusten sobre lo que quieran.\n
  `,
  rules: `Puede dirigirse al canal <#${channels.rules}> para consultar las reglas del grupo joven Wayne`,
  gear: `Puede dirigirse al canal <#${channels.gearTalksQuestions}>`,
  chasquea: 'A quien debería chasquearme señor Wayne?'
}

module.exports = messages;