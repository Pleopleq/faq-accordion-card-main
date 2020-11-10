document.addEventListener("DOMContentLoaded", function(event) {

    const visibleOption = document.querySelectorAll(".dropdowns-option")
    const hiddenOption = document.querySelectorAll(".dropdowns-dropdown__hidden")
    const arrows = document.querySelectorAll(".dropdowns-option__icon")

    arrows.forEach((arrow, index) => arrow.addEventListener("click", () => {
        if(arrow.classList.contains("dropdowns-option__iconRotate")){
            arrow.classList.remove("dropdowns-option__iconRotate")
            visibleOption[index].attributes.removeNamedItem("style")
            hiddenOption[index].style.display = "none"
        } else {
            arrow.classList.add("dropdowns-option__iconRotate")
            visibleOption[index].style.fontWeight = "700"
            hiddenOption[index].classList.add("fade-in")
            hiddenOption[index].style.display = "block"
        }
    }))
})