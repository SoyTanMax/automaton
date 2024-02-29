import React, { useState, useEffect } from 'react';
import { items } from '../../test/data/items';
import { NftItem } from '../types/NftItem';

export function useNftItem(id: string | undefined) {
    const [item, setItem] = useState<NftItem | undefined>();
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        getNftItem();
    }, [id]);

    const getNftItem = () => {
        const foundItem = items.find(item => item.itemId === id);
        if (!foundItem) {
            setError('Item not found');
            setItem(undefined);
            return;
        }
        setError(undefined);
        setItem(foundItem);
    };

    return { item, error };
}