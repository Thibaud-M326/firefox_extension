import OpenAI from "openai";
const clientAI = new OpenAI();

document.body.style.border = "10px solid blue";

var pageText = document.body.innerText;

const response = await clientAI.responses.create({
    model: "gpt-5-nano",
    input: "Write a one-sentence bedtime story about a unicorn."
});

console.log(response.output_text);



