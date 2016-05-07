function DbAccess () {
	var bd;

	/**
	 * [open description]
	 * @param  {string} option - "write" or "read" 
	 * @param  {number} or {object} param - if option "write" param is object to write in DB
	 *                     					if option "read" param is ID to read from DB
	 */
	this.open = function(option, param) {
		var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
		if (!indexedDB) {
			alert("Такие-то функции будут недоступны");
		};
		var request = indexedDB.open("LM", 1);
		request.onerror = function(event) {
			alert("Что-то не так");
		};
		request.onsuccess = function(event) {
			db = event.target.result;
			alert("success")
			if (option === 'write') {
				this.write(param)
			} else if (option === 'read') {
				var result = read(param)
				return result
			}
		};
		request.onupgradeneeded = function(event) {
			db = event.target.result;
			alert("updrade")
			var exerciseStore = db.createObjectStore("exercise");
			var courseStore = db.createObjectStore("course");
			exerciseStore.createIndex("exerciseId", "exerciseId", { unique: true });
			courseStore.createIndex("courseId", "courseId", { unique: true });
		};
	}

	this.write = function(exObject) {
		var transaction = db.transaction(["exercise"], "readwrite");
		var objectStore = transaction.objectStore("exercise");
		objectStore.add(exObject, exObject.exerciseId);		
	}

	function read(exId) {
		var transaction = db.transaction(["exercise"]);
		var objectStore = transaction.objectStore("exercise");
		var request = objectStore.get(exId);
		request.onerror = function(event) {
			alert("что-то пошло не так")
		};
		request.onsuccess = function(event) {
			res = request.result
			return res;
		};
		//alert(request.result.title)
		//return request.result;
	}
}

var bdAccess = new DbAccess();