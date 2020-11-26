import { Heading, Stack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import React from "react";
import decodeWith from "../utils/ioTsUtils";
import { BlogFrontMatter, BlogFrontMatterValidator } from "../types";

interface IPostLayoutProps {
    frontMatter: BlogFrontMatter;
    children: JSX.Element | Array<JSX.Element>;
}

const PostLayout = (props: IPostLayoutProps) => {
    const frontMatter = decodeWith(BlogFrontMatterValidator)(props.frontMatter);
    const publishedAt = frontMatter.publishedAt;
    const postTitle = frontMatter.title;
    const postDescription = frontMatter.description;
    const postLink = `${frontMatter.__resourcePath.replace(
        ".mdx",
        ""
    )}`;

    return (
        <>
            <Layout title={postTitle} description={postDescription} relativeCanonicalURL={postLink}>
                <Stack
                    as="article"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    w="100%"
                >
                    <Heading as="h1" fontWeight="600" size="2xl" mt={10}>
                        {frontMatter.title} {typeof frontMatter.publishedAt}
                    </Heading>
                    <Text color="grey">Bharat Kalluri / {publishedAt}</Text>
                    {props.children}
                </Stack>
            </Layout>
        </>
    );
};

export default PostLayout;
