import React from 'react';
import './App.css';
import SectionTitle from "./components/Section/SectionTitle";
import 'antd/dist/antd.css';
import {Button, DatePicker, Layout} from 'antd';
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import SectionLabel from "./components/Section/SectionItem/SectionLabel";

const {Header, Sider, Content} = Layout;

function App() {
    return (
        <div className="App">
            <Layout>
                <Sider width="30%" className="theme-left">Sider</Sider>
                <Layout>
                    <Content className="theme-right" style={{paddingTop: 30}}>
                        <Title style={{color: "#007ac1", letterSpacing: 2, marginBottom: 0}}>TRUONG THI HUYNH
                            NHU</Title>
                        <Title style={{color: "#607d8b", letterSpacing: 8, marginTop: 0, marginBottom: 0}} level={3}>SOFTWARE
                            INTERNSHIP</Title>
                        <Title level={4} style={{color: "#8eacbb", marginTop: 0}}>0965459714 |
                            tth.nhu213@gmail.com</Title>
                    </Content>
                    <Content className="theme-right" style={{paddingTop: 30}}>
                        <SectionTitle title={"EDUCATION"}/>
                        <SectionLabel time={"(2017 - Present)   "}/>
                        <SectionTitle title={"PROJECTS"}/>
                        <SectionTitle title={"CERTIFICATES"}/>
                        <SectionTitle title={"HOBBIES"}/>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}
//TODO add section item, sider(29/5/2020)

export default App;
