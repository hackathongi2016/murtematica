/**
 * Created by Jogui on 09/04/2016.
 */
/*var singleton = function singleton(){
  //defining a var instead of this (works for variable & function) will create a private definition
  var connectionList = {};

  this.add = function(socket){
    if(!connectionList[0]){
      sails.log.info("CONNECTION ADDED");
      connectionList[0] = socket;
    }
  };

  this.remove = function(){
    if(connectionList[0]){
      delete connectionList[0];
    }
  };

  this.getConnection = function(){
    return connectionList[0];
  };

  if(singleton.caller != singleton.getInstance){
    throw new Error("This object cannot be instanciated");
  }
}


singleton.instance = null;



singleton.getInstance = function(){
  if(this.instance === null){
    this.instance = new singleton();
  }
  return this.instance;
}

module.exports = singleton.getInstance();
*/
