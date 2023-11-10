const wordList = ["Cachalot", "Petunia", "Serviette"];
let score = 0;

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

console.log("Your final score : " + score);