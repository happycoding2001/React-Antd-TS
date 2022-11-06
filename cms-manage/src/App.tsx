import React from "react";
import { Layout, Breadcrumb, Menu } from "antd";
import { EditOutlined, TeamOutlined, AccountBookOutlined, ReadOutlined, SelectOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import logo from "assets/images/logo.png";
import "App.less";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const App = () => {
  // const navigate = useNavigate();
    
  const menu = (
    <Menu>
      <Menu.Item key="n">退出登录</Menu.Item>
    </Menu>
  );  
  
  return (
    <>
      <h2>APP</h2>
      <Outlet />
    </>
    
    // <Layout>
    //   <Header className="header">
    //     {/* <img src={logo} alt="" className="logo" /> */}
    //     {/* <Dropdown overlay={menu} onVisibleChange={() => setVisible(!visible)} visible={visible}>
    //       <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
    //         <img className="avatar" src="http://codesohigh.com/images/logo.png" alt="" />
    //         <span>你单排吧</span>
    //         <CaretDownOutlined />
    //       </a>
    //     </Dropdown> */}
    //   </Header>
    //   <Layout>
    //     <Sider
    //       theme="dark"
    //       style={{
    //         overflow: "auto",
    //         height: "100vh",
    //         position: "fixed",
    //         left: 0,
    //       }}
    //     >
    //       <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
    //         <SubMenu key="sub1" icon={<TeamOutlined />} title="小编">
    //           <Menu.Item key="1" icon={<EditOutlined />}>
    //             文章编辑
    //           </Menu.Item>
    //           <Menu.Item key="2" icon={<ReadOutlined />}>
    //             查看文章列表
    //           </Menu.Item>
    //         </SubMenu>
    //         <SubMenu key="sub2" icon={<TeamOutlined />} title="管理员">
    //           <Menu.Item key="3" icon={<EditOutlined />}>
    //             文章编辑
    //           </Menu.Item>
    //           <Menu.Item key="4" icon={<ReadOutlined />}>
    //             查看文章列表
    //           </Menu.Item>
    //           <Menu.Item key="5" icon={<SelectOutlined />}>
    //             小编名单
    //           </Menu.Item>
    //         </SubMenu>
    //         <SubMenu key="sub3" icon={<AccountBookOutlined />} title="超级管理员">
    //           <Menu.Item key="6" icon={<EditOutlined />}>
    //             文章编辑
    //           </Menu.Item>
    //           <Menu.Item key="7" icon={<ReadOutlined />}>
    //             查看文章列表
    //           </Menu.Item>
    //           <Menu.Item key="8" icon={<SelectOutlined />}>
    //             小编名单
    //           </Menu.Item>
    //           <Menu.Item key="9" icon={<TeamOutlined />}>
    //             管理员名单
    //           </Menu.Item>
    //         </SubMenu>
    //       </Menu>
    //     </Sider>
    //     <Content className="content">
    //       <Breadcrumb style={{ margin: "16px 0" }}>
    //         <Breadcrumb.Item>首页</Breadcrumb.Item>
    //         <Breadcrumb.Item>文章编辑</Breadcrumb.Item>
    //       </Breadcrumb>
    //       <section className="content_main">
    //         {/* 在此处渲染页面内容 */}
            
    //        </section>
    //     </Content>
    //   </Layout>
      
    //   <Footer className="footer">Respect | Copyright © 2022 Author 你单排吧</Footer>
    // </Layout>
  );
};

export default App;
