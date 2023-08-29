"use client"
import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();



    const onSubmit = async (e) => {
        console.log("~ e", e);
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }



    return (
        <div id="Contact" className="bg-cover bg-center bg-no-repeat h-screen text-primary text-3xl font-mono p-6"
             style={{ backgroundImage: "url('Photos/wallpaper.jpg')" }}>
            <div className="flex justify-center p-6 text-white">
                Contact Me 💬
            </div>
            <div className="font-mono text-xl m-3 text-white">
                Enjoy exploring Stella and Tsunami&apos;s world. To turn your pets into NFTs,
                reach out via the form. Your pet&apos;s legacy awaits!
            </div>
            <form
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/b2d2feb8ead734c989509b99352b3205"
                method="POST"
                className="max-w-md mx-auto mt-5 p-4 border rounded shadow-lg"
            >
                <input
                    className="input input-bordered input-lg w-full p-3 mb-4"
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                        required: "This field is required",
                        maxLength: {
                            value: 100,
                            message: "Max length is 100 characters",
                        },
                    })}
                />
                {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}

                <input
                    className="input input-bordered input-lg w-full p-3 mb-4"
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                        required: "This field is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                        },
                    })}
                />
                {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}

                <textarea
                    className="input input-bordered input-lg w-full p-3 mb-4"
                    placeholder="Message"
                    rows="4"
                    {...register("message", {
                        required: "This field is required",
                        maxLength: {
                            value: 2000,
                            message: "Max length is 2000 characters",
                        },
                    })}
                />
                {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}

                <button type="submit" className="btn w-full p-4 mt-5 text-primary">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;