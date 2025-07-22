export default function Hero({ children }){
    return(
        <section>
            <div className="flex flex-col">
                {children}
            </div>
        </section>
    );
};
