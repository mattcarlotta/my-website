import React, { Fragment } from "react";
import Center from "components/Center";
import GlobalStyles from "styles/theme/globalStyles";
import Header from "components/Header";
import LandingContainer from "components/LandingContainer";
import Headline from "components/Headline";
import SubHeadline from "components/SubHeadline";
import Projects from "components/Projects";
import Wrapper from "components/Wrapper";

const Root = () => (
	<Fragment>
		<GlobalStyles />
		<Wrapper>
			<LandingContainer>
				<Header />
				<Center style={{ paddingTop: 35 }}>
					<Headline>MATT CARLOTTA</Headline>
					<SubHeadline>
						full stack web developer and commercial artist
					</SubHeadline>
				</Center>
				<Projects />
			</LandingContainer>
		</Wrapper>
	</Fragment>
);

export default Root;
