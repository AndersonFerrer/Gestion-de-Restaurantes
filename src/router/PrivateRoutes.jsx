import { useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Outlet, Navigate, NavLink, useLocation } from "react-router-dom";
import { Layout, Button, Menu } from "antd";
import {
  AnalyticsUpIcon,
  DishIcon,
  NoteCheckIcon,
  NoteEditIcon,
  PaysIcon,
  TableRoundIcon,
} from "../assets/SideIcons";
import { useToken } from "../store/store";

const { Header, Sider, Content } = Layout;

const PrivateRoutes = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token } = useToken();
  const location = useLocation();

  const sideBarInfo = [
    {
      key: "/menu",
      icon: (
        <DishIcon
          className={
            collapsed
              ? "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px]"
              : ""
          }
        />
      ),
      text: "Menú",
      to: "/menu",
    },
    {
      key: "/mesas",
      icon: (
        <TableRoundIcon
          className={
            collapsed
              ? "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px]"
              : ""
          }
        />
      ),
      text: "Mesas",
      to: "/mesas",
    },
    {
      key: "/pedidos",
      icon: (
        <NoteCheckIcon
          className={
            collapsed
              ? "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px]"
              : ""
          }
        />
      ),
      text: "Pedidos",
      to: "/pedidos",
    },
    {
      key: "/pagos",
      icon: (
        <PaysIcon
          className={
            collapsed
              ? "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px]"
              : ""
          }
        />
      ),
      text: "Pagos",
      to: "/pagos",
    },
    {
      key: "/informes",
      icon: (
        <AnalyticsUpIcon
          className={
            collapsed
              ? "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px]"
              : ""
          }
        />
      ),
      text: "Analiticas",
      to: "/informes",
    },
  ];

  if (!token) return <Navigate to="/login" />;

  return (
    <Layout className="h-screen">
      <Sider
        trigger={null}
        collapsed={collapsed}
        collapsible
        width={300}
        style={{
          background: "white",
        }}
        className="p-4 shadow-2xl shadow-black/25 site-layout-background"
      >
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          style={{ height: "100%", borderInlineEnd: "none" }}
          className="text-lg"
        >
          {sideBarInfo.map((item) => (
            <Menu.Item
              style={{ marginBottom: "16px" }}
              key={item.key}
              icon={item.icon}
            >
              <NavLink to={item.to}>{item.text}</NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header className="flex items-center justify-start gap-4 p-0 mx-8 bg-gray-100">
          <Button
            type="text"
            icon={collapsed ? <MenuOutlined /> : <CloseOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 45,
              height: 45,
              background: "white",
              borderRadius: "12px",
            }}
          />
          <h1 className="text-2xl font-semibold capitalize">
            {location.pathname.split("/")[1]}
          </h1>
        </Header>
        <Content
          style={{
            minHeight: 280,
          }}
          className="mx-8 my-2 bg-gray-100 border-2 border-black"
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default PrivateRoutes;
