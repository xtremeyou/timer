//solution 1:
//Get input from user/terminal, allow for multiple inputs
//create placeholder for user input
//create function called timer with user inputs as parameters
//inside function is a an if statement that checks
//if userinput !== "number" (use isNum method), && userinput !== positive number && if userinput === undefined
//leave first argument blank, applying not using else statemnts in code, was recommended that
//in the implied else line create setTimeout, add timer sounds in argument, then pass placeholder/userinput as the }, userinput) time.
//theoretically it should beep after the userinput number time has elapsed.

//solution 2:
// create another function for just user inputs that uses the if statements above as edge cases, returns it
// create timer function
// within timer function, create setTimeout, add timer sounds in argument, then pass placeholder/userinput as the }, userinput) which is the timer that it'll use
// to beep

//requires terminal input
const args = process.argv.slice(2);

//create inputFunction;
const processInputs = function (inputs) {
  inputs.forEach((input) => {
    const interval = parseInt(input);
    if (typeof interval !== "number" && interval <= 0) {
    }
    startTimer(interval);
  });
};

//create timer function
const startTimer = (interval) => {
  setTimeout(() => {
    process.stdout.write("\x07");
  }, interval * 1000);
};

processInputs(args);
