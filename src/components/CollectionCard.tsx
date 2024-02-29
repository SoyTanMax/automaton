import React from 'react';
import { Link } from 'react-router-dom';
import { Collection } from '../types/Collection';

export function CollectionCard({ collection }: Props){
    const { collectionId, coverImage, collectionName, floor, volume } = collection

    return (
        <Link to={`/collection/${collectionId}`}>
            <div className='w-[280px] bg-slate-900 rounded-md hover:scale-[1.03] transition duration-300'>
                <div className='h-[180px]'>
                    <img 
                        src={coverImage ?? 'https://plus.unsplash.com/premium_photo-1683120972279-87efe2ba252f?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                        className='w-full h-full object-cover rounded-t-md'
                        alt="Cover Image"
                    />
                </div>
                <div className='flex flex-col gap-3 p-4'>
                    <p className='text-white'>{collectionName}</p>
                    <div className='flex gap-12'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-xs font-thin text-gray-100'>Floor</p>
                            <p className='text-md font-medium text-white'>{floor ?? 0} ETH</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-xs font-thin text-gray-100'>Total volume</p>
                            <p className='text-md font-medium text-white'>{volume ?? 0} ETH</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
};

type Props = {
    collection: Collection
}