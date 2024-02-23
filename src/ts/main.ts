import '../scss/index.scss';
import { tests } from './tests';


// TODO: put it into html
tests.forEach((test) => {
    fetch(test.test).then((response) => {
        return response.text()
    })
    .then((text) => {
        var newText = text.replace("function main() {", 'function () {')
        const fn = new Function("return " + newText)();
        const result = fn();
        console.log(result);
        test.result = result[0];
        test.status = result[1];
        if (test.result === 0) {
            document.querySelector(test.element)?.classList.add('passed');
        }
        else if (test.result === 1) {
            document.querySelector(test.element)?.classList.add('partial');
        }
        else if (test.result === 1) {
            document.querySelector(test.element)?.classList.add('partial');
        }
        else if (test.result === 2) {
            document.querySelector(test.element)?.classList.add('failed');
        }
        else if (test.result === 3) {
            document.querySelector(test.element)?.classList.add('partial');
        }
        else {
            document.querySelector(test.element)?.classList.add('unknown');
        }
    })
    .catch((error) => {
        console.error(error);
    });
});