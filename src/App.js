
import './App.css';
import React,{useEffect,useRef,useState}from 'react';
import {Layout,List, Menu, Row,Col,Flex,Button, Typography,Card,Avatar,Divider, Skeleton,Popover } from 'antd';
// import {Link} from 'react-router-dom'
import crips from './assets/crips.webp'
import logo from './assets/logos/2.png'
import Lottie from 'lottie-web';
import x1 from './assets/animations/1.json'
import x from './assets/animations/1.json'
import x2 from './assets/animations/2.json'
import x3 from './assets/animations/3.json'
import x4 from './assets/animations/page1.json'
import x5 from './assets/animations/5.json'
import x6 from './assets/animations/6.json'
import x7 from './assets/animations/7.json'
import x8 from './assets/animations/last1.json'
import x9 from './assets/animations/qa.json'
import {CustomCarousel} from './CardCaro'
import ProcessWay from './Process'
import Contact from  './contact'
// import {Whatwedo} from './whatwedo'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin'
import { UserOutlined} from '@ant-design/icons';
import p4 from './assets/prof/4.jpg'
import InfiniteScroll from 'react-infinite-scroll-component';
// import { TweenLite, Circ } from 'gsap';
import Animate from './AnimatedHeader'

// import SplitText from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
const { Title,Paragraph,Text} = Typography;
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
  { name: "Our team", url: "5" },
  { name: "Q & A", url: "6" },
  { name: "Contact us", url: "7" },
];
const Teams_x = [
  { 
    name: "Rodgers.O", 
    icons: "1",
    desc: "Rodgers is our visionary leader, with a wealth of experience in driving business strategies and fostering innovation. As the Chief Executive Officer, he provides direction and guidance to our team, ensuring that we remain agile and adaptive in a rapidly changing industry.",
    title: "Chief Executive Officer" ,image:''
  },
  { 
    name: "Bram.M", 
    icons: "2",
    desc: "Bram is our operational expert, overseeing the day-to-day functions of our company with precision and efficiency. As the Chief Operations Officer, he streamlines our processes and ensures that our operations run smoothly, enabling us to deliver exceptional results to our clients.",
    title: "Chief Operations Officer",
    image: '' 
},
  { 
    name: "Erick.M", 
    icons: "3",
    desc: "Erick is our strategic visionary, leading our marketing efforts with creativity and innovation. As the Chief Marketing Officer, he orchestrates comprehensive marketing campaigns that resonate with our target audience, driving brand awareness and customer engagement to new heights.",
    title: "Chief Marketing Officer" ,image:''
  },
  { 
    name: "Cyril.M", 
    icons: "4",
    desc: "Cyril is our masterful developer, with a passion for turning ideas into reality through code. As a Senior Developer, he thrives on challenges and is dedicated to creating innovative solutions that push the boundaries of technology. With Cyril on our team, we're always one step ahead.",
    title: "Senior Developer" ,image:p4
  },
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
  color: '#fff',
  backgroundColor: '#5733FF',
  // position: 'fixed',
  bottom: 0,
  height:60,
  maxWidth:'100vw',
  width:'100%',
  zIndex: 2
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
};

