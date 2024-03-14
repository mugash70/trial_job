import React, { useState, useEffect } from 'react';
import { List, Layout, Card, Carousel, Typography, Row, Col,Space } from 'antd';
import {SettingOutlined,TeamOutlined,FundProjectionScreenOutlined,CheckCircleOutlined, SmileOutlined, BarChartOutlined, RobotOutlined, CodeOutlined, QuestionOutlined,FundViewOutlined  } from '@ant-design/icons';

const { Content } = Layout;
const { Title } = Typography;

const cardStyle = {
    // width: '100%', // Adjust the width as needed
    // margin: '0 8px', // Add some margin between cards
    border: 'none', // Remove border from cards
    height:'26rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    // marginTop:'6rem'
  };
  

    export const Whatwedo = () => {
      const [hoveredIndex, setHoveredIndex] = useState(null);

      return (
        <>
        <Card
            bordered={true}
            // style={{
            // ...cardStyle,
            // }}
        >
            <Title level={4} style={{ alignItems: 'flex-start' }}>
                Despite being a start Up, Our company has achieved more in the data analytics, scaled up industries and increase their customer base.
                
            </Title>
            {/* <Card type="inner" >Exparts</Card>
            <Card style={{marginTop: 16, }} type="inner"  > Inner Card content </Card>
            <Card style={{marginTop: 16, }} type="inner"  > Inner Card content </Card>
            <Card style={{marginTop: 16, }} type="inner"  > Inner Card content </Card>
            <Card style={{marginTop: 16, }} type="inner"  > Inner Card content </Card>
            <Card style={{marginTop: 16, }} type="inner"  > Inner Card content </Card> */}
        

        <Card type="inner" style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
        <Space align="center">
        <FundProjectionScreenOutlined style={{ fontSize: '24px', color: '#52c41a' }}/>
          {/* <CheckCircleOutlined style={{ fontSize: '24px', color: '#52c41a' }} /> */}
          <span>Bussiness Insignts</span>
        </Space>
      </Card>
     
      <Card style={{ marginTop: 16,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} type="inner">
        <Space align="center">
          {/* <CheckCircleOutlined  /> */}
          <TeamOutlined style={{ fontSize: '24px', color: '#52c41a' }}/>
          <span>Industries Experts</span>
        </Space>
      </Card>
      <Card style={{ marginTop: 16,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} type="inner">
        <Space align="center">
          {/* <CheckCircleOutlined  /> */}
          <SettingOutlined style={{ fontSize: '24px', color: '#52c41a' }}/>
          <span>Customized Solutions</span>
        </Space>
      </Card>
      <Card style={{ marginTop: 16,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} type="inner">
        <Space align="center">
          <CheckCircleOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
          <span>Kazi Safi</span>
        </Space>
      </Card>
  
        </Card>
        
        </>
      );
    };