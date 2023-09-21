import "./Navigation.css"

function Navigation(){
    return(
        <header className="header">
            <nav className="navigation">
                <ul className="navigation-list">
                    <li className="navigation-item"><a id="employeesList" href="/">Список сотрудников</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;