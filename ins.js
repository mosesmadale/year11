let currentPage = 1;
let currentLesson = "";
let name = {
    value: "",
};

$(".nav-item").click(function changeCurrentPageOnMenu() {
    clearAllMenu();
    $(this).css("color", "rgb(120, 130, 250)");
    $(this).css("box-shadow", "0px 24px 0px -20px rgb(120, 130, 250)");
});

function clearAllMenu() {
    $(".nav-item").css("color", "#444");
    $(".nav-item").css("box-shadow", "none");
}
$(".nav-item:nth-child(1)").click(function() {
    currentPage = 1;
    $("#page").attr("src", "homework.html");
});
$(".nav-item:nth-child(2)").click(function() {
    currentPage = 2;
    $("#page").attr("src", "timetable.html");
});
$(".nav-item:nth-child(3)").click(function() {
    currentPage = 3;
    $("#page").attr("src", "tests.html");
});
$(".nav-item:nth-child(4)").click(function() {
    currentPage = 4;
    $("#page").attr("src", "resources.html");
});

// styling for buttons

$("#next").mousedown(function() {
    $(this).css("border-bottom", "none");
});
$("#next").mouseup(function() {
    $(this).css("border-bottom", "solid rgb(1, 1, 78) 6px");
});

$("#next").click(function() {
    $(".popup").attr("class", "hide");
    $(".overlay").attr("class", "hide");
    name.value = document.querySelector("#choose-name").value;
    document.querySelector(".profile-name").innerHTML = name.value;
    let splitName = name.value.split("");
    document.querySelector(
        ".profile-picture"
    ).innerHTML = splitName[0].toUpperCase();
    //let currentName = JSON.parse(name.value);
    setHomework();
    $("#page")
        .contents()
        .find(".homework-nav-member")
        .click(function() {
            currentLesson = $(this).text();
            setHomeworks();
        });
});

//start of people____________________________________________

const moses = [
    "maths",
    "english",
    "science",
    "literature",
    "french",
    "geography",
    "ict",
    "business",
];

const sai = ["literature", "french", "economics", "ict", "business"];

const ian = ["french", "geography", "ict", "business"];

const judah = ["literature", "french", "igpe", "history", "drama"];

//end of people____________________________________________________

//start of homework area___________________________________________

let extendedMaths = [];

let coreMaths = [];

let history = [];

let extendedEnglish = [];

let coreEnglish = [];

let literature = ["do exercide 5 on page 67"];

let swahili = ["tafuta nahau tano"];

let drama = ["reseach about abstact drama"];

let french = ["bon appetit!"];

let physics = ["revise snell's law"];

let biology = [];

let igpe = [];

let chemistry = [];

let geography = [];

let ict = [];

let art = [];

//end of homework area_________________________________________________________

function setHomework() {
    switch (name.value) {
        case "moses":
            console.log($("#page").contents().find(".homework-nav-list"));
            moses.forEach((e) => {
                $("#page")
                    .contents()
                    .find(".homework-nav-list")
                    .append(`<div class="homework-nav-member">${e}</div>`);
            });
            break;
        case "sai":
            sai.forEach((e) => {
                $("#page")
                    .contents()
                    .find(".homework-nav-list")
                    .append(`<div class="homework-nav-member">${e}</div>`);
            });
            break;
        case "ian":
            ian.forEach((e) => {
                $("#page")
                    .contents()
                    .find(".homework-nav-list")
                    .append(`<div class="homework-nav-member">${e}</div>`);
            });
            break;
        case "judah":
            judah.forEach((e) => {
                $("#page")
                    .contents()
                    .find(".homework-nav-list")
                    .append(
                        `<div class="homework-nav-member" onclick="setHomeworks()">${e}</div>`
                    );
            });
            break;
    }
}

/*
$(".homework-nav-member").click(function() {
    console.log("moses");
});*/

/*_____________HUGE LESSON HOMEWORK SWITCH STATEMENT__________________________________*/

