import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Page } from '../components/Page';

export function LandingPage() {
  return (
    <Page>
      <div className="relative flex items-center justify-center min-h-screen">
        <div className="fixed top-0 right-0 bottom-0 left-0 z-[1] overflow-hidden">
          <video playsInline autoPlay muted loop className="min-w-full min-h-full w-auto h-auto">
            <source src="src/assets/backgroundgif.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="z-10 flex flex-col items-center gap-8">
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
