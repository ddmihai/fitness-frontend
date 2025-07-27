
const FeatureBox = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-4 text-gray-900">
                        Unlock Your Fitness Potential
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-700">
                        Track your workouts, connect with trainers, and stay consistent with a fitness platform built to support your journey.
                        No more guesswork. From structured workout plans to one-on-one trainer feedback, we’re here to help you stay on track, stay motivated, and transform your fitness — one step at a time.
                    </p>
                </div>

                <div className="flex flex-wrap -m-4 text-center">
                    {/* Exercises */}
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M6.5 9v6m11-6v6M3 10h2v4H3v-4zm16 0h2v4h-2v-4zM7 12h10" />
                            </svg>
                            <h2 className="title-font font-bold text-3xl text-gray-900">2.7K+</h2>
                            <p className="leading-relaxed">Exercises Logged</p>
                        </div>
                    </div>

                    {/* Users */}
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                            </svg>
                            <h2 className="title-font font-bold text-3xl text-gray-900">1.3K</h2>
                            <p className="leading-relaxed">Active Users</p>
                        </div>
                    </div>

                    {/* Tutorials */}
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M3 18v-6a9 9 0 0118 0v6" />
                                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                            </svg>
                            <h2 className="title-font font-bold text-3xl text-gray-900">150+</h2>
                            <p className="leading-relaxed">Video Tutorials</p>
                        </div>
                    </div>

                    {/* Security */}
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            <h2 className="title-font font-bold text-3xl text-gray-900">100%</h2>
                            <p className="leading-relaxed">Data Security</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureBox;