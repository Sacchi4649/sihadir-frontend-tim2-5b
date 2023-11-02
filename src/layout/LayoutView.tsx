import React, { useState } from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import ListMenu from "./ListMenu";
import AccountView from "./AccountView";
import { LayoutStyle } from "./_LayoutStyle";

const { Header, Sider, Content } = Layout;
const LayoutView = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout className={LayoutStyle}>
      <Sider
        trigger={null}
        onCollapse={toggle}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
      >
        <div className="sider-background logo">
          <img src="/logo.png" alt="logo" />
          
        </div>
        <ListMenu />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background sider-background header"
          style={{ padding: 0 }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
          <AccountView />
        </Header>
        <Content
          style={{
            padding: "1rem",
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutView;
