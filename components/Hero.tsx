export default function Hero() {
    return (
        <section
            className="bg-cover bg-center w-full h-[80vh] flex items-center justify-center text-center"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')", backgroundSize: 'cover' }}
        >
            <div className="bg-gradient-to-t from-primary to-blue-0 bg-opacity-50 w-full h-full flex items-center justify-center text-white rounded">
                <div className="space-y-10">

                    <div className="mx-auto">
                        <div className="p-3 mx-auto flex flex-col items-end w-fit">
                            <h1 className="text-7xl p-0  font-bold mb-1">manroland</h1>
                            <h2 className="text-5xl text-red-600 p-0 font-bold">
                                sheetfed
                                <span className="text-3xl text-primary p-0 font-bold ml-1 mb-1">in</span>
                            </h2>

                        </div>
                    </div>
                    <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'sans-serif' }}>WE ARE PRINT. <sup>&reg;</sup></h1>
                </div>
            </div>
        </section>
    );
}
