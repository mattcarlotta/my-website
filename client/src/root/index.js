import React, { Fragment } from "react";
import Center from "components/Center";
import GlobalStyles from "styles/theme/globalStyles";
import Header from "components/Header";
import Footer from "components/Footer";
import Wrapper from "components/Wrapper";
import Headline from "components/Headline";
import SubHeadline from "components/SubHeadline";
import Projects from "components/Projects";
import Background from "components/Background";

const Root = () => (
	<Fragment>
		<GlobalStyles />
		<Background />
		<Wrapper>
			<Header />
			<Center>
				<Headline>MATT CARLOTTA</Headline>
				<SubHeadline>
					full stack web developer and commercial artist
				</SubHeadline>
			</Center>
			<Projects />
		</Wrapper>
		<Footer />
	</Fragment>
);

export default Root;
