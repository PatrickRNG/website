import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useMediaQuery } from 'react-responsive';

import '../styles/index.scss';
import Layout from '../components/layout/layout';
import Head from '../components/head';
import Post from '../components/post/post';
import Object3D from '../components/object3D/object3D';
import {
  Roles,
  Section,
  H1,
  BoldHeader,
  P,
  Flex,
  AboutSection,
  BlogSection,
  BlogWrapper,
  ContactSection,
  TwoWrapper,
  Subtitle,
  SocialTitle,
  CenterDivisor,
  Separator,
  HeadWrapper,
  MainHeader,
} from '../styles/main';

const IndexPage = () => {
  const {
    site: {
      siteMetadata: { socialMedia },
    },
    allMdx: { edges },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socialMedia {
            linkedin
            twitter
            instagram
            github
            email
          }
        }
      }
      allMdx(
        filter: { frontmatter: { published: { eq: true } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              author
              subtitle
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const maxLaptopL = useMediaQuery({ query: '(max-width: 1440px)' });
  const maxLaptop = useMediaQuery({ query: '(max-width: 1024px)' });
  const maxTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const maxMobileL = useMediaQuery({ query: '(max-width: 425px)' });
  const maxMobileM = useMediaQuery({ query: '(max-width: 375px)' });

  const render3DHead = () => {
    if (maxMobileM) return null;
    if (maxMobileL) return <Object3D fov={55} />;
    if (maxTablet) return <Object3D fov={35} />;
    if (maxLaptop) return <Object3D fov={35} />;
    if (maxLaptopL) return <Object3D fov={30} />;
  };

  return (
    <Layout>
      <Head title="Home" />
      <Section
        style={{
          height: 'calc(100vh - 95px)',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <MainHeader>
          <BoldHeader>
            Hi,
            <br />
            I’m Patrick,
            <br />
            web developer.
          </BoldHeader>
          <Roles>Front End / Back End / Fullstack / UI &amp; UX</Roles>
        </MainHeader>
        <HeadWrapper>{render3DHead()}</HeadWrapper>
      </Section>
      <Separator id="about" />
      <AboutSection>
        <H1>About me</H1>
        <P>
          I’ve always been in the technology side since I was a kid, studying
          Pretty much anything related to that in the course of my life and
          career, like game-development, 3D modeling, animation, music, motion
          design and UX/UI, I consider myself as a fast learner, picking up new
          skills with relative ease. Today my focus is mostly web related.
        </P>
        <P>
          I’m always in hunger for learning and I consider knowledge the most
          important thing in my life, not only counting the technical side, but
          as a person, always growing with empathy and emotion.
        </P>
        <P>
          Inspiring others is one of my natural talents, as I’m easily inspired
          and I try my best to keep learning with enthusiasm. My energy takes me
          to pursuit many other interests, hobbies and areas of study, like
          investments, philosophy, math, fitness and cooking.
        </P>
        <P>
          Currently I work in a full-time job and interested in
          entrepreneurship, but also looking for some freelancing in my free
          time.
        </P>
      </AboutSection>
      <Separator id="blog" />
      <BlogSection>
        <H1>Blog</H1>
        <BlogWrapper>
          {edges.slice(0, 4).map((edge) => (
            <Post
              title={edge.node.frontmatter.title}
              subtitle={edge.node.frontmatter.subtitle}
              author={edge.node.frontmatter.author}
              date={edge.node.frontmatter.date}
              link={`/blog/${edge.node.fields.slug}`}
            />
          ))}
        </BlogWrapper>
        <Subtitle to="/blog" style={{ marginLeft: '10px', marginTop: '10px' }}>
          See all posts
        </Subtitle>
      </BlogSection>
      <Separator id="contact" />
      <ContactSection>
        <TwoWrapper>
          <div className="left">
            <H1>Contact</H1>
            <P>
              I am interested mostly in small/medium freelance opportunities.
              However, if you need anything else, feel free to also contact me
              using the form below.
            </P>
            <h4 style={{ marginTop: '100px' }}>Coming soon.</h4>
          </div>
          <CenterDivisor />
          {maxLaptop && <Separator id="social" />}
          <div className="right">
            <H1>Social Media</H1>
            <Flex>
              <div>
                <SocialTitle>Twitter</SocialTitle>
                <Subtitle as="a" href={socialMedia.twitter} target="_blank">
                  {socialMedia.twitter}
                </Subtitle>
              </div>
              <div>
                <SocialTitle>Linkedin</SocialTitle>
                <Subtitle
                  as="a"
                  href={`${socialMedia.linkedin}?locale=en_US`}
                  target="_blank"
                >
                  {socialMedia.linkedin}
                </Subtitle>
              </div>
              <div>
                <SocialTitle>Github</SocialTitle>
                <Subtitle as="a" href={socialMedia.github} target="_blank">
                  {socialMedia.github}
                </Subtitle>
              </div>
              <div>
                <SocialTitle>Instagram</SocialTitle>
                <Subtitle as="a" href={socialMedia.instagram} target="_blank">
                  {socialMedia.instagram}
                </Subtitle>
              </div>
              <div>
                <SocialTitle>E-mail</SocialTitle>
                <Subtitle as="a" href={`mailto:${socialMedia.email}`}>
                  {socialMedia.email}
                </Subtitle>
              </div>
            </Flex>
          </div>
        </TwoWrapper>
      </ContactSection>
    </Layout>
  );
};

export default IndexPage;