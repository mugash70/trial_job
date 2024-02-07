import React,{useEffect,useRef}from 'react';
import { Card, Typography, Row, Col } from 'antd';
import { BarChartOutlined, LineChartOutlined, CodeOutlined } from '@ant-design/icons';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const { Title, Paragraph } = Typography;
const ProcessCard = ({ icon, title, description }) => {
  const cardRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const description = descriptionRef.current;

    const tl = gsap.timeline();

    // Initial state
    tl.set(description, { opacity: 0, y: 20 });

  //   // Hover animation
  //   const handleMouseEnter = () => {
  //     tl.to(description, { opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' });
  //   };

  //   // Hover out animation
  //   const handleMouseLeave = () => {
  //     tl.to(description, { opacity: 0, y: 20, duration: 0.3, ease: 'power1.inOut' });
  //   };

  //   card.addEventListener('mouseenter', handleMouseEnter);
  //   card.addEventListener('mouseleave', handleMouseLeave);

  //   return () => {
  //     card.removeEventListener('mouseenter', handleMouseEnter);
  //     card.removeEventListener('mouseleave', handleMouseLeave);
  //   };
  }, []);

  const handleClick = () => {
    const card = cardRef.current;
    const tl = gsap.timeline();
    gsap.to(card, {
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 100, y: 0 },
          { x: 100, y: 100 },
          { x: 0, y: 100 },
          { x: 0, y: 0 },
        ],
        align: 'self',
        autoRotate: true,
        curviness: 2,
      },
      duration: 2,
      onComplete: () => {
        console.log("doem");
        gsap.set(descriptionRef.current, { opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' });
        // tl.to(description, { opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' });
      },
    });
  };

  return (
    <Card
      ref={cardRef}
      style={{ borderRadius: '50%', padding: '17px', width: '160px', height: '160px', textAlign: 'center' }}
      onClick={handleClick}
      shadow
    >
      {icon}
      <Paragraph className="card-paragraph" ref={descriptionRef} style={{ fontSize: '14px', opacity: 0, marginTop: '10px' }}>
        {title}
      </Paragraph>
    </Card>
  );
};
// const ProcessCard = ({ icon, title, description }) => {

//   const cardRef = useRef(null);

//   useEffect(() => {
//     const card = cardRef.current;
//     const paragraph = card.querySelector('.card-paragraph');
//     const tl = gsap.timeline();

//     // Initial state
//     tl.set(paragraph, { opacity: 0, y: 20 });

//     // Hover animation
//     const handleMouseEnter = () => {
//       tl.to(paragraph, { opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' });
//     };

//     // Hover out animation
//     const handleMouseLeave = () => {
//       tl.to(paragraph, { opacity: 0, y: 20, duration: 0.3, ease: 'power1.inOut' });
//     };

//     card.addEventListener('mouseenter', handleMouseEnter);
//     card.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       card.removeEventListener('mouseenter', handleMouseEnter);
//       card.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   return (
//     <Card
//     ref={cardRef}
//     style={{ borderRadius: '50%', padding: '25px', width: '150px', height: '150px', textAlign: 'center' }}
//   >
//     {icon}
//     <Paragraph className="card-paragraph" style={{ fontSize: '10px', opacity: 0, marginTop: '10px' }}>
//       {title}
//       <br />
//       {/* {description} */}
//     </Paragraph>
//   </Card>
//   );
// };

const Arrow = () => (
  
  <>
    <svg height="100" width="100">
      <path d="M10 50 Q50 10 90 50" fill="none" stroke="black" strokeWidth="5" />
      {/* <polygon points="90,50 85,45 85,55" fill="black" /> */}
    </svg>
  </>

);

export const ProcessWay = () => {



  const dataAnalysisSteps = [
    {
      icon: <BarChartOutlined style={{ fontSize: '24px', color: 'blue' }} />,
      title: 'Problem Definiton',
      description: 'Gather relevant data from various sources for analysis.',
    },
    {
      icon: <LineChartOutlined style={{ fontSize: '24px', color: 'green' }} />,
      title: 'Data Collection',
      description: 'Clean and transform the data to prepare it for analysis and modeling.',
    },

    {
      icon: <CodeOutlined style={{ fontSize: '24px', color: 'purple' }} />,
      title: 'Design',
      description: 'Build machine learning or statistical models based on the processed data.',
    },
  
    {
        icon: <CodeOutlined style={{ fontSize: '24px', color: 'purple' }} />,
        title: 'Development',
        description: 'Build machine learning or statistical models based on the processed data.',
      },

      {
        icon: <CodeOutlined style={{ fontSize: '24px', color: 'purple' }} />,
        title: 'Deployment',
        description: 'Build machine learning or statistical models based on the processed data.',
      },
  ];

  
  return (
    <div className="process-container">
     <Row style={{ justifyContent: 'space-between', }}>
        {dataAnalysisSteps.map((step,index) => (
          <>
          <ProcessCard {...step} />
          {index < dataAnalysisSteps.length - 1 && <Arrow key={`arrow-${index}`} />}
          </>
       
        ))}
      </Row>
    </div>
  );
};

export default ProcessWay;




