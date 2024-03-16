const Banner = () => {
    return (
        <section className="my-10 relative">
            <div className="hero lg:h-[700px] rounded-xl" style={{backgroundImage: 'url(images/banner.jfif)'}}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                <div className="hero-content text-center text-neutral-content relative z-10">
                    <div>
                        <h1 className="mb-5 text-6xl font-bold text-white">Discover an exceptional cooking <br/> class tailored for you!</h1>
                        <p className="mb-5 my-10 text-white ">Indulge in a culinary journey through the vibrant and wholesome Mediterranean cuisine, guided by expert chefs in an interactive virtual setting. Learn to craft iconic dishes like Greek moussaka, Spanish paella, and Italian caprese salad, while embracing the healthy and delicious flavors of the Mediterranean region.</p>
                        <div className="my-10">
                        <button className="btn border-none rounded-full bg-[#0BE58A] text-black text-lg px-10 font-bold mx-16">Explore Now</button>
                        <button className="btn border-1px solid white rounded-full bg-transparent text-white text-lg px-10 font-bold">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;