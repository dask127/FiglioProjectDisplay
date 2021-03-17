document.addEventListener("DOMContentLoaded", () => {

    let lista_sabores = document.querySelector("#sabores_options");

    let menu = document.querySelector(".article_menu");
    let items = menu.children;


    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", openMenuOnce);

        if (items[i].id == "vasitos") {
            selectOneFromGroup(items[i].children[1]);
        }
    }


    //le doy un contador y un limite de inputs seleccionables
    let cant_inputs = 0;
    let sabores_limit = 3;
    let cant_sabores_selec = 0;

    addSabor("Savora");
    addSabor("Dulce de leche");
    addSabor("Prueba");
    addSabor("SUPER F");
    addSabor("LALALA");
    addSabor("LALALA");
    addSabor("LALALA");
    addSabor("LALALA");
    addSabor("LALALA");
    addSabor("LALALA");
    addSabor("LALALA");
    addSabor("LALALA");
    addSabor("LALALA");
    addSabor("LALALA");
    addSabor("LALALA");
    addSabor("LALALA");
    addSabor("LALALA");


    function selectOneFromGroup(ul) {
        let elements = ul.querySelectorAll("li");
        elements.forEach(element => {
            element.addEventListener("click", checkChecked);
        });
    }

    function checkChecked() {
        let father = this.parentElement;
        let list = father.querySelectorAll("li");

        list.forEach(li => {
            if (li != this) {
                let input = li.querySelector("input");
                if (input.checked != false) {
                    input.checked = false;
                }
            }
        });

        let selected_input = this.querySelector("input");
        selected_input.checked = true;

    }

    function openMenuOnce() {
        toggleSelectMenu(this);
        this.removeEventListener("click", openMenuOnce);

        let header = this.children[0];
        header.addEventListener("click", closeSelectMenu);
    }

    function toggleSelectMenu(item) {
        //tan dinamico que se te caeria el ojete.

        if (item.id == "sabores") {
            item.querySelector(".sabores_quantity").classList.toggle("text_hidden");
        }

        menu.classList.toggle("click_transition_expand");
        menu.classList.toggle("click_transition_reduce");

        item.querySelector(".item_options").classList.toggle("height_expand");
        item.querySelector(".item_options").classList.toggle("height_reduce");

        //le pido que me de el nodeList del contenedor de icons
        let icon_container = item.querySelector(".item_btn").querySelectorAll("img");
        icon_container[0].classList.toggle("icon_hidden");
        icon_container[1].classList.toggle("icon_hidden");

        //le doy sticky al header de la opcion
        let header = item.children[0];
        header.classList.toggle("sticky");

        //escondo el siguiente hermano
        let garbage_text = item.nextSibling;
        let next = garbage_text.nextSibling;
        if (next != null) {
            next.classList.toggle("li_hidden");
        }
    }


    function closeSelectMenu() {
        toggleSelectMenu(this.parentElement);

        checkConditions();
    }

    function checkConditions() {

        let button = document.querySelector("#send_button");

        if ((cant_sabores_selec > 0) && (cant_sabores_selec <= sabores_limit)) {
            let inputs = items[1].querySelectorAll("input[type=checkbox]");

            let flag = false;

            inputs.forEach(input => {
                if (input.checked == true) {
                    flag = true;
                }
            });
            if (flag == true) {
                button.disabled = false;
            } else button.disabled = true;
        } else {
            button.disabled = true;
        }
    }

    function checkCantSaboresSeleccionados() {

        if (this.checked) {
            if (cant_sabores_selec < sabores_limit) {
                cant_sabores_selec++;
            } else {
                this.checked = false;
            }
        } else {
            cant_sabores_selec--;
        }
    }

    function addSabor(nombre) {
        cant_inputs++;

        let li = document.createElement("li");
        li.classList.add("option");

        let titulo = document.createElement("h5");
        titulo.classList.add("option_title");
        titulo.innerHTML = nombre;

        let div = document.createElement("div");
        div.classList.add("option_checkbox");

        let input = document.createElement('input');
        input.type = "checkbox";
        input.id = "option_n_" + cant_inputs;

        input.addEventListener("click", checkCantSaboresSeleccionados);

        let label = document.createElement("label");
        label.setAttribute("for", "option_n_" + cant_inputs);

        div.appendChild(input);
        div.appendChild(label);

        li.appendChild(titulo);
        li.appendChild(div);

        li.addEventListener("click", () => {
            let checked_bool = input.checked;


            //si no estaba seleccionado
            if (checked_bool == false) {
                if (cant_sabores_selec < sabores_limit) {
                    cant_sabores_selec++;
                    input.checked = true;
                }
            } else {
                cant_sabores_selec--;
                input.checked = false;
            }

        });

        lista_sabores.appendChild(li);
    }



});