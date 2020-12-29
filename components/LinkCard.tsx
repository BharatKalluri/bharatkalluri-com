import { Box, Flex, Heading, Link, Stack, Tag, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { AiFillPushpin } from "react-icons/ai";

interface ILinkCardProps {
    name: string;
    description?: string;
    link: string;
    tags?: Array<string>;
    isPinned?: boolean;
}

const LinkCard = ({
    name,
    description,
    link,
    tags,
    isPinned,
}: ILinkCardProps) => {
    return (
        <NextLink href={link} passHref>
            <Link
                w="100%"
                _hover={{ textDecoration: "none" }}
                borderWidth="1px"
                borderRadius="lg"
                padding="1.5rem"
            >
                <Box display="block" width="100%">
                    <Flex
                        width="100%"
                        align="flex-start"
                        justifyContent="space-between"
                        flexDirection="column"
                    >
                        <Stack direction="row">
                            {isPinned === true && <AiFillPushpin />}
                            <Heading size="md" as="h3" letterSpacing="tight">
                                {name}
                            </Heading>
                        </Stack>
                        {description && (
                            <Text
                                mt="1rem"
                                fontSize="md"
                                variant="solid"
                                colorScheme="teal"
                            >
                                {description}
                            </Text>
                        )}
                        {tags && (
                            <Stack direction="row" mt="1rem">
                                {tags?.map((tag: string) => (
                                    <Tag key={tag} size="sm">
                                        {tag}
                                    </Tag>
                                ))}
                            </Stack>
                        )}
                    </Flex>
                </Box>
            </Link>
        </NextLink>
    );
};

export default LinkCard;
