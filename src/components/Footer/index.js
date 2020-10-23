import './Footer.less';
import React, { Component } from 'react';
import { Layout, Row, Col, } from 'antd';
import {
    FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined 
} from '@ant-design/icons';

const {  Footer,  } = Layout;

export default class FooterComp extends Component {
    render() {
        return (
            <Footer>
                <div className='container'>
                    <Row>
                        <Col xs={{ span: 24, }} lg={{ span: 6,  }} md={{span: 6}}>
                            <img width="200" style={{padding: 20}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTcuMzkxIiBoZWlnaHQ9IjM0MC40ODQiIHZpZXdCb3g9IjAgMCAzNTcuMzkxIDM0MC40ODQiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOm5vbmU7c3Ryb2tlOiNmZmY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5ie2ZpbGw6I2ZmZjt9LmN7ZmlsbDojNDgzZjkyO308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2LjM2NyAtMTI5Ljg5NSkiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjAwKSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIzNTUuMzQyIiBoZWlnaHQ9IjI2MS44NTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzMDYuODY3IDEzMC4zOTUpIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik0yMzA2Ljg2NywzOTIuMjUyaDc1LjM0M3M1Mi40NzQsMi42NDMsODIuNDIyLTI3LjkzNWMyNS4wNDEtMjcuMzA3LDEzLjU5MS02MS4wMywxMy41OTEtNjEuMDNzLTguOC0zNy4zNzYtNzAuMy00OC4wNjR2LTEuNDA2czMyLjE4Ny00LjAzMSw1MC0yNC4wMzFjMS42MjUtMS44NzUsMTMuNDM3LTEzLjEyNSwxNC0zNi4zMTMsNi45MzctMzAuNjg3LDIwLjg3NS00MiwyMC44NzUtNDJzMTQtMTUuMDYyLDUyLTExLjM3NVYzOTIuMjUyaDM5LjIyNlYxNDAuMjE4czI5LjczOC0zLjQ2LDQ3LjQ3MSw3Ljg1MmMxOC4xNzcsMTAuMjc0LDI0LjMsMzcuNzg4LDI0LjMsMzcuNzg4YTE4MS45NzUsMTgxLjk3NSwwLDAsMSw0LjIsMjAuN3MxLjU1Miw5LjA4MSwyLjIxNCwxNi4zNjlWMTMwLjRIMjQ2My42MjNsLTEuNTQ3LDI4LjI3NXMtMTcuNTM2LTI3LjMzLTc0LjEtMjguMjc5aC04MS4xMDlaIi8+PHBhdGggY2xhc3M9ImMiIGQ9Ik0yMzQ2LjA2LDEzOS43ODJoMjkuODc4czE2LjI5LjA1OSwyOC4wMiwzLjI4MmM5Ljc1NywyLjYxMywxNC43MjIsNy4xNzIsMTQuNzIyLDcuMTcyczcuMTEzLDUuNzQ4LDEwLjEsMTcuMTg4YzIuNTg0LDkuMDU4LDIuODE3LDIwLjE0OSwyLjgxNywyMC4xNDlhMTY1Ljg3MiwxNjUuODcyLDAsMCwxLS43MjYsMjEuMTM2Yy0xLjMwNywxNC4xNC02LjE4NSwyMi43OTMtNi4xODUsMjIuNzkzYTMzLjE1MiwzMy4xNTIsMCwwLDEtMjEuMjgzLDE2LjA1NXMtOS43LDMuMTk0LTI1LjQwNSwzLjI4Yy0xLjQ4MS0uMDI5LTMxLjk0MiwwLTMxLjk0MiwwWiIvPjxwYXRoIGNsYXNzPSJjIiBkPSJNMjM0Ni4wNiwyNTkuNTc3SDIzNzcuN3MxNy4yNDcuMDY2LDI5LjY2OSwzLjYxOGMxMC4zMywyLjg4MSwxNS41ODYsNy45LDE1LjU4Niw3LjlzNy41MzUsNi4zMzQsMTAuNywxOC45NDNjMi43MzYsOS45ODQsMi45ODIsMjIuMjA5LDIuOTgyLDIyLjIwOWExOTAuMjIzLDE5MC4yMjMsMCwwLDEtLjc2OSwyMy4yOTRjLTEuMzg0LDE1LjU4NC02LjU0OCwyNS4xMjEtNi41NDgsMjUuMTIxYTM1LjUxMiwzNS41MTIsMCwwLDEtMjIuNTM2LDE3LjdzLTEwLjI2NywzLjUxOS0yNi45LDMuNjE0Yy0xLjU2OC0uMDMyLTMzLjgyMSwwLTMzLjgyMSwwWiIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIwMCkiPjxwYXRoIGNsYXNzPSJiIiBkPSJNMjM1MS43NzgsNDU1LjA1OWMwLDkuNzE5LTYuODM3LDE1LjA3My0yMC44MzgsMTUuMDczaC0yNC40NjNWNDEyLjQ3NWgyMi44MTVjMTEuODYsMCwxOS4zNTYsNC45NDIsMTkuMzU2LDE0LjU3OSwwLDcuNDEzLTQuNDQ4LDExLjg2MS0xMS4zNjcsMTMuNTA4QzIzNDYuOTE4LDQ0MS44OCwyMzUxLjc3OCw0NDYuNzQsMjM1MS43NzgsNDU1LjA1OVptLTQzLjY1NS00MS4wMTl2MjYuMDI4aDIxLjVjMTAuOTU1LDAsMTcuMzgtNC40NDgsMTcuMzgtMTMuMDE0cy02LjQyNS0xMy4wMTQtMTcuMzgtMTMuMDE0Wm00Mi4wMDgsNDEuMDE5YzAtOS4zMDgtNi41OS0xMy40MjYtMTguODYyLTEzLjQyNmgtMjMuMTQ2djI2LjkzNGgyMy4xNDZDMjM0My41NDEsNDY4LjU2NywyMzUwLjEzMSw0NjQuMzY2LDIzNTAuMTMxLDQ1NS4wNTlaIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik0yNDAxLjAyNyw0NDguOGgtMzcuODg4YzAsMTEuNzc4LDguNCwyMC4wMTUsMTkuNjg2LDIwLjAxNSw1LjY4MywwLDExLjExOS0yLjE0MiwxNC41LTYuNTg5bDEuMTU0LDEuMTUzYTE5Ljk4NSwxOS45ODUsMCwwLDEtMTUuNjUsN2MtMTIuMjcyLDAtMjEuMjUxLTguOTc4LTIxLjI1MS0yMS41OHM4LjQtMjEuNSwxOS42ODYtMjEuNWMxMS4yLDAsMTkuNzY3LDguNzMxLDE5Ljc2NywyMS4wODZabS0zNy44ODgtMS41NjVoMzYuMzI0Yy0uNTc2LTEwLjU0My04LjE1NC0xOC4zNjgtMTguMi0xOC4zNjhTMjM2My43MTYsNDM2LjY5MSwyMzYzLjEzOSw0NDcuMjM0WiIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNMjQxMC44MjYsNDY4LjIzN2EyLjE0MSwyLjE0MSwwLDEsMSwyLjE0MiwyLjE0MkEyLjE4MSwyLjE4MSwwLDAsMSwyNDEwLjgyNiw0NjguMjM3WiIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNMjQ2Mi44LDQxNC4wNGgtMjEuNDE1di0xLjU2NWg0NC40Nzh2MS41NjVoLTIxLjQxNnY1Ni4wOTJIMjQ2Mi44WiIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNMjUzMi4yMjgsNDQ1LjAxdjI1LjEyMmgtMS42NDhWNDQ1LjAxYzAtMTAuNTQzLTUuNjgzLTE2LjE0NC0xNS4zMi0xNi4xNDQtMTEuMiwwLTE3Ljk1NSw3LjMzMS0xNy45NTUsMTguMTIxdjIzLjE0NWgtMS42NDlWNDA5LjAxNmgxLjY0OXYyOS45YzIuNTUyLTcuMDg0LDguODEyLTExLjYxNCwxNy44NzMtMTEuNjE0QzI1MjUuNjM5LDQyNy4zLDI1MzIuMjI4LDQzMy40NzksMjUzMi4yMjgsNDQ1LjAxWiIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNMjU4NS4xLDQ0OC44aC0zNy44ODljMCwxMS43NzgsOC40LDIwLjAxNSwxOS42ODUsMjAuMDE1LDUuNjg0LDAsMTEuMTItMi4xNDIsMTQuNS02LjU4OWwxLjE1MywxLjE1M2ExOS45ODMsMTkuOTgzLDAsMCwxLTE1LjY1LDdjLTEyLjI3MywwLTIxLjI1MS04Ljk3OC0yMS4yNTEtMjEuNThzOC40LTIxLjUsMTkuNjg2LTIxLjVjMTEuMiwwLDE5Ljc2OSw4LjczMSwxOS43NjksMjEuMDg2Wm0tMzcuODg5LTEuNTY1aDM2LjMyM2MtLjU3Ni0xMC41NDMtOC4xNTQtMTguMzY4LTE4LjItMTguMzY4UzI1NDcuNzkxLDQzNi42OTEsMjU0Ny4yMTUsNDQ3LjIzNFoiLz48cGF0aCBjbGFzcz0iYiIgZD0iTTI2MTcuMzg3LDQyNy4zdjEuNjQ3aC0uNDk0Yy0xMC4yMTMsMC0xNi4yMjYsNy0xNi4yMjYsMTguMjg2djIyLjloLTEuNjQ3VjQyNy41NDhoMS42NDd2MTEuMDM3QzI2MDMuMDU2LDQzMS40MTksMjYwOC44MjEsNDI3LjMsMjYxNy4zODcsNDI3LjNaIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik0yNjYzLjc1OCw0NDguOGgtMzcuODg5YzAsMTEuNzc4LDguNCwyMC4wMTUsMTkuNjg2LDIwLjAxNSw1LjY4MywwLDExLjExOS0yLjE0MiwxNC41LTYuNTg5bDEuMTUzLDEuMTUzYTE5Ljk4MywxOS45ODMsMCwwLDEtMTUuNjQ5LDdjLTEyLjI3NCwwLTIxLjI1MS04Ljk3OC0yMS4yNTEtMjEuNThzOC40LTIxLjUsMTkuNjg1LTIxLjVjMTEuMiwwLDE5Ljc2OSw4LjczMSwxOS43NjksMjEuMDg2Wm0tMzcuODg5LTEuNTY1aDM2LjMyM2MtLjU3Ni0xMC41NDMtOC4xNTQtMTguMzY4LTE4LjItMTguMzY4UzI2MjYuNDQ1LDQzNi42OTEsMjYyNS44NjksNDQ3LjIzNFoiLz48L2c+PC9nPjwvc3ZnPg==" alt="img"></img>
                            {/* <img src='assets/white_logo.png' width="200" alt='logo' style={{padding: 20}} /> */}
                            <p className="brand-goal">Create experiences with your favourite stars.</p>
                            <div className="social-icons">
                                <FacebookOutlined /> <InstagramOutlined /> <TwitterOutlined /> <YoutubeOutlined />
                            </div>
                        </Col>
                        <Col xs={{ span: 24,  }} lg={{ span: 6,  }} md={{span: 6}}>
                            <h3>Pages</h3>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                            </ul>
                        </Col>
                        <Col xs={{ span: 24,  }} lg={{ span: 6,  }} md={{span: 6}}>
                            <h3>#</h3>
                            <ul>
                                <li>Login</li>
                                <li>Register</li>
                            </ul>
                        </Col>
                        <Col xs={{ span: 24,  }} lg={{ span: 6,  }} md={{span: 6}}>
                            <h3>#</h3>
                            <ul>
                                <li>Terms</li>
                                <li>Privacy</li>
                            </ul>
                        </Col>
                    </Row>
                </div>

            </Footer>
        )
    }
}
