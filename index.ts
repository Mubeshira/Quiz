#! /usr/bin/env node


import inquirer from "inquirer"

const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;

} = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message:"Q1.Who is the founder of Pakistan?",
        choices: ["Allama Iqbal","Quaid-e-Azam","Liaquat Ali Khan","Maulana Muhammad Ali Johar"]
      },
      {
        name: "question_2",
        type: "list",
        message:"Q2.Who is the national poet of Pakistan?",
        choices: ["Iskandar Mirza","Allama Iqbal","Fatima Jinnah","Quaid-e-Azam"]
      },
      {
        name: "question_3",
        type: "list",
        message:"Q3.What is the national flower of Pakistan?",
        choices: ["Tulip","Rose", "Jasmin","Sun Flower"]
      },
      {
        name: "question_4",
        type: "list",
        message:"Q4.What is the national animal of Pakistan?",
        choices: ["Cow","Markhor","Lion","Elephant"]
      },
      {
        name: "question_5",
        type: "list",
        message:"Q5.What is the national bird of Pakistan?",
        choices:["Chakor","Pigeon", "Eagle","Shaheen"]
      }

]);


let score: number = 0;

switch(quiz.question_1) {
    case  "Quaid-e-Azam":
        console.log("1.Correct!");
        ++score;
        break;
        default:
            console.log("1.Incorrect!");
}

switch(quiz.question_2){
    case  "Allama Iqbal":
        console.log("2.Correct!");
        ++score;
        break;
        default:
            console.log("2.Incorrect!");
}

switch(quiz.question_3){
    case  "Jasmin":
        console.log("3.Correct!");
        ++score;
        break;
        default:
            console.log("3.Incorrect!");
}

switch(quiz.question_4){
    case  "Markhor":
        console.log("4.Correct!");
        ++score;
        break;
        default:
            console.log("4.Incorrect!");
}

switch(quiz.question_5){
    case  "Chakor":
        console.log("5.Correct!");
        ++score;
        break;
        default:
            console.log("5.Incorrect!");
}

console.log(`Score: ${score}`);
