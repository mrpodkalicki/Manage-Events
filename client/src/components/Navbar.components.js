import React from 'react';
import { Menu } from 'antd';
import { UnorderedListOutlined  } from '@ant-design/icons';
import 'antd/dist/antd.css';
const { SubMenu } = Menu;




function handleClick(e) {
    console.log('click', e);
}

const Navbar = () => {
    return (
        <div>
            <Menu
                onClick={handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub0']}
                mode="vertical"
            >
            <SubMenu
                key="sub1"
                title={
                    <span>
                       <UnorderedListOutlined />
                            <span>Menu</span>
                    </span>
                        }
                >
                    <Menu.ItemGroup key="g1" title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="Item 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>

            </Menu>
        </div>
    );
};

export default  Navbar;