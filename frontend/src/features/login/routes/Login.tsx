import { Button } from '@/components/Elements'
import { InputField } from '@/components/Form'
export function Login() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className=" max-w-{423} m-auto">
        <h1 className="text-4xl font-bold">Login to your Account</h1>
        <div className="flex-col items-start pt-6 gap-8 w-full h-372 ">
          <div className="items-start p-0 gap-6 w-full h-372">
            <div className="gap-1">
              <p className="font-normal text-sm">Email</p>

              <InputField type="email" className="w-full" />
            </div>
            <div className="flex-col items-start p-0 gap-2 w-full h-112">
              <div className="gap-1 p-0 w-full h-68">
                <p className=" h-19 font-normal text-sm text-zinc-600  not-italic pt-3">
                  Password
                </p>
                <InputField type="password" className="w-full" />
                <p className=" h-16 font-semibold text-xs text-cyan-400">
                  Forgot Password?
                </p>
              </div>
            </div>
          </div>
          <Button className="w-full">Login</Button>
        </div>
        <div className="flex  justify-center items-center p-0 gap-2.5  w-full h-6 pt-10">
          <p className="font-normal text-lg w-full h-6 text-zinc-600 ">
            Not Registered Yet?
          </p>
          <p className="font-normal text-lg w-full h-6 text-cyan-500 ">
            Create an account
          </p>
        </div>
      </div>
    </div>
  )
}
