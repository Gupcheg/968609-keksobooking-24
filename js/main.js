//Функция, возвращающая случайное целое число из переданного диапазона

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    if (min, max < 0) {
        alert('Введите число больше нуля')
    }
    return Math.floor(Math.random() * (max - min)) + min; 
  } 
getRandomInt(0,100);

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomFloat(min, max, float) {

    
}