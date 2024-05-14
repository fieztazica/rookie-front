"use client";

import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import type { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";
import { CATEGORIES_LIST_QUERY } from "@queries/categories";

export default function CategoryList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: {
      gqlQuery: CATEGORIES_LIST_QUERY,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="title" title="title" />
        <Table.Column
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText recordItemId={record.id} size="small" />
              <ShowButton hideText recordItemId={record.id} size="small" />
              <DeleteButton hideText recordItemId={record.id} size="small" />
            </Space>
          )}
          title="Actions"
        />
      </Table>
    </List>
  );
}
