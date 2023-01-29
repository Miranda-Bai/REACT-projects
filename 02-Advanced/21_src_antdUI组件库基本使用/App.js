import React, { Component } from "react";
import { Button, Space } from "antd";
import { TwitterOutlined } from "@ant-design/icons";

export default class App extends Component {
  render() {
    return (
      <div>
        <Space>
          App...<button>click</button>
          <Button type="primary">Primary Button</Button>
          <Button>Button</Button>
          <TwitterOutlined />
        </Space>
      </div>
    );
  }
}
