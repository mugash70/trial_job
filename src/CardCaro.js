import React, { useState, useEffect,useRef } from 'react';
import { List, Layout, Card, Carousel, Typography, Row, Col,Grid  } from 'antd';
import { SmileOutlined, BarChartOutlined, RobotOutlined, CodeOutlined, QuestionOutlined,FundViewOutlined  } from '@ant-design/icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const { Content } = Layout;
const { Title,Text , Paragraph } = Typography;
gsap.registerPlugin(ScrollTrigger);
const cardStyle = {
    width: '100%', 
    height:'20rem'
  };
  
  const carouselStyle = {
    maxWidth: '100%',
    display: 'flex',
    margin: '0 auto', 
    padding: '16px', 
  }

    export const CustomCarousel = () => {
      const [hoveredIndex, setHoveredIndex] = useState(null);
      const { md } = Grid.useBreakpoint(); 
      const cardRefs = useRef([]);
      const carouselRef = useRef(null);
    

      const handleCardHover = (index) => {
        setHoveredIndex(index);
      };
    
      const handleCardLeave = () => {
        setHoveredIndex(null);
      };
      const handleCarouselChange = (current) => {
        setHoveredIndex(current);
      };
      const animateInCards = () => {
        gsap.from(cardRefs.current, {
          x: '100%',
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: carouselRef.current,
            start: 'center centre',
            end: 'bottom top',
            markers:true,
            scrub: true,
          },
          onComplete: () => {
          
          },
        });
      };
    
      useEffect(() => {
        animateInCards();
      }, []);
    
      const renderCardContent = (name, content, icon, index) => (
        <>
          <div style={{ fontSize: '19px', display: 'flex' }}>{icon}</div>
          <Title   level={4} style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            {name}
          </Title>
          {md ? (
          <Paragraph>{content}</Paragraph>
          ):( <Paragraph  style={{ fontSize: '1.3rem', color: "black" }}>{content}</Paragraph>)}
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
        {md ? (
          <Carousel
            autoplay
            style={carouselStyle}
            initialSlide={0}
            slidesToShow={4}
            slidesToScroll={1}
            beforeChange={handleCarouselChange}
          >
            {cardData.map((card, index) => (
              <div key={index}>
                <Row justify="center">
                  <Col xs={24} sm={22} md={20} lg={20} xl={22}>
                    <Card
                      bordered={true}
                      style={{
                        ...cardStyle,
                        boxShadow: hoveredIndex === index ? '0 0 20px rgba(0, 0, 0, 0.4)' : 'none',
                      }}
                      onMouseEnter={() => handleCardHover(index)}
                      onMouseLeave={handleCardLeave}
                    >
                      {renderCardContent(card.name, card.content, card.icon, index)}
                    </Card>
                  </Col>
                </Row>
              </div>
            ))}
          </Carousel>
        ) : (
          // Render individual Cards for small screens
          <Row gutter={[16, 16]} justify="center">
            {cardData.map((card, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <Card
                  bordered={true}
                  style={{
                    ...cardStyle,
                    boxShadow: hoveredIndex === index ? '0 0 20px rgba(0, 0, 0, 0.4)' : 'none',
                  }}
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={handleCardLeave}
                >
                  {renderCardContent(card.name, card.content, card.icon, index)}
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </>
      );
    };