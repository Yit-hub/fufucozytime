import Contact from '../components/Contact'
import Button from '../components/Button'

export const Contacto = () => {
    return (
        <>
            <Contact />
            <Button text="Haz un encargo" to="/encargos" />
            <br />
        </>
    )
}