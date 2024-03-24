import React, { useState, useEffect,useRef } from 'react';
import { List, Layout, Card, Carousel, Typography, Row, Col,Grid,Popover  } from 'antd';
import { SmileOutlined, BarChartOutlined, RobotOutlined, CodeOutlined,SettingOutlined,FundViewOutlined  } from '@ant-design/icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const { Content } = Layout;
const { Title,Text , Paragraph } = Typography;
gsap.registerPlugin(ScrollTrigger);
const cardStyle = {
    width: '95%', 
    height:'20rem'
  };
  
  const carouselStyle = {
    maxWidth: '100%',
    // display: 'flex',
    // margin: '0 auto', 
    // padding: '16px', 
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
            markers:false,
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
          <Title   level={4} style={{ fontFamily: 'Poppins' }}>
            {name}
          </Title>
          {md ? (
          <Paragraph>{content}</Paragraph>
          ):( <Paragraph  style={{ fontSize: '1.3rem', color: "black" }}>{content}</Paragraph>)}
        </>
      );
    
      const cardData = [
        { content_list: [
          "Customized AI Solutions: We work closely with you to understand your challenges and develop AI models that address them directly.",
          "Actionable Insights: Go beyond raw data with clear, interpretable insights that guide informed decision-making.",
          "Increased Efficiency: Automate repetitive tasks and free your team to focus on higher-value activities."
        ],sname:'AI',name: 'Artificial Intelligence', content: "Imagine having a tireless, intelligent assistant working tirelessly behind the scenes.We don't offer generic solutions; we tailor AI models to your specific needs, whether it's automating tasks, predicting customer behavior, or optimizing operations.", icon: <RobotOutlined style={{ fontSize: '40px', color: 'blue', marginRight: '10px' }} /> },
        {content_list: [
          "Predictive Analytics: Models analyze sensor data from industrial equipment to identify patterns indicative of impending failures.",
          "Recommendation Systems:Systems analyze user preferences and behaviors to suggest items or content that users are likely to be interested in.", 
          "Natural Language Processing (NLP):By automatically analyzing customer feedback, businesses can gain insights into customer sentiment and make data-driven decisions to improve products or services.",
          "others include:Healthcare Analytics and Generative AI"
          // "Generative AI: Training models to generate new content, such as images, text, or even music, that resembles existing data.",
          // 
          // "Healthcare Analytics:Using machine learning to analyze medical data and improve patient outcomes.",
         ],sname:'ML',name: 'Machine Learning', content: 'Stay ahead of the curve with our machine learning expertise. We develop intelligent models that learn and adapt, empowering your business with automation, predictive analytics, and unparalleled efficiency.', icon: <SettingOutlined style={{ fontSize: '40px', color: 'blue', marginRight: '10px' }} /> },
        {content_list: [
          "Real-Time Visibility: Monitor key performance indicators (KPIs) and gain instant insights into your business health.",
          "Interactive Dashboards: Explore data in an intuitive and user-friendly format, making it accessible to all levels of your organization.",
          "Data-Driven Decision Making: Make informed business decisions based on a clear understanding of your current performance and future possibilities."
        ],sname:'BI', name: 'Business Intelligence', content: 'Business Intelligence (BI) takes data analysis to the next level, providing real-time insights and interactive dashboards that offer a comprehensive view of your business performance.', icon: <FundViewOutlined style={{ fontSize: '40px', color: 'blue', marginRight: '10px' }} /> },
        {content_list: [
          "Collaborative Approach: We work closely with you throughout the development process to ensure the final product aligns with your vision.",
          "Agile Development: We break down projects into manageable tasks, allowing for continuous feedback and adjustments.",
          "Scalable Solutions: Develop software that can grow and adapt alongside your business needs."
        ],sname:'SD', name: 'Software Development', content: 'Our Software Development team translates your vision into reality. We leverage modern technologies and agile methodologies to deliver custom software solutions that meet your specific needs and timelines.', icon: <CodeOutlined style={{ fontSize: '40px', color: 'blue', marginRight: '10px' }} /> },
      ];
    
      return (
        <>
        {md ? (
           <div>
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
                  <Popover
                      content={<ul>{card.content_list.map((item, index) => (<li key={index}>{item}</li>))}</ul>}
                      title={<span style={{ color: '#5733FF', display: 'block', textAlign: 'center' }}>{card.sname}</span>}
                      trigger="hover"
                      overlayStyle={{ width: '25%' }}>
                    <Card
                      bordered={true}
                      style={{
                        ...cardStyle,
                        opacity: 1,
                        boxShadow: hoveredIndex === index ? '0 0 20px rgba(0, 0, 0, 0.4)' : 'none',
                      }}
                      onMouseEnter={() => handleCardHover(index)}
                      onMouseLeave={handleCardLeave}
                    >
                      {renderCardContent(card.name, card.content, card.icon, index)}
                    </Card>
                    </Popover>
              
              </div>
            ))}
          </Carousel>
          </div>
        ) : (
          // Render individual Cards for small screens
          <Row gutter={[16, 16]} justify="center">
            {cardData.map((card, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <Popover content={ card.content} title="Title" trigger="hover">
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
                </Popover>
              </Col>
            ))}
          </Row>
        )}
      </>
      );
    };