function setHomeworks() {
    console.log(currentLesson);
    switch (currentLesson) {
        case "extendedMaths":
            extendedMaths.forEach((e) => {
                $("#page").contents().find("#homework-pannel").contents().find("body")
                    .append(`
                    <div class="homework-message">
                        ${e}
                    </div>  
                `);
            });
            break;
        case "coreMaths":
            coreMaths.forEach((e) => {
                $("#page").contents().find("#homework-pannel").contents().find("body")
                    .append(`
                    <div class="homework-message">
                        ${e}
                    </div>  
                `);
            });
            break;
        case "history":
            history.forEach((e) => {
                $("#page").contents().find("#homework-pannel").contents().find("body")
                    .append(`
                    <div class="homework-message">
                        ${e}
                    </div>  
                `);
            });
            break;
        case "extendedEnglish":
            extendedEnglish.forEach((e) => {
                $("#page").contents().find("#homework-pannel").contents().find("body")
                    .append(`
                    <div class="homework-message">
                        ${e}
                    </div>  
                `);
            });
            break;
        case "coreEnglish":
            coreEnglish.forEach((e) => {
                $("#page").contents().find("#homework-pannel").contents().find("body")
                    .append(`
                    <div class="homework-message">
                        ${e}
                    </div>  
                `);
            });
            break;
        case "literature":
            console.log("moses");
            literature.forEach((e) => {
                $("#page").contents().find("#homework-pannel").contents().find("body")
                    .append(`
                    <div class="homework-message">
                        ${e}
                    </div>  
                `);
            });
            break;
        case "swahili":
            swahili.forEach((e) => {
                $("#page").contents().find("#homework-pannel").contents().find("body")
                    .append(`
                    <div class="homework-message">
                        ${e}
                    </div>  
                `);
            });
            break;
        case "drama":
            drama.forEach((e) => {
                $("#page").contents().find("#homework-pannel").contents().find("body")
                    .append(`
                    <div class="homework-message">
                        ${e}
                    </div>  
                `);
            });
            break;
        case "french":
            french.forEach((e) => {
                $("#page").contents().find("#homework-pannel").contents().find("body")
                    .append(`
                    <div class="homework-message">
                        ${e}
                    </div>  
                `);
            });
            break;
        case "physics":
            physics.forEach((e) => {
                $("#page").contents().find("#homework-pannel").contents().find("body")
                    .append(`
                    <div class="homework-message">
                        ${e}
                    </div>  
                `);
            });
            break;
        case "biology":
            biology.forEach((e) => {
                $("#page").contents().find("#homework-pannel").contents().find("body")
                    .append(`
                    <div class="homework-message">
                        ${e}
                    </div>  
                `);
            });
            break;
        case "igpe":
            igpe.forEach((e) => {
                $("#page").contents().find("#homework-pannel").contents().find("body")
                    .append(`
                    <div class="homework-message">
                        ${e}
                    </div>  
                `);
            });
            break;
        case "chemistry":
            chemistry.forEach((e) => {
                $("#page").contents().find("#homework-pannel").contents().find("body")
                    .append(`
                    <div class="homework-message">
                        ${e}
                    </div>  
                `);
            });
            break;
        case "geography":
            geography.forEach((e) => {
                $("#page").contents().find("#homework-pannel").contents().find("body")
                    .append(`
                    <div class="homework-message">
                        ${e}
                    </div>  
                `);
            });
            break;
        case "ict":
            ict.forEach((e) => {
                $("#page").contents().find("#homework-pannel").contents().find("body")
                    .append(`
                    <div class="homework-message">
                        ${e}
                    </div>  
                `);
            });
            break;
        case "art":
            art.forEach((e) => {
                $("#page").contents().find("#homework-pannel").contents().find("body")
                    .append(`
                    <div class="homework-message">
                        ${e}
                    </div>  
                `);
            });
            break;
    }
}

/*_____________HUGE LESSON HOMEWORK SWITCH STATEMENT__________________________________*/