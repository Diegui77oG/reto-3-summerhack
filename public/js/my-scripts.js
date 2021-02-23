let father = document.getElementById("my-container");

let addButton = document
    .getElementById("add")
    .addEventListener("click", function () {
        let title = document.getElementById("title").value;
        let category = document.getElementById("category").value;
        let description = document.getElementById("description").value;

        var cargaProducto = $("#cargaProducto").modal({});

        if (title != "") {
            let model = `<li
        class="list-group-item d-flex justify-content-between align-items-center"
        ><span itemprop="itemListElement">${category} | ${title}</span></li>`;

            father.innerHTML += model;

            document.getElementById("emptyMessage").classList.add("off");

            document.getElementById("my-list").classList.remove("off");

            document.getElementById("title").value = "";
            document.getElementById("category").value = "⭐ Varios";
            document.getElementById("description").value = "";

            $("#cargaProducto").modal("hide");
        }
    });

let plusButton = document
    .getElementById("plus")
    .addEventListener("click", function () {
        document.getElementById("title").value = "";
        document.getElementById("category").value = "⭐ Varios";
        document.getElementById("description").value = "";
    });
