import React, { useState, useEffect } from 'react';
import { List, Layout, Card, Carousel, Typography, Row, Col } from 'antd';
import { SmileOutlined, BarChartOutlined, RobotOutlined, CodeOutlined, QuestionOutlined,FundViewOutlined  } from '@ant-design/icons';

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
            style={{
            ...cardStyle,
            }}
        >

        </Card>
        
        </>
      );
    };