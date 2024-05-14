"use client";

import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd";
import { useGetIdentity } from "@refinedev/core";
import {
  Avatar,
  Layout as AntdLayout,
  Space,
  Switch,
  theme,
  Typography,
} from "antd";
import React, { useContext } from "react";
import { ColorModeContext } from "@contexts/color-mode";

const { Text } = Typography;
const { useToken } = theme;

interface IUser {
  id: number;
  name: string;
  avatar: string;
}

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({
  sticky,
}) => {
  const { token } = useToken();
  const { data: user } = useGetIdentity<IUser>();
  const { mode, setMode } = useContext(ColorModeContext);

  const headerStyles: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0px 24px",
    height: "64px",
  };

  if (sticky) {
    headerStyles.position = "sticky";
    headerStyles.top = 0;
    headerStyles.zIndex = 1;
  }

  return (
    <AntdLayout.Header style={headerStyles}>
      <Space>
        <Switch
          checkedChildren="🌛"
          defaultChecked={mode === "dark"}
          onChange={() => { setMode(mode === "light" ? "dark" : "light"); }}
          unCheckedChildren="🔆"
        />
        {(user?.name || user?.avatar) ? <Space size="middle" style={{ marginLeft: "8px" }}>
            {user.name ? <Text strong>{user.name}</Text> : null}
            {user.avatar ? <Avatar alt={user.name} src={user.avatar} /> : null}
          </Space> : null}
      </Space>
    </AntdLayout.Header>
  );
};
