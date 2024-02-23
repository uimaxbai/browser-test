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