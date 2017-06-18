let mySingleton = (function(){
	let _instance = null;
	class Singleton {
  		constructor(){
    		this.time = new Date();
  		}
	};

	let getInstance = function(){
		if(_instance == null) {
				_instance = new Singleton();
			}
		return _instance;
	}
	return {
		getInstance: getInstance
	}
})();


let instance1 = mySingleton.getInstance();
console.log(instance1.time);

setTimeout(()=>{
	let instance2 = mySingleton.getInstance();
	console.log(instance2.time);
 }, 5000);