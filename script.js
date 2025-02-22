let fff = document.querySelector('.words');
let startGame = document.querySelector('.start')
let wrapperWords = document.querySelector('h3');
let input = document.querySelector('input');
let btnInp = document.querySelector('.check');
let btnNext = document.querySelector('.next');
let speachStart = document.querySelector('h4');
let reload = document.querySelector('.reload');

let words = ['антропоморфизм', 'нигилизм', 'субъективность', 
    'парадигматический', 'когнитивный', 'эмпиризм', 'семиотика', 
    'идентичность', 'абстракция', 'деконструкция', 'эмпатия', 
    'хронотоп', 'антитеза', 'индукция', 'латентный', 'метаанализ',
    'эвристика', 'гипербола', 'логистика', 'синтаксис', 'утопия', 'философия',
    'модерация', 'аксиома', 'аллюзия', 'альбом', 'альвеола', 'альманах', 
    'альтруизм', 'аляповатый', 'амазонка', 'амальгама', 'амбиция', 'амбразура', 
    'амбушюр', 'амнистия', 'амортизация', 'балык', 'балюстрада', 'баритон', 'бутафор', 
    'бутоньерка', 'виртуальный', 'виртуоз', 'вирши', 'високосный', 'лакомый', 'лакуна', 
    'ламбрекен', 'ламинария', 'ламинирование', 'лампас', 'ланита', 'лапидарный'];

let wordsComplicated = ['утилитаризм', 'трансцендентный', 'эпистемология', 
    'экзистенциализм', 'параметризация', 'дискурсивный', 'параметризация', 
    'телеология', 'феноменализм', 'херменевтика', 'экспоненциальный', 'когерентность',
    'нонконформизм', 'бифуркация', 'параллелизм', 'оксюморон', 'циркуляция', 'импликация',
    'детерминизм', 'верификация', 'бенефициар', 'циркуляция', 'амбивалентный', 'заскорузлый', 
    'имманентный', 'имплицитный', 'импонировать', 'импресарио', 'инаугурация', 'инвектива', 'индифферентный', 
    'индульгенция' , 'компендиум', 'компетентный', 'компиляция' , 'нострификация', 'нумизматика', 
    'пентаграмма', 'пентакосиомедимны', 'эмпириокритицизм'];

let answerBad = ['Явно было иначе...', 'Куда же ты смотрел...', 'Кажется, не та буква', 'Чёрт, мы верили в тебя'];
let answerGood = ['А он хорош!', 'Отлично!', 'Прячьте банковские карты, он может запомнить номер', 'Ещё немного!', 'Тебе просто повезло...']

function randowAnswerBad() {
    let answerAnswer = Math.floor(Math.random() * answerBad.length);
    alert(answerBad[answerAnswer]);
}

function randowAnswerGood() {
    let answerAnswer = Math.floor(Math.random() * answerGood.length);
    alert(answerGood[answerAnswer]);
}

startGame.addEventListener('click', function(){
    wrapperWords.style.display = 'flex';
    wrapperWords.classList.add('noselect')
    startGame.style.display = 'none';
    speachStart.style.display = 'none';
    fff.style.background = 'none'

    getRandomWord();
    intervalInput();
})

function getRandomWord(){ //радномим слова из массива и добавляем их на страницу
    let randomWord1 = Math.floor(Math.random() * words.length);
    let randomWord2 = Math.floor(Math.random() * words.length);
    if(words[randomWord1] != words[randomWord2]){
        wrapperWords.textContent = `${words[randomWord1]}, ${words[randomWord2]}`;
        words.splice([randomWord1], 1), words.splice([randomWord2], 1)
    }
}

function getRandomWordComp(){ //радномим слова из массива и добавляем их на страницу
    let randowWordComplicated1 = Math.floor(Math.random() * wordsComplicated.length);
    let randowWordComplicated2 = Math.floor(Math.random() * wordsComplicated.length);
    if(wordsComplicated[randowWordComplicated1] != wordsComplicated[randowWordComplicated2]){
        wrapperWords.textContent = `${wordsComplicated[randowWordComplicated1]}, ${wordsComplicated[randowWordComplicated2]}`;
        wordsComplicated.splice([randowWordComplicated1], 1), wordsComplicated.splice([randowWordComplicated2], 1)
    }
}

function displayInput(){ // прячем слова, появляется инпут и кнопка проверки
    input.style.display = 'flex';
    btnInp.style.display = 'flex';
    wrapperWords.style.display = 'none';
}

function hideInput(){
    input.style.display = 'none';
    btnInp.style.display = 'none';
    wrapperWords.style.display = 'flex';
}

let counterWin = 0;
let counterLost = 5;
function intervalInput(){
    setTimeout(function (){
        displayInput();
    }, 5000)
}

btnInp.addEventListener('click', function checkWords(){
    btnNext.style.display = 'flex';
    nextStep;
    if(wrapperWords.textContent.toLowerCase().replaceAll(' ', '') == input.value.toLowerCase().replaceAll(' ', '')){
        randowAnswerGood()
        counterWin++;
    }else{
        counterLost--
        randowAnswerBad();
        if(counterLost === 0){
            btnNext.remove();
            youLose()
        }
    }
})

function youLose(){
    btnNext.remove()
    reload.style.display = 'flex'
    reload.addEventListener('click', function(){
        location.reload();
    })
}

let nextStep = btnNext.addEventListener('click', function(){
    input.value = ''
    btnNext.style.display = 'none';
    hideInput();
    intervalInput();
    if(counterWin >= 5 && counterLost != 0 && counterWin < 15){
        getRandomWordComp();
    }else if (counterWin <= 5){
        getRandomWord();
    }else{
        console.log('Воу, легче. Мы поняли: с твоей памятью никто не сравнится. Ты прошёл это трудное испытание!')
    }
})





