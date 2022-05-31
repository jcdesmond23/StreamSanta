import { useForm } from 'react-hook-form'
import {
  Select,
  FormErrorMessage,
  FormControl,
  Button,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react'
import axios from 'axios';

export default function Form() {
  const years = [];
  for (let i = 2022; i >= 1901; i -= 1) {
    years.push(i);
  }
  const runtimes = [];
  for (let i = 250; i >= 1; i -= 1) {
    runtimes.push(i);
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (values) => {
    const test = await axios.post('http://localhost:9090/watson', values);
    console.log(test.data);
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid minChildWidth='120px' spacing='40px' columns={8}>
            <GridItem>
                <FormControl isInvalid={errors.type}>
                    <Select
                    id='type'
                    placeholder='Type'
                    bg='white'
                    borderColor='red.300'
                    color='red'
                    focusBorderColor='red'
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
                <FormControl isInvalid={errors.genre}>
                    <Select
                    id='genre'
                    placeholder='Genre'
                    bg='white'
                    borderColor='red.300'
                    color='red'
                    focusBorderColor='red'
                    {...register('genre', {
                        required: 'This is required',
                    })}
                    >
                        <option value='action'>Action</option>
                        <option value='animation'>Animation</option>
                        <option value='comedy'>Comedy</option> 
                        <option value='crime'>Crime</option>  
                        <option value='documentation'>Documentary</option>  
                        <option value='drama'>Drama</option>  
                        <option value='european'>European</option> 
                        <option value='family'>Family</option> 
                        <option value='fantasy'>Fantasy</option> 
                        <option value='history'>History</option> 
                        <option value='horror'>Horror</option> 
                        <option value='music'>Music</option>  
                        <option value='reality'>Reality</option>
                        <option value='romance'>Romance</option>
                        <option value='scifi'>Sci-Fi</option>
                        <option value='sport'>Sport</option>
                        <option value='thriller'>Thriller</option>
                        <option value='war'>War</option>
                        <option value='western'>Western</option>
                    </Select>
                    <FormErrorMessage>
                    {errors.genre && errors.genre.message}
                    </FormErrorMessage>
                </FormControl>
            </GridItem>
            <GridItem>
                <FormControl isInvalid={errors.mood}>
                    <Select
                    id='mood'
                    placeholder='Mood'
                    bg='white'
                    borderColor='red.300'
                    color='red'
                    focusBorderColor='red'
                    {...register('mood', {
                        required: 'This is required',
                    })}
                    >
                        <option value='2'>Feel Good</option>
                        <option value='1'>I Don't Care</option>
                        <option value='0'>Emotionally Complex</option>
                    </Select>
                    <FormErrorMessage>
                    {errors.mood && errors.mood.message}
                    </FormErrorMessage>
                </FormControl>
            </GridItem>
            <GridItem>
                <FormControl isInvalid={errors.country}>
                    <Select
                    id='country'
                    placeholder='Country'
                    bg='white'
                    borderColor='red.300'
                    color='red'
                    focusBorderColor='red'
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
                    bg='white'
                    borderColor='red.300'
                    color='red'
                    focusBorderColor='red'
                    {...register('release', {
                        required: 'This is required',
                    })}
                    >
                        {years.map((y) => (
                             <option value={y}>{y}</option>
                        ))}
                    </Select>
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
                    bg='white'
                    borderColor='red.300'
                    color='red'
                    focusBorderColor='red'
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
                <FormControl isInvalid={errors.runtime}>
                    <Select
                    id='runtime'
                    placeholder='Runtime'
                    bg='white'
                    borderColor='red.300'
                    color='red'
                    focusBorderColor='red'
                    {...register('runtime', {
                        required: 'This is required',
                    })}
                    >
                        {runtimes.map((time) => (
                             <option value={time}>{time}</option>
                        ))}
                    </Select>
                    <FormErrorMessage>
                    {errors.runtime && errors.runtime.message}
                    </FormErrorMessage>
                </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
                <Button mt={4} colorScheme='red' isLoading={isSubmitting} type='submit' margin={0} w='full'>
                    Submit
                </Button>
            </GridItem>
        </SimpleGrid>
    </form>
  )
}