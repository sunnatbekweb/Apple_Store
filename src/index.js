import utilis from "./assets/scripts/utilis.js";

let { $, $$ } = utilis;

// ------------------------ Catalog dropdown menu actions ----------------------

function dropBtnStyle() {
    $(".dropdown_btn").style.cssText = "border-radius: 16px"
}

function dropdown_actions() {
    $(".menu_btn").addEventListener("click", () => {
        $(".menu_dropdown").classList.toggle("hidden")
    })

    $(".dropdown_btn").addEventListener("click", () => {
        $(".dropdown").classList.toggle("hidden");
        $(".dropdown").classList.add("flex");
        $(".dropdown_btn").classList.toggle("dropdown_btn_style");
    })
}

dropBtnStyle()
dropdown_actions()

// --------------------- cart modal actions ------------------------

function cart_modal_actions() {
    $("#cart_btn").addEventListener("click", () => {
        $(".cart_modal").style.display = "flex";
        document.body.style.overflow = "hidden";
    })

    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("cart_modal")) {
            $(".cart_modal").style.display = "none";
            document.body.style.overflow = "scroll";
        }
    })

    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("shop_icon")) {
            $(".cart_modal").style.display = "flex";
            document.body.style.overflow = "hidden";
        }
    })

    $(".go_shop").addEventListener("click", () => {
        $(".cart_modal").style.display = "none";
        document.body.style.overflow = "scroll";
        window.location.href = "#popular"
    })
}

cart_modal_actions()

// ------------------ Callback modal actions --------------------

function calback_modal_actions() {
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("callback_btn")) {
            $(".callback_modal").classList.remove("hidden");
            $(".callback_modal").classList.add("flex");
            document.body.style.overflow = "hidden";
        }
    })

    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("callback_modal")) {
            $(".callback_modal").classList.add("hidden");
            document.body.style.overflow = "scroll";
        }
    })

    $(".request_btn").addEventListener("click", () => {
        if ($(".p_number").value < 13) {
            alert("Please fill the field!")
        } else {
            $(".request_btn").classList.add("hidden");
            $(".p_number").classList.add("hidden");
            $(".ok_btn").classList.remove("hidden");
        }
    })

    $(".ok_btn").addEventListener("click", () => {
        $(".callback_modal").classList.add("hidden");
        document.body.style.overflow = "scroll";
    });
}

calback_modal_actions()

