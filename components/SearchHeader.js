import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import CloseIcon from '../pages/assets/icons/close';
import SearchIcon from '../pages/assets/icons/search';
import MicrophoneIcon from '../pages/assets/icons/microphone';

import User from './User';
import SearchHeaderOptions from './SearchHeaderOptions';

export default function SearchHeader() {
  const router = useRouter();

  const [searchInput, setSearchInput] = useState(router?.query.term);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    router.push(`/search?term=${searchInput.trim()}&searchType=`);
  };

  return (
    <div className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push('/')}
          className="cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          objectFit="cover"
          width={120}
          height={40}
        />
        <form className="flex border border-gray-200 rounded-full shadow-sm px-6 py-3 ml-7 mr-5 flex-grow max-w-3xl items-center justify-between">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full
            focus:outline-none"
          />
          {searchInput.length >= 1 && (
            <div className="flex">
              <span
                className="cursor-pointer sm:mr-3"
                onClick={() => setSearchInput('')}
              >
                <CloseIcon color="#999" width="w-5" height="h-5" />
              </span>
              <span className="border-r-2 border-gray-300 mr-6 hidden sm:inline-flex"></span>
            </div>
          )}
          <span className="hidden sm:inline-flex mr-3 cursor-pointer">
            <MicrophoneIcon color="#4285f4" width="w-5" height="h-5" />
          </span>
          <span
            className="hidden sm:inline-flex  cursor-pointer"
            onClick={handleSearch}
          >
            <SearchIcon color="#4285f4" width="w-5" height="h-5" />
          </span>
          <button onClick={handleSearch} type="submit" hidden></button>
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
      <SearchHeaderOptions />
    </div>
  );
}
