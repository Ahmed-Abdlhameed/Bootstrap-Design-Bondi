// Getting DOM elements:
let lis = document.querySelectorAll(".choose li");
let workBox = document.querySelector(".work-box");

// Setting variables:
let imgs = ["work-app-01", "work-app-02", "work-code-01",
    "work-code-02", "work-design-01", "work-design-02",
    "work-photo-01", "work-photo-02"];

// Adding event listeners:
lis.forEach((li) => {
    li.addEventListener("click", () => {
        show(li.textContent.toLocaleLowerCase())
        lis.forEach((li) => {
            li.classList.remove("active", "rounded-pill");
        });
        li.classList.add("active", "rounded-pill");
    });
});

// Functions:
function show(word) {
    workBox.innerHTML = "";
    word === "all" ? word = "work" : null;
    for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].includes(word)) {
            workBox.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3">
            <div class="box mb-3 bg-white" data-work="Application">
                <img class="img-fluid" src="imgs/${imgs[i]}.jpg" alt="" />
            </div>
        </div>`;
        }
    }
}