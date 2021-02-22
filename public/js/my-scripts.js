let father = document.getElementById("my-container");

let addButton = document
    .getElementById("add")
    .addEventListener("click", function () {
        let category = document.getElementById("category").value;

        let title = document.getElementById("title").value;

        let model = `<li
    class="list-group-item d-flex justify-content-between align-items-center"
    >${category} | ${title}</li>`;

        father.innerHTML += model;
    });
