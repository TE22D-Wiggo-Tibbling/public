document.querySelector('button').addEventListener('click' , function(){
    // Byt bakgrundsfärg
    document.body.classList.toggle('dark');

    // byt bakgrundsfärg på div.kontainer
    document.querySelector('.kontainer').classList.toggle('dark');
    
    
    document.querySelectorAll('a').forEach(el => {
        el.classList.toggle('dark');
    });

    //byt ut texinnehåll

    document.querySelector('h1').textContent = 'tjo broskis';

    document.querySelector('.kontainer').innerHTML =  '<img src="https://en.wikipedia.org/wiki/Nuclear_explosion#/media/File:Operation_Upshot-Knothole_-_Badger_001.jpg" alt="Abudabi">';
})


