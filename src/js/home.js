//= libs/autosize.min.js

$(document).ready(function (){
    autosize($('.home-form__form-text'));

    var phrases = ["практикующих", "новых", "старых", "шарящих", "ux/ui", "motion", "seo"];
    var chars = "!<>-_\\/[]{}░▒▓—åß∂ƒ©˙∆˚æ≈ç√∫=+*^?#________λ$";
    var elem = document.getElementById('anim-txt');
    var queue = [];
    var nextText = '';
    var currentIndex = 0;
    var totalIndex = phrases.length;

    setInterval(function (){
        currentIndex++;
        if (currentIndex > totalIndex-1) currentIndex = 0;
        nextText = phrases[currentIndex];
        generateQueue();
    },2500);


    function randomChar() {
        return chars[Math.floor(Math.random() * chars.length)];
    }

    function generateQueue(){
        queue = [];
        var text = elem.innerText,
            n = Math.max(text.length, nextText.length);
        for (var i = 0; i < n; i++) {
            var l = text[i] || "",
                c = nextText[i] || "",
                v = Math.floor(40 * Math.random()),
                m = v + Math.floor(40 * Math.random());
            queue.push({
                from: l,
                to: c,
                start: v,
                end: m
            })
        }
        t = 0;
        frame = 0;
        window.requestAnimationFrame(update);
    }



    function update() {
        for (var output = "", i = 0; i < queue.length; i++) {
            var r = queue[i],
                startLetter = r.from,
                endLetter = r.to,
                startFrame = r.start,
                endFrame = r.end,
                tempLetter = r.char;

            if (frame >= endFrame){
                t++;
                output += endLetter;
            } else {
                if (frame >= startFrame) {
                    if (!tempLetter || Math.random() < .28) {
                        tempLetter = randomChar();
                        queue[i].char = tempLetter;
                    }
                    output += '<span class="dud">'.concat(tempLetter, "</span>");
                } else {
                    output += startLetter;
                }
            }
        }
        elem.innerHTML = output;
        frame++;
        if (nextText === output) {

        } else {
            window.requestAnimationFrame(update);
        }
    }
});
