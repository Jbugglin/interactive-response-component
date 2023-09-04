/* Rating selection */

/*  Submit button */
let submitClicked = document.getElementById('submitButton').addEventListener('click', submitFunction);

function submitFunction() {
    //hides the rating start portion.
    document.getElementsByClassName('ratingStart').style.display = none;
}