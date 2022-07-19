import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import styles from '../styles/vv.module.css'
import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'


const myLoader=(src)=>{
  return `${src}`;
}

export default function Home({ data }) {
  console.log(data)
  return (
   <>
  <Layout>
    <div className=' container  mx-auto grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
      {
        data.map((item, index) => {
          return( 
            <Link key={index} href={`/products/${item.id}`}>
              <div className=' group relative'>

            

                 <div className='w-full aspect-w-1 aspect-h-1   rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
                   <Image  
                // loader={()=>myLoader(item.image)}
                layout="fill"
                objectFit='contain'
                // width={3000}
                // height={2000}
                  src={item.image}
                  alt={item.title}
                  className=" relative  w-full h-full rounded-t-lg object-center object-contain group-hover:opacity-75"
                />  
                 </div>
                  
             
              <div className='mt-4 '>
              <h2 className=' truncate'>{item.title}</h2>
              <div className='flex flex-row justify-between w-full mt-3'>
                <p>price: {item.price}</p>
                <p > {item.category}</p>
              </div>



            
          </div>
              </div>
          
            </Link>
          )
        }
        )
      }
    </div>
  </Layout>
   </>
  )
}


export async function getStaticProps() {
  const json = await fetch('https://fakestoreapi.com/products')
  const data = await json.json()

  return {
    props: {
      data
    }
  }
}