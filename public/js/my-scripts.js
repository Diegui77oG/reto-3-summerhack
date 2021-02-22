let father = document.getElementById("my-container");

let addButton = document
    .getElementById("add")
    .addEventListener("click", function () {
        let category = document.getElementById("category").value;

        let title = document.getElementById("title").value;

        if (title != "") {
            let model = `<li
        class="list-group-item d-flex justify-content-between align-items-center"
        >${category} | ${title}</li>`;

            father.innerHTML += model;

            document.getElementById("emptyMessage").classList.add("off");

            document.getElementById("my-list").classList.remove("off");

            document.getElementById("title").value = "";
            document.getElementById("category").value = "🥩 Carnes";
            document.getElementById("description").value = "";
        }
    });

let plusButton = document
    .getElementById("plus")
    .addEventListener("click", function () {
        document.getElementById("title").value = "";
        document.getElementById("category").value = "🥩 Carnes";
        document.getElementById("description").value = "";
    });
