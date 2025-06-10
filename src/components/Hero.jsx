export default function Hero({ children }){
    return(
        <section className="flex justify-center mt-[10vh]">
            <div className="flex flex-col border-[1.5px] border-[#333] rounded-sm p-2 w-[60vw]">
                {children}
            </div>
        </section>
    );
};
