import '../scss/index.scss';
import { tests } from './tests';


// TODO: put it into html
tests.forEach((test) => {
    fetch(test.test).then((response) => {
        return response.text()
    })
    .then((text) => {
        console.log(text);
        let result_text = Function("const to_ret =  " + text.replace("function main()", "() =>") + "\nreturn to_ret();")();

        console.log(result_text);
        let result = result_text[0];

        let element = document.createElement('li');
        element.id = test.name;

        if (result === 0) {
            element.classList.add('passed');
        }
        else if (result === 1) {
            element.classList.add('partial');
        }
        else if (result === 2) {
            element.classList.add('failed');
        }
        else if (result === 3) {
            element.classList.add('partial');
        }
        else {
            element.classList.add('unknown');
        }

        element.innerHTML = `${test.name} - ${result_text[1]}`;

        document.querySelector('.tests')!.appendChild(element);
    })
    .catch((error) => {
        console.error(error);
    });
});