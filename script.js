/* =========================
   EMAILJS
========================= */

emailjs.init({
    publicKey: "mgfTGPrkAFVPc9okr"
});


/* =========================
   GET ELEMENTS
========================= */

const envelope = document.getElementById("envelope");
const envelopeScreen = document.getElementById("envelopeScreen");
const letterScreen = document.getElementById("letterScreen");
const questionScreen = document.getElementById("questionScreen");
const successScreen = document.getElementById("successScreen");

const continueBtn = document.getElementById("continueBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const noMessage = document.getElementById("noMessage");


/* =========================
   ENVELOPE
========================= */

envelope.addEventListener("click", function () {

    envelope.classList.add("open");

    setTimeout(function () {

        envelopeScreen.classList.add("hidden");
        letterScreen.classList.remove("hidden");

    }, 900);

});


/* =========================
   CONTINUE BUTTON
========================= */

continueBtn.addEventListener("click", function () {

    letterScreen.classList.add("hidden");
    questionScreen.classList.remove("hidden");

});


/* =========================
   NO BUTTON
========================= */

const noMessages = [
    "Hmm... interesting choice 🤨",
    "Are you sure about that? 👀",
    "Nice try 😂",
    "I'm not convinced 👀",
    "The button says otherwise 😌",
    "You almost got away with it 😭",
    "Wrong answer... try again 🤭"
];

let noClickCount = 0;

noBtn.addEventListener("click", function () {

    const message =
        noMessages[noClickCount % noMessages.length];

    noMessage.textContent = message;

    noMessage.classList.add("show");

    noClickCount++;

    /* Make the No button move */

    const maxX =
        window.innerWidth - noBtn.offsetWidth - 30;

    const maxY =
        window.innerHeight - noBtn.offsetHeight - 30;

    const randomX =
        Math.max(20, Math.random() * maxX);

    const randomY =
        Math.max(20, Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

});


/* =========================
   YES BUTTON
========================= */

yesBtn.addEventListener("click", function () {

    /* Send email notification */

    emailjs.send(
        "service_c5w8hjg",
        "template_rplw6w5",
        {
            message: "HE SAID YES! 🥳💙"
        }
    )
    .then(function () {

        console.log("YES notification sent!");

    })
    .catch(function (error) {

        console.log("Email failed:", error);

    });


    /* Show success screen */

    questionScreen.classList.add("hidden");

    setTimeout(function () {

        successScreen.classList.remove("hidden");

    }, 500);


    /* Heart explosion */

    createHeartExplosion();

});


/* =========================
   HEART EXPLOSION
========================= */

function createHeartExplosion() {

    const hearts = [
        "♥️",
        "💙",
        "💗",
        "💖",
        "💕",
        "✨"
    ];

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("div");

        heart.classList.add("explosion-heart");

        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.setProperty(
            "--x",
            (Math.random() * 500 - 250) + "px"
        );

        heart.style.setProperty(
            "--y",
            (Math.random() * 500 - 250) + "px"
        );

        heart.style.fontSize =
            (Math.random() * 15 + 15) + "px";

        document.body.appendChild(heart);

        setTimeout(function () {

            heart.remove();

        }, 3000);

    }

}
