const server = require('./src/app.js');
const {conn} = require('./src/db.js');


/*
        _____               
    /          /    ___________________________________________                                            
 ( ====|    /  /                                                                     /||
  ( =====| /           °°°   BitEkos - API   °°°                     /|||
( ====|/              coded by Emilia Cabral                  / /|||
/________________________________________ ________/ /   |||
|  _____________________________________________   ||   ||/
|  ||                                                                        |  ||
|  ||                                                                        |  ||
|  |/                                                                         |  |/  
                 
*/

conn.sync({force: true}).then(() => {
	server.listen(process.env.PORT, () => {
		console.log('listening at ' + process.env.PORT); 
	});
});