function DbAccess () {
	var db;
	this.open = function() {
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
			//alert("success")
		};
		request.onupgradeneeded = function(event) {
			db = event.target.result;
			//alert("upgrade")
			var exerciseStore = db.createObjectStore("exercise");
			var courseStore = db.createObjectStore("course");
			exerciseStore.createIndex("exerciseId", "exerciseId", { unique: true });
			courseStore.createIndex("courseId", "courseId", { unique: true });
		};
	}

	this.write = function(table, id, object) {
		var transaction = db.transaction([table], "readwrite");
		var objectStore = transaction.objectStore(table);
		objectStore.add(object, id);		
	}

	this.read = function(table, id, successCallback) {
		var resultTransaction;
		var transaction = db.transaction([table]);
		var objectStore = transaction.objectStore(table);
		var request = objectStore.get(id);
		//alert("in read");
		successCallback(resultTransaction);
		request.onerror = function(event) {
			alert("что-то пошло не так")
		};
		request.onsuccess = function(event) {
			resultTransaction = request.result
			alert("get result");
			alert(resultTransaction.title);
		};
		//alert(request.result.title)
		//return request.result;
	}
}

var bdAccess = new DbAccess();
bdAccess.open();