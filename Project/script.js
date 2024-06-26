document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let score = 0;

    // Definição das perguntas e das respostas válidas
    const groupAQuestions = ['q1', 'q7', 'q8', 'q10'];
    const groupBQuestions = ['q2', 'q3', 'q4', 'q5', 'q6', 'q9'];
    
    // Pontuação válida para cada grupo
    const validGroupAResponses = ['1', '2']; // Concordo Plenamente, Concordo um Pouco
    const validGroupBResponses = ['3', '4']; // Discordo Plenamente, Discordo um Pouco

    // Calcula a pontuação para o grupo A
    for (let question of groupAQuestions) {
        const options = document.getElementsByName(question);
        for (let option of options) {
            if (option.checked && validGroupAResponses.includes(option.value)) {
                score++;
                break; // Garante que apenas uma resposta seja contada por pergunta
            }
        }
    }

    // Calcula a pontuação para o grupo B
    for (let question of groupBQuestions) {
        const options = document.getElementsByName(question);
        for (let option of options) {
            if (option.checked && validGroupBResponses.includes(option.value)) {
                score++;
                break; // Garante que apenas uma resposta seja contada por pergunta
            }
        }
    }

    // Armazena a pontuação e redireciona para a página de resultados
    localStorage.setItem('quizScore', score);
    window.location.href = 'result.html';
});
