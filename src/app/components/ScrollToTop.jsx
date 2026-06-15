import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const toggleVisibility = () => {

      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  };

  return (
 <button
  onClick={scrollToTop}
  className={`cursor-pointer fixed bottom-6 right-6 z-[9999]
  w-14 h-14 rounded-2xl
  bg-[#081120]
  border border-cyan-500/30
  text-cyan-400
  shadow-2xl shadow-cyan-500/10
  flex items-center justify-center
  transition-all duration-300
  hover:bg-cyan-500 hover:text-white
  hover:scale-110
  ${
    isVisible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-10 pointer-events-none'
  }`}
>
  <ChevronUp className="w-6 h-6" />
</button>
  );
}