let day = prompt("Kunni kiriting");
let dayName;
switch (day) {
    case 0:
        dayName="Sunday";
        break;
    case 1:
        dayName="Monday";
        break;
    case 2:
        dayName="Tuesday"
        break;
    case 3:
        dayName="Wednesday"
        break;
    case 4:
        dayName="Thursday"
        break;
    case 5:
        dayName="Friday"
        break;
    case 6:
        dayName="Satuday"
        break;
    daFault:
        dayName="Invalid day";
}
    console.log("Today is" + dayName);