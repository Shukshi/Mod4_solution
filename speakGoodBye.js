(function (window){
	var byeSpeaker = {};
	var speakword = "Bye";
	byeSpeaker.speak = function(name){
		var temp = name;
		console.log(speakword + " " + temp);
	}
	//console.log(speakword);
	window.byeSpeaker = byeSpeaker;
}) (window)