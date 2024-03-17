import React, { useRef, useEffect } from 'react';
import { Card, Typography, Row, Divider } from 'antd';
import { GoogleOutlined, LinkedinOutlined, GithubOutlined, PhoneOutlined } from '@ant-design/icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const { Title } = Typography;

const ProcessWay = () => {
    const ref = useRef([]);

    useEffect(() => {
        ref.current.forEach((el) => {
            gsap.fromTo(el, { autoAlpha: 0 }, {
                autoAlpha: 1,
                left: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }, []);

    const addtoRefs = (el) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    };

    return (
        <Card style={{ height: '80%' }}>
            <Row justify="center" align="middle" ref={addtoRefs}>
                <Title style={{ marginRight: '8px' }} level={3}><GoogleOutlined /></Title>
                <a href="mailto:greatint@gmail.com"><Title level={4}>Greatint@gmail.com</Title></a>
            </Row>
            <Divider />
            <Row justify="center" align="middle" ref={addtoRefs}>
                <Title style={{ marginRight: '8px' }} level={3}><PhoneOutlined /></Title>
                <a href="tel:+254796889020"><Title level={4} >+254796889020</Title></a>
            </Row>
            <Divider />
            <Row justify="center" align="middle" ref={addtoRefs}>
                <Title style={{ marginRight: '8px' }} level={3}><LinkedinOutlined /></Title>
                <a href="https://www.linkedin.com/company/greatint" target="_blank" rel="noopener noreferrer"><Title level={4}>@Greatint</Title></a>
            </Row>
            <Divider />
            <Row justify="center" align="middle" ref={addtoRefs}>
                <Title style={{ marginRight: '8px' }} level={3}><GithubOutlined /></Title>
                <a href="https://github.com/Greatint" target="_blank" rel="noopener noreferrer"><Title level={4} >Greatint</Title></a>
            </Row>
        </Card>
    );
};

export default ProcessWay;
