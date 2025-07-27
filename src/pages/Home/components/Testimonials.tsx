
const testimonials = [
    {
        text: "This platform helped me stay on track with my workouts. I've never been more consistent or motivated!",
        name: "Emily Rogers",
        role: "Fitness Enthusiast",
        image:
            "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?auto=format&q=75&fit=crop&w=112",
    },
    {
        text: "The trainer support is top-notch. I love how easy it is to log exercises and see my progress.",
        name: "Michael Chen",
        role: "Personal Trainer",
        image:
            "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112",
    },
    {
        text: "Since using this app, my energy is up, and I’ve actually looked forward to workouts. Game changer.",
        name: "Sarah Williams",
        role: "Busy Professional",
        image:
            "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500",
    },
]

const Testimonials = () => {
    return (
        <section className="bg-white py-10 sm:py-12 lg:py-16">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-800 md:mb-14 lg:text-4xl">
                    What Our Users Say
                </h2>

                <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8"
                        >
                            <p className="text-center text-gray-600 text-base">
                                “{t.text}”
                            </p>

                            <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                                <div className="h-12 w-12 md:h-14 md:w-14 overflow-hidden rounded-full bg-gray-100 shadow-lg">
                                    <img
                                        src={t.image}
                                        loading="lazy"
                                        alt={t.name}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>

                                <div>
                                    <div className="text-center sm:text-left text-sm font-semibold text-indigo-500 md:text-base">
                                        {t.name}
                                    </div>
                                    <p className="text-center sm:text-left text-sm text-gray-500">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
