
/* Ši žemiau aprašoma f-ja naudojama, kai pvz iškerpame HTML dalį failo,
šiuo atveju class elementą .clock ir tada su javaScript f-ja padarome, kad ši
f-ja surastų HTML failę class elementą .clock ("const DOM = document.querySelector(selector)")
ir į jo vietą įterptų Code dalį. Įterpimas vyksta su šia komanda :
DOM.innerHTML=Code. Taip galime padaryti, kad į tam tikras HTML vietas būtų
automatiškai, pasitelkus javaScript f-ja, įterpiamas reikiama kodo dalis */

/*
function Clock () {
const Code = `  <div class="time">
                    <div class="value">43</div>
                    <div class="label">Days</div>
                </div>
                <div class="time">
                    <div class="value">09</div>
                    <div class="label">Hours</div>
                </div>
                <div class="time">
                    <div class="value">37</div>
                    <div class="label">Minutes</div>
                </div>
                <div class="time">
                    <div class="value">39</div>
                    <div class="label">Seconds</div>
                </div>`

const selector = ".clock"
const DOM = document.querySelector(selector)  //dokument - tai default pasirinkimas, norint atlikti reikiamo selektoriaus paieška puslapyje//

console.log(DOM);

DOM.innerHTML=Code

}

export { Clock }

*/

/*Kad būtų dar mažiau kodo ir jis būtų skaitomesnis ji galima dar perrašyti
taip, panaudojus ciklo f-ja, laikrodis bus atvaizduojamas taip pat tik 
javaScripte užrašymas per ciklo f-ją : */

function Clock (selector) {
const timesValue = [43, 9, 37, 39];
const labelValue = ["Days", "hours", "minutes", "secundes"];
let code = ""

for (let i=0; i< timesValue.length; i++) {
    code+=`<div class="time">
                <div class="value">${timesValue[i]}</div>
                <div class="label">${labelValue[i]}</div>
             </div>`

const DOM = document.querySelector(selector);
console.log(DOM);

DOM.innerHTML= code;
}

}

export { Clock }