// result.js
document.addEventListener('DOMContentLoaded', function() {
    const score = localStorage.getItem('quizScore');
    const resultDiv = document.getElementById('result');

    if (score >= 6) {
        resultDiv.innerHTML = `<p>Seu escore é ${score}. <br> Recomenda-se a avaliação feita por um profissional qualificado.</p>`;
    } else {
        resultDiv.innerHTML = `<p>Seu escore é ${score}. <br> Não há indicativos fortes, mas continue atento e, se necessário, consulte um profissional.</p>`;
    }

    // Limpa o resultado armazenado para futuras avaliações
    localStorage.removeItem('quizScore');
});
