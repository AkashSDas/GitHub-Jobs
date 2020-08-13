import React, { useRef } from "react";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

export const Header = () => {
  const ref = useRef(null);
  const executeScroll = () => scrollToRef(ref);

  return (
    <header>
      <h2 ref={ref}>GitHub Jobs</h2>
      <button className={"scroll-to-top-btn"} onClick={executeScroll}>
        ☝
      </button>
    </header>
  );
};
