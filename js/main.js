"use srict";

var letterslow = new Map();
var lettersup = new Map();

letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
speclow = "[];',.";
specup = "{}:\"<>";


engslow = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
ruslow = "йцукенгшщзхъфывапролджэячсмитьбю";
engsup = "QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>";
rusup = "ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ"


for (var i = 0; i < 33; i++){
	lettersup.set(engsup[i], rusup[i]);
	letterslow.set(engslow[i], ruslow[i]);
}


function showCopied() {
	cpd.style.opacity = 1;
	setTimeout(function() {cpd.style.opacity = 0;}, 1500);
}


function copyClip() {
	var cptx = document.getElementById("output");
	cptx.select();
	document.execCommand("copy");
}


function makeMagic() {
	output.value = "";
	s = input.value;

	for(var i = 0; i < s.length; i++) {
		if (letters.includes(s[i]) && s[i] == s[i].toUpperCase()) {
			output.value += lettersup.get(s[i]);
		} else if (letters.includes(s[i])){
			output.value += letterslow.get(s[i]);
		} else if (speclow.includes(s[i])) {
			output.value += letterslow.get(s[i]);
		} else if (specup.includes(s[i])) {
			output.value += lettersup.get(s[i]);
		} else {
			output.value += s[i];
		}
	}

	copyClip();
	showCopied();
}


input.addEventListener('keydown', function(e) {
	if (e.key == "Enter") {
		makeMagic();
	}
});


btn.addEventListener('click', function() {
	makeMagic();
});
