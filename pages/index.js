import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import Header from '../components/Header';
import Footer from '../components/Footer';

import SearchIcon from './assets/icons/search';
import CloseIcon from './assets/icons/close';
import MicrophoneIcon from './assets/icons/microphone';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const inputSearchRef = useRef();

  const [isListening, setIsListening] = useState(false);

  const commands = [
    {
      command: '*',
      callback: (term) => {
        if (term) {
          router.push(`/search?term=${term.trim()}&searchType=`);
        }
      },
    },
  ];

  const { resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition({ commands });

  const handleSearch = (e) => {
    e.preventDefault();
    if (!inputSearchRef.current.value.trim()) return;
    router.push(
      `/search?term=${inputSearchRef.current.value.trim()}&searchType=`
    );
  };

  const handleListening = () => {
    if (!browserSupportsSpeechRecognition) {
      alert('This function not supported in your browser!');
      return;
    }

    resetTranscript();
    setIsListening(!isListening);
    SpeechRecognition.startListening({
      continuous: true,
    });
  };

  return (
    <>
      <Head>
        <title>Google Clone</title>
      </Head>

      <Header />

      <form className="flex flex-col items-center mt-32">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          objectFit="cover"
          width={300}
          height={100}
        />
        <div className="flex max-w-[90%] w-full items-center my-7 mx-auto border-2 border-gray-200 hover:shadow-sm focus-within:shadow-sm px-5 py-3 rounded-full sm:max-w-xl lg:max-w-2xl">
          <SearchIcon color="#999" width="w-5" height="h-5" />
          <input
            type="text"
            ref={inputSearchRef}
            className="flex-grow focus:outline-none mx-2"
          />
          {inputSearchRef?.current?.value.length >= 1 && (
            <div className="flex">
              <span onClick={handleCleanInput()} className="cursor-pointer">
                <CloseIcon color="#999" width="w-5" height="h-5" />
              </span>
              <span className="border-l-2 border-gray-300 mr-6 ml-2"></span>
            </div>
          )}
          <span
            className={`cursor-pointer p-1 ${
              isListening && 'bg-blue-200 rounded-full'
            }`}
            onClick={handleListening}
          >
            <MicrophoneIcon color="#2c2c2c" width="w-5" height="h-5" />
          </span>
        </div>
        <div className="flex sm:flex-col sm:w-[100%] md:flex-row md:w-[50%] items-center justify-center">
          <button onClick={handleSearch} className="btn">
            Google Search
          </button>
          <Link href="https://github.com/PauloRev/google-clone">
            <button className="btn">Github Project</button>
          </Link>
        </div>
      </form>

      <Footer />
    </>
  );
}
