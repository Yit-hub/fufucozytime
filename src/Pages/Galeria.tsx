import Gallery from '../components/Gallery'


export const Galeria = () => {

    const images = [
        { src: "", alt: "Matcha Latte" },
        { src: "", alt: "Zona chill con plantas" },
        { src: "", alt: "Tarta de fresas 2025" },
        { src: "", alt: "Postres blancos con mango" },
    ];


    return (
        <main className="bg-white min-h-screen">
            <h1 className="text-4xl font-bold text-center my-8">Nuestra Galería</h1>
            <Gallery images={images} />
        </main>
    )
}