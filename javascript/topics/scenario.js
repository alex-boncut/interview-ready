import DataHandler from "../utilities/data_handler.js"

export default class Scenario extends DataHandler {
    constructor() {
        super();
    }

    questions = new Map([
        [1, "Assume that you get a NoSuchElementException. What would you do to troubleshoot the issue?"],
        [2, "Assume that you get a ElementClickInterceptedException. What would you do? How would you troubleshoot the issue?"],
        [3, "Assume that you navigated to a page and loads a pop-up. However, this happens sometimes and most of the times, the pop-up does not show. How would you handle this situation?"],
        [4, "Assume that you will need to run your test suites like Smoke and Regression against different browsers like Chrome, Firefox, Edge and more. How would you handle this situation?"]
    ])

    answers = new Map([

        ["Assume that you get a NoSuchElementException. What would you do to troubleshoot the issue?", `
        • This is a common issue that Automation Testers face especially when application is under development and not live yet
        <b>• NoSuchElementException</b> occurs when WebDriver is unable to find and locate an element
        
        • For such questions, try to list as many scenarios as you can come up with.
            1. Check your element locator and make sure it is correct. The locator might be changed with new developer code deployment. You may also realize, web element that throws <b>NoSuchElementException</b> is a dynamic element. In this case, you need to update your locator and make it stable
            
            2. Make sure that page is loading as expected
            
            3. If you are sure that your locator is correct and stable, then try to implement some waits as there might be some synchronization issues and your code is trying to take some actions on the web element before it is loaded
            
            4. If you implemented waits but still getting the exception, then check if element is not in an iframe. If so, then switch the frame before taking action on the web element and execute your test once again to see if it works
            
            5. Element might not be actually visible in screen and you may need to scroll down or scroll up to that element before actual action
            
            <i>NOTE:</i> In some cases, web element might not be existing and removed from the page. Check your requirements carefully and ask your PO, BA or developers to be clear about the issue.
        `],
        
        ["Assume that you get a ElementClickInterceptedException. What would you do? How would you troubleshoot the issue?", `
            • This is also a common exception that Automation Testers get during scripting
            • <b>ElementClickInterceptedException</b> occurs when the element receiving the actions is concealing the element which was requested to be clicked
            • Basically, imagine that you are trying to click on a web element, but another web element receives the click as your element is behind that second element
            
            • In this case, you can try below solutions
                o First, you may try to implement explicit wait for the action that you would like to perform on the web element and check if it works.
                o If explicit wait does not work, then you can use JavaScript Executor to perform the action.
        `],
        
        ["Assume that you navigated to a page and loads a pop-up. However, this happens sometimes and most of the times, the pop-up does not show. How would you handle this situation?", `
            • Some pages show a pop-up, but this is not constant, and pop-up needs to be handled before you continue with any other actions on the page
            • If you assume that it will always show and handle the pop-up, your code will throw an exception when pop-up does not show
            • So, the best practice to write your code in a try block and handle the pop-up only if it is present
        `],
        
        ["Assume that you will need to run your test suites like Smoke and Regression against different browsers like Chrome, Firefox, Edge and more. How would you handle this situation?", `
            • This is directly related to cross-browser testing and it is usually handled with your config file where all your global configurations are stored and controlled
            • So, you may tell I set my driver with a method before the execution starts and this method gets all required capabilities from my config file and able to set driver to be Chrome, Firefox, Edge, Safari, etc.
            • With that, it sets up the desired browser, environment and some other capabilities for the test execution
        `]
    ])
}