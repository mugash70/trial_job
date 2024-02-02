import React from 'react';
import { Card, Typography, Row, Col } from 'antd';
import { BarChartOutlined, LineChartOutlined, CodeOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const ProcessCard = ({ icon, title, description }) => (
    <Card style={{ borderRadius: '100%', padding: '25px', width: '200px', height: '200px' }}>
    {icon}
    <Paragraph>{title}</Paragraph>
  </Card>
);

export const ProcessWay = () => {
  const dataAnalysisSteps = [
    {
      icon: <BarChartOutlined style={{ fontSize: '24px', color: 'blue' }} />,
      title: 'Data   Collection',
      description: 'Gather relevant data from various sources for analysis.',
    },
    {
      icon: <LineChartOutlined style={{ fontSize: '24px', color: 'green' }} />,
      title: 'Data Preprocessing',
      description: 'Clean and transform the data to prepare it for analysis and modeling.',
    },
    {
      icon: <CodeOutlined style={{ fontSize: '24px', color: 'purple' }} />,
      title: 'Model Development',
      description: 'Build machine learning or statistical models based on the processed data.',
    },
    {
        icon: <CodeOutlined style={{ fontSize: '24px', color: 'purple' }} />,
        title: 'Model Development',
        description: 'Build machine learning or statistical models based on the processed data.',
      },
      {
        icon: <CodeOutlined style={{ fontSize: '24px', color: 'purple' }} />,
        title: 'Model Development',
        description: 'Build machine learning or statistical models based on the processed data.',
      },
      {
        icon: <CodeOutlined style={{ fontSize: '24px', color: 'purple' }} />,
        title: 'Model Development',
        description: 'Build machine learning or statistical models based on the processed data.',
      },
  ];
  const ConnectingLine = ({ start, end }) => (
    <svg className="line-container">
      <line className="connecting-line" x1={start.x} y1={start.y} x2={end.x} y2={end.y} />
    </svg>
  );
  
  const connectingLines = [
    { start: { x: 150, y: 75 }, end: { x: 300, y: 75 } },
    { start: { x: 450, y: 75 }, end: { x: 600, y: 75 } },
  ];
  return (
    <div className="process-container">
      <Title level={2}>Data Analysis and Model Development Process</Title>
      <Row gutter={[16, 16]}>
        {dataAnalysisSteps.map((step, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <ProcessCard {...step} />
          </Col>
        ))}
      </Row>
      {connectingLines.map((line, index) => (
        <ConnectingLine key={index} {...line} />
      ))}
    </div>
  );
};

export default ProcessWay;




