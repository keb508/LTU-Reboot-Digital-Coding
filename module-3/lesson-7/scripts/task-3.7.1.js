const buttons = document.querySelectorAll('button.selection');

const allimages = document.querySelectorAll('main.image-selections.images');

function toggleimages( dataClass ) {
    if(dataClass = 'all') {

        allimages.forEach(function(image){

            image.style.display = 'flex';

        });

    } else {

        allimages.forEach(function(){

                if(image.dataset.class === dataClass) {

                image.style.display = 'flex';

                } else {



                    image.style.display = 'none';

                }


        });



    }




};

buttons.forEach(function(button){

button.addEventListener('click', function(){

    toggleimages(button.dataset.class);
});

});

