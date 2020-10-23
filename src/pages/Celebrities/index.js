import './Celebrities.less';
import React from 'react'
import { Row, Col,Typography,Card,Divider ,Avatar, Space} from 'antd';
import Video from '../../components/VideoPlayer';
import Chatbox from '../../components/Chatbox';
import Header from "../../components/HeaderCelebrities";
import {CaretRightOutlined} from '@ant-design/icons';

const { Title,Text } = Typography;
const { Meta } = Card;
// const recomVideos=[1, 2, 3, 4];
const recomVideos=[{id:1,name:"Kiran Kumar",imgSrc:"kiran",description:"Model,Actor"},
{id:2,name:"Remo Kumar",imgSrc:"remo",description:"Model,Actor"},
{id:3,name:"Akki Kumar",imgSrc:"Akki",description:"Model,Actor"},
{id:4,name:"David Mohan",imgSrc:"Davind",description:"Choreographer"},];
const videos=[{id:1,name:"Shakti Kapoor",imgSrc:"shakti",description:"Model,Actor"},
{id:2,name:"Kiran Kumar",imgSrc:"kumar",description:"Model,Actor"},
{id:3,name:"Akshay Kumar",imgSrc:"Aksh",description:"Model,Actor"},
{id:4,name:"Dinesh Mohan",imgSrc:"dine",description:"Choreographer"},
{id:5,name:"Shakti Mohan",imgSrc:"shak",description:"Dancer,Actor"},
{id:6,name:"Mukti",imgSrc:"mukti",description:"Actor"},
{id:7,name:"Kiran Kher",imgSrc:"kher",description:"Model/Actor"},
{id:8,name:"Salman",imgSrc:"salman",description:"Dancer"}
];
const style = { background: '#0092ff', padding: '8px 0' };
const Recommendations=recomVideos.map((x,index)=>
<Col xs={24} sm={12} md={8} lg={6} xl={6} key={x.id}>
 <Card
    hoverable
    style={{ width: "auto"}}
    size="small" bordered={false}
    cover={<img alt="example" src={(`https://picsum.photos/id/1${x.id}/200`)}/>}
  >
    <Meta title={x.name} description={x.description} />
  </Card></Col>
        );
        const videoGrid=videos.map((x,index)=>
        <Col xs={24} sm={12} md={8} lg={6} xl={6} className="gutter-row">
        <Card
    hoverable
    style={{ width: "auto"}}
    size="small" bordered={false}
    cover={<img alt="example" src={(`https://picsum.photos/id/2${x.id}/200`)}/>}
  >
    <Meta title={x.name} description={x.description} />
  </Card></Col>
                );
        

const Celebrities=()=>{
return(
    <div className="clebritiesContent">
          {/* <Header /> */}
    <div className="clebrities">
    <Row gutter={[1, 8]} >
      <Col  xs={24} sm={12} md={16} lg={16} xl={16}><Video/>
                <div>
        <Title level={3}>Lorem Ipsum is dummy text </Title>
        <Text type="secondary">8956748 views</Text>
        <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}/>
        </div>
      </Col>
      <Col  xs={24} sm={12} md={8} lg={8} xl={8} height="370px"><Chatbox/></Col>
    </Row>
    <Row gutter={[16, 16]} >
    <Col span={24} >
        <Space>
        <Title level={3} type="primary">My Recommendations <Avatar size="small"  icon={<CaretRightOutlined />} style={{background:"#483f92"}}/></Title>
        </Space>
        </Col>
        </Row>

        <Row  justify="space-around" style={{border:"1px solid #f0f0f0",padding:"10px"}} gutter={[16, 16]}>
                    {Recommendations}
    </Row>
    <Row gutter={[16, 16]} justify="space-between" >
                    {videoGrid}
    </Row>
    </div>
    </div>
)
}
export default Celebrities;