import Link from 'next/link';
import { useRouter } from 'next/router';
import ChevronLeftIcon from '../pages/assets/icons/chevronLeft';
import ChevronRightIcon from '../pages/assets/icons/chevronRight';

export default function PaginationButtons() {
  const router = useRouter();

  const startIndex = Number(router?.query?.start) || 1;

  return (
    <div className="flex px-9 pb-4 justify-between items-center sm:justify-start sm:space-x-44 sm:px-0 text-blue-700">
      {startIndex > 10 && (
        <Link
          href={`/search?term=${router?.query?.term}&searchType=${
            router?.query?.searchType
          }&start=${startIndex - 10}`}
        >
          <div className="cursor-pointer flex flex-col items-center hover:underline">
            <ChevronLeftIcon color="#1d4ed8" width="w-5" height="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex < 90 && (
        <Link
          href={`/search?term=${router?.query?.term}&searchType=${
            router?.query?.searchType
          }&start=${startIndex + 10}`}
        >
          <div className="cursor-pointer flex flex-col items-center hover:underline">
            <ChevronRightIcon color="#1d4ed8" width="w-5" height="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
