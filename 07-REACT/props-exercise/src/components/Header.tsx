import Menu from './Menu';

const Header = () => {
    return (
        <>
            <header className="flex items-center justify-between p-30px border">
                <div className="flex items-center justify-between gap-1.2">
                    <div className="blue-box"></div>
                    <span className="text-[30px]">
                        Alejandro Agustopa
                    </span>
                    <span className="work">
                        / Developer Web
                    </span>
                </div>

                <Menu />
                
            </header>
        </>
    );
}

export default Header;