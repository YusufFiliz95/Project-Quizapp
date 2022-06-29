let questions = [
    {
    'question' : 'Was befindet sich im Zentrum einer Galaxie?',
    'answer_1' : 'Ein supermassives schwarzes Loch',
    'answer_2' : 'Die Sonne',
    'answer_3' : 'Ein Weißer Zwerg Supernova',
    'answer_4' : 'Ein Gasriese',
    'right_answer' : 1
    },

    {
    'question' : 'Wer hat das Teleskop erfunden?',
    'answer_1' : 'Hypatia',
    'answer_2' : 'Hans Lippershey',
    'answer_3' : 'Galileo',
    'answer_4' : 'Johannes Kepler',
    'right_answer' : 2 
    },

    {
    'question' : 'Welches dieser Objekte ist am weitesten von der Sonne entfernt?',
    'answer_1' : 'Merkur',
    'answer_2' : 'Saturn',
    'answer_3' : 'Jupiter',
    'answer_4' : 'Pluto',
    'right_answer' : 4 
    },
    
    {
    'question' : 'Welches ist der nach Masse kleinste Planet im Sonnensystem?',
    'answer_1' : 'Jupiter',
    'answer_2' : 'Merkur',
    'answer_3' : 'Erde',
    'answer_4' : 'Mars',
    'right_answer' : 2 
    },

    {
    'question' : 'Was macht einen Planeten zu einem Zwergplaneten?',
    'answer_1' : 'Entfernung von der Sonne',
    'answer_2' : 'Farbe',
    'answer_3' : 'Geruch',
    'answer_4' : 'Größe und Form',
    'right_answer' : 4
    },

    {
    'question' : 'Welche zwei Bewegungen haben alle Planeten?',
    'answer_1' : 'wackeln und taumeln',
    'answer_2' : 'verdrehen und schütteln',
    'answer_3' : 'Umkreisen und drehen',
    'answer_4' : 'Gerade und still',
    'right_answer' : 3
    },

    {
    'question' : 'Wie viele Kilometer hat ein Lichtjahr ungefähr?',
    'answer_1' : '950.000 km',
    'answer_2' : '9.5 Billionen km',
    'answer_3' : '9.5 Milliarden km',
    'answer_4' : '9.5 Millionen km',
    'right_answer' : 2 
    },

    {
    'question' : 'Mit welchem US-Raumschiff landeten Neil Armstrong und Edwin Aldrin jr. auf dem Mond?',
    'answer_1' : 'Apollo 11',
    'answer_2' : 'Apollo 13',
    'answer_3' : 'Apollo 17',
    'answer_4' : 'Apollo 7',
    'right_answer' : 1 
    },

    {
    'question' : 'Woraus besteht die Marsatmosphäre hauptsächlich?',
    'answer_1' : 'Helium',
    'answer_2' : 'Stickstoff',
    'answer_3' : 'Kohlendioxid',
    'answer_4' : 'Sauerstoff',
    'right_answer' : 3 
    },

    {
    'question' : 'Wie lange braucht das Licht von der Sonne zur Erde?',
    'answer_1' : '10 Jahre',
    'answer_2' : '8',
    'answer_3' : '1 1/2 Stunden',
    'answer_4' : '7 Monate',
    'right_answer' : 2 
    }
];

let currenQuestion = 0;

function questionAmounts(){
    document.getElementById('quizQuestionAmounts').innerHTML = questions.length;
}

function showQuestion(){
    let question = questions[currenQuestion];

    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection){

}