import React from 'react';
import coverImage from '../../assets/images/cover.png';

function tabSelected(name) {
    console.log(`${name} clicked`)

  }

function Nav() {
    
    const tabs = [
        {
            name: "about",
            description: "Info about the developer."
        },
        {
            name: "portfolio",
            description: "A sample of the developer's work."
        },
        {
            name: "resume",
            description: "A downloadable resume."
        },
        {
            name: "contact",
            description: "How to reach the developer."
        }
    ]
  return (
    <section>
        <nav>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <ul id="nav-list" className="flex-row">
                {tabs.map((tab) => (
                    <li
                    className="mx-1"
                    key={tab.name}
                    >
                        <a href={"#" + tab.name}  onClick={() => tabSelected(tab.name)}>
                            {tab.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </section>
  );
}

export default Nav;