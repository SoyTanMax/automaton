import React from 'react';
import { collections } from '../../test/data/collections';
import { CollectionCard } from '../components/CollectionCard';
import { Page } from '../components/Page';

export function CollectionsPage() {
  return (
    <Page itemsStart>
        <div className="container pt-8 px-6 md:px-12 xl:px-22 flex flex-col gap-6">
            <p className='text-3xl font-medium'>Explore all collections</p>
            <div className='flex flex-wrap gap-4'>
                {collections.map(collection => (
                    <CollectionCard collection={collection}/>
                ))}
            </div>
        </div>
    </Page>
  );
}