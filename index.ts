#! usr/bin/env node

//import the "inquirer"module which is a command line interface for node.js
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.rgb(204,204,204)('\n \t\t <<<<<<< =================================================  >>>>>>>\n'));
console.log(chalk.bold.rgb(204,204,204)(chalk.magenta.bold("\t\t Welcome To \ 'Code With Faheela'\ Word Counter Application\n")));
console.log(chalk.bold.rgb(204,204,204)(' \t\t <<<<<<< =================================================== >>>>>>'));

//Declare a constant 'answer' and assign it to the result of inquirer.prompt function
const answers: {
   sentence:string
} = await inquirer.prompt([
    {
    name:"sentence",
    type:"input",
    message:chalk.blue.bold("Enter your sentences your count the word:")
}
])

const words = answers.sentence.trim().split(" ")

//print the array of words to the console
console.log(words);

console.log(chalk.blue.bold`your sentence word count is ${words.length}`);



