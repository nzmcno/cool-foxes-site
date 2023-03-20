import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import DrawSvg from "../DrawSvg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-color: lightblue;

  @media (max-width: 48em) {
    width: 90%;
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: start;
    @media (max-width: 48em) {
      justify-content: center;
    }
    div {
      border-radius: 50px 0 50px 0;
      text-align: right;
      @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
        text-align: left;
        p {
          border-radius: 0 40px 0 40px;
        }
      }
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }
  & > *:nth-of-type(2n) {
    justify-content: end;
    @media (max-width: 48em) {
      justify-content: center;
    }
    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`;
const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 70%;
  }
`;

const Box = styled.p`
  height: fit-content;
  background-color: ${(props) => props.theme.carouselColor};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
`;
const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;

const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  font-weight: 400;
  margin: 0.5rem 0;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

function SubTextCom({ items }) {
  return items.map((item) => (
    <Text>
      <b>{item.id}.</b> {item.name}
      {"\n"}
    </Text>
  ));
}

const RoadmapItem = ({ title, items, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <SubTextCom items={items} />
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Roadmap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-30%",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom center",
            scrub: true,
            //markers: true,
          },
        }
      );
    });
    return () => {};
  }, []);

  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadmapItem
            title="Building"
            addToRef={addToRefs}
            items={[
              { id: "1", name: "Launch of Discord, twitter & website" },
              { id: "2", name: "Delivery of artwork" },
              {
                id: "3",
                name: "Recruitment and strengthening of our core team",
              },
              { id: "4", name: "Community Building / Marketing Campaign" },
              { id: "5", name: "Sneak Peaks" },
              {
                id: "6",
                name: "Announcement of official mint price & collection size",
              },
              { id: "7", name: "Smooth mint of our NFT collection." },
              {
                id: "8",
                name: "Addition of our first utility for community members to utilize",
              },
              { id: "9", name: "Close deal for our IRL Smoke Shop. Date TBA" },
            ]}
          />
          <RoadmapItem
            title="Holder payouts and Giveaways"
            addToRef={addToRefs}
            items={[
              {
                id: "1",
                name: "Live streamed grand opening of the Smoke Shop",
              },
              {
                id: "2",
                name: "Investing a percentage of mint funds back into Puffsterz",
              },
              {
                id: "3",
                name: "Collaborations with like minded projects to expand our network",
              },
              { id: "4", name: "Marketing & strengthening the brand" },
              {
                id: "5",
                name: "Implementation of our TOE ( Task Oriented Earning ) protocol to reward holders from IRL Smoke Shop.",
              },
              {
                id: "6",
                name: "Building a strong Dao",
              },
              {
                id: "7",
                name: "Online store access for holders to purchase IRL items. Discount % for holders with x amount of Puffsterz NFTs TBD.",
              },
            ]}
          />
          <RoadmapItem
            title="Branding"
            addToRef={addToRefs}
            items={[
              {
                id: "1",
                name: "Building IRL & website store perks for holders",
              },
              { id: "2", name: "Puffsterz merch branding" },
              {
                id: "3",
                name: "Early merch access to holders of X amount of Puffsterz NFT TBD",
              },
              {
                id: "4",
                name: "Early access to 1/1 airdrops to holders of X amount of Pufftserz NFT TBD",
              },
              { id: "5", name: "Tokenomics" },
            ]}
          />
          <RoadmapItem
            title="Staking platform released"
            addToRef={addToRefs}
            items={[
              { id: "1", name: "Release our project utility token" },
              {
                id: "2",
                name: "Early staking platform access to O.G' s & WL minters",
              },
              {
                id: "3",
                name: "Release of our staking platform to all holders/investors",
              },
              {
                id: "4",
                name: "Release of additional utility ( TBA ) + Platform for token use + burning mechanisms",
              },
              { id: "5", name: "Art upgrade" },
              {
                id: "6",
                name: "Search for second IRL Smoke Shop",
              },
              {
                id: "7",
                name: "Release of the RM 2.0 and announcing second collection details",
              },
            ]}
          />
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;
