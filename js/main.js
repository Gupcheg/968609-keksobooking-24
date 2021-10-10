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

function getRandomFloat(min, max, valueAfterComma) {
  if (min < 0) {
    alert('Введите число больше либо равное нулю');
    return;
  }  
  if (max <=0) {
    alert('Введите число больше нуля');
    return;
  }
  if (max < min) {
    alert('Максимальное число не может быть меньше минимального');
    return;
  }
  let result = Math.random() * (max - min) + min ;
    result = result.toFixed(valueAfterComma);
    
    console.log(result)
    return result;
}
getRandomFloat(0,5,10)