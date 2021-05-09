import React from 'react';

function tabSelected(name) {
    console.log(`${name} clicked`)

  }

function Nav() {
    
    const tabs = [
        {
            name: "ABOUT",
            description: "Info about the developer."
        },
        {
            name: "CONTACT",
            description: "How to reach the developer."
        },
        {
            name: "PORTFOLIO",
            description: "A sample of the developer's work."
        },
        {
            name: "RESUME",
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
                        <span onClick={() => tabSelected(tab.name)}>
                            {tab.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  );
}

export default Nav;