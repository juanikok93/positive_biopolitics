// const card = document.querySelector(".card__inner");

// card.addEventListener("click", function (e) {
//     card.classList.toggle('is-flipped');
// });

$('.card__inner').click(function(){
    $(this).toggleClass('is-flipped');
});

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

jQuery.fn.removeInlineCss = (function(){
    var rootStyle = document.documentElement.style;
    var remover = 
        rootStyle.removeProperty    // modern browser
        || rootStyle.removeAttribute   // old browser (ie 6-8)
    return function removeInlineCss(properties){
        if(properties == null)
            return this.removeAttr('style');
        proporties = properties.split(/\s+/);
        return this.each(function(){
            for(var i = 0 ; i < proporties.length ; i++)
                remover.call(this.style, proporties[i]);
        });
    };
})();

const idlist = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']
var toRemove1 = 1
var toRemove2 = 2

$(".btn").click(function(){
    var ranum = getRandom(idlist,2);
    $("#" + toRemove2 +" > .card__face--front").removeInlineCss();
    $("#" + toRemove1 +" > .card__face--front").removeInlineCss();

    toRemove1 = ranum[0]
    toRemove2 = ranum[1]
    $("#" + ranum[0] +" > .card__face--front").css("background-image", "linear-gradient(to bottom right, var(--primary), var(--secondary))");
    $("#" + ranum[1] +" > .card__face--front").css("background-image", "linear-gradient(to bottom right, var(--primary), var(--secondary))");
});

$(document).keypress(function(event){
    var ranum = getRandom(idlist,2);
    $("#" + toRemove2 +" > .card__face--front").removeInlineCss();
    $("#" + toRemove1 +" > .card__face--front").removeInlineCss();

    toRemove1 = ranum[0]
    toRemove2 = ranum[1]
    $("#" + ranum[0] +" > .card__face--front").css("background-image", "linear-gradient(to bottom right, var(--primary), var(--secondary))");
    $("#" + ranum[1] +" > .card__face--front").css("background-image", "linear-gradient(to bottom right, var(--primary), var(--secondary))");
});
