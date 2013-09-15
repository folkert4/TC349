function browserInfo() {
	navigatorObject = window.navigator;
	var thisBrowser, browserCheck = navigator.userAgent
	if(browserCheck.indexOf("Chrome") > -1) {
		thisBrowser = "Google Chrome";
	} else if (browserCheck.indexOf("Safari") > -1) {
		thisBrowser = "Apple Safari";
	} else if (browserCheck.indexOf("Opera") > -1) {
		thisBrowser = "Opera";
	} else if (browserCheck.indexOf("Firefox") > -1) {
		thisBrowser = "Mozilla Firefox";
	} else if (browserCheck.indexOf("MSIE") > -1) {
		thisBrowser = "Microsoft Internet Explorer";
	}
	alert("You are using: " + thisBrowser);
}
