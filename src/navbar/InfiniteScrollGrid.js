import React, { useEffect, useRef } from 'react';

const InfiniteScrollGrid = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const scroll = () => {
      if (scrollContainer) {
        // Increment scroll position to create the scroll effect
        scrollContainer.scrollLeft += 1;

        // Reset scroll position to create an infinite effect
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    // Set interval to scroll every 20 milliseconds
    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="overflow-hidden w-full col-span-2 ">
      <div
        ref={scrollRef}
        className="grid grid-flow-col  gap-4 animate-scroll"
      >
        {/* Example Items */}
        {[...Array(20)].map((_, index) => (
          <div key={index} className="border-2 rounded-md  border-blue-500 p-4 flex items-center justify-center h-64 w-96 ">
            Item {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollGrid;
