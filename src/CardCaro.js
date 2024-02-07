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

    export const CustomCarousel = () => {
      const [hoveredIndex, setHoveredIndex] = useState(null);
    
      const handleCardHover = (index) => {
        setHoveredIndex(index);
      };
    
      const handleCardLeave = () => {
        setHoveredIndex(null);
      };
    
      const renderCardContent = (name, content, icon, index) => (
        <>
          <div style={{ fontSize: '19px', display: 'flex' }}>{icon}</div>
          <Title level={4} style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            {name}
          </Title>
          {/* style={{ opacity: hoveredIndex === index ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }} */}
          <p>{content}</p>
        </>
      );
    
      const cardData = [
        { name: 'Data Analytics', content: 'Harness the power of data to make informed decisions. Our data analytics services provide actionable insights, allowing you to optimize content, enhance user experience, and drive strategic initiatives.', icon: <BarChartOutlined style={{ fontSize: '40px', color: 'blue', marginRight: '10px' }} /> },
        { name: 'Machine Learning & Model development', content: 'Stay ahead of the curve with our machine learning expertise. We develop intelligent models that learn and adapt, empowering your business with automation, predictive analytics, and unparalleled efficiency.', icon: <RobotOutlined style={{ fontSize: '40px', color: 'blue', marginRight: '10px' }} /> },
        { name: 'Business Intelligence', content: 'Gain a competitive edge through our business intelligence services. We deliver real-time, actionable intelligence that empowers decision-makers, helping you stay agile in a dynamic market.', icon: <FundViewOutlined style={{ fontSize: '40px', color: 'blue', marginRight: '10px' }} /> },
        { name: 'Software Development', content: 'Transform your ideas into reality with our expert software development team. We create custom solutions tailored to your unique needs, ensuring seamless functionality and user satisfaction.', icon: <CodeOutlined style={{ fontSize: '40px', color: 'blue', marginRight: '10px' }} /> },
      ];
    
      return (
        <>
          <Carousel
            autoplay
            autoplaySpeed={500}
            style={carouselStyle}
            initialSlide={0}
            slidesToShow={4}
            slidesToScroll={1}
          > 
            {cardData.map((card, index) => (
              <div
                key={index}
                style={{ display: 'flex', justifyContent: 'center', fontSize: '4rem' }}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
              >
                <Card
                  bordered={true}
                  style={{
                    ...cardStyle,
                    boxShadow: hoveredIndex === index ? '0 0 20px rgba(0, 0, 0, 0.4)' : 'none',
                  }}
                >
                  {renderCardContent(card.name, card.content, card.icon, index)}
                </Card>
              </div>
            ))}
          </Carousel>
        </>
      );
    };