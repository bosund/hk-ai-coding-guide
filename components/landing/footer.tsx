export function Footer() {
    return (
        <footer className="bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    <a className="text-gray-400 hover:text-gray-500" href="#">
                        <span className="sr-only">Facebook</span>
                        <svg
                            aria-hidden="true"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                clipRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                fillRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                    <a className="text-gray-400 hover:text-gray-500" href="#">
                        <span className="sr-only">LinkedIn</span>
                        <svg
                            aria-hidden="true"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                clipRule="evenodd"
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                fillRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </div>
                <div className="mt-8 md:mt-0 md:order-1">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        <img
                            alt="HK Logo"
                            className="h-6 w-auto grayscale opacity-50"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU7DJGqT2a98TJ0EpVqmyAxYainyNzMg8uQaQzQud3JOcs9Oese9HWu5XCs8Qe2ZDcwq-x-ylb80X5Wc74-SWDyxoSe9BKRfOI-FoiG-NlPWIob9oHtY5pEzTT0tQk2rjfPU20LwEhAZ43PGFP_VqoyWixUNaid4tv4-5AWpXP12E1R9UVwGyqv-8z4SOy0-j9OwCm2rthD5oKI92-G_f5hgFPcwHriEA8HXVzPIDo3w2b8nyI4xPAH5wmu1zoHgMSjiI3b4jqLuqJ"
                        />
                        <p className="text-center text-base text-gray-400">
                            © 2024 HK Danmark. Alle rettigheder forbeholdes.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
