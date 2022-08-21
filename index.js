const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const capitalisedTutorial = [];

const titleCased = () => {
	//access each sentence in the array
	tutorials.map((sentence) => {
		//split the sentence into an array of words
		const words = sentence.split(" ");
		//capitalize the first letter of each word
		const capitalisedWords = words.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		});
		//join the words back together into a sentence
		const capitalizedSentence = capitalisedWords.join(" ");
		//push the capitalised sentence into the capitalisedTutorial array
		capitalisedTutorial.push(capitalizedSentence);
		// console.log(capitalizedSentence);
	});

	return capitalisedTutorial;
};

// titleCased();