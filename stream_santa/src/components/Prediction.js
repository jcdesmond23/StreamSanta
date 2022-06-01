import {
  Radio,
  Button,
  Box,
  RadioGroup,
  Stack,
  Container,
  Text
} from '@chakra-ui/react';

export default function Prediction(props) {

  return (
    <Container centerContent>
        <img src={props.path} width="500" height="450" ></img>
        <Container padding='10' centerContent>
            <Box borderRadius='md' bg='white' color='black' px={4} padding='3'>
                <Stack direction='row' alignItems='center' spacing={5}>
                    <Stack direction='column' alignItems='center' spacing={2}>
                        <Text>Was this helpful?</Text>
                        <RadioGroup defaultValue='no'>
                            <Stack direction='row' spacing={5}>
                                <Radio colorScheme='green' value='yes'>Yes</Radio>
                                <Radio colorScheme='green' value='no'>No</Radio>
                            </Stack>
                        </RadioGroup>
                    </Stack>
                    <Button mt={4} colorScheme='red' type='submit' margin={0}>
                        Submit
                    </Button>
                </Stack>
            </Box>
        </Container>
    </Container>
  )
}