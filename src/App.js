
import './App.css';
import React,{useEffect,useRef}from 'react';
import { Layout,List, Menu, Row,Col,Flex,Button, Typography} from 'antd';
// import {Link} from 'react-router-dom'
import Lottie from 'lottie-web';
import x1 from './assets/animations/1.json'
import x from './assets/animations/1.json'
import x2 from './assets/animations/2.json'
import x3 from './assets/animations/3.json'
import x4 from './assets/animations/4.json'
import x5 from './assets/animations/5.json'
import x6 from './assets/animations/6.json'
import x7 from './assets/animations/7.json'
import {CustomCarousel} from './CardCaro'
import ProcessWay from './Process'
import {Whatwedo} from './whatwedo'

const { Title,Paragraph  } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const navs = [
  { name: "Home", url: "" },
  { name: "About us", url: "" },
  { name: "Our processes", url: "" },
  { name: "Why us", url: "" },
  { name: "Contact us", url: "" },
];

const items = navs.map((nav, index) => ({
  key: String(index + 1),
  label: nav.name,
}));




const contentStyle = {
  textAlign: 'center',
  lineHeight: '120px',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
};
const cardStyle = {
  height: 200, // Adjust the width as needed
  // margin: '0 8px', // Add some margin between 
  width: '100%',
};

const carouselStyle = {
  maxWidth: '200px', // Adjust the maximum width of the carousel
  margin: '0 auto', // Center the carousel on the page
};

const loadLottieAnimation = (containerRef, animationData) => {
  return Lottie.loadAnimation({
    container: containerRef.current,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
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
        }}
      >
       <div className="demo-logo" ref={ContainerRef2} style={{ width: '60px', height: '60px' }}></div>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            marginLeft: '25px',
          }}
        />
      </Header>
      <List>
            <List.Item>
              <Content>
                <Row style={{ display: 'flex'}}>
                <Col xs={24} sm={12} style={{alignItems: 'center',flexDirection: 'column' }}>

                <Title style={{ marginTop: "20%", fontFamily: 'arial',fontSize: '4rem', textAlign: 'center' }}>
                  "<span style={{ color: '#FFfff' }}>Turning Data into Insights</span>{' '}
                  <span style={{ color: '#5733FF' }}>Empowering Your Success</span>"
                </Title>
                <Title style={{ marginTop: "8%", textAlign: 'center',fontSize: '1.5rem',color:"grey" }}>
                  {/* DATA ANALYTICS AND SOFTWARE DEVELOPMENT */}
                  The main product is a data science model that utilizes trained on real-world datasets to solve various classification/regression tasks.
                  Products to be guided by the existence of real problems.
                </Title>
                <Button type="primary"  style={{ marginTop: "8%",height: '4rem',fontSize: '1rem', padding: '15px 30px' }} className="hover">
                  Ask for a Demo</Button></Col>
                <Col xs={24} sm={12} style ={{flexDirection: 'column'}} >
                    <div ref={ContainerRef4} style={{ ...contentStyle }}></div>
                  </Col>
                </Row>
                <Title level={2} style={{ fontFamily: 'Arial',fontSize: '3rem'}}>What We Do!</Title>
              </Content>
            </List.Item>
            <List.Item>
                <Content>
                      <CustomCarousel cards={cards} />
                </Content>
          </List.Item>
            <List.Item>
            
              <Content  style={{marginBottom:'7rem'}}>
                    <Title  style={{ fontFamily: 'Arial',fontSize: '2rem',alignContent:'center'}}>Development Process</Title>
                    <ProcessWay/>
              </Content>
            </List.Item>
            <List.Item>
            <Content>
              <Row gutter={[16, 16]} align="top">
                <Col xs={24} sm={12} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Title style={{ marginTop: "20%", fontFamily: 'arial', fontSize: '2rem' }}>
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
            </Content>
            </List.Item>
            <List.Item>
            <Content>
          <Row gutter={[16, 16]} align="top">
              <Col xs={24} sm={12} style={{ flexDirection: 'column' }}>
              <div ref={ContainerRef3} style={{ ...contentStyle }}></div>
            </Col>
            <Col xs={24} sm={12} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <Title style={{ marginTop: "20%", fontFamily: 'arial', fontSize: '2rem' }}>
                <span style={{ color: '#FFfff' }}>What to expect from  </span>{' '}
                <span style={{ color: '#5733FF' }}> Us!</span>
              </Title>
                 <Whatwedo cards={cards} />
            </Col>
            
          </Row>
            </Content>
            </List.Item>
            <List.Item>
              {/* <Content style={contentStyle}>Content</Content>
               */}
               <Whatwedo cards={cards} />
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
