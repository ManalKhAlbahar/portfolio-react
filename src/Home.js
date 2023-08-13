import { forwardRef } from "react";


const Home = forwardRef((props, ref) => {

  return (
    <>

    <div ref={ref} className="home">
      <h1>
        Welcome to my <span>PORTFOLIO</span>
      </h1>
    </div>
    </>
     
  );
});

export default Home;