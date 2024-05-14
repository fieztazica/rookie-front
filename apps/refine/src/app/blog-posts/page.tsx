"use client";

import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import type { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";
import { POSTS_LIST_QUERY } from "@queries/blog-posts";

export default function BlogPostList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: {
      gqlQuery: POSTS_LIST_QUERY,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="title" title="Title" />
        <Table.Column
          dataIndex="content"
          render={(value: any) => {
            if (!value) return "-";
            return <MarkdownField value={`${value.slice(0, 80)  }...`} />;
          }}
          title="Content"
        />
        <Table.Column dataIndex={["category", "title"]} title="Category" />
        <Table.Column dataIndex="status" title="Status" />
        <Table.Column
          dataIndex={["createdAt"]}
          render={(value: any) => <DateField value={value} />}
          title="Created at"
        />
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
