// Класс ExtendedDate, наследующий от Date
class ExtendedDate extends Date {
    // Конструктор принимает аргументы Date или строку даты
    constructor(...args) {
        super(...args);
    }

    // Метод для вывода даты текстом (число и месяц)
    getFormattedDate() {
        const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        const day = this.getDate();
        const month = months[this.getMonth()];
        return `${day} ${month}`;
    }

    // Метод для проверки, является ли дата прошедшей или будущей
    isFuture() {
        const now = new Date();
        return this > now;
    }

    // Метод для проверки, является ли год високосным
    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    // Метод для получения следующей даты
    getNextDate() {
        const nextDate = new Date(this);
        nextDate.setDate(nextDate.getDate() + 1);
        return nextDate;
    }
}

// Функции для обработки событий кнопок
function displayFormattedDate() {
    const myDate = new ExtendedDate();
    const formattedDate = myDate.getFormattedDate();
    document.getElementById('formattedDate').textContent = formattedDate;
}

function checkFutureDate() {
    const myDate = new ExtendedDate();
    const isFuture = myDate.isFuture();
    document.getElementById('futureResult').textContent = isFuture ? 'Да' : 'Нет';
}

function checkLeapYear() {
    const myDate = new ExtendedDate();
    const isLeapYear = myDate.isLeapYear();
    document.getElementById('leapYearResult').textContent = isLeapYear ? 'Да' : 'Нет';
}

function displayNextDate() {
    const myDate = new ExtendedDate();
    const nextDate = myDate.getNextDate();
    const formattedNextDate = `${nextDate.getDate()}.${nextDate.getMonth() + 1}.${nextDate.getFullYear()}`;
    document.getElementById('nextDate').textContent = formattedNextDate;
}
