import React from "react";
import { Layout, Breadcrumb, Menu } from "antd";
import { EditOutlined, TeamOutlined, AccountBookOutlined, ReadOutlined, SelectOutlined } from "@ant-design/icons";
import "App.less";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const App = () => {
    
  const menu = (
    <Menu>
      <Menu.Item key="n">退出登录</Menu.Item>
    </Menu>
  );  
  
  return (
    <Layout>
      登录
    </Layout>
  );
};

export default App;
