import { ProductList } from "../../components/productos/ProductList.js";

export default function CategoryPage({ params }) {
    const { category } = params;
    console.log(category);

    return (
        <main className="container m-auto">
            <h1 className="text-4xl text-blue-600 text-center my-10">
                Productos - {category}
            </h1>
            <ProductList categoria={category} />
        </main>
    )
}