function colorChannelMixer(colorChannelA, colorChannelB, amountToMix){
    var channelA = colorChannelA*amountToMix;
    var channelB = colorChannelB*(1-amountToMix);
    return parseInt(channelA+channelB);
}
//rgbA and rgbB are arrays, amountToMix ranges from 0.0 to 1.0
//example (red): rgbA = [255,0,0]
function colorMixer(rgbA, rgbB, amountToMix){
    var r = colorChannelMixer(rgbA[0],rgbB[0],amountToMix);
    var g = colorChannelMixer(rgbA[1],rgbB[1],amountToMix);
    var b = colorChannelMixer(rgbA[2],rgbB[2],amountToMix);
    return "rgb("+r+","+g+","+b+")";
}
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function hexToRGBA(hex,isReturnArray=0, opacity=1) {
	if(isReturnArray==0)
		return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) => '#' + r + r + g + g + b + b).substring(1).match(/.{2}/g).map(x => parseInt(x, 16));
    return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).concat(isFinite(opacity) ? opacity : 1).join(',') + ')';
}
[...document.querySelectorAll('.background-gradient')].forEach(element=> {
    var color = element.getAttribute('data-color');
    var colorOne = colorMixer(hexToRGBA("#ffffff"),hexToRGBA(color),0.9);
    var colorTwo = colorMixer(hexToRGBA("#ffffff"),hexToRGBA(color),0.7);
    element.style.background = `linear-gradient(to bottom,${colorOne},${colorTwo}`;	
});

// dark theme light
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';
//previously saved
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//web obtan the current
const getCurrentTheme = ()=> document.body.classList.contains(darkTheme)?'dark':'light';
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme)?'fa-moon':'fa-sun';

if(selectedTheme){
    // if the validation fullfill
    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme);
    themeButton.classList[selectedIcon==='fa-moon'?'add':'remove'](iconTheme);
}

 themeButton.addEventListener('click',()=>{
     // add or remove the dark icon
     document.body.classList.toggle(darkTheme);
     themeButton.classList.toggle(iconTheme);

     //we save the theme option
     localStorage.setItem('selected-theme',getCurrentTheme());
     localStorage.setItem('selected-icon',getCurrentIcon());
 })
 // end dark theme
 // toggle menu
 const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');
 if(navToggle){
     navToggle.addEventListener('click',()=>{
         navMenu.classList.add('show-menu');
     })
 }
  if(navClose){
     navClose.addEventListener('click',()=>{
         navMenu.classList.remove('show-menu');
     })
 }
 // end toggle menu
