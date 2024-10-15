import './css/Header.css';

import { iPageData, menuItemType } from '../reducer/PageModel';


export const Header: React.FC<{ data: iPageData}> = ({ data }) => {
    
    return (
        <header id="home" >
            <div className='menu-container'>
                <input type='checkbox' className='navtoggle' id='togglecheck-header'></input>
                <nav>
                    <ul>
                        {
                            data.menu.menuItems.map((i:menuItemType) => (
                                <li key={i.position}> <a href={`${i.url}`}>{i.text}</a></li>
                            ))
                        }
                    </ul>

                </nav>
                <label htmlFor='togglecheck-header' className='navtoggle-label'>
                    <span></span>
                </label>
                <a
                    className="mil-button mil-border mil-light"
                    href={data.menu.ctaActionButton.actionUrl}
                    style={{ marginRight: "1rem", marginTop: "1rem", maxWidth:"300px", padding: "0.4rem",textWrap:"wrap" }}
                  >
                    <span >{data.menu.ctaActionButton.label}</span>
                  </a>

                 <p><img src={`${data.metaData.logoUrl}`}></img></p> 
            </div>
        </header>
    );
}