const keyboardElement = document.querySelector('#keyboard');

let keyboardLayout = Keyboards.FULL_SIZED.withLayout(Layouts.QWERTY);
console.log(Keys);
for (const el of keyboardLayout) {

    for (const key of el) {
        keyboardElement.innerHTML += `
        <div class="keyslot" data-keyid="${ key.id }">${ key.element.innerHTML }</div>
        `;
    }
}




