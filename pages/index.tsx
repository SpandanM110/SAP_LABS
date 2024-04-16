import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";


import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";


import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="MitiGrater - Service Better"
        description="Optimizing disaster response through AI-driven insights and innovative solutions. Prioritizing resources, enhancing coordination, and increasing resilience."
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <TestimonialsSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Mitigrater
                <Br /> Service Better 
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Optimizing disaster response through AI-driven insights and innovative solutions. Prioritizing resources, enhancing coordination, and increasing resilience.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              
              <br />
              <br />

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="#">
                  Test Now
                </ButtonLink>
                
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  layout="fixed"
                  width={800}
                  height={900}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, null, 2]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Improved Response Time",
            description: "By leveraging AI-driven insights, emergency responders can prioritize and allocate resources more effectively, reducing response time and saving lives.",
            tags: ["AI", "Emergency Response", "Resource Allocation"],
            delay: 0.6,
          },
          {
            title: "Enhanced Coordination",
            description: "The optimized architecture facilitates better coordination and communication among response teams, government agencies, and humanitarian organizations, leading to a more cohesive and efficient response effort.",
            tags: ["Communication", "Coordination", "Efficiency"],
            delay: 0.8,
          },
          {
            title: "Resilience",
            description: "By iteratively refining the architecture based on feedback and lessons learned from each disaster event, the system becomes more resilient and adaptable to future challenges.",
            tags: ["Adaptability", "Feedback Loop", "Continuous Improvement"],
            delay: 1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Solution Approach">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Input Data: Utilize historical disaster data, geographical information, infrastructure maps, and real-time weather updates.
          </Text>
          <Text color="muted" fontSize="xl">
            AI Analysis: The AI platform analyzes the data to understand past disaster patterns, vulnerable areas, and resource availability.
          </Text>
          <Text color="muted" fontSize="xl">
            Architectural Proposals: Based on the analysis, the AI generates architectural proposals for optimizing disaster response, including efficient resource allocation, evacuation route planning, and communication strategies.
          </Text>
          <Text color="muted" fontSize="xl">
            Prototype and Test: Developers prototype and test selected architectural proposals within short sprints, focusing on key aspects such as real-time data integration, decision support systems, and mobile applications for field workers.
          </Text>
          <Text color="muted" fontSize="xl">
            Feedback Loop: Throughout the process, the AI platform continuously gathers feedback from emergency responders, government agencies, and affected communities to refine the architectural solutions.
          </Text>
          <Text color="muted" fontSize="xl">
            Deployment: Upon successful validation, the optimized disaster response architecture is deployed and integrated into existing emergency management systems.
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Impact">
        <Text color="muted" fontSize="lg">
          Improved Response Time: By leveraging AI-driven insights, emergency responders can prioritize and allocate resources more effectively, reducing response time and saving lives.
        </Text>
        <Text color="muted" fontSize="lg">
          Enhanced Coordination: The optimized architecture facilitates better coordination and communication among response teams, government agencies, and humanitarian organizations, leading to a more cohesive and efficient response effort.
        </Text>
        <Text color="muted" fontSize="lg">
          Resilience: By iteratively refining the architecture based on feedback and lessons learned from each disaster event, the system becomes more resilient and adaptable to future challenges.
        </Text>
      </HighlightsItem>
      
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          New Features Integration
        </Heading>
      }
      description={
        <>
          Integrate new features like social media monitoring, remote telemedicine services, and climate change adaptation strategies.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Social Media Monitoring",
          description:
            "Integrate social media monitoring tools to gather real-time information and public sentiment during disaster events. Analyzing social media data can provide valuable insights into the needs and concerns of affected communities, enabling more targeted response efforts and improved communication strategies.",
          tags: ["Social Media", "Real-time Information", "Public Sentiment"],
        },
        {
          title: "Remote Telemedicine Services",
          description:
            "Establish remote telemedicine services to provide medical assistance to disaster-affected areas where access to healthcare facilities may be limited. Using telemedicine platforms, healthcare professionals can remotely diagnose and treat patients, reducing the strain on local healthcare systems and improving outcomes for those in need of medical care.",
          tags: ["Telemedicine", "Medical Assistance", "Healthcare"],
        },
        {
          title: "Climate Change Adaptation Strategies",
          description:
            "Integrate climate change adaptation strategies into disaster response planning to address the increasing frequency and intensity of extreme weather events. This could involve implementing green infrastructure projects, promoting sustainable land use practices, and investing in resilient infrastructure to mitigate the impact of future disasters.",
          tags: ["Climate Change", "Adaptation Strategies", "Resilient Infrastructure"],
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;
