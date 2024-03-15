
import './App.css';
import React,{useEffect,useRef}from 'react';
import { Layout,List, Menu, Row,Col,Flex,Button, Typography,Card} from 'antd';
// import {Link} from 'react-router-dom'
import crips from './assets/crips.webp'
import Lottie from 'lottie-web';
import x1 from './assets/animations/1.json'
import x from './assets/animations/1.json'
import x2 from './assets/animations/2.json'
import x3 from './assets/animations/3.json'
import x4 from './assets/animations/page1.json'
import x5 from './assets/animations/5.json'
import x6 from './assets/animations/6.json'
import x7 from './assets/animations/7.json'
import {CustomCarousel} from './CardCaro'
import ProcessWay from './Process'
import {Whatwedo} from './whatwedo'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
const { Title,Paragraph  } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const handleClick = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
  }
};

const navs = [
  { name: "Home", url: "1" },
  { name: "About us", url: "2" },
  { name: "Our processes", url: "3" },
  { name: "Why us", url: "4" },
  { name: "Contact us", url: "5" },
];

const items = navs.map((nav, index) => ({
  key: String(index + 1),
  label: nav.name,
  onClick: () => handleClick(nav.url)
}));



const contentStyle = {
  // textAlign: 'center',
  // lineHeight: '120px',
};

const footerStyle = {
  // textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
};

const animStyle = {
  width: '100%',
  height: '85vh',
}
const loadLottieAnimation = (containerRef, animationData) => {
  return Lottie.loadAnimation({
    container: containerRef.current,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: animationData,
    // rendererSettings: {
    //   preserveAspectRatio: 'xMidYMid slice',
    // },
  });
};
const loadLottieAnimationx = (containerRef, animationData) => {
  return Lottie.loadAnimation({
    container: containerRef.current,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: animationData,
    // rendererSettings: {
    //   preserveAspectRatio: 'xMidYMid slice',
    // },
  });
};



function App() {

  const ContainerRef = useRef(null);
  const ContainerRef1 = useRef(null);
  const ContainerRef2 = useRef(null);
  const ContainerRef3 = useRef(null);
  const ContainerRef4 = useRef(null);
  const ContainerRef5 = useRef(null);
  const ContainerRef6 = useRef(null);
  const ContainerRef7 = useRef(null);

  useEffect(() => {
    const animation = loadLottieAnimation(ContainerRef, x);
    const animation1 = loadLottieAnimation(ContainerRef1, x1);
    const animation2 = loadLottieAnimation(ContainerRef2, x2);
    const animation3 = loadLottieAnimation(ContainerRef3, x3);
    const animation4 = loadLottieAnimation(ContainerRef4, x4);
    const animation5 = loadLottieAnimation(ContainerRef5, x5);
    const animation6 = loadLottieAnimation(ContainerRef6, x6);
    const animation7 = loadLottieAnimation(ContainerRef7, x7);
    return () => {
      animation.destroy();
      animation1.destroy();
      animation2.destroy();
      animation3.destroy();
      animation4.destroy();
      animation5.destroy();
      animation6.destroy();
      animation7.destroy();
    };
  }, []);


  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
  
    if (targetElement) {
      gsap.to(window, {
        scrollTo: { y: targetElement, offsetY: 70 },
        duration: 1,
      });
    }
  };
  
  useEffect(() => {
    gsap.defaults({ ease: "none" });
    const tl = gsap.timeline({ repeat: 1, repeatDelay: 2, yoyo:false });
            tl.to(".T2", { 
              // x: -100 
              duration: 5,
              text:()=>(`At GreatInt, we bridge the gap between raw data and actionable insights, empowering businesses with a comprehensive suite of services.`)
            })
            .to(".Tbox", { x: -100  });
            // .to(buttonRef.current, { duration: 2, text: "Request a Demo", delay: 2 })
        }, []); 
  
  const cards = ['Card content 1', 'Card content 2', 'Card content 3', 'Card content 4'];


  return (
    <div className="App">
       <Flex gap="middle" wrap="wrap">
        <Layout>
        <Header 
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 1,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              background: '#fff', // Setting a light background color for the Header
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)', // Adding a light shadow
            }}
