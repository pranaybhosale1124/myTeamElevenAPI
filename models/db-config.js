const Sequelize = require('sequelize');
// var initModels = require("./init-models");
// var models = initModels(sequelize);


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('my_team_eleven', 'root', 'root', {
  host: 'localhost',
  port:3306,
  dialect: 'mysql'
});

sequelize.authenticate().then(()=>{
    console.info('CONNECTION SUCCESSFULL!!!');
}).catch((error) => {
    console.error('CONNECTION FAIL:::', error);
 });
module.exports=sequelize;