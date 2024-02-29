import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Page } from '../components/Page';

export function LandingPage() {
  return (
    <Page>
      <div className="container px-6 md:px-12 xl:px-22">
        <div className="flex flex-col gap-8 items-center">
            <div className='flex flex-col gap-4 text-center xl:px-60'>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-2">
                  Transform creativity into blockchain art.
              </h1>
              <p className="text-lg md:text-xl xl:text-2xl mt-4">
                  Craft and monetize Generative NFTs with our intuitive graphical interface. Begin your journey in digital art and programming today.
              </p>
            </div>
            <Link to="/create">
              <Button>Start creating</Button>
            </Link>
        </div>
    </div>
    </Page>
  );
}