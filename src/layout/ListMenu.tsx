import { Menu, Tooltip } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
const { SubMenu } = Menu;

const ListMenu = () => {
  const { globalState, setState }: any = useAppContext();
  const location = useLocation();

  const menu = (renderList: any) => {
    const renderMenu = renderList.map((val: any, key: number) => {
      let childMenu;
      if (val?.childs?.length > 0) {
        childMenu = (
          <SubMenu
            key={val.title + key}
            icon={val.icon ? <val.icon /> : null}
            title={val.title}
          >
            {menu(val.childs)}
          </SubMenu>
        );
      } else {
        childMenu = (
          <Menu.Item key={val.path} icon={val.icon ? <val.icon /> : null}>
            <Tooltip
              placement="topLeft"
              title={val.title}
              mouseEnterDelay={0.5}
            >
              {val.path ? <Link to={val.path}>{val.title}</Link> : val.title}
            </Tooltip>
          </Menu.Item>
        );
      }
      return childMenu;
    });
    return <React.Fragment>{renderMenu}</React.Fragment>;
  };

  const onOpenChange = (keys: any) => {
    setState({ activeMenu: keys });
  };

  return (
    <Menu
      mode="inline"
      selectedKeys={[location.pathname]}
      className="menu"
      openKeys={globalState?.activeMenu ?? []}
      onOpenChange={onOpenChange}
    >
      {globalState?.listOfAllowedMenu && menu(globalState?.listOfAllowedMenu)}
    </Menu>
  );
};

export default ListMenu;
