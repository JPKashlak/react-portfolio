import React from 'react';

function Nav() {
    return(
        <section>
            <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">About me</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                </ul>
            </nav>
        </section>
    )
}

export default Nav;