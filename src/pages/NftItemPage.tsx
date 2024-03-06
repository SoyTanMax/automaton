import React from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '../components/Page';
import { Button } from '../components/Button';
import { useCollection } from '../hooks/useCollection';
import { useNftItem } from '../hooks/useNftItem';
import { TagIcon } from '../icons/TagIcon';
import { BagIcon } from '../icons/BagIcon';
import { NftItemCard } from '../components/NftItemCard';

export function NftItemPage() {
    let { id } = useParams();

    const { item } = useNftItem(id);
    const { collection } = useCollection(item?.collectionId);

    const filteredCollection = collection?.nftItemIds?.filter(itemId => itemId !== id);

    const handleBuy = () => {
        
    }
    
    const handleMakeOffer = () => {

    }

    return (
        <Page itemsStart>
            <div className="container py-6 px-6 md:px-12 xl:px-22 flex flex-col gap-6">
                <div className='flex gap-4'>
                    <img 
                        src={item?.url ?? 'https://plus.unsplash.com/premium_photo-1683120972279-87efe2ba252f?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                        className='max-w-[450px] object-cover rounded-md'
                        alt="Cover Image"
                    />
                    <div className='flex flex-col gap-4 w-full'>
                        <a className='text-xl font-medium cursor-pointer' href={`/collection/${item?.collectionId}`}>{collection?.collectionName}</a>
                        <div className='flex flex-col'>
                            <p className='text-3xl font-medium'>{item?.itemName}</p>
                            <div className='flex items-center gap-2'>
                                <p className='text-md text-gray-300'>Owned by </p>
                                <p className='text-xl font-medium text-cyan-400 hover:text-cyan-300 cursor-pointer'>{item?.owner}</p>
                            </div>
                        </div> 
                        <div className='flex flex-col gap-6 px-6 py-6 bg-gray-950/70 rounded-lg w-full'>
                            <div className='flex flex-col'>
                                <div className='flex gap-2 items-baseline'>
                                    <p className='text-3xl font-medium'>{item?.currentPrice}</p>
                                    <p className='text-2xl font-medium text-gray-300'>ETH</p>
                                </div>
                                <p className='text-sm text-gray-300'>Current price</p>
                            </div>
                            <div className='flex gap-4'>
                                <Button onClick={handleBuy} className={'w-full'}>
                                    <BagIcon color="rgb(17 24 39)"/>
                                    Buy now
                                </Button>
                                <Button variant='secondary' onClick={handleMakeOffer} className={'w-full'}>
                                    <TagIcon color="rgb(17 24 39)"/>
                                    Make offer
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-6 px-6 py-6 bg-gray-950/70 rounded-lg w-full'>
                    <p className='text-xl font-medium'>More from this collection</p>
                    <div className='flex gap-4'>
                    {filteredCollection?.map(id => (
                        <NftItemCard key={id} id={id}/>
                    ))}
                </div>
                </div>
            </div>
        </Page>
    );
}