const animStyle = {
  width: '100%',
  height: '65%',
}
const animStyle2 = {
  width: '100%',
  height: '85%',
  marginTop:'5%',
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
const loadLottieAnimation2 = (containerRef, animationData) => {
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

const x_QA = [
  { 
    quiz: "What is Artificial Intelligence ?", 
    answer: "Refers to the simulation of human intelligence processes by machines, especially computer systems." 
  },
  { 
    quiz: "What is Machine Learning ?", 
    answer: " Is a subset of AI that provides systems the ability to automatically learn and improve from experience without being explicitly programmed." 
  },
  { 
    quiz: "How can AI and ML benefit our business operations?", 
    answer: "AI and ML can benefit business operations by automating repetitive tasks, improving decision-making through data analysis, enhancing customer experiences, and optimizing processes for greater efficiency." 
  },
  { 
    quiz: "What ethical considerations are important in data analytics and AI?", 
    answer: "Important ethical considerations in data analytics and AI include privacy protection, fairness and bias mitigation, transparency in decision-making processes, accountability for outcomes, and ensuring that AI technologies benefit society as a whole." 
  },

  { 
    quiz: "What are some real-world applications of AI and ML in business?", 
    answer: "Real-world applications of AI and ML in business include personalized recommendations, fraud detection, predictive maintenance, natural language processing, and image recognition, among others." 
  },
  { 
    quiz: "What are the key differences between supervised and unsupervised learning, and how do they apply to our business needs?", 
    answer: "Supervised learning requires labeled data for training, while unsupervised learning works with unlabeled data. Supervised learning is suitable for tasks like classification and regression, while unsupervised learning is used for clustering and anomaly detection." 
  },
  { 
    quiz: "What strategies do you recommend for leveraging AI and ML to gain a competitive advantage in our industry?", 
    answer: "Strategies for leveraging AI and ML to gain a competitive advantage may include investing in data quality and infrastructure, fostering a culture of data-driven decision-making, staying informed about industry trends, and collaborating with experts in AI and ML." 
  },
  { 
    quiz: "How does artificial intelligence differ from traditional programming?", 
    answer: "Artificial intelligence (AI) enables machines to learn from data and perform tasks that typically require human intelligence, whereas traditional programming involves writing instructions for a computer to follow without the ability to learn or adapt on its own." 
  },
  { 
    quiz: "What steps do you take to ensure that AI and ML models are aligned with our business goals and objectives?", 
    answer: "Steps to ensure alignment of AI and ML models with business goals may include defining clear objectives, selecting appropriate metrics for evaluation, involving stakeholders throughout the development process, and continuously monitoring performance against business KPIs." 
  },
 
  { 
    quiz: "Can you explain the difference between supervised and unsupervised machine learning?", 
    answer: "Supervised machine learning requires labeled data for training, where the algorithm learns from input-output pairs. Unsupervised machine learning works with unlabeled data and aims to find patterns or groupings within the data without explicit guidance." 
  },
  { 
    quiz: "What are the key components of a data analytics pipeline?", 
    answer: "The key components of a data analytics pipeline include data collection, data preprocessing, exploratory data analysis, feature engineering, model training, model evaluation, and deployment into production." 
  },
  { 
    quiz: "How do you ensure data security and privacy when implementing AI and ML solutions in a business environment?", 
    answer: "Measures to ensure data security and privacy may include implementing access controls, encrypting sensitive data, anonymizing or pseudonymizing personally identifiable information (PII), conducting regular security audits, and complying with relevant regulations such as GDPR or CCPA." 
  },
  { 
    quiz: "What is data analytics, and why is it important for businesses?", 
    answer: "Data analytics involves analyzing raw data to extract insights and make informed decisions. It's important for businesses because it helps them understand trends, make predictions, and improve decision-making processes." 
  },
  { 
    quiz: "How do you stay updated with the latest advancements in data analytics and AI?", 
    answer: "Staying updated with the latest advancements may involve attending conferences and workshops, participating in online courses or webinars, reading research papers and industry publications, joining professional networks or forums, and experimenting with new tools and technologies through personal projects or collaborations." 
  }
];
const companyExpectations = [
  {
    id: 1,
    title: "Expertise",
    description: "Our team consists of experienced professionals with diverse skill sets, ensuring that we have the expertise needed to tackle any technical challenge."
  },
  {
    id: 2,
    title: "Tailored Solutions",
    description: "We understand that every project is unique, which is why we take a tailored approach to development"
  },
  // {
  //   id: 3,
  //   title: "Transparency",
  //   description: "We believe in transparent communication and project management. Clients can expect regular updates on the progress of their project and clear insight into our processes."
  // },
  {
    id: 3,
    title: "Quality Assurance",
    description: "We have rigorous quality assurance processes in place to ensure that our deliverables meet the highest standards."
  },
  // {
  //   id: 5,
  //   title: "Timely Delivery",
  //   description: "We understand the importance of meeting deadlines. Clients can expect us to deliver projects on time and within budget."
  // },
  {
    id: 4,
    title: "Collaborative Partnership",
    description: "We value their input and feedback and strive to create a collaborative working environment."
  },
  // {
  //   id: 5,
  //   title: "Support and Maintenance",
  //   description: "We provide ongoing support and maintenance to ensure that our solutions continue to meet their needs in the long term."
  // },
  // {
  //   id: 8,
  //   title: "Innovation",
  //   description: "We are committed to staying ahead of the curve when it comes to technology. Clients can expect us to leverage the latest tools and techniques to deliver innovative solutions that drive business value."
  // }
];

// import { MorphSVGPlugin } from 'gsap';

function App() {

  const [data, setData] = useState(x_QA.slice(0, 4)); 
  const [hasMore, setHasMore] = useState(true); 
  const ref = useRef([]);
  const boxRef = useRef(null);





  const addtoRefs = (el) => {
    if (el && !ref.current.includes(el)) {
        ref.current.push(el);
    }
};
  const loadMoreData = () => {
    setTimeout(() => {
      const newData = x_QA.slice(data.length, data.length + 4); 
      setData([...data, ...newData]); 
      if (data.length + 4 >= x_QA.length) {
        setHasMore(false); 
      }
    }, 1000);
  };
  const loadMoreDatax = () => {
    setTimeout(() => {
      const newData = companyExpectations.slice(data.length, data.length + 3); 
      setData([...data, ...newData]); 
      if (data.length + 4 >= companyExpectations.length) {
        setHasMore(false); 
      }
    }, 500);
  };
  const ContainerRef = useRef(null);
  const ContainerRef1 = useRef(null);
  const ContainerRef2 = useRef(null);
  const ContainerRef3 = useRef(null);
  const ContainerRef4 = useRef(null);
  const ContainerRef5 = useRef(null);
  const ContainerRef6 = useRef(null);
  const ContainerRef7 = useRef(null);
  const ContainerRef8 = useRef(null);
  const ContainerRef9 = useRef(null);

  useEffect(() => {
    const animation = loadLottieAnimation(ContainerRef, x);
    const animation1 = loadLottieAnimation(ContainerRef1, x1);
    const animation2 = loadLottieAnimation(ContainerRef2, x2);
    const animation3 = loadLottieAnimation(ContainerRef3, x3);
    const animation4 = loadLottieAnimation(ContainerRef4, x4);
    const animation5 = loadLottieAnimation(ContainerRef5, x5);
    const animation6 = loadLottieAnimation(ContainerRef6, x6);
    const animation7 = loadLottieAnimation(ContainerRef7, x7);
    const animation8 = loadLottieAnimation(ContainerRef8, x8);
    const animation9 = loadLottieAnimation(ContainerRef9, x9);
    return () => {
      animation.destroy();
      animation1.destroy();
      animation2.destroy();
      animation3.destroy();
      animation4.destroy();
      animation5.destroy();
      animation6.destroy();
      animation7.destroy();
      animation8.destroy();
      animation9.destroy();
    };
  }, []);


  useEffect(() => {

    let ctx = gsap.context(() => {})

    gsap.defaults({ ease: "none" });
    const tl = gsap.timeline({ repeat: 0, repeatDelay: 5, yoyo:false,markers: false });
            tl.to(".T2", { 
              duration: 1,
              text:()=>(`At Greatint, we bridge the gap between raw data and actionable insights, empowering businesses with a comprehensive suite of services.`)
            });
            // .to(".Tbox", { x: -100  });
       
      ref.current.forEach((el) => {
          gsap.fromTo(el, { autoAlpha: 0 }, {
              autoAlpha: 1,
              left: 0,
              duration: 0.8,
              scrollTrigger: {
                  trigger: el,
                  start: "top bottom-=100",
                  toggleActions: "play none none reverse"
              }
          });
      });
      return () => ctx.revert();
  }, []);



  const cards = ['Card content 1', 'Card content 2', 'Card content 3', 'Card content 4'];
  let count = 0; 

  return (
    <div className="App" 
   

    >

       <Flex gap="middle" wrap="wrap">
        <Layout>
        <Header 
            style={{
              position: 'fixed',
              top: 0,
              zIndex: 3,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              background: '#ffff', 
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
>
  
        {/* <Animate/> */}

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="demo-logo" style={{ marginTop: '4%' }}>
            <img src={logo} width={150} alt="Logo"  />
          </div>

        
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={items}
            style={{
              flex: 1,
              minWidth: 0,
              marginLeft: '25px',
            }}
          />
          </div>
      </Header>
      <List style={{ display: 'flex' }}  id="large-header">
    
            <List.Item
             style={{
              // height:'100vh',
           
              backgroundColor: '#f5f5f5',
               padding: '2%',
            
               maxWidth:'100vw'}}
            >
            
              <Content  ref={addtoRefs}  id="1"  style={{paddingTop:'3%'}}>
             
                <Row >
                <Col 
                xs={24} sm={12}
                 style={{ marginTop: '4%'}}
                 >
                  <div style={{textAlign: 'left', paddingLeft:'10%', marginTop: "8%", }}>
                    <Title className="T1" style={{  fontFamily: 'Poppins ', fontSize: '2.7rem'}}>
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

                    <Title className="T2"  style={{ marginTop: "7%", fontSize: '1.4rem', textAlign: 'left', fontFamily: 'Helvetica'}}>
                      {/* At GreatInt, we bridge the gap between raw data and actionable insights, empowering businesses with a comprehensive suite of services. */}
                    </Title>
                  </div>

                  <div  style={{ display: 'flex', justifyContent: 'center' }}>
                  <a href="mailto:info@greatint.co.ke">
                    <Button  className="hover" style={{ zIndex: 1,marginTop: "5%", height: '4rem', fontSize: '1.2rem', color: '#FFFFFF', padding: '15px 30px',  backgroundColor: '#5733FF', borderRadius: '2rem'}}>
                      Ask for a Demo
                    </Button></a>
                  </div>
                </Col>
                <Col xs={24} sm={12} >
                  <div ref={ContainerRef4} style={{ ...animStyle2 }}></div>
                </Col>
                </Row>
              </Content>
            
            </List.Item>

            <List.Item ref={addtoRefs}  id="2">
            <Content className='box2'  xs={24} sm={12} 
            style={{maxWidth:'100vw', padding: '2%'}}
            >
            <div style={{ display: 'flex', alignItems: 'center' }}>
          
                <div style={{ flex: '1 1 50%', marginRight: '20px' }}>
                  <Title className='text1' style={{ fontFamily: 'Poppins', fontSize: '2.5rem', color: '#5733FF' }}>What We Do!</Title>
                </div>
                <div style={{ flex: '1 1 50%' }}>
                  <Paragraph  className='text2' style={{ fontSize: '1rem', textAlign: 'left',paddingLeft:'1%' }}>
                    In today's data-driven world, making informed decisions can be the difference between success and stagnation. With a comprehensive suite of services: Artificial Intelligence (AI), Data Analytics, Business Intelligence (BI), and Software Development.
                  </Paragraph>
                </div>
              </div>
              {/* style={{ zIndex: 1}} */}

              <div style={{marginTop: '5%',zIndex: 1 }}>
                  <CustomCarousel cards={cards} />
            </div>
              </Content>
          </List.Item>
       
            <List.Item  ref={addtoRefs}  id="3">
         
              <Content 
              style={{ maxWidth:'100vw', padding: '2%'}}
              >
                   {/* <div style={{marginTop: '5%' }}> */}

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div  style={{ flex: '1 1 50%', marginRight: '20px' }}>
                          <Title style={{ fontFamily: 'Poppins', fontSize: '2.5rem', textAlign: 'center',color: '#5733FF' }}>Development Process</Title>
                        </div>
                        <div style={{ flex: '1 1 50%' }}>
                          <Paragraph  style={{ fontSize: '1rem', textAlign: 'left',paddingLeft:'1%' }}>
                          We understand that embarking on a data-driven journey can seem daunting. That's why we employ the CRISP-DM methodology, a structured approach that guides us through each stage of the project lifecycle:
                          </Paragraph>
                        </div>
                </div>
                    <Row gutter={[16, 16]} align="top">
                        <Col xs={24} sm={12} style={{ flexDirection: 'column' }}>
                        <div style={{ width: 'auto', height: 'auto' }}>
                          <img src={crips} alt="Description of the image" style={{ maxWidth: '85%', maxHeight: '85%' }} />
                        </div>
                      </Col>
                      <Col xs={24} sm={12} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                          <ProcessWay cards={cards} />
                      </Col>
                      
                    </Row>
                    {/* </div> */}
              </Content>
            </List.Item>
            <List.Item ref={addtoRefs}  id="4">
            <Content   
            style={{maxWidth:'100vw', padding: '2%'}}
            >
              <Row gutter={[16, 16]} align="top">
                <Col xs={24} sm={12} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Title  style={{fontFamily: 'Poppins ', fontSize: '2.5rem' }}>
                    <span style={{ color: '#FFfff' }}>What to expect</span>{' '}
                    <span style={{ color: '#5733FF' }}>from Us!</span>
                  </Title>
                  <Paragraph style={{fontSize: '1.2rem', color: "black" }}>
                    <span style={{ color: '#5733FF' }}>With our very able team,</span>
                    <span style={{ color: 'black' }}>we are dedicated in delivering your project to your standards.</span>
                    <span style={{ color: 'black' }}> Our value isn't limited to building teams but is equally distributed across the project lifecycle.</span>
                    <span style={{ color: '#5733FF' }}> We are basically a custom tech development company.</span>
                      <Card 
                       bordered={false}
                      >
                      <InfiniteScroll
                          dataLength={data.length}
                          next={loadMoreDatax}
                          hasMore={data.length < companyExpectations.length}
                          loader={<Skeleton paragraph={{ rows: 1 }} active />}
                          scrollableTarget="scrollableDiv"
                        >
                        <List
                          itemLayout="horizontal"
                          dataSource={companyExpectations}
                          renderItem={(item, index) => (
                      
                              <List.Item
                                key={index}
                                className="hoverable-list-item"
                              >
                            <Row gutter={[16, 16]}>
                              
                                    <Col span={24}>
                                    <div style={{ color: '#5733FF', marginBottom: '0.5rem', textAlign: 'left' }}>{item.id}. {item.title}</div>
                                  </Col>
                          
                                  <Col span={24}>
                                    <p style={{ textAlign: 'justify' }}>{item.description}</p>
                                  </Col>
                                </Row>
                              </List.Item>
                          )}
                        />
 
                    </InfiniteScroll>

                    </Card>
                  </Paragraph>
            
                </Col>
                <Col xs={24} sm={12} style={{ flexDirection: 'column' }}>
                  <div ref={ContainerRef5} style={{ ...contentStyle }}></div>
                </Col>
              </Row>
              {/* </Card> */}
            </Content>
            </List.Item>
            
            <List.Item  ref={addtoRefs}  id="5" >
            
                <Content
                style={{ 
                  // maxHeight:'100vh'
                  maxWidth:'100vw'
                  ,padding: '2%'
                }}
                >
                  <div>
                  <Title style={{fontFamily: 'Poppins ', fontSize: '2rem',color: '#5733FF' }}>Our Team</Title>
                    <Row gutter={[16, 16]} align="top">
                        {Teams_x.map((team, index) => (
                          <Col key={index} xs={24} sm={12} style={{ flexDirection: 'column' }}>
                              {team.image ? (
                                <Avatar size={120} src={team.image} />
                              ) : (
                                <Avatar size={120} icon={<UserOutlined />} />
                              )}
                            <p style={{color: '#5733FF'}}>{team.name}</p>
                            <p>{team.title}</p>
                          </Col>
                        ))}
                      </Row>
                  </div>
                
            </Content>
            </List.Item>
       
            <List.Item  ref={addtoRefs} id="6">
          
          <Content
              style={{
                //  maxHeight:'100vh',
               maxWidth:'100vw'
               ,padding: '2%' }}
               >
              <Title style={{fontFamily: 'Poppins ', fontSize: '2rem' ,color: '#5733FF' }}>Common Questions</Title>
              <Row gutter={[16, 16]} align="top">
              <Col xs={24} sm={12} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                            
                <div id="scrollableDiv"style={{height:'70vh',overflow: 'auto',padding: '0 16px' }}>
                  <InfiniteScroll dataLength={data.length}next={loadMoreData}hasMore={data.length < x_QA.length} loader={<Skeleton paragraph={{ rows: 1 }} active/>} endMessage={<Divider plain><Text>Contact us for more Questions</Text></Divider>} scrollableTarget="scrollableDiv">
                    <List
                      itemLayout="horizontal"
                      dataSource={data}
                      renderItem={(item, index) => (
                        <List.Item key={index}>
                      <Card style={{ width: "100%" }}>
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Row align="middle">
                              <Col>
                                <Title level={4} style={{ color: '#5733FF' }}>{item.quiz}</Title>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={24}>
                                <Paragraph style={{ textAlign: 'left' }}>{item.answer}</Paragraph>
                              </Col>
                            </Row>
                          </div>
                        </Card>
                        </List.Item>
                      )}
                    />
                  </InfiniteScroll>
                </div>
                </Col>
                <Col xs={24} sm={12} style={{ flexDirection: 'column' }}>
                <div ref={ContainerRef9} style={{ ...contentStyle ,height:'70vh' }}></div>
                </Col>
              </Row> 
              {/* </Card> */}
             </Content>
            </List.Item>
        
        

            {/* <List.Item>

                <Content ref={addtoRefs} id="7" 
                style={{ 
                  maxHeight:'100vh',
                  height:'100%',
                  width: '100%',
                  maxWidth:'100vw',
                  padding: '2%' }}
                >
                  <Title style={{ fontFamily: 'Poppins', fontSize: '2rem', color: '#5733FF' }}>Contact Us</Title>
                  <Row 
                  gutter={[15, 15]} 
                  style={{ display: 'flex' }}>
                    <Col xs={24} sm={12}>
                        <div ref={ContainerRef8} 
                        style={{ ...animStyle }}></div>
                    </Col>
                    <Col xs={24} sm={12}>
                   <Contact />
                    </Col>
                  </Row>
                </Content>
              </List.Item> */}
              <List.Item ref={addtoRefs} id="7">
          
  <Content  style={{ 
     maxHeight:'100vh',
     maxWidth:'100vw'
     ,padding: '2%' }}>
    <Title style={{ fontFamily: 'Poppins', fontSize: '2rem', color: '#5733FF' }}>Contact Us</Title>
    <Row gutter={[15, 15]} style={{ display: 'flex' }}>
      <Col xs={24} sm={24} md={12}>
        <div ref={ContainerRef8} style={{ ...animStyle }}></div>
      </Col>
      <Col xs={24} sm={24} md={12}>
        <Contact />
      </Col>
    </Row>
  </Content>
</List.Item>



          </List>
       
          <Footer style={{ 
            ...footerStyle,
             display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="demo-logo" ref={ContainerRef2} style={{ width: '60px', height: '60px', marginRight: '10px' }}></div>
              <span>©{new Date().getFullYear()} Develop and Maintained by Greatint</span>
            </Footer>

    </Layout>

      </Flex>
   
    </div>
  );
}

export default App;
