# Interactive Dashboard
This project is a web-based dashboard to demonstrate interactive JavaScript features for WEB-115
## TO-DO: Future Features
- [ ] Add a metric conversion tool.
- [ ] Integrate a task list with array storage
- [ ] Add JavaScript logic for a live clock
- [X] Add a weekly task goal calculator
### Weekly Task Goals
Weekly tasks are calculated by multiplying daily tasks by 5 (number of days in a work week), then adding the number of bonus tasks for that week. 
## Imperial/Metric Converter
Simple application that converts imperial units to metric and vice-versa. You input a value, the unit the value is starting in, and the unit you would like to convert it to using the units 2 letter symbol. It can perform the list of conversions below:
- inch > centimeter
- foot > centimeter
- yard > meter
- mile > kilometer
- centimeter > inch
- centimeter > foot
- meter > yard
- kilometer > mile

### Logic and Pseudocode
BEGIN

METRIC CONVERTER (val, unitStart, unitEnd)
   IF unitStart inch AND unitEnd centimeter
	SET newval val multipied by 2.54
   ELSE IF unitStart foot AND unitEnd centimeter
	SET newval val multipied by 30.48
   ELSE IF unitStart yard AND unitEnd meter
	SET newval val multipied by 0.91
   ELSE IF unitStart mile AND unitEnd kilometer
	SET newval val multipied by 1.61
   ELSE IF unitStart centimeter AND unitEnd inch
	SET newval val multipied by 0.39
   ELSE IF unitStart centimeter AND unitEnd foot
	SET newval val multipied by 0.0328
   ELSE IF unitStart meter AND unitEnd yard
	SET newval val multipied by 1.09
   ELSE IF unitStart kilometer AND unitEnd mile
	SET newval val multipied by 0.62
   ELSE
	DISPLAY error message
   
   DISPLAY newval + unitEnd

INPUT value, unitS, unitE

METRIC CONVERTER (value, unitS, unitE)

END

## Magic Eight Ball
This application functions like a digital magic 8 ball. You enter a question in the input field, then hold click to shake the magic 8 ball and let go to get your answer. If you attempt to shake the magic 8 ball without asking a question, you will get an alert asking you to enter a question. You can reset the magic 8 ball with the reset button below it.