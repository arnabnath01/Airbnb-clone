import ClientOnly from './components/ClientOnly'
// import { Container } from 'postcss'
import EmptyState from './components/EmptyState';
import Container from '../app/components/Container';
import getListings from './actions/getListings';
import ListingCard from './components/listings/ListingCard';
import getCurrentUser from './actions/getCurrentUser';
export default async function Home() {

  const listings = await getListings();
  const currentUser = await getCurrentUser();
  // const isEmpty = true;



console.log("------refreshed-----");

  if(!listings.length){
    return (
      <ClientOnly>
        <EmptyState 
        showReset
        />
      </ClientOnly>
    )
  }
  return (
    <ClientOnly>
      <Container>
        <div className='p-10
         mt-24
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 
          gap-8'>
          {listings.map((listing:any)=>{
            return(
            <ListingCard  
                currentUser={currentUser}
                key={listing.id}
                data={listing} disabled={false}            />
            ) 
          })}
        </div>
      </Container>
    </ClientOnly>
  );
}
