function load() {
    const recognition = new webkitSpeechRecognition();
    const grammarList = new webkitSpeechGrammarList();

    const positions = ['top', 'mid', 'carry', 'support', 'jungle']
    const spells = ['ghost', 'flash', 'ignite', 'ulti']
    const timeables = [];
    
    for (position of positions) {
	for (spell of spells) {
	    timeables.push(`${position} ${spell}`);
	}
    }
    
    const grammar = `#JSGF V1.0;
grammar timeables;
public <timeables> = ${timeables.join(' | ')} ;
`;

    console.log(`grammar ${grammar}`);
    
    grammarList.addFromString(grammar, 1);
    
    // recognition.grammars = grammarList;
    recognition.continuous = false;
    recognition.lang = "es-AR";
    recognition.interimResults = false;
    recognition.maxAlternatives = 10;

    const diagnostic = document.querySelector(".output");

    recognition.start();
    console.log("Ready to receive a command.");

    recognition.onresult = (event) => {
	const lines = [];
	for (result of event.results) {
	    const alternatives = []
	    for (alternative of result) {
		alternatives.push(alternative);
	    }
	    const alternativesMsg = alternatives.map(alt => alt.transcript).join(',');
	    lines.push(`[alternatives=${alternativesMsg},isFinal=${result.isFinal}]`);
	}
	const msg = lines.join('\n');

	diagnostic.textContent += `${msg}\n`;
    };

    recognition.onend = (event) => {
	recognition.start();
    };
    

    const events = ['audiostart', 'audioend', 'end', 'error',
		    'nomatch', 'result', 'soundstart', 'soundend',
		    'speechstart', 'speechend', 'start']
    
    for (event of events) {
	const ev = event;
	recognition.addEventListener(event, e => {
	    console.log(e);
	});
    }
}

document.addEventListener("DOMContentLoaded", load);

