"use client";

import {
  CATEGORIES_SELECT_QUERY,
  POST_CREATE_MUTATION,
} from "@queries/blog-posts";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export default function BlogPostCreate() {
  const { formProps, saveButtonProps } = useForm({
    meta: {
      gqlMutation: POST_CREATE_MUTATION,
    },
  });

  const { selectProps: categorySelectProps } = useSelect({
    resource: "categories",
    meta: {
      gqlQuery: CATEGORIES_SELECT_QUERY,
    },
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Title"}
          name={["title"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Content"}
          name="content"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item
          label={"Category"}
          name={"categoryId"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
        </Form.Item>
        <Form.Item
          label={"Status"}
          name={["status"]}
          initialValue={"DRAFT"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            defaultValue={"DRAFT"}
            options={[
              { value: "DRAFT", label: "Draft" },
              { value: "PUBLISHED", label: "Published" },
              { value: "REJECTED", label: "Rejected" },
            ]}
            style={{ width: 120 }}
          />
        </Form.Item>
      </Form>
    </Create>
  );
}
