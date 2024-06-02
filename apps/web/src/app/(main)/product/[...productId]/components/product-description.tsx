import React from 'react';

type Props = {
  title: string;
  author?: string;
  imageUrl?: string | null;
  description?: string | null;
};

function ProductDescription({ title, imageUrl, author, description }: Props) {
  return (
    <div className="rounded border flex flex-col lg:flex-row space-x-2">
      <div className="max-w-xs flex flex-col space-y-4 items-end pb-16">
        <div>
          <img
            src={imageUrl || undefined}
            alt={`${title}'s image`}
            className="w-full max-w-64"
          />
        </div>
        <div className="text-right">
          <span>{`By (author) `}</span>
          <span className="font-semibold">{author}</span>
        </div>
      </div>
      <div className="flex-1 p-4">
        <div className="text-4xl font-bold mb-4">{title}</div>
        <p className='text-sm'>{description}</p>
      </div>
    </div>
  );
}

export default ProductDescription;
