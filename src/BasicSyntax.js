export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let alphabet = {
    	'I': 1,
    	'V': 5,
    	'X': 10,
    	'L': 50,
    	'C': 100,
    	'D': 500,
    	'M': 1000
    }
    let prev = 0;
    for(let i = 0;i<str.length;i++){
    	let val = alphabet[str[i]];
    	result += prev < val ? val - 2*prev : val;
    	prev = val;
    }
    return result;
}
