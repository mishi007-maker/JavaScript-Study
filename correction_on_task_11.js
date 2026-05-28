let birth_date = prompt("Enter your dob in the format(yyyy-mm-dd)") //1999-02-22

let birth_date_sections = birth_date.split('-')
console.log(birth_date_sections) //(3) ['1999', '02', '22']

let birth_year = Number(birth_date_sections[0])
let birth_month = Number(birth_date_sections[1])
let birth_day = Number(birth_date_sections[2])

let current_year = 2026 //27.  ->27y 2m 28days --- 27y 1m 58days
let current_month = 5 // 3
let current_day = 20 // -2

let monthdays = [31,28,31,30,31,30,31,31,30,31,30,31]


// 22feb ---> 22mar ----> 22apr ----> 22may 26th

if(current_day < birth_day){
    if((birth_year%4==0) && (birth_year %100!=0) || (birth_year % 400 == 0)){
         monthdays[1] = 29
    }
    current_month-- //0 
    current_day += monthdays[(current_month - 1 + 12) % 12] 
    monthdays.at(current_month - 1)
}

let calculated_days = current_day - birth_day
let calculated_month;
let calculated_years;

if(current_month < birth_month){
   calculated_month = 12 - (birth_month - current_month)
   calculated_years = current_year - birth_year - 1
}else{
    calculated_month = current_month - birth_month
    calculated_years = current_year - birth_year
}

console.log({"Calculated year":calculated_years,"Calculated month":calculated_month,
    "Calculated days":calculated_days
})