import React from 'react'
import getWikiResults from '@/lib/getWikiResults'
import Item from './componenets/item'
import { get } from 'https'
type Props = {
    params:{
        [x: string]: any
        searchTerm: string
    }
}

export async function generateMetadata({params: searchTerm}: Props){
const wikiData:Promise<SearchResult> = getWikiResults(searchTerm.toString())
const data=await wikiData
const displayTerm =searchTerm.replaceAll('%20','') 

if(!data?.query?.pages){
    return{
        title:`${displayTerm} Not Found`
    }
}
return{
    title: displayTerm,
    description: `Search results for ${displayTerm}`
}

}
export default async function SearchResults({params: searchTerm}: Props) {

    const wikiData: Promise<SearchResult>= getWikiResults(searchTerm.toString()) 
    const data= await wikiData;
    const results: Result[] | undefined= data?.query?.pages
// to display the results we will use this content
    const content =(
        <main>
            {
                results? Object.values(results).map(result=>{
                    return <Item key={result.pageid} result={result}/>
                return 
                })
                : <h2 className="p-2 text-xl"> {`${searchTerm} Not Found`}</h2>
            }
        </main>
    )
  return content
   
   

}