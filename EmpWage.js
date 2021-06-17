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
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage = calcDailyWage(totalEmpHrs);
//console.log("Total_Days:"+ totalWorkingDays + " Total_Hrs:"+ totalEmpHrs + " Emp_Wage:"+ empWage);
console.log("UC6 - Total_days:" +totalWorkingDays + " Total_Hours:"+totalEmpHrs + " Emp_Wage:" + empWage);

//UC7A

let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC-7A - Total Days:"+totalWorkingDays + " total Hrs:" + totalEmpHrs + " Emp Wage:" +totEmpWage);

//UC7B

function totalWages(totalWage, dailyWage)
{
    return totalWage + dailyWage;
}
console.log("UC - 7A- EmpWage With Reduce Function:" + empDailyWageArr.reduce(totalWages, 0));

let dailyCntr = 0;
function mapDayWithWage(dailyWage)
{
    dailyCntr++
    return dailyCntr + " " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC-7B- Daily Wage Map");
console.log(mapDayWithWageArr);

//UC7C
function fulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC-7C- Daily Wage Filter When Fulltime Wage Earned ");
console.log(fullDayWageArr);

//UC7D

function findFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC-7D- First Time Fulltime Wage Was Earned on Day:" + 
mapDayWithWageArr.find(findFulltimeWage));

//UC7E

function isFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC-7E- Check All Element have Fulltime Wage:" + 
fullDayWageArr.every(isFulltimeWage));

//UC7F
function isAnyParttimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("UC-7F - Check If Any Parttime Wage: " + 
mapDayWithWageArr.some(isAnyParttimeWage));

//UC7G

function totalDaysWorked(numofDays, dailyWage)
{
    if(dailyWage > 0) return numofDays+1;
    return numofDays;
}
console.log("UC-7G- Number Of Days Emp Worked:" + 
empDailyWageArr.reduce(totalDaysWorked,0));
























// # Using For Loop
// for(let day = 0; day < NUM_OF_WORKING_DAYS; day++)
// {
//     let empCheck = Math.floor(Math.random() * 10 % 3);
//     totalEmpHrs += getWorkingHours(empCheck);

// }

// //let empHrs = getWorkingHours(empCheck)
// let empWage = totalEmpHrs * WAGE_PER_HOUR;
// console.log( totalEmpHrs+ "Hours : " + " UC4 -  EmpWage is: " + empWage);
