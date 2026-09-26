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
const noMessage =
    document.getElementById("noMessage");
/* ==========================================
   OPEN ENVELOPE
========================================== */
envelope.addEventListener("click", function () {
    envelope.classList.add("open");
    setTimeout(function () {
        envelopeScreen.classList.add("hidden");
        setTimeout(function () {
            letterScreen.classList.remove("hidden");
        }, 500);
    }, 1100);
});
/* ==========================================
   LETTER → QUESTION
========================================== */
continueBtn.addEventListener("click", function () {
    letterScreen.classList.add("hidden");
    setTimeout(function () {
        questionScreen.classList.remove("hidden");
    }, 500);
});
/* ==========================================
   NO BUTTON MESSAGES
========================================== */
const noMessages = [
    "Hmm... interesting choice 🤨",
    "Are you sure about that? 👀",
    "Nice try 😂",
    "I'm not convinced 👀",
    "The button says otherwise 😌",
    "You almost got away with it 😭",
    "Wrong answer... try again 🤭"
];
let noMessageIndex = 0;
/* ==========================================
   MAKE NO BUTTON RUN AWAY
========================================== */
function moveNoButton() {
    /* Show a message */
    noMessage.textContent =
        noMessages[noMessageIndex];
    noMessage.classList.add("show");
    /* Move to the next message */
    noMessageIndex++;
    if (noMessageIndex >= noMessages.length) {
        noMessageIndex = 0;
    }
    /* Hide the message after 1.2 seconds */
    setTimeout(function () {
        noMessage.classList.remove("show");
    }, 1200);
    /* Make the button move */
    noBtn.style.position = "absolute";
    const randomX =
        Math.random() * 260 - 130;
    const randomY =
        Math.random() * 140 - 70;
    noBtn.style.left = "50%";
    noBtn.style.top = "50%";
    noBtn.style.transform =
        `translate(
            calc(-50% + ${randomX}px),
            calc(-50% + ${randomY}px)
        )`;
}
/* ==========================================
   DESKTOP
========================================== */
noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);
/* ==========================================
   MOBILE
========================================== */
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
   IF SHE CLICKS NO
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
        /* Hide question */
        questionScreen.classList.add("hidden");
        /* Show success */
        setTimeout(function () {
            successScreen.classList.remove("hidden");
        }, 500);
        /* Heart explosion */
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
        "♥️",
        "💕",
        "💗",
        "♡"
    ];
    /* Create 35 hearts */
    for (let i = 0; i < 35; i++) {
        const heart =
            document.createElement("div");
        heart.classList.add(
            "explosion-heart"
        );
        /* Random heart */
        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];
        /* Start from center */
        heart.style.left = "50%";
        heart.style.top = "50%";
        /* Random direction */
        const x =
            Math.random() * 700 - 350;
        const y =
            Math.random() * 700 - 350;
        heart.style.setProperty(
            "--x",
            x + "px"
        );
        heart.style.setProperty(
            "--y",
            y + "px"
        );
        /* Random size */
        const size =
            15 + Math.random() * 25;
        heart.style.fontSize =
            size + "px";
        /* Random delay */
        heart.style.animationDelay =
            Math.random() * 0.4 + "s";
        /* Add to page */
        document.body.appendChild(heart);
        /* Remove after animation */
        setTimeout(function () {
            heart.remove();
        }, 3500);
    }
}
