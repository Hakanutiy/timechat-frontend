export function Login(){
    return(
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="w-{423} h-{415} m-auto">
                <h1 className="text-4xl font-bold">Login to your Account</h1>
               <div className="flex-col items-start pt-6 gap-8 w-422 h-372 ">
                    <div className="items-start p-0 gap-6 w-422 h-372">
                        <div className="gap-1">
                    <p className="font-normal text-sm">Email</p>
                    <div className="box-border flex-row items-center pt-4 pb-3 pr-2.5 gap-3 w-420 h-45 rounded-md border">
                        <p className="w-92  font-normal text-sm  text-neutral-300">mail@abc.com</p>
                    </div>
                        </div>
                            <div className="flex-col items-start p-0 gap-2 w-420 h-112">
                                <div className="gap-1 p-0 w-420 h-68">
                                    <p className="w-63 h-19 font-normal text-sm text-zinc-600  not-italic pt-3">Password</p>
                                    <div className="box-border flex-row items-center pt-4 pb-3 pr-2.5 gap-3 w-420 h-45 rounded-md border ">
                                        <p className="w-77  font-normal  text-xs leading-3.5 text-neutral-300 ">*****************</p>
                                    </div>
                                        <p className="w-99 h-16 font-semibold text-xs text-cyan-400">Forgot Password?</p>
                                </div>
                             </div>
                    </div>
                        <div className="flex items-center justify-center pt-3 pb-3 gap-3 w-420 h-12 bg-cyan-500 rounded-md ">
                            <p className="w-53 h-6 font-extrabold text-xl text-white ">Login</p>
                        </div>
               </div>
                    <div className="flex  justify-center items-center p-0 gap-2.5  w-421 h-6 pt-10">
                        <p className="font-normal text-lg w-159 h-6 text-zinc-600 ">Not Registered Yet?</p>
                        <p className="font-normal text-lg w-159 h-6 text-cyan-500 ">Create an account</p>
                    </div>
            </div>
           
        </div>

        
    )
}