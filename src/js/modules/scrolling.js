const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', ()=> {
        if(document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });




    // Выбираем все ссылки на странице, которые начинаются с символа #
let links = document.querySelectorAll('[href^="#"]');

// Устанавливаем скорость прокрутки
let speed = 0.3;

// Добавляем обработчик событий для каждой ссылки
links.forEach(link => {
    link.addEventListener('click', function(event) {
        // Отменяем стандартное поведение ссылки
        event.preventDefault();

        // Получаем текущее положение страницы
        let widthTop = document.documentElement.scrollTop;

        // Переменная widthTop содержит текущее положение страницы относительно верха документа.

        // Получаем хэш ссылки, на которую нажали
        let hash = this.hash;

        // Получаем координаты блока, к которому нужно прокрутить страницу
        let toBlock = document.querySelector(hash).getBoundingClientRect().top; // Метод getBoundingClientRect() возвращает объект, содержащий значения свойств top, right, bottom, left, width, и height элемента.

        // Устанавливаем время начала прокрутки
        let start = null;

        // Функция, которая выполняется на каждом кадре анимации
        function step(time) {
            if (start === null) {
                start = time;
            }

            // Вычисляем новое положение страницы
            let progress = time - start;
            let r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

        // мы используем тернарный оператор для определения новой позиции страницы. Если toBlock (верхняя координата блока) меньше нуля,
        //  то это означает, что блок находится выше текущего положения страницы, и мы должны прокрутить страницу вверх. В этом случае мы 
        //  вычисляем новую позицию с помощью метода Math.max(), который возвращает максимальное значение из двух аргументов. Первый 
        //  аргумент - это текущее положение страницы минус прогресс прокрутки (т.е. насколько далеко мы прокрутили страницу), деленный
        // на скорость (speed). Второй аргумент - это верхняя координата блока. Мы используем метод Math.max() для того, чтобы убедиться, что страница не будет прокручена за пределы начала документа.

        // Если toBlock больше или равно нулю, то блок находится ниже текущего положения страницы, и мы должны прокрутить страницу вниз. 
        // В этом случае мы вычисляем новую позицию с помощью метода Math.min(), который возвращает минимальное значение из двух аргументов.
        //  Первый аргумент - это текущее положение страницы плюс прогресс прокрутки, деленный на скорость (speed). Второй аргумент - это 
        //  верхняя координата блока. Мы используем метод Math.min() для того, чтобы убедиться, что страница не будет прокручена за пределы 
        //  конца документа.

        // Итак, переменная r содержит новую позицию страницы, которая затем передается методу scrollTo() для прокрутки страницы к указанной 
        // позиции.


            // Прокручиваем страницу до новой позиции
            document.documentElement.scrollTo(0, r);

            // Проверяем, достигли ли мы нужного положения
            if (r != widthTop + toBlock) {
                // Если нет, то продолжаем анимацию
                requestAnimationFrame(step);
            } else {
                // Если да, то устанавливаем хэш в URL
                location.hash = hash;
            }
        }

        // Запускаем анимацию прокрутки
        requestAnimationFrame(step);
    });
});


};
export default scrolling;