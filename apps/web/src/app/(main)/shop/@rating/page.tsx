'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation';

type Props = {}

function FilterByRatingShop({}: Props) {
    const searchParams = useSearchParams();
    const ratingParam = searchParams.get('rating');
  return (
    <div>FilterByRatingShop</div>
  )
}

export default FilterByRatingShop
