"use client";

import { CATEGORY_CREATE_MUTATION } from "@queries/categories";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

export default function CategoryCreate() {
  const { formProps, saveButtonProps } = useForm({
    meta: {
      gqlMutation: CATEGORY_CREATE_MUTATION,
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
      </Form>
    </Create>
  );
}
