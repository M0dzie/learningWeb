function returnPhraseOrWord()
{
	let choice = prompt("Did you want the word list or the phrase list ? : ");
	
	while (choice != "word" && choice != "phrase")
		choice = prompt("Please enter a correct answer (word or phrase) : ");
	return choice;
}

function gameLoop(list)
{
	for (let index = 0; index < list.length; index++)
	{
		let word = prompt("Please enter this : " + list[index]);
		if (list[index] == word)
		{
			console.log("Congrats ! You find : " + list[index]);
			score++;
		}
		else
			console.log("You failed ! It's not " + word);
	}
	nbQuestions = list.length;
}

function returnMessageScore(score, nbQuestions)
{
	let message = "Your final score is : " + score + " on " + nbQuestions;
	return message;
}

function startGame()
{
	let choice = returnPhraseOrWord();
	if (choice == "word")
		gameLoop(wordList);
	else
		gameLoop(phraseList);
	console.log(returnMessageScore(score, nbQuestions));
}