>
      {/* <Title>GreatInt</Title> <div className="demo-logo" ref={ContainerRef2} style={{ width: '60px', height: '60px' }}></div> */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <Title style={{ marginRight: '10px' }}>GreatInt</Title>
      <div className="demo-logo" ref={ContainerRef2} style={{ width: '60px', height: '60px' }}></div>
      </div>

        <Menu
          // theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            marginLeft: '25px',
          }}
        />
      </Header>
      <List style={{ display: 'flex' }}>
            <List.Item>
              <Content id="1">
                <Row >
                <Col xs={24} sm={12} style={{ backgroundColor: '#f5f5f5', padding: '2rem', marginTop: '-4%', minHeight: '100vh' }}>
                  <div style={{textAlign: 'left', paddingLeft:'10%', marginTop: "8%", }}>
                    <Title className="T1" style={{  fontFamily: 'Serif ', fontSize: '2.7rem'}}>
                      <span style={{  letterSpacing: '2px' }}>
                        <span style={{ textDecoration: 'underline' }}>Unleash</span>,{' '}
                      the Power of Data-Driven Decisions</span>{' '}
                      <span style={{ color: '#5733FF' }}>
                        Your One-Stop Shop for{' '}
                        <span  style={{ textDecoration: 'underline' }}>AI</span>{' '}&{' '}
                        <span  style={{ textDecoration: 'underline' }}>Machine Learning</span>{' '} 
                      </span>
                      <span>solutions</span>.
                    </Title>

                    <Title className="T2"  style={{ marginTop: "7%", fontSize: '1.7rem', textAlign: 'left', fontFamily: 'Helvetica'}}>
                      {/* At GreatInt, we bridge the gap between raw data and actionable insights, empowering businesses with a comprehensive suite of services. */}
                    </Title>
                  </div>

                  <div  style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button  className="Tbox" style={{marginTop: "5%", height: '4rem', fontSize: '1.2rem', color: '#FFFFFF', padding: '15px 30px',  backgroundColor: '#5733FF', borderRadius: '2rem'}} className="hover">
                      Ask for a Demo
                    </Button>
                  </div>
                </Col>
                <Col xs={24} sm={12} >
                  <div ref={ContainerRef4} style={{ ...animStyle }}></div>
                </Col>

                </Row>
             
              </Content>
            </List.Item>
            <List.Item>
             <Content  xs={24} sm={12} style={{ margin: '0 16px', width: '50%'}} id="2">
             <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: 1 }}>
                <Title style={{ fontFamily: 'Serif', fontSize: '3rem', textAlign: 'left',paddingLeft:'30%',color: '#5733FF',marginTop: "-2%" }}>What We Do!</Title>
              </div>
              <div style={{ flex: 1, textAlign: 'right',paddingRight:'10%',textAlign: 'left', fontSize: '1rem' }}>
                <span>
                  In today's data-driven world, making informed decisions can be the difference between success and stagnation. With a comprehensive suite of services: Artificial Intelligence (AI), Data Analytics, Business Intelligence (BI), and Software Development.
                </span>
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <CustomCarousel cards={cards} />
            </div>
               
              </Content>
          </List.Item>
            <List.Item>
              <Content  style={{marginBottom:'7rem'}} id="3">
                    <Title  style={{ fontFamily: 'Serif ',fontSize: '2rem',alignContent:'center'}}>Development Process</Title>
                    <Row gutter={[16, 16]} align="top">
                        <Col xs={24} sm={12} style={{ flexDirection: 'column' }}>
                        <div  style={{ ...contentStyle }}><img src={crips}></img></div>
                      </Col>
                      <Col xs={24} sm={12} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                          <ProcessWay cards={cards} />
                      </Col>
                      
                    </Row>
              </Content>
            </List.Item>
            <List.Item>
            <Content id="4">
            <Card bordered={true}>
              <Row gutter={[16, 16]} align="top">
                <Col xs={24} sm={12} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Title style={{ marginTop: "20%", fontFamily: 'Serif ', fontSize: '2rem' }}>
                    <span style={{ color: '#FFfff' }}>Leading Companies </span>{' '}
                    <span style={{ color: '#5733FF' }}>Develop with Us!</span>
                  </Title>
                  <Paragraph style={{ marginTop: "8%", fontSize: '1.2rem', color: "black" }}>
                    <span style={{ color: '#5733FF' }}>With our very able team,</span>
                    <span style={{ color: 'black' }}>we are dedicated in delivering your project to your standards.</span>
                    <span style={{ color: 'black' }}> Our value isn't limited to building teams but is equally distributed across the project lifecycle.</span>
                    <span style={{ color: '#5733FF' }}> We are basically a custom tech development company.</span>
                  </Paragraph>
            
                </Col>
                <Col xs={24} sm={12} style={{ flexDirection: 'column' }}>
                  <div ref={ContainerRef5} style={{ ...contentStyle }}></div>
                </Col>
              </Row>
              </Card>
            </Content>
            </List.Item>
            <List.Item>
            <Content  id="5">
          <Row gutter={[16, 16]} align="top">
              <Col xs={24} sm={12} style={{ flexDirection: 'column' }}>
              <div ref={ContainerRef7} style={{ ...contentStyle }}></div>
            </Col>
            <Col xs={24} sm={12} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <Title style={{ marginTop: "20%", fontFamily: 'Serif ', fontSize: '2rem' }}>
                <span style={{ color: '#FFfff' }}>What to expect from  </span>{' '}
                <span style={{ color: '#5733FF' }}> Us!</span>
              </Title>
                 <Whatwedo cards={cards} />
            </Col>
            
          </Row>
            </Content>
            </List.Item>
            <List.Item>
              <Content id="6">

             <Card bordered={true}>
           
          <Row gutter={[16, 16]} align="top">
             
            <Col xs={24} sm={12} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <Title style={{ marginTop: "20%", fontFamily: 'Serif ', fontSize: '2rem' }}>
                <span style={{ color: '#FFfff' }}>Common </span>{' '}
                <span style={{ color: '#5733FF' }}> Questions (?) </span>
              </Title>
                 <Whatwedo cards={cards} />
            </Col>
            <Col xs={24} sm={12} style={{ flexDirection: 'column' }}>
              <div ref={ContainerRef3} style={{ ...contentStyle }}></div>
            </Col>
             </Row>
             </Card>
             </Content>
            </List.Item>
            <List.Item>
              <Content style={contentStyle}>Content</Content>
            </List.Item>
          </List>
          

          <Footer style={footerStyle}>Footer</Footer>
        </Layout>

      </Flex>
    </div>
  );
}

export default App;
