import "./style.css"
function init() {
    const scoreEl = document.querySelector("#score")
    const buttons = document.querySelectorAll(".star")
    for (const button of buttons) {
        button.addEventListener("click", () => {
            const selectedItem = document.querySelector('[data-selected="true"]')
            if (selectedItem) {
                selectedItem.dataset.selected = "false"
            }
            scoreEl.textContent = button.dataset.star
            button.dataset.selected = "true"
        })
    }
}

init()
