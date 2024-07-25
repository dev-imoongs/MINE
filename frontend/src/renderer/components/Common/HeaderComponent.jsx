import React from 'react';

const HeaderComponent = () => {
    const tempST = {
        padding: '1.75rem',
        fontSize: '2rem',
    };

    return (
        <header
            id="siteHeader"
            className="headerThree relative z-20 w-full h-16 sm:h-20 lg:h-36 xl:h-40 max-[480px]:mt-[73px] is-scrolling"
        >
            <div className="px-4 md:px-8 lg:px-0 h-16 sm:h-20 lg:h-36 xl:h-40 w-full transition duration-200 ease-in-out border-b border-jnGray-300 fixed z-20 text-gray-700 bg-white innerSticky body-font">
                <h2 style={tempST}> 공통헤더 </h2>
            </div>
        </header>
    );
};

export default HeaderComponent;
