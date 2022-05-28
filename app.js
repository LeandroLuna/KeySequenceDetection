const pressed = []; // Armazenar os caracteres pressionados
const secretCode = 'voila'; // Palavra secreta
window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(
        -secretCode.length - 1,
        pressed.length - secretCode.length
    ); // Começa a contagem do final e deleta sempre o primeiro caracter.
    if (pressed.join('').includes(secretCode)) {
        console.log('YOU GOT IT!!'); // .join transforma uma array de caracteres em uma string
        cornify_add();
    }
});