import React from 'react';

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
            name: "contact",
            description: "How to reach the developer."
        },
        {
            name: "portfolio",
            description: "A sample of the developer's work."
        },
        {
            name: "resume",
            description: "A downloadable resume."
        }
    ]
  return (
    <header>
        <nav>
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
    </header>
  );
}

export default Nav;