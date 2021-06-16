const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const IS_PART_TIME_HOURS = 4;
const IS_FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

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
function calcDailyWage(empCheck)
{
    return empCheck * WAGE_PER_HOUR;
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS )
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
    empDailyWageArr.push(calcDailyWage(empCheck));
}
let empWage = calcDailyWage(totalEmpHrs);
//console.log("Total_Days:"+ totalWorkingDays + " Total_Hrs:"+ totalEmpHrs + " Emp_Wage:"+ empWage);
console.log("UC6 - Total_days: " +totalWorkingDays + " Emp_Wage:" + empWage);




























// # Using For Loop
// for(let day = 0; day < NUM_OF_WORKING_DAYS; day++)
// {
//     let empCheck = Math.floor(Math.random() * 10 % 3);
//     totalEmpHrs += getWorkingHours(empCheck);

// }

// //let empHrs = getWorkingHours(empCheck)
// let empWage = totalEmpHrs * WAGE_PER_HOUR;
// console.log( totalEmpHrs+ "Hours : " + " UC4 -  EmpWage is: " + empWage);
