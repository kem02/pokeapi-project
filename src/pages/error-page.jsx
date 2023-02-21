import { Box, Flex, Text } from "@chakra-ui/react"

export default function ErrorPage() {
    return (
        <Flex justifyContent="center" mt="150px">
            <Text color="yellow.500">Pokemon not found. Please make sure you typed in the correct spelling for the pokemon.</Text>
        </Flex>

    )
}