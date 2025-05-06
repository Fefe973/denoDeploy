$(window).on('load', async function(){
    console.log('Document loaded');

    /*Checking for user choice - Must create a specific id for each element derived from written class
    An idea is to take those as parameters*/
    $('#firstContainerIcone').on('click', async function(){
        console.log('firstContainerIcone clicked ');
        // Call your function with the specific id
        const divMenuChoice = document.createElement('div');

        const firstContainerIconePosition = $('#firstContainerIcone').position();
        const firstContainerIconeWidth = $('#firstContainerIcone').width();
        const firstContainerIconeHeight = $('#firstContainerIcone').height();

        console.log('firstContainerIcone : ', firstContainerIconePosition);
        console.log('firstContainerIconeWidth : ', firstContainerIconeWidth);
        console.log('firstContainerIconeHeight : ', firstContainerIconeHeight);



        divMenuChoice.classList.add('divMenuChoice');
        divMenuChoice.id = 'divMenuChoice';
        
        divMenuChoice.height = 'fit-content';
        divMenuChoice.width = 'fit-content';







    });
    
});
