import React, { useEffect, useState } from "react";
import { Button, Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { useNavigate, Outlet } from "react-router-dom";

const { Sider, Content } = Layout;

interface MenuItem {
  key: string;
  icon?: React.ReactNode;
  label: string;
  children?: MenuItem[];
}

const items: MenuItem[] = [
  {
    key: "/dashboard",
    icon: <PieChartOutlined />,
    label: "Dashboard",
  },
  {
    key: "/option2",
    icon: <DesktopOutlined />,
    label: "Option 2",
  },
  {
    key: "/option3",
    icon: <ContainerOutlined />,
    label: "Option 3",
  },
  {
    key: "sub1",
    label: "Navigation One",
    icon: <MailOutlined />,
    children: [
      {
        key: "/option5",
        label: "Option 5",
      },
      {
        key: "/option6",
        label: "Option 6",
      },
      {
        key: "/option7",
        label: "Option 7",
      },
      {
        key: "/option8",
        label: "Option 8",
      },
    ],
  },
  {
    key: "sub2",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "/option9",
        label: "Option 9",
      },
      {
        key: "/option10",
        label: "Option 10",
      },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          {
            key: "/option11",
            label: "Option 11",
          },
          {
            key: "/option12",
            label: "Option 12",
          },
        ],
      },
    ],
  },
];


const App: React.FC = () => {
  useEffect(() => {
    console.log("items");
  }, []);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = (e: { key: string }) => {
    navigate(e.key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={256} collapsed={collapsed} theme="dark">
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "16px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          onClick={handleMenuClick}
          items={items}
        />
      </Sider>
      <Layout>
        <Content style={{ padding: "24px" }}>
          <Outlet /> 
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
