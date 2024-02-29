import React from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '../components/Page';
import { useNftItem } from '../hooks/useNftItem';

export function NftItemPage() {
    let { id } = useParams();

    const { item } = useNftItem(id);

    return (
        <Page itemsStart>
            <div className="container py-6 px-6 md:px-12 xl:px-22 flex flex-col gap-6">
                <div className='flex gap-4'>
                    <img 
                        src={item?.url ?? 'https://plus.unsplash.com/premium_photo-1683120972279-87efe2ba252f?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                        className='max-w-[350px] object-cover rounded-md'
                        alt="Cover Image"
                    />
                    <div className='flex flex-col gap-2'>
                        <p className='text-3xl font-medium'>{item?.itemName}</p>
                        <div className='flex gap-2'>
                            <div className='flex flex-col px-4 py-2 bg-sky-950/75 rounded-md min-w-[120px]'>
                                <p className='text-2xl font-medium'>{item?.currentPrice} ETH</p>
                                <p className='text-md text-gray-300'>Current price</p>
                            </div>
                            <div className='flex flex-col px-4 py-2 bg-sky-950/75 rounded-md min-w-[120px]'>
                                <p className='text-2xl font-medium'>{item?.owner}</p>
                                <p className='text-md text-gray-300'>Owner</p>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </Page>
    );
}