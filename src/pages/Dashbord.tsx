import React, { useCallback, useEffect, useState } from 'react';
import { Card, Row, Col, Space, Button, Modal, Form, Input, Layout } from 'antd';
import ReactECharts from 'echarts-for-react';

const Dashboard: React.FC = () => {
  
  const lineChartOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  };

  const barChartOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
      },
    ],
  };

  const pieChartOption = {
    series: [
      {
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  const donutChartOption = {
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'], // Inner and outer radius to create the donut shape
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
      },
    ],
  };

  

  return (
    <Layout>
      <Space style={{ background: '#fff', padding: '0 10px 10px' }}>
        <h2>Dashboard</h2>
      </Space>
      <Row gutter={[16, 16]}>
        <Col
          xs={24}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className="scale-animation"
        >
          <Card title="Users" bordered={false} className="card-border">
            <ReactECharts option={lineChartOption} className="width-set" />
          </Card>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className="scale-animation "
        >
          <Card title="Entity" bordered={false} className="card-border">
            <ReactECharts option={barChartOption} className="width-set" />
          </Card>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className="scale-animation"
        >
          <Card title="Entity Usage" bordered={false} className="card-border">
            <ReactECharts option={pieChartOption} className="width-set" />
          </Card>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className="scale-animation"
        >
          <Card
            title="Traffic Sources"
            bordered={false}
            className="card-border"
          >
            <ReactECharts option={donutChartOption} className="width-set" />
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default Dashboard;
