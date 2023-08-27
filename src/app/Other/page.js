import React from "react";

const Other = () => {
    return(
        <div id="Other" className="hero min-h-screen" style={{ backgroundImage: 'url(/Photos/other.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold text-white">Find Others Like You</h1>
                    <p className="py-6 text-white">Discover a variety of unique NFTs on OpenSea, where you can
                        witness firsthand how individuals have harnessed blockchain technology to preserve their
                        art, pets, and cherished family memories for eternity.</p>
                    <input
                        className="text-primary rounded-box shadow-primary p-3"
                        placeholder="Type here!"
                    />
                </div>
            </div>
        </div>
    )
}

export default Other;

