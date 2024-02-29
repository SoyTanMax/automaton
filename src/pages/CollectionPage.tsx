import React from 'react';
import { useParams } from 'react-router-dom';
import { NftItemCard } from '../components/NftItemCard';
import { Page } from '../components/Page';
import { useCollection } from '../hooks/useCollection';

export function CollectionPage() {
    let { id } = useParams();

    const { collection } = useCollection(id);

    return (
        <Page>
            <div className="container py-36 px-6 md:px-12 xl:px-22 flex flex-col gap-6">
                <img 
                    src={collection?.coverImage ?? 'https://plus.unsplash.com/premium_photo-1683120972279-87efe2ba252f?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                    className='w-full h-full object-cover rounded-md'
                    alt="Cover Image"
                />
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col gap-4'>
                        <p className='text-3xl font-medium'>{collection?.collectionName}</p>
                        <p className='text-md text-gray-300'>{collection?.description}</p>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex flex-col px-4 py-2 bg-sky-950/75 rounded-md min-w-[120px]'>
                            <p className='text-2xl font-medium'>{collection?.floor} ETH</p>
                            <p className='text-md text-gray-300'>Floor</p>
                        </div>
                        <div className='flex flex-col px-4 py-2 bg-sky-950/75 rounded-md min-w-[120px]'>
                            <p className='text-2xl font-medium'>{collection?.volume} ETH</p>
                            <p className='text-md text-gray-300'>Total volume</p>
                        </div>
                    </div>
                </div>
                <div>
                    {collection?.nftItemIds?.map(id => (
                        <NftItemCard id={id}/>
                    ))}
                </div>
            </div>
        </Page>
    );
}