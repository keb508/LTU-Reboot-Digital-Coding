const buttons = document.querySelectorAll('button.selection');

const allimages = document.querySelectorAll('main .image-selections .images');

let filterSearch = document.querySelector('input[name="filter"]');

let filterButton = document.querySelector('button.filter-button');


// toggleimages function
function toggleimages( dataClass ) {
    if(dataClass === 'all') {

        allimages.forEach(function(image){

            image.style.display = 'flex';

        });

    } else {

        allimages.forEach(function( image ){

                if(image.dataset.class === dataClass) {

                image.style.display = 'flex';

                } else {



                    image.style.display = 'none';

                }


        });



    } //end of if else


} //end of toggleimages

//toggleActiveClass

function toggleActiveClass(active) {

buttons.forEach(function(button) {

button.classList.remove('active');

});

active.classList.add('active');

} //end of toggleActiveClass

            //filter button

    filterButton.addEventListener('click', function() {

        let inputValue = filterSearch.value;

        let searchTerm = inputValue.toLowerCase();

        toggleimages(searchTerm);

        buttons.forEach(function(button) {

        let dataClass = button.getAttribute('data-class');

            if(dataClass === searchTerm) {

                button.classList.add('active');

            } else {

                button.classList.remove('active');

            } //end of if else

        filterSearch.value = '';


    }); //end of forEach loop


});

//end of filter button


buttons.forEach(function(button){

button.addEventListener('click', function(){

    toggleimages(button.dataset.class);

    toggleActiveClass(button);
});

}); //end of if else

