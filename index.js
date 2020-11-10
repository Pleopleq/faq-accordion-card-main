document.addEventListener("DOMContentLoaded", function(event) {

    const visibleOption = document.querySelectorAll(".dropdowns-option")
    const hiddenOption = document.querySelectorAll(".dropdowns-dropdown__hidden")
    const arrows = document.querySelectorAll(".dropdowns-option__icon")

    visibleOption.forEach((option, index) => option.addEventListener("click", (e) => {
        if(arrows[index].classList.contains("dropdowns-option__iconRotate")){
            arrows[index].classList.remove("dropdowns-option__iconRotate")
            option.attributes.removeNamedItem("style")
            hiddenOption[index].style.display = "none"
        } else {
            arrows[index].classList.add("dropdowns-option__iconRotate")
            option.style.fontWeight = "700"
            hiddenOption[index].classList.add("fade-in")
            hiddenOption[index].style.display = "block"
        }
    }))
})