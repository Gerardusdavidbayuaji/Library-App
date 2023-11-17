import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";

import { CostomFormField } from "@/components/costom-formfield";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";

import { loginAccount, loginSchema, LoginSchema } from "@/utils/apis/auth";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function handleLogin(data: LoginSchema) {
    try {
      const result = await loginAccount(data);
      localStorage.setItem("token", result.payload.token);
      toast({
        description: result.message,
      });
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <div className="flex flex-col justify-center font-roboto h-screen">
        <div className="w-full max-w-xs mx-auto">
          <h1 className="text-3xl mb-2 font-roboto font-bold" style={{ color: '#0A4D68' }}>Login</h1>
          <h2 className="mb-5" style={{ color: '#0A4D68' }}> Walcome, please enter your details</h2>

          <form className="flex flex-col gap-3" onSubmit={form.handleSubmit(handleLogin)}>
            <h3 className="block text-sm font-bold" style={{ color: '#05BFDB' }}>Email</h3>
            <CostomFormField control={form.control} name="email" label="Email">
              {(field) => (
              <Input
              {...field}
              placeholder="Enter your email"
              type="email"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
              />
              )}
            </CostomFormField>

            <h3 className="block text-sm font-bold" style={{ color: '#05BFDB' }}>Password</h3>
            <CostomFormField control={form.control} name="password" label="Password">
              {(field) => (
              <Input
              {...field}
              placeholder="Enter your password"
              type="password"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
              />
              )}
            </CostomFormField>
            <div className="flex">
                <div>
                    <h3 className="text-sm pr-10" style={{ color: '#0A4D68' }}>Don't have an account?</h3>
                    <Link to="/register" className="text-sm" style={{ color: '#05BFDB'}}>Register here</Link>
                </div>
              <Button 
              className="px-auto float-right border rounded-full ml-12" style={{background: "#0A4D68"}}
              type="submit"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? (
                <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                </>
                ) : (
                  "Login"
                  )}</Button>
            </div>
          </form>
        </div>
      </div>
  </Form>
  );
};

export default Login;