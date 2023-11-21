function randomRgb() {
    let random1 = Math.floor(Math.random() * 256)
    let random2 = Math.floor(Math.random() * 256)
    let random3 = Math.floor(Math.random() * 256)
    let opaklik = Math.random().toFixed(1)

    return `rgb(${random1}, ${random2}, ${random3}, ${opaklik})`
}
// console.log(Math.random().toFixed(1))
console.log(randomRgb())

const container = document.querySelector('.container')
//? BOM -> setInterval ve setTimeout
let interval = setInterval(() => {
    container.style.backgroundColor = randomRgb()
}, 1000);

setTimeout(() => {
    clearInterval(interval)
}, 100000);
//? BOM -> setInterval ve setTimeout


//* -----
/* 
   <li class="d-flex justify-content-between align-items-center px-3">
    <p class="mt-3">Yapılacak Bir şey</p>
        <div class="d-flex gap-3">
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-trash"></i>
        </div>
    </li>
*/

const input = document.getElementById('input')
const btn = document.querySelector('#btn')
const liste = document.querySelector('#liste')
const zaman = document.querySelector('#tarih')

//? Her 1 saniyede 1 zamanı günceller
setInterval(() => {
    zaman.textContent = tarih()
}, 1000);
//? Her 1 saniyede 1 zamanı günceller

btn.addEventListener('click', toDo)

input.addEventListener('keyup', (element) => {
    // console.log(element.keyCode)
    if (element.keyCode == 13) {
        toDo()
    }
})





function toDo() {
    const li = document.createElement('li')
    li.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'px-3', 'mt-2', 'rounded-1')
    li.style.backgroundColor = randomRgb()

    const p = document.createElement('p')
    p.classList.add('mt-3')
    p.textContent = input.value.trim()

    const iconDiv = document.createElement('div')
    iconDiv.classList.add('d-flex', 'gap-3')

    const check = document.createElement('i')
    check.classList.add('fa-solid', 'fa-check')

    const trash = document.createElement('i')
    trash.classList.add('fa-solid', 'fa-trash')

    if (input.value != '') {
        li.append(p)
        iconDiv.append(check)
        iconDiv.append(trash)
        li.append(iconDiv)
        liste.append(li)

        check.addEventListener('click', function () {
            //! this kullanabilmek için normal fonksiyon açmalıyız arrow değil!!!
            // console.log(this.parentElement.previousElementSibling)
            let yazi = this.parentElement.previousElementSibling

            yazi.classList.toggle('text-decoration-line-through')
            yazi.classList.toggle('text-secondary')
        })

        trash.addEventListener('click', function () {
            // console.log(this.parentElement.parentElement)
            let sil = this.parentElement.parentElement
            sil.remove()
        })


    } else {
        alert('Lütfen Bir Değer Giriniz...')
    }
    input.value = ''
}


function tarih() {
    let date = new Date()
    // console.log(date) //? Fri Nov 17 2023 16:33:19 GMT+0300 (GMT+03:00)

    // console.log(date.getDate()) //? Ayın günleri
    // console.log(date.getDay()) //? pazar = 0 , cumartesi = 6
    // console.log(date.getFullYear()) //? Yıl
    // console.log(date.getHours()) //? 16 saat getirdi
    // console.log(date.getMinutes()) //? 32 dakikayı getirdi
    // console.log(date.getMonth() + 1) //? ocak => 0 , aralık => 11
    // console.log(date.getSeconds()) //? saniye getirir

    let gunler = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']

    let aylar = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']

    let gun = gunler[date.getDay()]
    let ay = aylar[date.getMonth()]
    let ayinGunu = date.getDate()
    let yil = date.getFullYear()

    let saat = date.getHours()
    let dakika = date.getMinutes()
    let saniye = date.getSeconds()

    if (saniye < 10) {
        saniye = '0' + saniye
    }
    if (dakika < 10) {
        dakika = '0' + dakika
    }


    let tarih = `${ayinGunu} ${ay} ${yil} ${gun} - ${saat}:${dakika}:${saniye}`
    return tarih
}