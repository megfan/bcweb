window.addEventListener('DOMContentLoaded', () => {

    let appBckg = document.getElementById('appBckg').style;
    appBckg.background = 'black';

    const menuOpen = document.getElementById('openMenu');
    const title = document.querySelector('.App-header_title');  
    const menu = document.getElementById('menu'); 
    const menuItem = document.querySelectorAll('.container>section'); 

    const search = document.getElementById('search');
    const searchIcon = document.getElementById('searchIcon');


    // otwieranie menu
    menuOpen.addEventListener('click', function(){          
        appBckg.background = appBckg.background === 'black' ? 'rgb(40,154,243)' : 'black';          
        title.style.transform = title.style.transform === 'translateX(80vw)' ? 'translateX(0)' : 'translateX(80vw)'; 
        title.style.opacity = title.style.opacity === '0' ? '1' : '0'; 
        menu.style.transform = menu.style.transform === 'translateX(0vw)' ? 'translateX(-80vw)' : 'translateX(0vw)'; 
        menuItem.forEach(item => {
            item.style.display = 'none';
        })
    });

    //otwieranie offer;

    menu.addEventListener('click', function(e){
        console.log(e.target.getAttribute('data-content'));
        var attrTarget = e.target.getAttribute('data-content');
        menuItem.forEach(item => {
            item.style.display = 'none';
            item.getAttribute('class') === attrTarget ? item.style.display = 'flex' : item.style.display = 'none'
        });
    })

    searchIcon.addEventListener('click', function(){
        search.style.visibility = search.style.visibility === 'hidden' ? 'visible' : 'hidden';
   })



});