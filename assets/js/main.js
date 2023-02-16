const form = document.querySelector("#form")
const sendForm = document.querySelector("#mail")

form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    const forms = new FormData(this)
    sendForm.setAttribute("href", `mailto:garciacolin@hotmail.com?subject=${forms.get("name")} - ${forms.get("subject")}&body=${forms.get("message")}`)
    sendForm.click()
    }