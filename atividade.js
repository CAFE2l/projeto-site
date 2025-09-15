let cumprimento = "Quarenta Letra '-'"; 
let substituto = "(aqui) vai a palavra";
let frase = substituto.replace("aqui", cumprimento);

let branco = "   string com espaços   ";

let stringAparada = branco.trim();

let brincadeira = "Não estou aqui";
console.log(cumprimento.length);


console.log(cumprimento.toUpperCase());


console.log(cumprimento.toLowerCase());

console.log(cumprimento[1,5]);

console.log(frase);

console.log(stringAparada);

if(brincadeira.includes("aqui")){
    console.log("MENTIROSO ARROMBADO");
} else{
    console.log("Não é que é mesmo");
}




let arrayDePalavras = frase.split(' '); 

console.log(arrayDePalavras);


let comecaCom = frase.startsWith("(Quarenta Letra '-')")
console.log(comecaCom)

let nomeDoArquivo = "relatorio_mensal.pdf";

let ehUmPdf = nomeDoArquivo.endsWith(".pdf");
console.log(ehUmPdf);

let stringInvertida = cumprimento.split('').reverse().join('');

console.log(stringInvertida);
console.log(); 