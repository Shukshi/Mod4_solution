(function (window){
	var helloSpeaker = {};
	var speakword = "Hello";
	helloSpeaker.speak = function(name){
		//helloSpeaker.name = name;
		console.log(speakword + " " + name);
	}
	//console.log(speakword);
	window.helloSpeaker= helloSpeaker;
})(window);