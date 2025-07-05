const slides = document.querySelectorAll(".testimonialCard")
console.log(slides)
var counter = 0;
slides.forEach(
    (testimonialCard, index) => {
        testimonialCard.style.left = `${index * 100}%`
    }
)
const goPrev = () => {
    counter--
    slideImg()
}
const goNext = () => {
    counter++
    slideImg()
}

const slideImg = () => {
    slides.forEach(
        (testimonialCard) => {
            testimonialCard.style.transform = `translate(${counter * 105}%)`
        }
    )
}


