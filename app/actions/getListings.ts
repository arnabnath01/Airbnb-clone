import prisma from '@/app/libs/prismadb';

export default async function getListings(){
try {
    
    //create a listings const, store the fetched data from prismadb
    const listings = await prisma?.listing.findMany({
        orderBy:{
            createdAt:'desc'
        }
    })
    return listings;    //import the stored const  
} catch (error:any) {
    throw new Error(error)
}

}