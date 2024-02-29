import React, { useState, useEffect } from 'react';
import { collections } from '../../test/data/Collections';
import { Collection } from '../types/Collection';

export function useCollection(id: string | undefined) {
    const [collection, setCollection] = useState<Collection | undefined>();
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        getCollection();
    }, [id]);

    const getCollection = () => {
        const foundCollection = collections.find(collection => collection.collectionId === id);
        if (!foundCollection) {
            setError('Collection not found');
            setCollection(undefined);
            return;
        }
        setError(undefined);
        setCollection(foundCollection);
    };

    return { collection, error };
}