import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Divider } from '../components/Divider';
import { NftItemCard } from '../components/NftItemCard';
import { Page } from '../components/Page';
import { SearchBar } from '../components/Searchbar';
import { useCollection } from '../hooks/useCollection';
import { items } from '../../test/data/items';
import { FilteringItemOptions, getFilteringItemOptions } from '../constants/FilteringItemOptions';
import { Select } from '../components/Select';

export function CollectionPage() {
    let { id } = useParams();
    const { collection } = useCollection(id);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [filteredNftItemIds, setFilteredNftItemIds] = useState(collection?.nftItemIds || []);

    useEffect(() => {
        let filteredAndSortedIds = collection?.nftItemIds?.filter(itemId => {
            const foundItem = items.find(item => item.itemId === itemId);
            return foundItem?.itemName?.toLowerCase().includes(searchTerm.toLowerCase());
        }).sort((a, b) => {
            const itemADetails = items.find(item => item.itemId === a);
            const itemBDetails = items.find(item => item.itemId === b);
            const priceA = parseFloat(itemADetails?.currentPrice || '0');
            const priceB = parseFloat(itemBDetails?.currentPrice || '0');

            if (sortOption === FilteringItemOptions.LOW_TO_HIGH) {
                return priceA - priceB;
            } else if (sortOption === FilteringItemOptions.HIGH_TO_LOW) {
                return priceB - priceA;
            } else {
                return 0;
            }
        });

        setFilteredNftItemIds(filteredAndSortedIds || []);
    }, [searchTerm, sortOption, collection]);

    const filterItems = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    return (
        <Page itemsStart>
            <div className="py-8 flex flex-col container">
                <img 
                    src={collection?.coverImage} 
                    className='w-full max-h-[250px] object-cover rounded-t-md'
                    alt="Cover Image"
                />
                <div className='flex flex-col p-8 bg-gray-950/75 gap-8 rounded-b-md'>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col gap-4'>
                            <p className='text-3xl font-medium'>{collection?.collectionName}</p>
                            <p className='text-md text-gray-300'>{collection?.description}</p>
                        </div>
                        <div className='flex gap-6'>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <p className='text-xl font-medium'>{collection?.floor}</p>
                                    <p className='text-lg text-gray-300'>ETH</p>
                                </div>
                                <p className='text-xs text-gray-300'>Floor</p>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <p className='text-xl font-medium'>{collection?.volume}</p>
                                    <p className='text-lg text-gray-300'>ETH</p>
                                </div>
                                <p className='text-xs text-gray-300'>Total volume</p>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <p className='text-xl font-medium'>{collection?.topOffer}</p>
                                    <p className='text-lg text-gray-300'>ETH</p>
                                </div>
                                <p className='text-xs text-gray-300'>Top offer</p>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <p className='text-xl font-medium'>{collection?.dayVolume}</p>
                                    <p className='text-lg text-gray-300'>ETH</p>
                                </div>
                                <p className='text-xs text-gray-300'>24h volume</p>
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div className='flex gap-4'>
                        <SearchBar placeholder='Search items' onChange={filterItems} />
                        <Select
                            options={getFilteringItemOptions()}
                            onChange={handleSortChange}
                            defaultValue={FilteringItemOptions.LOW_TO_HIGH}
                        />
                    </div>
                    <div className='flex gap-4'>
                        {filteredNftItemIds?.map(id => (
                            <NftItemCard key={id} id={id}/>
                        ))}
                        {!filteredNftItemIds?.length && <p className='text-white'>No items found</p>}
                    </div>
                </div>
            </div>
        </Page>
    );
}