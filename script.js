let sudah_ditekan = []
const base_text = "time left: "
let base_time = 31
const timer = document.getElementById("timer")
timer.value = "time left: 30"

document.getElementById("dialog").showModal()
function hide_tutorial(){
    document.getElementById("dialog").close()
    addButton()
}

function addButton() {
    sudah_ditekan = []
    const div_box = document.getElementById("box")
    const sudah_ada = []
    
    div_box.innerHTML = ""
    for (let i = 1; i <= 25; i++) {
        let random_num = 0

        while (!random_num || sudah_ada.includes(random_num)) {
            random_num = Math.round(Math.random() * 25)
        }

        //tambah angka yang sydah ada ke array
        sudah_ada.push(random_num)
        
        //console.log(random_num)
        //buat element button
        const button_create = document.createElement("button")
        button_create.textContent = random_num
        button_create.id = random_num
        button_create.addEventListener("click", () => {
            check(random_num)
        })
        
        setTimeout(() => div_box.appendChild(button_create), i*50)
    }
    
    base_time = 32
}

function check(jawaban) {
    const button = document.getElementById(jawaban)

    //pengecekan apakah kWaban benar atau salaj
    if (jawaban !== sudah_ditekan.length+1) {
        button.style.background = "red"
        setTimeout(() => button.style.background = "#BFA28C", 750)
    } else {
        button.style.background = "#23d63e"
        setTimeout(() => button.style.background = "#BFA28C", 750);
        sudah_ditekan.push(jawaban)
        document.getElementById("skor").value = "skor: "+sudah_ditekan.length
    }
    
    //pengecekan apakah game sudah selesai atau belum
    if(sudah_ditekan.length === 25){
        clearInterval(interval)
        const lagi = confirm("Kamu Berhasil melewati tantangan ini!\nIngin bermain lagi?")
        if(lagi){
            addButton()
            intervalConnect()
        } else {
            alert("Terimakasih sudah memainkan game ini ya!!")
        }
    }
}

let interval = setInterval(() => {
    if (base_time !== 0) {
        base_time -= 1
        timer.value = base_text + base_time
    } else {
        clearInterval(interval)
        const selesai = confirm("yah Waktu habis :(\nIngin mencoba kembali?")
        if (selesai) {
            base_time = 31
            addButton()
            intervalConnect()
        } else {
            alert("Baik game berakhir...\nTerimakasih telah bermain game ini")
        }
    }
}, 1000)

function intervalConnect() {
    clearInterval(interval)
    interval = setInterval(() => {
        if (base_time !== 0) {
            base_time -= 1
            timer.value = base_text + base_time
        } else {
            clearInterval(interval)
            const selesai = confirm("yah Waktu habis :(\nIngin mencoba kembali?")
            if (selesai) {
                addButton()
                intervalConnect()
            } else {
                alert("Baik game berakhir...\nTerimakasih telah bermain game ini")
            }
        }
    }, 1000)
}