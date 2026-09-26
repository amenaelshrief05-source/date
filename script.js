/* ==========================================
   GET ELEMENTS
========================================== */
const envelope =
    document.getElementById("envelope");
const envelopeScreen =
    document.getElementById("envelopeScreen");
const letterScreen =
    document.getElementById("letterScreen");
const questionScreen =
    document.getElementById("questionScreen");
const successScreen =
    document.getElementById("successScreen");
const continueBtn =
    document.getElementById("continueBtn");
const yesBtn =
    document.getElementById("yesBtn");
const noBtn =
    document.getElementById("noBtn");
/* ==========================================
   OPEN ENVELOPE
========================================== */
envelope.addEventListener("click", function () {
    /* Open the envelope */
    envelope.classList.add("open");
    /* Wait for the envelope animation */
    setTimeout(function () {
        envelopeScreen.classList.add("hidden");
        /* Show the letter */
        setTimeout(function () {
            letterScreen.classList.remove("hidden");
        }, 500);
    }, 1100);
});
/* ==========================================
   LETTER → QUESTION
========================================== */
continueBtn.addEventListener("click", function () {
    /* Hide the letter */
    letterScreen.classList.add("hidden");
    /* Show the question */
    setTimeout(function () {
        questionScreen.classList.remove("hidden");
    }, 500);
});
/* ==========================================
   MAKE NO BUTTON RUN AWAY
========================================== */
function moveNoButton() {
    /*
        Change the button to absolute
        so it can move around.
    */
    noBtn.style.position = "absolute";
    /*
        Generate a random position.
        The button stays relatively close
        to the question card.
    */
    const randomX =
        Math.random() * 260 - 130;
    const randomY =
        Math.random() * 140 - 70;
    /*
        Put the button around the center
        of the buttons area.
    */
    noBtn.style.left = "50%";
    noBtn.style.top = "50%";
    /*
        Move it to the random position.
    */
    noBtn.style.transform =
        `translate(
            calc(-50% + ${randomX}px),
            calc(-50% + ${randomY}px)
        )`;
}
/* ==========================================
   DESKTOP
========================================== */
/*
    On a computer, the No button moves
    as soon as the mouse gets over it.
*/
noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);
/* ==========================================
   MOBILE
========================================== */
/*
    Phones don't have hover.
    So when she touches the No button,
    it moves immediately.
*/
noBtn.addEventListener(
    "touchstart",
    function (event) {
        event.preventDefault();
        moveNoButton();
    },
    {
        passive: false
    }
);
/* ==========================================
   IF SHE ACTUALLY CLICKS NO
========================================== */
noBtn.addEventListener(
    "click",
    function (event) {
        event.preventDefault();
        moveNoButton();
    }
);
/* ==========================================
   YES BUTTON
========================================== */
yesBtn.addEventListener(
    "click",
    function () {
        /*
            Hide the question.
        */
        questionScreen.classList.add("hidden");
        /*
            Show the success screen
            after a tiny animation delay.
        */
        setTimeout(function () {
            successScreen.classList.remove("hidden");
        }, 500);
        /*
            Start the heart explosion.
        */
        createHeartExplosion();
    }
);
/* ==========================================
   HEART EXPLOSION
========================================== */
function createHeartExplosion() {
    const hearts = [
        "❤️",
        "💙",
        "♥",
        "💕",
        "💗",
        "♡"
    ];
    /*
        Create 35 hearts.
    */
    for (let i = 0; i < 35; i++) {
        const heart =
            document.createElement("div");
        /*
            Give the heart its CSS class.
        */
        heart.classList.add(
            "explosion-heart"
        );
        /*
            Pick a random heart.
        */
        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];
        /*
            Start all hearts
            from the center of the screen.
        */
        heart.style.left = "50%";
        heart.style.top = "50%";
        /*
            Give every heart
            a different random direction.
        */
        const x =
            Math.random() * 700 - 350;
        const y =
            Math.random() * 700 - 350;
        /*
            Send the random values
            to the CSS animation.
        */
        heart.style.setProperty(
            "--x",
            x + "px"
        );
        heart.style.setProperty(
            "--y",
            y + "px"
        );
        /*
            Random heart size.
        */
        const size =
            15 + Math.random() * 25;
        heart.style.fontSize =
            size + "px";
        /*
            Slightly random animation timing
            makes the explosion look natural.
        */
        heart.style.animationDelay =
            Math.random() * 0.4 + "s";
        /*
            Add heart to the page.
        */
        document.body.appendChild(heart);
        /*
            Remove it after the animation
            so the page doesn't get full of hearts.
        */
        setTimeout(function () {
            heart.remove();
        }, 3500);
    }
}