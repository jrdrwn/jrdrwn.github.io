document.querySelector(".mobile-btn").addEventListener("click", function () {
    // this.classList.toggle("to-top")
    // this.classList.toggle("to-bottom")
    this.children[1].classList.toggle("bar-2-mini")
    // Array.prototype.forEach.call(this.children, x => x.classList.toggle(x.classList[0] + "-mini"))
    this.nextElementSibling.classList.toggle("main-nav-extend")
})

function writingAnimation() {
    const data = ["Backend Developer", "Software Developer", "Web Developer"],
        target = document.querySelector("[target-write]")
    let i = 0, idxChar = 0, str = "";

    (function wrapper() {
        const writingInterval = setInterval(
            function () {
                if (i === data.length) i = 0

                str += data[i][idxChar]
                target.innerHTML = str
                idxChar++

                if (idxChar === data[i].length) {
                    clearInterval(writingInterval)
                    setTimeout(() => {
                        let afterWrite = setInterval(
                            function () {
                                if (idxChar < 0) {
                                    clearInterval(afterWrite)
                                    i++; idxChar = 0; str = ""
                                    setTimeout(() => wrapper())
                                } else {
                                    target.innerHTML = str.slice(0, idxChar)
                                    idxChar--
                                }
                            }, 75)
                    }, 1000)
                }
            }, 150) //change
    })()
}

window.addEventListener("load", () => writingAnimation())

const smoothScroll = document.querySelector(".nav .container").addEventListener("click", function (event) {
    const target = event.target
    if (target.localName === "a") {
        event.preventDefault()
        const el = document.querySelector(target.hash)
        let y = el.getBoundingClientRect().y - 70
        scrollBy({
            top: y,
            behavior: "smooth",
        })
    }
})

// window.addEventListener("scroll", (x) => {
//     const html = document.documentElement.scrollTop
//     if (!html < 50) document.querySelector(".toTop").classList.add("show")
// })