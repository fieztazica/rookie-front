"use client";

import { useLogin } from "@refinedev/core";
import { ThemedTitleV2 } from "@refinedev/antd";
import { Button, Layout, Space, Typography } from "antd";
import { AppIcon } from "@components/app-icon";

export default function Login() {
  const { mutate: login } = useLogin();

  return (
    <Layout
      style={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Space align="center" direction="vertical">
        <ThemedTitleV2
          collapsed={false}
          icon={<AppIcon />}
          text="Refine Project"
          wrapperStyles={{
            fontSize: "22px",
            marginBottom: "36px",
          }}
        />
        <Button
          onClick={() => { login({}); }}
          size="middle"
          style={{ width: "240px", marginBottom: "32px" }}
          type="primary"
        >
          Sign in
        </Button>
        <Typography.Text type="secondary">
          Powered by
          <img
            alt="Auth0"
            src="https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fauth0-2.svg"
            style={{ padding: "0 5px" }}
          />
          Auth0
        </Typography.Text>
      </Space>
    </Layout>
  );
}
