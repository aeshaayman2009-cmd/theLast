// ===========================
// CONSTANTS
// ===========================

const TODAY = new Date();

const MS_IN_A_DAY = 1000 * 60 * 60 * 24;

// ===========================
// PARALLEL ARRAYS
// ===========================

const courseNames = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React"
];

const courseStatuses = [
    "Open Now",
    "Coming Soon",
    "Open Soon",
    "Closed"
];

const courseLaunchDates = [
    "2026-07-20",
    "2026-07-30",
    "2026-08-10",
    "2026-06-15"
];

// ===========================
// DAYS LEFT
// ===========================

function daysLeft(dateString){

    const launchDate = new Date(dateString);

    const difference = launchDate - TODAY;

    return Math.ceil(difference / MS_IN_A_DAY);

}

// ===========================
// DAYS LABEL
// ===========================

function daysLabel(days){

    if(days > 0){

        return `${days} days left`;

    }

    if(days === 0){

        return "Launching today";

    }

    return `Already launched ${Math.abs(days)} days ago`;

}

// ===========================
// FILTER BY STATUS
// ===========================

function filterByStatus(status){

    const result = [];

    for(let i = 0; i < courseStatuses.length; i++){

        if(courseStatuses[i] === status){

            result.push(courseNames[i]);

        }

    }

    return result;

}

// ===========================
// CONSOLE OUTPUT
// ===========================

console.log("========== EduMaster Courses ==========");

for(let i = 0; i < courseNames.length; i++){

    const days = daysLeft(courseLaunchDates[i]);

    console.log(
        `${courseNames[i]} | ${courseStatuses[i]} | ${daysLabel(days)}`
    );

}

console.log("--------------------------------");

console.log("Open Now:");

console.log(filterByStatus("Open Now"));

console.log("Coming Soon:");

console.log(filterByStatus("Coming Soon"));

console.log("Open Soon:");

console.log(filterByStatus("Open Soon"));

console.log("Closed:");

console.log(filterByStatus("Closed"));
// ===========================
// DARK MODE
// ===========================

const darkButton = document.getElementById("darkMode");

if (darkButton) {

    const icon = darkButton.querySelector("i");

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-sun-fill");

    }

    darkButton.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            icon.classList.replace("bi-moon-fill", "bi-sun-fill");
            localStorage.setItem("theme", "dark");

        } else {

            icon.classList.replace("bi-sun-fill", "bi-moon-fill");
            localStorage.setItem("theme", "light");

        }

    });

}

// ===========================
// SIGN UP FORM
// ===========================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            form.querySelector('input[type="text"]').value.trim();

        const email =
            form.querySelector('input[type="email"]').value.trim();

        if (name === "" || email === "") {

            alert("Please fill in all fields.");

            return;

        }

        alert("Registration completed successfully! 🎉");

        form.reset();

    });

}

// ===========================
// SCROLL ANIMATION
// ===========================

const cards = document.querySelectorAll(
".course-card,.timeline-card,.features div,.faq-item,.signup-box"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach((card)=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition=".7s";

    observer.observe(card);

});

// ===========================
// NAVBAR SHADOW
// ===========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 30){

        navbar.style.boxShadow="0 12px 25px rgba(0,0,0,.15)";

    }else{

        navbar.style.boxShadow="none";

    }

});

// ===========================
// CONSOLE
// ===========================

console.log("EduMaster Loaded Successfully 🚀");
