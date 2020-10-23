// import './Video.less';
import React,{useState} from 'react';
import './Video.css';
import { Comment, Avatar, Form, Button, List, Input ,Row, Col,Affix,Space} from 'antd';
import moment from 'moment';

import { SmileTwoTone,SendOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const Pageheader = () => {
    const [top, setTop] = useState(10);
    const [bottom, setBottom] = useState(10);
    return (
      <>
        <Affix offsetTop={top}>
        <Row className="pageHeader" align="middle" justify="center" style={{textAlign:"center",borderLeft:"2px solid white"}}>
      <Col span={24}>
          <Space>
          Welcome To The Chatroom
</Space>
          </Col>
    </Row>
        </Affix>
      </>
    );
  };

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    style={{minHeight:"370px",background: "#ffffff",overflow:"hidden",margin:"0px 15px"}}
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
  <div style={{ position:"absoltue",bottom:"0px",background:"#463e93",padding:"1px 10px",position: "absolute",
    bottom: "16px"}} className="commentBox">
<Input prefix={<SmileTwoTone twoToneColor="#463e93"/>} onChange={onChange} value={value}
 suffix={<SendOutlined htmlType="submit" loading={submitting} onClick={onSubmit} type="primary" rotate={-45}/> }
  defaultValue="Comment"
  style={{borderRadius:"30px"}}
  />
    </div>
    {/* <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item> */}
  </>
);

class Chatbox extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <><Pageheader/>
        { <CommentList comments={comments} />}
        <Comment
        //   avatar={
        //     <Avatar
        //       src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        //       alt="Han Solo"
        //     />
        //   }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </>
    );
  }
}
export default Chatbox;
