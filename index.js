/*algoritma
buatlah 1 key word soal
buat 4 kotak pilihan jawaban
buatlah 1  kotak jawaban salah
user akan mencari variasi jawaban yang tidak sesuai dengan pilihan lainnya.  find the false answer.
jika benar akan mengarah ke soal berikutnya
jika salah game terhenti dan keluar score akhir
*/

let questions = [
    {
        question : "that's not my song",
        imgSrc : "img/adele.jpg",
        choiceA : "when we were young",
        choiceB : "water under the bridge",
        choiceC : "the bridge is falling down",
        choiceD : "remedy",
        correct : "C"
    },{
        question : "that's not my song",
        imgSrc : "img/tulus.jpg",
        choiceA : "satu hari di bulan juni",
        choiceB : "badak",
        choiceC : "lagu untuk matahari",
        choiceD : "pamit",
        correct : "B"
    },{
        question : "find my song",
        imgSrc : "img/Marshmello.jpg",
        choiceA : "FRIENDS",
        choiceB : "closer",
        choiceC : "attention",
        choiceD : "scared to be lonely",
        correct : "A"
    },{
        question : "find my song",
        imgSrc : "img/kekeyi.jpg",
        choiceA : "aku bukan bonekamu",
        choiceB : "god save the queen",
        choiceC : "god bless america",
        choiceD : "indonesia raya",
        correct : "A"
    },{
        question : "that's not my song",
        imgSrc : "img/bili.jpg",
        choiceA : "lovely",
        choiceB : "ocean eyes",
        choiceC : "bad guy",
        choiceD : "new rules",
        correct : "D"
    },{
        question : "that's not my song",
        imgSrc : "img/frozen.jpg",
        choiceA : "let it go",
        choiceB : "do you want to build a function",
        choiceC : "do you want to build a snowman",
        choiceD : "for the first time in forever",
        correct : "B"
    },{
        question : "find my song",
        imgSrc : "img/selgom.jpg",
        choiceA : "love story",
        choiceB : "wrecking ball",
        choiceC : "it ain't me",
        choiceD : "somebody to you",
        correct : "C"
    },{
        question : "that's not my song",
        imgSrc : "img/annemarie.jpg",
        choiceA : "ciao adios",
        choiceB : "2002",
        choiceC : "sit still, look pretty",
        choiceD : "rockbye",
        correct : "C"
    },{
        question : "find my song",
        imgSrc : "img/wh.jpg",
        choiceA : "i will always love you",
        choiceB : "all i want for christmas is you",
        choiceC : "hero",
        choiceD : "emotions",
        correct : "A"
    },{
        question : "that's not my song",
        imgSrc : "img/bp.jpg",
        choiceA : "그게 어때",
        choiceB : "뚜두뚜두",
        choiceC : "서울",
        choiceD : "붐바 야",
        correct : "C"
    }
];


const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const gbr = document.getElementById("gbr");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");

const currentGame = document.getElementById("currentGame");
const scoreDiv = document.getElementById("scoreContainer");


const lastQuestion = questions.length - 1;
let currentQuestion = 0;
let count = 0;
const questionTime = 10; 
const gaugeWidth = 150; 
const gaugeUnit = gaugeWidth / questionTime;
let score = 0;


function scrollQuestion(){
    let q = questions[currentQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    gbr.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}
start.addEventListener("click",playGame);

function playGame(){
    start.style.display = "none";
    scrollQuestion();
    quiz.style.display = "block";
    currentGames();
    renderCounter();
    
}

function currentGames(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        currentGame.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function answer(answer){
    if( answer == questions[currentQuestion].correct){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    count = 0;
    if(currentQuestion < lastQuestion){
        currentQuestion++;
        scrollQuestion();
    }else{
        finalScore();
    }
}

function answerIsCorrect(){
    document.getElementById(currentQuestion).style.backgroundColor = "#0f0";
}

function answerIsWrong(){
    document.getElementById(currentQuestion).style.backgroundColor = "#f00";
}

function finalScore(){
    scoreDiv.style.display = "block";
    const scorePerCent = Math.round(100 * score/questions.length);
    scoreDiv.innerHTML = `<p>POCO LOCO! you got ${scorePerCent}</p>` ;
}