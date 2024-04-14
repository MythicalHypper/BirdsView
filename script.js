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


// function mHover(Element, name, icon) {
//     console.log(`mHover: ${Element.id}, ${name}, ${icon}`)
//     Element.innerHTML = `<i class="fa-solid fa-${icon} fa-bounce"></i><a class="nav-link active" aria-current="page" href="#">${name}</a>`
//     setTimeout(() => {Element.innerHTML = `<i class="fa-solid fa-${icon}"></i><a class="nav-link active" aria-current="page" href="#">${name}</a>`}, 1000)
    
// }

// function mLeave(Element, name, icon) {
//     Element.innerHTML = `<i class="fa-solid fa-${icon}"></i><a class="nav-link active" aria-current="page" href="#">${name}</a>`
// }

// function navbarLoad() {
//     // const AKTUALITĀTES = document.getElementById("AKTUALITĀTES")
//     // mHover($("#AKTUALITĀTES"), 'AKTUALITĀTES', 'earth-americas')
//     // mLeave($("#AKTUALITĀTES"), 'AKTUALITĀTES', 'earth-americas')
// //     mLeave();
//     // mLeave();
// //     mLeave();
// //     mLeave();
// }

// 