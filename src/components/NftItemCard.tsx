import React from 'react';
import { Link } from 'react-router-dom';
import { useNftItem } from '../hooks/useNftItem';
import { NftItem } from '../types/NftItem';

export function NftItemCard({ id }: Props){

    const { item } = useNftItem(id);

    return (
        <Link to={`/assets/${item?.itemId}`}>
            <div className='w-[280px] bg-slate-900 rounded-md hover:scale-[1.03] transition duration-300'>
                <div className='h-[250px]'>
                    <img 
                        src={item?.url ?? 'https://plus.unsplash.com/premium_photo-1683120972279-87efe2ba252f?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                        className='w-full h-full object-cover rounded-t-md'
                        alt="Cover Image"
                    />
                </div>
                <div className='flex flex-col gap-3 p-4'>
                    <p className='text-white'>{item?.itemName}</p>
                    <div className='flex gap-12'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-xs font-thin text-gray-100'>Current price</p>
                            <p className='text-md font-medium text-white'>{item?.currentPrice ?? 0} ETH</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-xs font-thin text-gray-100'>Owner</p>
                            <p className='text-md font-medium text-white'>{item?.owner}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
};

type Props = {
    id: string;
}