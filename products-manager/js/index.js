function getEle(id) {
    return document.getElementById(id);
}

function resetEle() {
    getEle("btnAdd").style.display = "block";
    getEle("btnUpdate").style.display = "none";
}

let product = {
    id: "1",
    name: "VF9",
    price: 1571900000,
    screen: "new",
    backCamera: 2022,
    frontCamera: "Điện",
    img: src= "http://localhost:63342/index.html/imageVF/vf9_0..jpg",
    desc: "Mẫu xe mới, tiết kiệm nhiên liệu, đột phá về phong cách" ,
    type: "200km/h",
}

let product2 = {
    id: "2",
    name: "VF8",
    price: 1443200000,
    screen: "new",
    backCamera: 2022,
    frontCamera: "Điện",
    img: src= "http://localhost:63342/index.html/imageVF/vf8_0.jpg",
    desc: "Mẫu xe mới, tiết kiệm nhiên liệu, đột phá về phong cách" ,
    type: "183km/h",
}

let product3 = {
    id: "3",
    name: "VFE 34",
    price: 690000000,
    screen: "new",
    backCamera: 2022,
    frontCamera: "Điện",
    img: src= "http://localhost:63342/index.html/imageVF/vf94_0.jpg",
    desc: "Mẫu xe mới, tiết kiệm nhiên liệu, đột phá về phong cách" ,
    type: "183km/h",
}

let product4 = {
    id: "4",
    name: "VF President",
    price: 4600000000,
    screen: "new",
    backCamera: 2021,
    frontCamera: "Xăng",
    img: src= "http://localhost:63342/index.html/imageVF/vfP_1.jpg",
    desc: "Mẫu xe mới, tiết kiệm nhiên liệu, đột phá về phong cách" ,
    type: "200km/h",
}

let product5 = {
    id: "5",
    name: "VF LUX SA2.0",
    price: 1552090000,
    screen: "new",
    backCamera: 2021,
    frontCamera: "Xăng",
    img: src= "http://localhost:63342/index.html/imageVF/sa_0.jpg",
    desc: "Mẫu xe mới, tiết kiệm nhiên liệu, đột phá về phong cách" ,
    type: "183km/h",
}

let product6 = {
    id: "6",
    name: "VF LUX A2.0",
    price: 1115000000,
    screen: "new",
    backCamera: 2021,
    frontCamera: "Xăng",
    img: src= "http://localhost:63342/index.html/imageVF/a_0.jpg",
    desc: "Mẫu xe mới, tiết kiệm nhiên liệu, đột phá về phong cách" ,
    type: "183km/h",
}

let product7 = {
    id: "7",
    name: "VF FADIL",
    price: 480000000,
    screen: "new",
    backCamera: 2021,
    frontCamera: "Xăng",
    img: src= "http://localhost:63342/index.html/imageVF/fadil_0.jpg",
    desc: "Mẫu xe mới, tiết kiệm nhiên liệu, đột phá về phong cách" ,
    type: "183km/h",
}

let arrproduct = [product, product2, product3, product4, product5, product6, product7];

function getListProduct() {
    renderProducts(arrproduct);
}

getListProduct();

function renderProducts(data) {
    var contentHTML = "";

    for (let i = 0; i < data.length; i++) {
        contentHTML += `
        <tr>
            <td class="text">${i + 1}</td>
            <td>
                <img
                    src="${data[i].img}"
                    class="avatar me-3"
                    alt="user1"
                />
            </td>
            <td>
                <h6 class="mb-0 text2">
                    ${data[i].name}
                </h6>
            </td>
            <td class="text">${data[i].price}VND</td>
            <td class="text">${data[i].screen}</td>
            <td class="text">
                ${data[i].backCamera}
            </td>
            <td class="text">${data[i].frontCamera}</td>
            <td class="text">
                ${data[i].desc}
            </td>
            <td class="text">${data[i].type}</td>
            <td class="text">
                <button
                    type="button"
                    class="btn-edit text"
                    onclick="getProduct(${data[i].id})"
                >
                    Edit
                </button>

                <button
                    type="button"
                    class="btn-delete text"
                    onclick="deleteProduct(${data[i].id})"
                >
                    Delete
                </button>
            </td>
        </tr>
        `;
    }
    getEle("productList").innerHTML = contentHTML;
}

function createProduct() {

        let form = document.getElementsByTagName("form")[0];
        var prodName = form.querySelector("#productId").value;
        var prodPrice = form.querySelector("#prodPrice").value;
        var prodScreen = form.querySelector("#prodScreen").value;
        var prodBackCam = form.querySelector("#prodBackCam").value;
        var prodFrontCam = form.querySelector("#prodFrontCam").value;
        var prodImg = form.querySelector("#prodImg").value;
        var prodDesc = form.querySelector("#prodDesc").value;
        var prodType = form.querySelector("#prodType").value;

        var product = new Product(
            prodName,
            prodPrice,
            prodScreen,
            prodBackCam,
            prodFrontCam,
            prodImg,
            prodDesc,
            prodType
        );
        console.log(product);

        arrproduct.push(product);
        getEle("btnReset").click();
        getEle("btnCloseModal").click();
        getListProduct();

}

function deleteProduct(prodName) {
    if (confirm("Are you sure you want to delete this product?")) {
        arrproduct.splice(prodName, 1);
        getListProduct();
    }
}
var form = document.getElementsByTagName("form")[0];
function getProduct(id) {
    // alert(id)
    for (let i = 0; i < arrproduct.length; i++) {
        let p = arrproduct[i];
       if (p.id == id) {

           getEle("btnAddProd").click();
           let form = document.getElementsByTagName("form")[0];
           form.querySelector("#productId").value = p.id ;
           form.querySelector("#prodPrice").value = p.price;
           form.querySelector("#prodScreen").value = p.screen;
           form.querySelector("#prodBackCam").value = p.backCamera;
           form.querySelector("#prodFrontCam").value = p.frontCamera;
           form.querySelector("#prodDesc").value = p.desc;
           form.querySelector("#prodType").value = p.type;
           getEle("btnAdd").style.display = "none";
           getEle("btnUpdate").style.display = "block";
       }
    }

}

function updateProduct() {

    let prodId = form.querySelector("#productId").value;
    let prodName = form.querySelector("#prodName").value;
    let prodPrice = form.querySelector("#prodPrice").value;
    let prodScreen = form.querySelector("#prodScreen").value;
    let prodBackCam = form.querySelector("#prodBackCam").value;
    let prodFrontCam = form.querySelector("#prodFrontCam").value;
    let prodImg = form.querySelector("#prodImg").value;
    let prodDesc = form.querySelector("#prodDesc").value;
    let prodType = form.querySelector("#prodType").value;

    for (let i = 0; i < arrproduct.length; i++) {

        if (prodId == arrproduct[i].id){
            arrproduct[i].name = prodName ;
            arrproduct[i].price = prodPrice;
            arrproduct[i].screen = prodScreen;
            arrproduct[i].backCamera = prodBackCam;
            arrproduct[i].frontCamera = prodFrontCam;
            arrproduct[i].img = prodImg;
            arrproduct[i].desc = prodDesc;
            arrproduct[i].type = prodType;
            getEle("btnCloseModal").click();
            getListProduct();

        }
    }
}

