import product from '../../public/image/image.png'
interface Product {
    id: number;
    img: string;
    title: string;
    price: number;
    discount: number;
}

export const productData: Product[] = [
    {
        id: 1,
        img: product.src,
        title: "Qo'y bo'yni",
        price: 8.800,
        discount: 20,
    },
    {
        id: 2,
        img: product.src,
        title: "Qo'y bo'yni",
        price: 8.800,
        discount: 20,
    },
    {
        id: 3,
        img: product.src,
        title: "Qo'y bo'yni",
        price: 8.800,
        discount: 20,
    },
    {
        id: 4,
        img: product.src,
        title: "Qo'y bo'yni",
        price: 8.800,
        discount: 20,
    },
]