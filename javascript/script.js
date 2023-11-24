const wordList = ["Cachalot", "Petunia", "Serviette"];
const phraseList = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"];
let score = 0;

let choice = prompt("Did you want the word list or the phrase list ? : ");
while (choice != "word" && choice != "phrase")
	choice = prompt("Please enter a correct answer (word or phrase) : ");

let nbQuestions = 0;

if (choice == "word")
{
	for (let index = 0; index < wordList.length; index++)
	{
		let word = prompt("Please enter this word : " + wordList[index]);
		if (wordList[index] == word)
		{
			console.log("Congrats ! You find the word : " + wordList[index]);
			score++;
		}
		else
			console.log("You failed ! It's not " + word);
	}
	nbQuestions = wordList.length;
}
else
{
	for (let index = 0; index < phraseList.length; index++)
	{
		let phrase = prompt("Please enter this phrase : " + phraseList[index]);
		if (phraseList[index] == phrase)
		{
			console.log("Congrats ! You find the phrase : " + phraseList[index]);
			score++;
		}
		else
		console.log("You failed ! it's not " + phrase);
	}
	nbQuestions = phraseList.length;
}

function returnMessageScore(score, nbQuestions)
{
	let message = "Your final score is : " + score + " on " + nbQuestions;
	return message;
}

console.log(returnMessageScore(score, nbQuestions));