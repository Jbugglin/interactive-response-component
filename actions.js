const rating = [1, 2, 3, 4, 5];

const ratingStart = document.getElementById('ratingStart');
const thankYouStart = document.getElementById('thankYouStart');
const submitButton = document.getElementById('submitButton');

const ratingOption = document.getElementById('ratingOption');
const ratingBtn = ratingOption.getElementsByClassName('ratingButton');

const activeRatingSelected = document.getElementsByClassName('ratingButton active');

const selectedRating = document.getElementsByClassName('active');
const thankYouRating = document.getElementById('ratingNumber');

//Setting the active class. 
for (let i = 0; i < ratingBtn.length; i++) {
    ratingBtn[i].addEventListener('click', function() {
        for (let j = 0; j < ratingBtn.length; j++) {
            ratingBtn[j].classList.remove('active');
        }
        this.classList.add('active');
        //console.log(ratingBtn[i].innerHTML);
        thankYouRating.innerText = ratingBtn[i].innerHTML;
    }, false);
}

/* Submit button rating -> thank you */
submitButton.addEventListener('click', submitFunction);

function submitFunction() {
    if (activeRatingSelected.length === 1) {
        ratingStart.style.display = 'none';
        thankYouStart.style.display = 'flex';
        thankYouStart.style.flexDirection = 'column';
    } else {
        alert('Please, give us a rating!');
    }
}