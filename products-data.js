document.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search);

    const product = params.get("product");


    const products = {

        "Smart Mobile Phone": {
            type: "Smartphone",
            name: "Smart Mobile Phone",
            image: "images/mobile1.jpg",
            price: "₹19,999",
            description:
                "Powerful performance with a modern design and advanced features.",
            features: [
                "Modern and stylish design",
                "Powerful performance",
                "Advanced smart features",
                "Reliable Android experience"
            ]
        },


        "Premium Smartphone": {
            type: "Smartphone",
            name: "Premium Smartphone",
            image: "images/mobile2.jpg",
            price: "₹24,999",
            description:
                "Powerful performance with a modern design and advanced features.",
            features: [
                "Premium modern design",
                "5G connectivity",
                "Powerful performance",
                "Advanced smartphone features"
            ]
        },


        "5G Smart Phone": {
            type: "Smartphone",
            name: "5G Smart Phone",
            image: "images/mobile3.jpg",
            price: "₹29,999",
            description:
                "High-performance 5G smartphone for smooth everyday usage.",
            features: [
                "5G connectivity",
                "High performance",
                "Modern display",
                "Long-lasting battery"
            ]
        },


        "Pro Smartphone": {
            type: "Smartphone",
            name: "Pro Smartphone",
            image: "images/mobile4.jpg",
            price: "₹34,999",
            description:
                "Premium Android mobile with powerful performance and stylish design.",
            features: [
                "Premium Android experience",
                "Powerful processor",
                "Stylish design",
                "Advanced camera features"
            ]
        },


        "Smart LED Television": {
            type: "Television",
            name: "Smart LED Television",
            image: "images/tv1.jpg",
            price: "₹32,999",
            description:
                "Enjoy stunning picture quality with smart features and modern entertainment.",
            features: [
                "43 Inch display",
                "Smart TV features",
                "High quality picture",
                "Modern entertainment"
            ]
        },


        "Smart LED TV": {
            type: "Television",
            name: "Smart LED TV",
            image: "images/tv1.jpg",
            price: "₹32,999",
            description:
                "43 Inch smart TV with excellent picture quality and smart entertainment features.",
            features: [
                "43 Inch display",
                "Smart TV features",
                "Excellent picture quality",
                "Modern entertainment"
            ]
        },


        "4K Ultra HD TV": {
            type: "Television",
            name: "4K Ultra HD TV",
            image: "images/tv2.jpg",
            price: "₹49,999",
            description:
                "55 Inch 4K television with sharp picture quality and vibrant colours.",
            features: [
                "55 Inch 4K display",
                "Ultra HD picture",
                "Vibrant colours",
                "Smart entertainment"
            ]
        },


        "Android Smart TV": {
            type: "Television",
            name: "Android Smart TV",
            image: "images/tv3.jpg",
            price: "₹42,999",
            description:
                "50 Inch smart television with Android features and modern entertainment.",
            features: [
                "50 Inch display",
                "Android TV",
                "Smart applications",
                "High quality picture"
            ]
        },


        "Premium Smart TV": {
            type: "Television",
            name: "Premium Smart TV",
            image: "images/tv4.jpg",
            price: "₹69,999",
            description:
                "65 Inch premium smart television for an immersive home entertainment experience.",
            features: [
                "65 Inch premium display",
                "Smart TV features",
                "Immersive entertainment",
                "Premium picture quality"
            ]
        },


        "Double Door Refrigerator": {
            type: "Refrigerator",
            name: "Double Door Refrigerator",
            image: "images/fridge1.jpg",
            price: "₹38,999",
            description:
                "Energy efficient refrigerator with spacious storage and modern cooling technology.",
            features: [
                "Double door design",
                "Energy efficient",
                "Spacious storage",
                "Modern cooling technology"
            ]
        },


        "Single Door Refrigerator": {
            type: "Refrigerator",
            name: "Single Door Refrigerator",
            image: "images/fridge2.jpg",
            price: "₹18,999",
            description:
                "Compact and efficient refrigerator suitable for everyday home use.",
            features: [
                "Single door design",
                "Compact size",
                "Energy efficient",
                "Reliable cooling"
            ]
        },


        "Frost Free Refrigerator": {
            type: "Refrigerator",
            name: "Frost Free Refrigerator",
            image: "images/fridge3.jpg",
            price: "₹34,999",
            description:
                "Family-size refrigerator with reliable cooling and spacious storage.",
            features: [
                "Frost free technology",
                "Family size storage",
                "Reliable cooling",
                "Energy efficient"
            ]
        },


        "Premium Refrigerator": {
            type: "Refrigerator",
            name: "Premium Refrigerator",
            image: "images/fridge4.jpg",
            price: "₹45,999",
            description:
                "Large capacity premium refrigerator with advanced cooling technology.",
            features: [
                "Large capacity",
                "Premium design",
                "Advanced cooling",
                "Energy efficient"
            ]
        },


        "Fully Automatic Washing Machine": {
            type: "Washing Machine",
            name: "Fully Automatic Washing Machine",
            image: "images/washing1.jpg",
            price: "₹24,999",
            description:
                "Powerful cleaning performance with convenient washing programs.",
            features: [
                "7 Kg capacity",
                "Fully automatic",
                "Multiple wash programs",
                "Powerful cleaning"
            ]
        },


        "Fully Automatic Washer": {
            type: "Washing Machine",
            name: "Fully Automatic Washer",
            image: "images/washing1.jpg",
            price: "₹24,999",
            description:
                "7 Kg washing machine with powerful cleaning performance.",
            features: [
                "7 Kg capacity",
                "Fully automatic",
                "Powerful cleaning",
                "Easy operation"
            ]
        },


        "Front Load Washing Machine": {
            type: "Washing Machine",
            name: "Front Load Washing Machine",
            image: "images/washing2.jpg",
            price: "₹31,999",
            description:
                "8 Kg front-load machine with advanced washing programs.",
            features: [
                "8 Kg capacity",
                "Front load design",
                "Advanced wash programs",
                "Efficient performance"
            ]
        },


        "Top Load Washing Machine": {
            type: "Washing Machine",
            name: "Top Load Washing Machine",
            image: "images/washing3.jpg",
            price: "₹22,999",
            description:
                "7.5 Kg top-load washing machine for convenient everyday washing.",
            features: [
                "7.5 Kg capacity",
                "Top load design",
                "Easy operation",
                "Powerful washing"
            ]
        },


        "Advanced Washing Machine": {
            type: "Washing Machine",
            name: "Advanced Washing Machine",
            image: "images/washing4.jpg",
            price: "₹27,999",
            description:
                "Modern washing technology with convenient features and performance.",
            features: [
                "Modern technology",
                "Multiple wash programs",
                "Efficient cleaning",
                "Easy operation"
            ]
        },


        "Split Air Conditioner": {
            type: "Air Conditioner",
            name: "Split Air Conditioner",
            image: "images/ac1.jpg",
            price: "₹36,999",
            description:
                "1.5 Ton inverter AC with powerful and energy-efficient cooling.",
            features: [
                "1.5 Ton capacity",
                "Inverter technology",
                "Energy efficient",
                "Powerful cooling"
            ]
        },


        "Inverter Split AC": {
            type: "Air Conditioner",
            name: "Inverter Split AC",
            image: "images/ac2.jpg",
            price: "₹39,999",
            description:
                "Energy-saving split AC designed for comfortable cooling.",
            features: [
                "Inverter technology",
                "Energy saving",
                "Fast cooling",
                "Modern design"
            ]
        },


        "Smart Inverter AC": {
            type: "Air Conditioner",
            name: "Smart Inverter AC",
            image: "images/ac3.jpg",
            price: "₹44,999",
            description:
                "Wi-Fi enabled smart AC with efficient cooling performance.",
            features: [
                "Wi-Fi enabled",
                "Smart controls",
                "Inverter technology",
                "Efficient cooling"
            ]
        },


        "Premium Split AC": {
            type: "Air Conditioner",
            name: "Premium Split AC",
            image: "images/ac4.jpg",
            price: "₹47,999",
            description:
                "Powerful cooling with modern energy-efficient technology.",
            features: [
                "Powerful cooling",
                "Energy efficient",
                "Premium design",
                "Modern technology"
            ]
        },


        "Mixer Grinder": {
            type: "Kitchen Appliance",
            name: "Mixer Grinder",
            image: "images/kitchen1.jpg",
            price: "₹4,999",
            description:
                "Powerful kitchen appliance designed for convenient cooking.",
            features: [
                "Powerful motor",
                "Multiple speed settings",
                "Easy operation",
                "Durable design"
            ]
        },


        "Microwave Oven": {
            type: "Kitchen Appliance",
            name: "Microwave Oven",
            image: "images/kitchen2.jpg",
            price: "₹12,999",
            description:
                "Modern microwave oven for quick and convenient cooking.",
            features: [
                "Fast cooking",
                "Modern design",
                "Easy controls",
                "Multiple cooking modes"
            ]
        },


        "Electric Kettle": {
            type: "Kitchen Appliance",
            name: "Electric Kettle",
            image: "images/kitchen3.jpg",
            price: "₹1,999",
            description:
                "Fast-heating kettle designed for everyday convenience.",
            features: [
                "Fast heating",
                "Easy operation",
                "Compact design",
                "Automatic shut-off"
            ]
        },


        "Air Fryer": {
            type: "Kitchen Appliance",
            name: "Air Fryer",
            image: "images/kitchen4.jpg",
            price: "₹7,999",
            description:
                "Modern kitchen appliance for convenient and efficient cooking.",
            features: [
                "Healthy cooking",
                "Fast heating",
                "Easy controls",
                "Modern design"
            ]
        }

    };


    const selectedProduct =
        products[product];


    if (!selectedProduct) {

        return;

    }


    document.getElementById("productType").textContent =
        selectedProduct.type;


    document.getElementById("productName").textContent =
        selectedProduct.name;


    document.getElementById("productImage").src =
        selectedProduct.image;


    document.getElementById("productImage").alt =
        selectedProduct.name;


    document.getElementById("productPrice").textContent =
        selectedProduct.price;


    document.getElementById("productDescription").textContent =
        selectedProduct.description;


    const featureList =
        document.getElementById("productFeatures");


    featureList.innerHTML = "";


    selectedProduct.features.forEach(function (feature) {

        const li = document.createElement("li");

        li.textContent = feature;

        featureList.appendChild(li);

    });

});