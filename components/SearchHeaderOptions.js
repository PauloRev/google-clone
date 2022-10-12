import SearchIcon from '../pages/assets/icons/search';
import ImageIcon from '../pages/assets/icons/image';
import { useRouter } from 'next/router';

export default function SearchHeaderOptions() {
  const router = useRouter();

  const handleSearchType = (type) => {
    router.push(`/search?term=${router?.query.term}&searchType=${type}`);
  };

  return (
    <div className="w-full border-b-2 border-gray-100 flex items-center sm:pl-[10%]">
      <div className="flex space-x-7">
        {router?.query.searchType !== '' || router?.query.searchType ? (
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleSearchType('')}
          >
            <SearchIcon color="#2c2c2c" width="w-5" height="h-5" />
            <p className="ml-1">All</p>
          </div>
        ) : (
          <div className="flex items-center border-b-4 border-[#4285f4] px-1">
            <SearchIcon color="#4285f4" width="w-5" height="h-5" />
            <p className="ml-1 text-[#4285f4]">All</p>
          </div>
        )}
        {router?.query.searchType !== 'images' ? (
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleSearchType('images')}
          >
            <ImageIcon color="#2c2c2c" width="w-5" height="h-5" />
            <p className="ml-1">Images</p>
          </div>
        ) : (
          <div className="flex items-center border-b-4 border-[#4285f4] px-1">
            <ImageIcon color="#4285f4" width="w-5" height="h-5" />
            <p className="ml-1 text-[#4285f4]">Images</p>
          </div>
        )}
      </div>
    </div>
  );
}
