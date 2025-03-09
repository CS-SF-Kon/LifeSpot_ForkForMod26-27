let session = new Map();

function handleSession() {
    session.set("startDate", new Date().toLocaleString())
    session.set("userAgent", window.navigator.userAgent)
}

function checkAge() {
    session.set("age", prompt("Пожалуйста, введите ваш возраст"))

    if (session.get("age") >= 18) {
        alert("Приветствуем на LifeSpot! " + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

let sessionLog = function logSession() {
    for (let result of session) {
        console.log(result)
    }
}

function filterContent( userInput ) {
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        //let videoText = elements[i].querySelector('.video-title').innerText; // вот это вот не работает ни с одинарными, ни с двойными кавычками
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText; // а вот это работает
        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) /* зачем данные о вводе пользователя опять переводить в LowerCase? для подстраховки? */
        {
            elements[i].style.display = 'none';
        }
        else
        {
            elements[i].style.display = 'inline-block';
        }
    }
}