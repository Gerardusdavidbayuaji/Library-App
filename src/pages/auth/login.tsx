import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";

import { CostomFormField } from "@/components/costom-formfield";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";

import { loginAccount, loginSchema, LoginSchema } from "@/utils/apis/auth";
import { useToken } from "@/utils/contexts/token";

const LoginPage = () => {
  const {changeToken} = useToken();
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
      changeToken(result.payload.token);
      toast({
        description: result.message,
      });
      navigate("/content-layout");
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
      <div className="flex flex-col justify-center font-roboto">
        <div className="w-full max-w-xs mx-auto">
          <form className="flex flex-col" onSubmit={form.handleSubmit(handleLogin)}>
            <h3 className="text-sm font-bold mt-3" style={{ color: '#05BFDB' }}>Email</h3>
            <CostomFormField control={form.control} name="email" label="">
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

            <h3 className="text-sm font-bold mt-3" style={{ color: '#05BFDB' }}>Password</h3>
            <CostomFormField control={form.control} name="password" label="">
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
            <div className="flex justify-between mt-3">
                <div>
                    <h3 className="text-sm" style={{ color: '#0A4D68' }}>Don't have an account?</h3>
                    <h3 className="text-sm" style={{ color: '#0A4D68' }}>Register instead</h3>
                </div>
              <Button 
              className="px-auto border rounded-lg" 
              style={{background: "#0A4D68"}}
              type="submit"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
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

export default LoginPage;