let xhttpt = new XMLHttpRequest();
xhttpt.open("GET", "https://shotwars.io/js/nipplejs.js");
xhttpt.responseType = "text";
xhttpt.addEventListener("load", function() {
	eval(xhttpt.response);
});
xhttpt.send();
