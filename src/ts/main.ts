import '../scss/index.scss';
import { tests } from './tests';
import caniuse from 'caniuse-api';

const getBrowserName = () => {
    let browserInfo = navigator.userAgent;
    let browser;
    if (browserInfo.includes('Opera') || browserInfo.includes('Opr')) {
      browser = 'opera';
    } else if (browserInfo.includes('Edg')) {
      browser = 'edge';
    } else if (browserInfo.includes('Chrome')) {
      browser = 'chrome';
    } else if (browserInfo.includes('Safari')) {
      browser = 'safari';
    } else if (browserInfo.includes('Firefox')) {
      browser = 'firefox'
    } else {
      browser = 'unknown'
    }
      return browser;
}

var useragent = navigator.userAgent;
document.getElementById('useragent')!.innerHTML = useragent;
var latestStableBrowsers = caniuse.getLatestStableBrowsers();
(latestStableBrowsers).forEach((browser) => {
    // var browserName = browser.split(' ')[0];
    var browserVersion = browser.split(' ')[1];
    var browserNameElement = document.getElementById("latestBrowser");
    if (browserNameElement) {
        browserNameElement.innerHTML = browserVersion;
    }
});



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