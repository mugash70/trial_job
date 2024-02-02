import React, { useState, useEffect } from 'react';
import { List, Layout, Card, Carousel, Typography, Row, Col } from 'antd';
import { SmileOutlined, BarChartOutlined, RobotOutlined, CodeOutlined, QuestionOutlined,FundViewOutlined  } from '@ant-design/icons';

const { Content } = Layout;
const { Title } = Typography;

const cardStyle = {
    width: '96%', // Adjust the width as needed
    margin: '0 8px', // Add some margin between cards
    border: 'none', // Remove border from cards
    height:'300px'
  };
  
  const carouselStyle = {
    maxWidth: '100%',
    margin: '0 auto', 
    padding: '16px', }

export const CustomCarousel= () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const handleBeforeChange = (from, to) => {
      setCurrentSlide(to);
    };
  
    const handleAfterChange = (current) => {
      setCurrentSlide(current);
    };
    const renderCardContent = (name, content,icon) => (
        <>
        <div style={{ fontSize: '19px', display: 'flex' }}>
            {icon}
            </div>
            <Title level={4} style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>{name}</Title>
            <p>{content}</p>
        </>
      );
      const cardData = [
        { name: 'Data Analytics', content: 'Harness the power of data to make informed decisions. Our data analytics services provide actionable insights, allowing you to optimize content, enhance user experience, and drive strategic initiatives.', icon: <BarChartOutlined style={{ fontSize: '40px', color: 'blue', marginRight: '10px' }}/> },
        { name: 'Machine Learning & Model development', content: 'Stay ahead of the curve with our machine learning expertise. We develop intelligent models that learn and adapt, empowering your business with automation, predictive analytics, and unparalleled efficiency.', icon: <RobotOutlined style={{ fontSize: '40px', color: 'blue', marginRight: '10px' }}/> },
        { name: 'Business Intelligence', content: 'Gain a competitive edge through our business intelligence services. We deliver real-time, actionable intelligence that empowers decision-makers, helping you stay agile in a dynamic market.', icon: <FundViewOutlined  style={{ fontSize: '40px', color: 'blue', marginRight: '10px' }}/> },
        { name: 'Software Development', content: 'Transform your ideas into reality with our expert software development team. We create custom solutions tailored to your unique needs, ensuring seamless functionality and user satisfaction.', icon: <CodeOutlined style={{ fontSize: '40px', color: 'blue', marginRight: '10px' }}/> },
        // { name: 'Custon Stuff', content: '', icon: <QuestionOutlined  style={{ fontSize: '40px', color: 'blue', marginRight: '10px' }}/> },
      ];
    return (
      <List.Item>
        <Content>
          <Title level={2} style={{ fontFamily: 'PT Serif'}}>What We Do!</Title>
          <Carousel
            autoplay={true}
            beforeChange={handleBeforeChange}
            afterChange={handleAfterChange}
            style={carouselStyle}
            initialSlide={0}
            slidesToShow={4}
            slidesToScroll={1}
            dots={true}
          >
            {cardData.map((card, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                bordered={true}
                style={{
                  ...cardStyle,
                  border: currentSlide === index ? '2px solid #1890ff' : 'none',
                  boxShadow: currentSlide === index ? '0 0 20px rgba(0, 0, 0, 0.4)' : 'none',
                }}
              >
                {renderCardContent(card.name,card.content,card.icon)}
              </Card>
            </div>
            ))}
          </Carousel>
        </Content>
      </List.Item>
    );
  };
  