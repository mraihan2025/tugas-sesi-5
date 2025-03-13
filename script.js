const products = [
    { id: 1, name: "Laptop", price: 27000000, category: "elektronik", description: "Laptop berkualitas tinggi", image: "images/laptop.jpg" },
    { id: 2, name: "Smartphone", price: 5000000, category: "elektronik", description: "Smartphone terbaru dengan fitur canggih", image: "images/smartphone.jpg" },
    { id: 3, name: "Sepatu Sneakers", price: 600000, category: "fashion", description: "Sneakers stylish dan nyaman", image: "images/sneakers.jpg" },
    { id: 4, name: "Kaos Polos", price: 100000, category: "fashion", description: "Kaos polos berbahan nyaman", image: "images/kaos.jpg" }
];
function displayProducts(filteredProducts) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Kosongkan daftar sebelum menampilkan produk baru

    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        // Buat elemen gambar
        const img = document.createElement("img");
        img.src = product.image; // Set sumber gambar
        img.alt = product.name; // Set teks alternatif

        // Buat elemen nama produk
        const title = document.createElement("h3");
        title.textContent = product.name;

        // Buat elemen deskripsi
        const desc = document.createElement("p");
        desc.textContent = product.description;

        // Buat elemen harga
        const price = document.createElement("p");
        price.innerHTML = `<strong>Rp ${product.price.toLocaleString("id-ID")}</strong>`;

        // Tambahkan elemen ke dalam div produk
        productDiv.appendChild(img);
        productDiv.appendChild(title);
        productDiv.appendChild(desc);
        productDiv.appendChild(price);

        // Tambahkan div produk ke daftar produk
        productList.appendChild(productDiv);
    });
}
function filterProducts() {
    const filterValue = document.getElementById("filter").value;
    if (filterValue === "all") {
        displayProducts(products);
    } else {
        const filtered = products.filter(product => product.category === filterValue);
        displayProducts(filtered);
    }
}
window.onload = () => displayProducts(products);
