import { useForm } from 'react-hook-form'
import {
  Select,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react'

export default function Form() {
  const defaultOptions = [];
  for (let i = 1901; i <= 2022; i += 1) {
    defaultOptions.push(i);
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid minChildWidth='120px' spacing='40px' columns={6}>
            <GridItem>
                <FormControl isInvalid={errors.genre}>
                    <Select
                    id='genre'
                    placeholder='Genre'
                    {...register('genre', {
                        required: 'This is required',
                    })}
                    />
                    <FormErrorMessage>
                    {errors.genre && errors.genre.message}
                    </FormErrorMessage>
                </FormControl>
            </GridItem>
            <GridItem>
                <FormControl isInvalid={errors.country}>
                    <Select
                    id='country'
                    placeholder='Country'
                    {...register('country', {
                        required: 'This is required',
                    })}
                    >
                        <option value='1'>US</option>
                        <option value='0'>Non-US</option>
                    </Select>
                    <FormErrorMessage>
                    {errors.country && errors.country.message}
                    </FormErrorMessage>
                </FormControl>
            </GridItem>
            <GridItem>
                <FormControl isInvalid={errors.release}>
                    <Select
                    id='release'
                    placeholder='Release Year'
                    {...register('release', {
                        required: 'This is required',
                    })}
                    />
                    <FormErrorMessage>
                    {errors.release && errors.release.message}
                    </FormErrorMessage>
                </FormControl>
            </GridItem>
            <GridItem>
                <FormControl isInvalid={errors.rating}>
                    <Select
                    id='rating'
                    placeholder='Rating'
                    {...register('rating', {
                        required: 'This is required',
                    })}
                    >
                        <option value='NR'>Non-Rated</option>
                        <option value='G'>G</option>
                        <option value='PG'>PG</option> 
                        <option value='PG-13'>PG-13</option>  
                        <option value='R'>R</option>  
                        <option value='NC-17'>NC-17</option>  
                        <option value='TV-Y'>TV-Y</option> 
                        <option value='TV-Y7'>TV-Y7</option> 
                        <option value='TV-Y7-FV'>TV-Y7-FV</option> 
                        <option value='TV-G'>TV-G</option> 
                        <option value='TV-PG'>TV-PG</option> 
                        <option value='TV-14'>TV-14</option>  
                        <option value='TV-MA'>TV-MA</option>
                    </Select>
                    <FormErrorMessage>
                    {errors.rating && errors.rating.message}
                    </FormErrorMessage>
                </FormControl>
            </GridItem>
            <GridItem>
                <FormControl isInvalid={errors.type}>
                    <Select
                    id='type'
                    placeholder='Type'
                    {...register('type', {
                        required: 'This is required',
                    })}
                    >
                        <option value='MOVIE'>Movie</option>  
                        <option value='SHOW'>TV Show</option>
                    </Select>
                    <FormErrorMessage>
                    {errors.type && errors.type.message}
                    </FormErrorMessage>
                </FormControl>
            </GridItem>
            <GridItem>
                <FormControl isInvalid={errors.runtime}>
                    <Input
                    id='runtime'
                    placeholder='Runtime'
                    {...register('runtime', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormErrorMessage>
                    {errors.runtime && errors.runtime.message}
                    </FormErrorMessage>
                </FormControl>
            </GridItem>
            <GridItem>
                <Button mt={4} colorScheme='green' isLoading={isSubmitting} type='submit'>
                    Submit
                </Button>
            </GridItem>
        </SimpleGrid>
    </form>
  )
}