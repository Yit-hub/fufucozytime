import Gallery from '../components/Gallery'


export const Galeria = () => {

    const images = [
        { src: "../src/assets/Galeria/tarta1.jpg", alt: "Tarta1" },
        { src: "../src/assets/Galeria/boda1.jpg", alt: "foto boda 1" },
        { src: "../src/assets/Galeria/boda2.jpg", alt: "foto boda 2" },
        { src: "../src/assets/Galeria/boda3.jpg", alt: "foto boda 3" },
        { src: "../src/assets/Galeria/local2.jpg", alt: "Local2" },
        { src: "../src/assets/Galeria/milktea.jpg", alt: "MilkTea" },
        { src: "../src/assets/Galeria/productos1.jpg", alt: "Productos1" },
        { src: "../src/assets/Galeria/local1.jpg", alt: "Local1" },
        { src: "../src/assets/Galeria/tarta3.jpg", alt: "Tarta3" },
        { src: "../src/assets/Galeria/local.jpg", alt: "Local" },
        { src: "../src/assets/Galeria/tarta2.jpg", alt: "Tarta2" },
        { src: "../src/assets/Galeria/local3.jpg", alt: "Local3" },
    ];


    return (
        <main className="bg-white min-h-screen">
            <h1 className="text-4xl font-bold text-center my-8">Nuestra Galería</h1>
            <Gallery images={images} />
        </main>
    )
}