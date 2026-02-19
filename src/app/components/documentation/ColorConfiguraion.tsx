export const ColorConfiguration = () => {
    return (
        <>
            <h3 className=" text-black text-xl font-semibold mt-8 dark:text-white" >Colors</h3>
            <div className="p-6 rounded-md border mt-4 border-dark/10 dark:border-white/10">
                <p className="text-base font-medium text-midnight_text dark:text-grey" ><span className="font-semibold text-lg dark:text-white">1. Override Colors</span> <br />
                    For any change in colors : src/app/globals.css</p>
                <div className="py-4 px-5 rounded-md bg-black mt-8">
                    <p className="text-sm text-gray-400 flex flex-col gap-2">
                        <span>--color-success: #22C55E;</span>
                        <span>--color-dark: #1B1D1E;</span>
                        <span>--color-light: #d5eaf5;</span>
                        <span>--color-primary: #4225F9;</span>
                        <span>--color-warning: #F59E0B;</span>
                        <span>--color-purple-gradient: #EBECFF;</span>
                        <span>--color-cyan-gradient: #E6F9F3;</span>
                        <span>--color-dark-purple-gradient: #2A08D733;</span>
                        <span>--color-dark-cyan-gradient: #44A58633;</span>
                    </p>
                </div>
            </div>
            <div className="p-6 rounded-md border mt-4 border-dark/10 dark:border-white/10">
                <p className="text-base font-medium text-midnight_text dark:text-grey" ><span className="font-semibold text-lg dark:text-white">2. Override Theme Colors</span> <br />
                    For change , go to : src/app/globals.css</p>
                <div className="py-4 px-5 rounded-md bg-black mt-8">
                    <p className="text-sm text-gray-400 flex flex-col gap-2">
                        <span>--color-primary: #4225F9;</span>
                    </p>
                </div>
            </div>
        </>
    )
}