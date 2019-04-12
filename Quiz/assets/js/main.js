let questions = [
	{
		text: 'Qual é o objeto de estudo do puericultor?',
		answers: [
			{
				text: 'Crianças',
				isCorrect: true
			},
			{
				text: 'Coelhos',
				isCorrect: false
			},

			{
				text: 'Abelhas',
				isCorrect: false
			},

			{
				text: 'Galinhas',
				isCorrect: false
			},

		]
	},

	{
		text: 'Em que desporto se destacou Joaquim Agostinho?',
		answers: [
			{
				text: 'Atletismo',
				isCorrect: false
			},
			{
				text: 'Ciclismo',
				isCorrect: true
			},
			{
				text: 'Fórmula 1',
				isCorrect: false
			},
			{
				text: 'Andebol',
				isCorrect: false
			},

		]
	},

	{
		text: 'O Sport Lisboa e Benfica foi fundado em que ano?',
		answers: [
			{
				text: '1905',
				isCorrect: false
			},
			{
				text: '1904',
				isCorrect: true
			},
			{
				text: '1906',
				isCorrect: false
			},
			{
				text: '1903',
				isCorrect: false
			},

		]
	},

	{
		text: 'Qual das seguintes cidades é considerada como "A Veneza de Portugal?',
		answers: [
			{
				text: 'Penafiel',
				isCorrect: false
			},
			{
				text: 'Porto',
				isCorrect: false
			},
			{
				text: 'Aveiro',
				isCorrect: true
			},
			{
				text: 'Viseu',
				isCorrect: false
			},

		]
	},

	{
		text:'Quantos Bytes tem um Kilobyte?',
		answers: [
			{
				text:'1000',
				isCorrect:false

			},
			{
				text:'1001',
				isCorrect:false

			},
			{
				text:'1024',
				isCorrect:true

			},
			{
				text:'1003',
				isCorrect:false

			},
		]

	},

	{
		text:'Em que país se situa a cidade de Londres?',
		answers: [
			{
				text:'França',
				isCorrect:false

			},
			{
				text:'Portugal',
				isCorrect:false

			},
			{
				text:'Polónia',
				isCorrect:false

			},
			{
				text:'Inglaterra',
				isCorrect:true

			},
		]

	},

	{
		text:'Que tenista português venceu pela primeira vez um Estoril Open?',
		answers: [
			{
				text:'João Sousa',
				isCorrect:true

			},
			{
				text:'Gastão Elias',
				isCorrect:false

			},
			{
				text:'Frederico Gil',
				isCorrect:false

			},
			{
				text:'Nuno Marques',
				isCorrect:false

			},
		]

	},
]

let score = 0;

/*
questions.forEach(function(question){
	let questionstext = question.text + '\n';
	for (let i = 0; i < question.answers.length; i++){
		let answer = question.answers[i].text;
			questionstext = questionstext + '\n' + (i+1) +'-' + answer;

	}


	//Guarda a resposta dada
	let saveAnswer = prompt(questionstext);

	let correctAnswer = question.answers[parseInt(saveAnswer)-1].isCorrect;
	if(correctAnswer == true){
		score ++;
		alert('Boa. Acertou a resposta');
	}
	else{
		alert('Oh! Errou');
	}
	
})

alert('A pontuação é:' + score);
*/

function quest(){
	let question_containers = document.getElementsByClassName('questions');
	if(question_containers.length > 0){
		let question_container = question_containers[0];

		question_container.innerHTML='';

		for(let i=0; i < questions.length; i++){
			let question = questions[i];
			console.log(question);
			question_container.innerHTML= question_container.innerHTML+`<p class="question">${question.text}</p>`;	

		}	
	}
}
quest();

