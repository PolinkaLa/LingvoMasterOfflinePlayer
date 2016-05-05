function LoadService () {

	this.download = function(urlArchive) {
        var fileSysURL = 'this is path to FS'
        if (device.ios()) {
            fileSysURL = '/var/mobile/Applications/<application UUID>/Documents/';
        } else
        if (device.android()) {
            fileSysURL = '/storage/emulated/0/'
        }
        alert(fileSysURL)

		// var fileTransfer = new FileTransfer();
		// //var uri = encodeURI("http://some.server.com/download.php");
  //    //fileURL = "cdvfile://localhost/persistent/path/to/downloads/";
		// fileTransfer.download(
  //   		urlArchive,
  //   		fileURL,
  //   		function(entry) {
  //       		console.log("download complete: " + entry.toURL());
  //   		},
  //   		function(error) {
  //      			console.log("download error source " + error.source);
  //       		console.log("download error target " + error.target);
  //       		console.log("upload error code" + error.code);
  //   		},
  //   		false,
  //   		{
  //       		headers: {
  //           		"Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
  //       		}
  //   		}
		// );
	}
}

var loadService = new LoadService();