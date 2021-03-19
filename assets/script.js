displayEvents(); 
// Set current date

$("#currentDay").text(moment().format("dddd, MMMM Do"));

// Change color of inputs based on current time

const currentHour = moment().hour();
let plannerInput = $(".row input[type=text]");

$(plannerInput).each(function() {

    let plannerInputNum = parseInt($(this).attr("data-hour"));

    if (plannerInputNum < currentHour) {
        $(this).addClass("past")
    }

    else if (plannerInputNum == currentHour) {
        $(this).addClass("present")
    }

    else if (plannerInputNum > currentHour) {
        $(this).addClass("future")
    }

});


$(".saveBtn").click(function() {
    event.preventDefault();

    var hourValue = $(this).attr("data-value")
    var eventEntered = $(this).prev().val();

    localStorage.setItem(hourValue, JSON.stringify(eventEntered));
});

const keys = Object.keys(localStorage);
keys.forEach(displayEvents);
function displayEvents(item) {
    $(`*[data-hour="${item}"]`).val(JSON.parse(localStorage.getItem(`${item}`)));
};

    