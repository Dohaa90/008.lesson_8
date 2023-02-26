let askDate = prompt('Введите дату вашего рождения', Number(2022));
let askCity = prompt('Введите название города вашего проживания', String('Київ'));
let askSport = prompt('Введите Ваш любимый вид спорта', String('Футбол'));

let sport1 = 'Футбол';
let sport2 = 'Баскетбол';
let sport3 = 'Хоккей';
let chemp1 = 'Месси';
let chemp2 = 'Л.Джеймс';
let chemp3 = 'Э.Стаал';

if (askDate === null && askCity === null && askSport === null) {
    alert('Шкода, що Ви не захотіли ввести свій(ю)'.concat(' ', 'дату вашего рождения, ', ' название города вашего проживания, ', ' Ваш любимый вид спорта'));
}
else if (askDate === null && askSport === null) {
    alert('Шкода, що Ви не захотіли ввести свій(ю)'.concat(' ', 'дату вашего рождения, ', ' Ваш любимый вид спорта'));
}
else if (askDate === null && askCity === null) {
    alert('Шкода, що Ви не захотіли ввести свій(ю)'.concat(' ', 'дату вашего рождения, ', ' название города вашего проживания'));
}
else if (askDate === null) {
    alert('Шкода, що Ви не захотіли ввести свій(ю)'.concat(' ', 'дату вашего рождения'));
}
else if (askCity === null) {
    alert('Шкода, що Ви не захотіли ввести свій(ю)'.concat(' ', 'название города вашего проживания'));
}
else if (askSport === null) {
    alert('Шкода, що Ви не захотіли ввести свій(ю)'.concat(' ', 'Ваш любимый вид спорта'));
}
 else {
    let resYear = String(2023 - Number(askDate));
 if (askCity !== 'Лондон' || askCity !== 'Вашингтон' || askCity !== 'Київ') {
        let result = 'Ти живеш у місті'.concat(' ', askCity);
        switch (askSport) {
            case sport1:
                alert(resYear.concat(' года и ', result, ' Круто! Хочеш стати ', chemp1, '?'));
                break;
            case sport2:
                alert(resYear.concat(' года и ', result, ' Круто! Хочеш стати ', chemp2, '?'));
                break;
            case sport3:
                alert(resYear.concat(' года и ', result, ' Круто! Хочеш стати ', chemp3, '?'));
                break;

            default:
                alert(resYear.concat(' года и ', result, ' Круто! Тебе нравится ', askSport,));
        }
    }
    else if (askCity === 'Київ') {
        let capital = 'Украина';
        let result = 'ти живеш у столиці'.concat(' ', capital);
        switch (askSport) {
            case sport1:
                alert(resYear.concat(' года и ', result, ' Круто! Хочеш стати ', chemp1, '?'));
                break;
            case sport2:
                alert(resYear.concat(' года и ', result, ' Круто! Хочеш стати ', chemp2, '?'));
                break;
            case sport3:
                alert(resYear.concat(' года и ', result, ' Круто! Хочеш стати ', chemp3, '?'));
                break;

            default:
                alert(resYear.concat(' года и ', result, ' Круто! Тебе нравится ', askSport,));
        }
    }
    else if (askCity === 'Вашингтон') {
        let capital = 'США';
        let result = 'ти живеш у столиці'.concat(' ', capital);
        switch (askSport) {
            case sport1:
                alert(resYear.concat(' года и ', result, ' Круто! Хочеш стати ', chemp1, '?'));
                break;
            case sport2:
                alert(resYear.concat(' года и ', result, ' Круто! Хочеш стати ', chemp2, '?'));
                break;
            case sport3:
                alert(resYear.concat(' года и ', result, ' Круто! Хочеш стати ', chemp3, '?'));
                break;

            default:
                alert(resYear.concat(' года и ', result, ' Круто! Тебе нравится ', askSport,));
        }
    }
    else if (askCity === 'Лондон') {
        let capital = 'Англия';
        let result = 'ти живеш у столиці'.concat(' ', capital);
        switch (askSport) {
            case sport1:
                alert(resYear.concat(' года и ', result, ' Круто! Хочеш стати ', chemp1, '?'));
                break;
            case sport2:
                alert(resYear.concat(' года и ', result, ' Круто! Хочеш стати ', chemp2, '?'));
                break;
            case sport3:
                alert(resYear.concat(' года и ', result, ' Круто! Хочеш стати ', chemp3, '?'));
                break;

            default:
                alert(resYear.concat(' года и ', result, ' Круто! Тебе нравится ', askSport,));
        }
    }
}