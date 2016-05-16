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
	}
}

var loadService = new LoadService();