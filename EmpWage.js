const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const IS_PART_TIME_HOURS = 4;
const IS_FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(empCheck)
{
switch(empCheck)
{
    case IS_PART_TIME:
        return IS_PART_TIME_HOURS;

        case IS_FULL_TIME:
            return IS_FULL_TIME_HOURS;

            default:
                empHrs = 0;
}
}
let empCheck = Math.floor(Math.random() * 10 % 3);
let empHrs = getWorkingHours(empCheck)
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Hours : " +empHrs + " UC3 -  EmpWage is: " + empWage);