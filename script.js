$(document).ready(() => {
    $("#headdin").hover(() => {$("#headdin").text("Enter")}, () => {$("#headdin").text("leave")})


    $("#AKTUALITĀTES").hover(
        () => {$(".fa-earth-americas").addClass("fa-bounce")},
        () => {$(".fa-earth-americas").removeClass("fa-bounce")}
    )
    
    $("#CEĻOJUMI").hover(
        () => {$(".fa-suitcase").addClass("fa-bounce")},
        () => {$(".fa-suitcase").removeClass("fa-bounce")}
    )
    
    $("#PIETEIKŠANĀS-ANKETA").hover(
        () => {$(".fa-square-pen").addClass("fa-bounce")},
        () => {$(".fa-square-pen").removeClass("fa-bounce")}
    )
     
    $("#KONTAKTI").hover(
        () => {$(".fa-user-group").addClass("fa-bounce")},
        () => {$(".fa-user-group").removeClass("fa-bounce")}
    )

    $("#PAR-MUMS").hover(
        () => {$(".fa-user").addClass("fa-bounce")},
        () => {$(".fa-user").removeClass("fa-bounce")}
    )


})