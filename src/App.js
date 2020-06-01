import React from 'react';
import './App.css';
import SectionTitle from "./components/Section/SectionTitle";
import 'antd/dist/antd.css';
import {Button, DatePicker, Layout} from 'antd';
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import SectionLabel from "./components/Section/SectionItem/SectionLabel";
import SectionSubject from "./components/Section/SectionItem/SectionSubject";
import SectionContent from "./components/Section/SectionItem/SectionContent";
import SectionProject from "./components/Section/SectionItem/SectionProject";

const {Header, Sider, Content} = Layout;

function App() {
    return (
        <div className="App">
            <Layout>
                <Sider width="30%"
                       className="theme-left">
                    <SectionTitle style={{fontSize:22}} title={"ABOUT ME"}/>
                </Sider>
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
                        <SectionLabel time={"(2017 - Present)"}/>
                        <SectionProject name={"TON DUC THANG UNIVERSITY"}/>
                        <SectionSubject name={"SOFTWARE ENGINEERING SUBJECT"}/>
                        <SectionContent
                            content={"In school, I learned Object-oriented programming, Data Structure and Algorithms, System Requirements Specification, Analysis and Design System. "}/>


                        <SectionTitle title={"PROJECTS"}/>
                        <SectionLabel time={"(2019)"}/>
                        <SectionProject name={"FARM TRADER"}/>
                        <SectionSubject name={"SOFTWARE ENGINEERING SUBJECT"}/>
                        <SectionContent
                            content={"My team made an Android application for farmers and traders, help them easy to connect for business. I designed front-end and developed backend API using NodeJS/JavaScript & Firebase."}/>
                        <SectionLabel time={"(2019)"}/>
                        <SectionProject name={"QUICK SHARE"}/>
                        <SectionSubject name={"WEB DEVELOPMENT AND APPLICATION SUBJECT"}/>
                        <SectionContent
                            content={"My team created our website to share documents, music, photos… and finished in 2019. I designed front-end using the Bootstrap framework. "}/>

                        <SectionLabel time={"(2019)"}/>
                        <SectionProject name={"DATABASE FOR MANAGER CANDIDATES"}/>
                        <SectionSubject name={"DATABASE SUBJECT "}/>
                        <SectionContent
                            content={"I built a database to manage candidates who registered singercompetition."}/>

                        <SectionLabel time={"(2020)"}/>
                        <SectionProject name={"CO-WORKS"}/>
                        <SectionSubject name={"MOBILE APPS DEVELOPMENT SUBJECT"}/>
                        <SectionContent
                            content={"My team made an app is called “Co-works” using the React Native framework. I design UI and front-end of app "}/>
                        <br/>
                        <SectionTitle title={"CERTIFICATES"}/>
                        <SectionContent content={"Agile & Scrum Methodology certificate by DEK Technologies"}/>
                        <br/>
                        <SectionTitle title={"HOBBIES"}/>
                        <SectionContent content={"Coffee and code, read comic, learn new technologies, play game."}/>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}

//TODO add section item, sider(29/5/2020)

export default App;
