Install:
npm init -y
npm install --save-dev @wdio/cli
npx wdio config
npx wdio run wdio.conf.js
npm install chai
npm i faker@5.5.3
npm install expect-webdriverio

// report
npm install @wdio/allure-reporter --save-dev
npm i allure-commandline
npm i wdio-cucumberjs-json-reporter
npm install webdriverio@latest


config:
- wdio.config.js file:

1. 
specs: [
        './features/*.feature'
    ],

2. 
cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./features/step-definitions/*.steps.js'],

3. 
beforeFeature: function (uri, feature) {
        global.SharedVariable = {
            email: "",
            address: {}
        }
        allureReporter.addStep("Starting Fetaure : " + feature.name);
        browser.maximizeWindow();
    },

==> Share mail va address

4. 
import allureReporter from '@wdio/allure-reporter'
import cucumberJson from 'wdio-cucumberjs-json-reporter';

let allure_config = {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: true,
};

5. 
beforeScenario: async function (world) {

        await allureReporter.addSeverity("Medium")
    },

6. 
afterStep: async function (step, scenario, result) {

        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    },

7. 
reporters: ['spec', ['allure', allure_config]],


- auth.steps.js
global.SharedVariable.email = emailId;
global.SharedVariable.address = addressObj;

8. 
Generate report
"generate-report": "allure generate reporter/allure-results --clean", ==> server
"generate-report": "allure generate report/allure-results --clean && allure open", ==> run local


9. 
open docker
docker-compose up
docker ps -a
docker-compose down

10. 
Install appium inspector
https://github.com/appium/appium-inspector/releases

appium inspector
remote path: /wd/hub

Android:
json:
{
  "platformName": "Android",
  "platformVersion": "11",
  "deviceName": "Pixel 3",
  "automationName": "UIAutomator2",
  "app": "/Users/tranhieu/Desktop/webdriverio/app/android/ApiDemos-debug.apk"
}

IOS:
Install appium desktop 
https://github.com/appium/appium-desktop/releases
