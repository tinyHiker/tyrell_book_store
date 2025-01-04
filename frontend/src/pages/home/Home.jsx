import React from 'react'
import Banner from './Banner'
import TopSellers from './TopSellers'
import Recommended from './Recommended'
import News from './News'
import Fantasy from './sections/Fantasy'
import Superhero from './sections/Superhero'
import IceAndFire from './sections/IceAndFire'
import RickRiordan from './sections/RickRiordan'
import BookTransitionCard from './sections/BookTransitionCard'
import { useFetchBookByIdQuery } from '../../redux/features/books/booksApi'
import { useFetchQuoteByIdQuery } from '../../redux/features/quotes/quotesApi'
import Quote from './sections/Quote'
import CategoriesGrid from './sections/CategoriesGrid'

const Home = () => {

  let {data: book = {}} = useFetchBookByIdQuery('6771ac46474d85e3cecaac15')
  let {data: book2 = {}} = useFetchBookByIdQuery('6771ac46474d85e3cecaac0f')

  let {data: quote1 = {}} = useFetchQuoteByIdQuery("67735940474d85e3cecad14a")
  let {data: quote2 = {}} = useFetchQuoteByIdQuery("6779651b474d85e3cecb4c97")
  console.log(quote1)

  console.log(book)
  return (
    <>
    <Banner />
    <Quote quote={quote1}/>
    <TopSellers/>
    <Fantasy />
    <BookTransitionCard book={book2} />
    <Superhero />
    <BookTransitionCard book={book} />
    <IceAndFire />
    <CategoriesGrid />
    <RickRiordan />
    <Quote quote={quote2}/>
    <News/>

    </>
  )
}

export default Home