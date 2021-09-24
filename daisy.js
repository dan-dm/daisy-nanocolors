import {white, yellow} from 'nanocolors';

export function Daisy(num) {

    if (num % 2 == 0) {

        // console.log(yellow("loves me"));
        return yellow("loves me")
    } else {

        // console.log(white("loves me not"));
        return white("loves me not")
    }
}
