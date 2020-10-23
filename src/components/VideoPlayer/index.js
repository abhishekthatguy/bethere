// import './Video.less';
import './Video.css';
import React,{useState} from 'react';
import { Row, Col,Affix,Space} from 'antd';
import VideoPlayer from 'react-video-js-player';
import vidoSrc from "./assets/yejodesh.mp4";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Pageheader = () => {
    const [top, setTop] = useState(10);
    const [bottom, setBottom] = useState(10);
    return (
      <>
        <Affix offsetTop={top}>
        <Row className="pageHeader">
      <Col span={24}>
          <Space>
          <Avatar icon={<UserOutlined />} className="userIcon"/>
            <span>XYZ
            
            <br/>
            867 Followers</span>
</Space>
          </Col>
    </Row>
        </Affix>
      </>
    );
  };

const Video=()=>{
    const videoSrc=vidoSrc;
    const poster="https://cdn.pixabay.com/photo/2020/04/18/18/18/door-5060421_960_720.jpg";
    return(
        <div className="video-Container">
             <Row>
            <Col span={24}><Pageheader/></Col>
          </Row>
            <VideoPlayer src={videoSrc}
            poster={poster}
            width="620"
            height="370" 
            playbackRates={[0.5,1,3.85,16]}
            />
        </div>
    )
}
export default Video;
