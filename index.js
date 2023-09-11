function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email); 
};

$("#email").focus(function (e) { 
    $("p.text-xs").addClass("hidden");
    $("input").removeClass("border-red-400 bg-[#ffe7e5] text-[#ff6257]").addClass("border-[#9294a0]");
    
});


$("button").click(function (e) { 
    var email = $("#email").val();
    if(isEmail(email)) {
        $(".start").removeClass("grid").addClass("hidden lg:hidden");
        $(".font-semibold").text(email);
        $(".end").removeClass("hidden").addClass("grid");
        if(document.activeElement.id === "1") {
            $(".end").removeClass("grid").addClass("hidden");
            $(".start").removeClass("hidden lg:hidden").addClass("grid");
            $("input").removeClass("border-red-400 bg-[#ffe7e5] text-[#ff6257]").addClass("border-[#9294a0]");
        }
    } else {
        $("#validateMobile").removeClass("hidden");
        $("#email").removeClass("border-[#9294a0]").addClass("border-red-400 bg-[#ffe7e5] text-[#ff6257]");
    }
});