
window.onload = function () {
    /* lấy phần tử modal */
    var modal = document.getElementById("myModal");
    var product_name = document.getElementById("productName").textContent;

    /* thiết lập nút mở modal */
    // var btn = document.getElementById("btn-buy");
    var btn = document.querySelectorAll(".buy-btn");

    var imgArr = []


    btn.forEach(element => {
        var product_name = element.parentElement.parentElement.querySelector(".product-name").textContent;
        var product_img = element.parentElement.parentElement.querySelector("img").src;



        element.onclick = function () {
            modal.style.display = "block";
            amount++;
            document.getElementById("modal-product-name").innerHTML = product_name;
            document.getElementById("modal-product-amount").innerHTML = amount;
            document.getElementById("header-product-amount").innerHTML = amount;

            imgArr = [...imgArr, product_img]


            var tagImg = ``
            imgArr.forEach((value) => {
                tagImg += `<img src="${value}" alt="">`

            })

            document.getElementById("product-image").innerHTML = tagImg
            // document.getElementById("product-modal-name").innerHTML = product_name

        }
    });

    //myBtn

    /* thiết lập nút đóng modal */
    var span = document.getElementsByClassName("close")[0];

    var amount = 0

    document.getElementById("header-product-amount").innerHTML = amount;

    /* Sẽ hiển thị modal khi người dùng click vào */


    /* Sẽ đóng modal khi nhấn dấu x */
    span.onclick = function () {
        modal.style.display = "none";
    }

    /*Sẽ đóng modal khi nhấp ra ngoài màn hình*/
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

};