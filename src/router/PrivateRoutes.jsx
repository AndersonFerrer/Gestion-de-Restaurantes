import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Outlet, Navigate, NavLink } from "react-router-dom";
import { Layout, Button, theme, Menu } from "antd";
import {
  AnalyticsUpIcon,
  DishIcon,
  NoteCheckIcon,
  NoteEditIcon,
  PaysIcon,
  TableRoundIcon,
} from "../assets/SideIcons";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  DollarOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

import { useToken } from "../store/store";
const { Header, Sider, Content } = Layout;
const PrivateRoutes = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token } = useToken();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  if (!token) return <Navigate to="/login" />;

  return (
    <Layout className="h-screen">
      <Sider
        trigger={null}
        collapsed={collapsed}
        collapsible
        width={200}
        className="site-layout-background"
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ height: "100%" }}
        >
          <Menu.Item key="1" icon={<PlusOutlined />}>
            <NavLink to="/menu">Menú</NavLink>
          </Menu.Item>

          <Menu.Item key="2" icon={<PlusOutlined />}>
            <NavLink to="/mesas">Mesa</NavLink>
          </Menu.Item>

          <Menu.Item key="3" icon={<EyeOutlined />}>
            <NavLink to="/pedidos">Pedidos</NavLink>
          </Menu.Item>

          <Menu.Item key="4" icon={<DollarOutlined />}>
            <NavLink to="/pagos">Pagos</NavLink>
          </Menu.Item>

          <Menu.Item key="5" icon={<BarChartOutlined />}>
            <NavLink to="/informes">Analiticas</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "red",
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default PrivateRoutes;
