let posts = document.querySelectorAll(".textBox")
posts = [...posts]
let expands = document.querySelectorAll(".expand");
for (let expand of expands) {
    expand.onclick = function () {
        posts.forEach((item) => {
            item.classList.remove("less")
            item.nextElementSibling.textContent = "Expand"
        })
        this.parentElement.querySelector(".textBox").classList.add("less")
        this.textContent = "Collapse"
    };

}



