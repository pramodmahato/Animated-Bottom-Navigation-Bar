function change(name){
    var color;
    var text;
    switch(name){
        case 'home': color='slateblue'; text='Home';
        break;
        case 'about': color='tomato'; text='About';
        break;
        case 'projects': color='slateblue'; text='Projects';
        break;
        case 'skills': color='yellowgreen'; text='Skills';
        break;
        default: color='white'; text='Click something!'
        break;
    }
    document.body.style.backgroundColor=color;
    document.getElementById('mainText').innerHTML=text;
  
}
