async function loadHomeProducts() {

    const { data, error } = await supabaseClient
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
    console.error("Supabase Error:", error);
    alert(error.message);
    return;
}

    const newProducts = document.getElementById("new-products");
    const bestProducts = document.getElementById("best-products");

    if (!newProducts || !bestProducts) return;

    newProducts.innerHTML = "";
    bestProducts.innerHTML = "";

    data.slice(0, 3).forEach(product => {

        const card = `
        <div class="card">
            <img src="${product.image_url}" alt="${product.name}">
            <div class="card-content">
                <h3>${product.name}</h3>
                <p class="price">
                    Rp${Number(product.price).toLocaleString("id-ID")}
                </p>
                <a href="product.html?id=${product.id}" class="btn">
                    Lihat Produk
                </a>
            </div>
        </div>
        `;

        newProducts.innerHTML += card;
        bestProducts.innerHTML += card;

    });

}

loadHomeProducts();
