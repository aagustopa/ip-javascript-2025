import MenuContent from "./MenuContent";

const Menu = () => {
    return (
        <>
            <nav className="flex items-center justify-center gap-4 bold">
                {/* <a href="./index.html">SOBRE MÍ</a>
                <a href="./curriculum.html">CURRÍCULUM</a>
                <a className="selected" href="#">PROYECTOS</a>
                <a href="./contacto.html">CONTACTO</a> */}
                <MenuContent children="SOBRE MI" href="./index.html"/>
                <MenuContent children="CURRICULUM" href="./curriculum.html"/>
                <MenuContent children="PROYECTOS" href="#"/>
                <MenuContent children="CONTACTO" href="./contacto.html"/>
                {/* componente por A href, con children texto y clase */}
            </nav>
        </>
    );
}
export default Menu;