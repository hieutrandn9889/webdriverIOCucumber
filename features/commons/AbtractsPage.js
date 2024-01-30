export default class AbtractsPage {
    clickElement = async (ele) => {
        await ele.click();
    }

    setValueElement = async (ele, value) => {
        await ele.setValue(value);
    }

    waitForExistElement = async (ele, time) => {
        await ele.waitForExist({ timeout: time });
    }

    waitForEnabledElement = async (ele, time) => {
        await ele.waitForEnabled({ timeout: time });
    }

    waitForClickableElement = async (ele, time) => {
        await ele.waitForClickable({ timeout: time });
    }

    clickElementWaitForEnabledAndClickable = async (ele, time) => {
        await ele.waitForEnabled({ timeout: time });
        await ele.waitForClickable({ timeout: time });
        await ele.click();
    }

    setValueElementWaitForEnabledAndClickable = async (ele, time, value) => {
        await ele.waitForEnabled({ timeout: time });
        await ele.waitForClickable({ timeout: time });
        await ele.setValue(value);
    }
}