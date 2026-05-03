import { getData } from '@/lib/fetchApi';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';

const FeatureBook = async() => {
  const data=await getData();
  const topBook=data.slice(0,4)

  console.log(data);
  
  return (
    <div className=''>

      <div className='flex items-center gap-4 bg-[#6fbeff30] py-2 px-5'>
        <button className='btn bg-[#D72050] text-white'>
          New Arrivals
        </button>

        <Marquee className="bg-[#6fbeff30]py-2 px-5 rounded-md text-sm font-medium mr-22">
         {data.map(t => t.title).join(", ")} {" | "} 
        </Marquee>

      </div>

      <div className="max-w-7xl mx-auto min-h-[60vh] px-4 py-10">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-semibold mb-8 text-gray-800">
          Featured Tiles
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topBook.map((topt) => (
            <div key={topt.id}>

              <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full hover:shadow-xl transition duration-300 flex flex-col h-full">

                {/* Image */}
                <div className="h-48 w-full overflow-hidden">
                  <Image
                    src={topt.image_url}
                    alt={topt.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">

                  <h2 className="text-lg font-semibold text-gray-800 mb-1">
                    {topt.title}
                  </h2>

                  <p className="text-sm text-gray-500 line-clamp-2 flex-grow">
                    {topt.description}
                  </p>

                  <p className="text-md font-bold text-gray-900 mt-2">
                    {topt.author}
                  </p>

                  <button className="w-full mt-3 border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-100 transition">
                    <Link href={`/all-tiles/${topt.id}`} >
                      View Details
                    </Link>

                  </button>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default FeatureBook;