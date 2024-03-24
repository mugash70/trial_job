import React, { useState, useEffect } from 'react';
import { List, Layout, Card, Carousel, Typography, Row, Col,Space,Divider, Skeleton } from 'antd';
// import {SettingOutlined,TeamOutlined,FundProjectionScreenOutlined,CheckCircleOutlined, SmileOutlined, BarChartOutlined, RobotOutlined, CodeOutlined, QuestionOutlined,FundViewOutlined  } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye,faRobot,faFaceSmileWink, faBriefcase, faListCheck, faMicrochip, faMagnifyingGlass, faPersonWalking} from  '@fortawesome/free-solid-svg-icons' ;

import InfiniteScroll from 'react-infinite-scroll-component';

const { Title,Paragraph,Text } = Typography;

const cardStyle = {
    border: 'none', 
    height:'26rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };
  
const x = [
  { name: "Business Understanding", dec: "We begin by collaborating with you to understand your specific needs and business goals.", icon: <FontAwesomeIcon icon={faBriefcase} size="3x" color='#5733FF'/> },
  { name: "Data Understanding", dec: "We explore, clean, and prepare your data, ensuring its accuracy and readiness for analysis.", icon: <FontAwesomeIcon icon={faRobot} size="3x" color='#5733FF'/>},
  { name: "Data Preparation", dec: "We transform the data into a format suitable for modeling and analysis.", icon: <FontAwesomeIcon icon={faListCheck} size="3x" color='#5733FF'/> },
  { name: "Modeling", dec: "We choose and apply the most appropriate data mining techniques to uncover valuable insights.", icon: <FontAwesomeIcon icon={faMicrochip} size="4x" color='#5733FF'/> },
  { name: "Evaluation", dec: "We rigorously assess the model's performance and effectiveness.", icon: <FontAwesomeIcon icon={faMagnifyingGlass} size="3x" color='#5733FF'/> },
  { name: "Deployment", dec: "We integrate the insights and solutions developed into your existing systems for immediate impact.", icon: <FontAwesomeIcon icon={faPersonWalking} size="3x" color='#5733FF'/> },
  { name: "Monitoring", dec: "We continuously monitor and maintain the model, ensuring its ongoing relevance and accuracy.", icon: <FontAwesomeIcon icon={faEye} size="3x" color='#5733FF' /> },
];
 const ProcessWay = () => {
  const [data, setData] = useState(x.slice(0, 3)); 
  const [hasMore, setHasMore] = useState(true); 
  const loadMoreData = () => {
    setTimeout(() => {
      const newData = x.slice(data.length, data.length + 3); 
      setData([...data, ...newData]); 
      if (data.length + 3 >= x.length) {
        setHasMore(false); 
      }
    }, 1000);
  };
      return (
        <>
        {/* <div
          id="scrollableDiv"
          style={{
            height: 400,
            overflow: 'auto',
            // padding: '0 16px',
            // marginRight:'15%',
            marginTop:'5%'
          }} */}
        {/* > */}
         <div id="scrollableDiv"style={{height:'70vh',overflow: 'auto',padding: '0 16px' }}>
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < x.length}
        loader={
          <Skeleton
            avatar
            paragraph={{ rows: 1 }}
            active
          />
        }
        endMessage={<Divider plain><Text>It is all, nothing more </Text><FontAwesomeIcon icon={faFaceSmileWink}  size="4x" color='#5733FF'/></Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item key={index}>
           <Card style={{ width: "100%" }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Row align="middle">
                  <Col >
                    <div style={{ marginRight: 16 }}>{item.icon}</div>
                  </Col>
                  <Col style={{ marginLeft: 16 }}>
                    <Title level={4}>{item.name}</Title>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Paragraph style={{ textAlign: 'left' }}>{item.dec}</Paragraph>
                  </Col>
                </Row>
              </div>
            </Card>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
        </>
      );
    };

    export default ProcessWay;