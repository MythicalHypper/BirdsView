$(document).ready(() => {
    $("#headdin").hover(function () { $(this).text("Enter") }, function () { $(this).text("leave") })


    $("#AKTUALITĀTES").hover(
        function () { $(".fa-earth-americas").addClass("fa-bounce") },
        function () { $(".fa-earth-americas").removeClass("fa-bounce") }
    )

    $("#CEĻOJUMI").hover(
        function () { $(".fa-suitcase").addClass("fa-bounce") },
        function () { $(".fa-suitcase").removeClass("fa-bounce") }
    )

    $("#PIETEIKŠANĀS-ANKETA").hover(
        function () { $(".fa-square-pen").addClass("fa-bounce") },
        function () { $(".fa-square-pen").removeClass("fa-bounce") }
    )

    $("#KONTAKTI").hover(
        function () { $(".fa-user-group").addClass("fa-bounce") },
        function () { $(".fa-user-group").removeClass("fa-bounce") }
    )

    $("#PAR-MUMS").hover(
        function () { $(".fa-user").addClass("fa-bounce") },
        function () { $(".fa-user").removeClass("fa-bounce") }
    )


    var Ned_Italija_disp = true

    function changeV(val) {
        if (Ned_Italija_disp) {
            $("p").attr("class", "")
            $("p").addClass(`display-${val}`)
        } else {
            $("p").attr("class", "")
            $("p").addClass(`h${val}`)
        }
    }

    $("#Ned-Italija-btn").click(
        function () {
            Ned_Italija_disp = !Ned_Italija_disp
            changeV($("#Ned-Italija-range").val())
        }
    )

    $("#Ned-Italija-range").change(
        function () { changeV(this.value) }
    )
})