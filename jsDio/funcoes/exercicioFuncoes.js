function WriteMyName(name){
    console.log ("My name is" + name);
}
WriteMyName("Yasmin");
WriteMyName("Marina");

function CheckYears(years){

    if(years >=18){
        return WriteMyName("Yasmin") + "Maior de idade";
    }else {
        return "Maior de idade";
    }
}
CheckYears(17);