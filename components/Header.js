import React from 'react';
import { Menu } from 'semantic-ui-react'; //https://react.semantic-ui.com/collections/menu/#content-menus
import { Link } from '../routes';


export default () => {
    return( // man benutzt {{}} erste {} sagt jetzt kommt javascript und zweites {} ist das Objekt
      
        <Menu style={{marginTop: '20px' }}>
            <Link route='/'>
                <a className="item">Example Project</a>
            </Link>
            <Menu.Menu position="right">
                <Link route='/'>
                    <a className="item">Project</a>
                </Link>
                <Link route='/campaigns/new'>
                    <a className="item">+</a>
                </Link>
            </Menu.Menu>
            
        </Menu>
    );
};

/* Rausgenommen da es mit dem modul von objekt link nicht funktioniert
<Menu.Item>
CrowdCoin
</Menu.Item>

                <Menu.Item>
                    Campaigns
                </Menu.Item>

                <Menu.Item>
                    +
                </Menu.Item>
*/