import { Heading, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import { CustomLink } from "../components/CustomLink";

const AboutPage = () => (
    <Layout
        title="About"
        description="About Bharat Kalluri"
        relativeCanonicalURL="/about"
    >
        <Heading>About</Heading>
        <Text fontSize="lg">
            Hey and welcome! I’m a Software developer working in a fin-tech
            startup in India. In my free time I make things in Python, Node js
            or golang.
        </Text>
        <Text fontSize="lg">
            This blog is a collection of what I have managed to learn during my
            experiments. My hobbies include reading books, Photography and
            Playing computer games. Most of my personal projects can be found on
            github.
        </Text>
        <Text fontSize="lg">
            A list of topics I am interested to write about are on a{" "}
            <CustomLink href="https://trello.com/b/oAAGQHp9/topics-to-write-about">
                trello board
            </CustomLink>
        </Text>
        <ContactForm />
    </Layout>
);

export default AboutPage;
