
// selectors

const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")

// variables

let gelirler = 0;
let harcamaListesi = []

// Hesap tablosu
const gelirinizTd = document.getElementById("geliriniz")
const giderinizTd = document.getElementById("gideriniz")
const kalanTd = document.getElementById("kalan")

// Harcama Formu
const harcamaFormu = document.getElementById("harcama-formu")
const harcamaAlaniInput = document.getElementById("harcama-alani")
const tarihInput = document.getElementById("tarih")
const miktarInput = document.getElementById("miktar")

// Harcama Tablosu
const harcamaBody = document.getElementById("harcama-body")
const temizleBtn = document.getElementById("temizle-btn")

// Ekle formu

ekleFormu.addEventListener("submit", (e) => {
    e.preventDefault()
    gelirler = gelirler + Number(gelirInput.value)
    // console.log(gelirler);
    localStorage.setItem("gelirler", gelirler)
    gelirinizTd.innerText = gelirler
    ekleFormu.reset()
})

window.addEventListener("load", () => {
    gelirler = Number(localStorage.getItem("gelirler")) || 0;
    gelirinizTd.innerText = gelirler
    tarihInput.valueAsDate = new Date()
})

harcamaFormu.addEventListener("submit", (e) => {
    e.preventDefault() // reload u engeller

    const yeniHarcama = {
        id: new Date().getTime(),
        tarih: tarihInput.value,
        alan: harcamaAlaniInput.value,
        miktar: miktarInput.value

    }
    // console.log(yeniHarcama);
    harcamaFormu.reset()
    tarihInput.valueAsDate = new Date()
    harcamaListesi.push(yeniHarcama)
    localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))
})


// Harcamayi DOM'a yaz

const harcamayiDomaYaz = ({id, miktar, tarih, alan}) => {
    // const {id, miktar, tarih, alan} = yeniHarcama

    //? 1.yontem

    // harcamaBody.innerHTML += `
    // <tr>
    // <td>${tarih}</td>
    // <td>${alan}</td>
    // <td>${miktar}</td>
    // <td><i id=${id} class= "fa-solid fa-trash-can text-danger" type="button"></i></td>
    // </tr>
    // `

    //? 2. yontem
    const tr = document.createElement("tr")

    const appendTd = (content) => {
        const td = document.createElement("td")
        td.textContent = content
        return td
    }
}