import React from "react";
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import Container from "components/Container";
import TabTitle from "components/TabTitle";
import HooksGuide from "pages/HooksGuide";
import MERNKit from "pages/MERNKit";
import NVFCApp from "pages/nvfcApp";
import SJSIceTeam from "pages/SJSIceTeam";
import SSDTGenApp from "pages/ssdtGenApp";
import Subskribble from "pages/Subskribble";
import ReactSMDE from "pages/ReactSMDE";
import YelpCamp from "pages/YelpCamp";

const Projects = () => (
	<Container>
		<Tabs
			tabBarPosition="top"
			renderTabBar={() => <ScrollableInkTabBar />}
			renderTabContent={() => <TabContent />}
			forceRender={false}
		>
			<TabPane tab={<TabTitle>SJS Ice Team</TabTitle>} key="1">
				<SJSIceTeam />
			</TabPane>
			<TabPane tab={<TabTitle>React SMDE</TabTitle>} key="2">
				<ReactSMDE />
			</TabPane>
			<TabPane tab={<TabTitle>React Hooks Guide</TabTitle>} key="3">
				<HooksGuide />
			</TabPane>
			<TabPane tab={<TabTitle>Subskribble</TabTitle>} key="4">
				<Subskribble />
			</TabPane>
			<TabPane tab={<TabTitle>Full Stack MERN Kit</TabTitle>} key="5">
				<MERNKit />
			</TabPane>
			<TabPane tab={<TabTitle>Yelp Camp</TabTitle>} key="6">
				<YelpCamp />
			</TabPane>
			<TabPane tab={<TabTitle>nvfcApp</TabTitle>} key="7">
				<NVFCApp />
			</TabPane>
			<TabPane tab={<TabTitle>ssdtGen App</TabTitle>} key="8">
				<SSDTGenApp />
			</TabPane>
		</Tabs>
	</Container>
);

export default Projects;
