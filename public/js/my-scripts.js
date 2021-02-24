let father = document.getElementById("my-container");

let emptyMessage = document.getElementById("emptyMessage");

let myList = document.getElementById("my-list");
let itemDetail = document.getElementById("item-detail");

let btnPlus = document.getElementById("plus");

let addButton = document
    .getElementById("add")
    .addEventListener("click", function () {
        var cargaProducto = $("#cargaProducto").modal({});

        let product = document.getElementById("product").value;
        let category = document.getElementById("category").value;
        let description = document.getElementById("description").value;

        if (product != "" && category != "" && description != "") {
            let model = `<li class="list-group-item d-flex justify-content-between align-items-center" data-product="${product}" data-product-icon="${category}" data-description="${description}"><span itemprop="itemListElement"><img src="${category}" alt="${product}" class="icono"/> ${product}</span></li>`;

            father.innerHTML += model;

            emptyMessage.classList.add("off");

            myList.classList.remove("off");

            document.getElementById("product").value = "";
            document.getElementById("category").value = "⭐ Varios";
            document.getElementById("description").value = "";

            $("#cargaProducto").modal("hide");
        }
    });

let plusButton = document
    .getElementById("plus")
    .addEventListener("click", function () {
        document.getElementById("product").value = "";
        document.getElementById("category").value = "⭐ Varios";
        document.getElementById("description").value = "";
    });

let myContainer = document
    .getElementById("my-container")
    .addEventListener("click", function (e) {
        myList.classList.add("off");
        itemDetail.classList.remove("off");
        document.getElementById("productImage").src = e.target.getAttribute(
            "data-product-icon"
        );
        document.getElementById(
            "productName"
        ).innerHTML = e.target.getAttribute("data-product");
        document.getElementById(
            "productDescription"
        ).innerHTML = e.target.getAttribute("data-description");
        btnPlus.classList.add("off");
    });

let btnBack = document
    .getElementById("btn-back")
    .addEventListener("click", function () {
        myList.classList.remove("off");
        itemDetail.classList.add("off");
        btnPlus.classList.remove("off");
    });
