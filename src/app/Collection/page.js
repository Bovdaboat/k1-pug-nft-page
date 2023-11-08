import React from "react";
import Image from "next/image";

const Collection = () => {
    return(
        <div >
        <div id="Collection" className="bg-base-200 pt-10">
            <div className="flex justify-center text-primary font-mono text-3xl">
                Collection
            </div>
            <p className="text-primary p-7 mt-7">
                Stella and TsuNami&apos;s NFTs have been showcased on the renowned NFT trading platform,
                OpenSea.
                Simply click the <span className="text-green-500 font-semibold">OpenSea</span> button to embark on a journey through their NFT existence and trading activities.
            </p>

            <div className="flex justify-center items-center">
                <div className="bg-base-400 grid lg:grid-cols-2 md:grid-cols-1 grid-rows-2 gap-10 mt-10 p-6 ">
                    <div className="w-96 bg-green-900 shadow-xl flex-col">
                        <div className="px-10 pt-10">
                            <Image
                                src="/Photos/p1.jpeg"
                                height={400}
                                width={400}
                                alt="Two pugs"
                                className="rounded-xl" />
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">NFT #1</h2>
                            <p>Double Trouble</p>
                            <div className="card-actions">
                                <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/26405824261209659740145955979751774100946936953648117878439270390578091655169"
                                   className=" bg-green-700 btn text-white hover:bg-green-600 ">Open Sea</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-96 bg-green-900 shadow-xl">
                        <figure className="px-10 pt-10">
                            <Image
                                src="/Photos/p2.jpeg"
                                height={400}
                                width={400}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">NFT #2</h2>
                            <p>Birthday Girl</p>
                            <div className="card-actions">
                                <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/26405824261209659740145955979751774100946936953648117878439270391677603282945" className=" bg-green-700 btn text-white hover:bg-green-600 ">Open Sea</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-96 bg-green-900 shadow-xl">
                        <figure className="px-10 pt-10">
                            <Image
                                src="/Photos/p3.jpeg"
                                height={400}
                                width={400}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">NFT #3</h2>
                            <p>Water Station</p>
                            <div className="card-actions">
                                <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/26405824261209659740145955979751774100946936953648117878439270392777114910721" className=" bg-green-700 btn text-white hover:bg-green-600 ">Open Sea</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-96 bg-green-900 shadow-xl">
                        <figure className="px-10 pt-10">
                            <Image
                                src="/Photos/p4.jpeg"
                                height={400}
                                width={400}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">NFT #4</h2>
                            <p>Echo Park</p>
                            <div className="card-actions">
                                <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/26405824261209659740145955979751774100946936953648117878439270393876626538497" className=" bg-green-700 btn text-white hover:bg-green-600 ">Open Sea</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>

    )
}

export default Collection