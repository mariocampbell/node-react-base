import React from 'react';
import { LogoMarioCampbell } from '../../components';

const Home = () => (
  <main className="bg-primary-900 h-screen w-screen text-white flex justify-center items-center">
    <div className="flex flex-col items-center text-center">
      <LogoMarioCampbell />
      <p className="text-gray-400 font-light mt-2">Api REST - Project created with Nodejs and React</p>
    </div>
  </main>
);
export default Home;
