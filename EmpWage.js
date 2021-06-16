const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const IS_PART_TIME_HOURS = 4;
const IS_FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

function getWorkingHours(empCheck)
{
switch(empCheck)
{
    case IS_PART_TIME:
        return IS_PART_TIME_HOURS;

        case IS_FULL_TIME:
            return IS_FULL_TIME_HOURS;

            default:
                return 0;
}
}
let totalEmpHrs = 0;
for(let day = 0; day < NUM_OF_WORKING_DAYS; day++)
{
    let empCheck = Math.floor(Math.random() * 10 % 3);
    totalEmpHrs += getWorkingHours(empCheck);

}

//let empHrs = getWorkingHours(empCheck)
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log( totalEmpHrs+ "Hours : " + " UC4 -  EmpWage is: " + empWage);
