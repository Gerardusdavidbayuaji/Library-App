import {  useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";

import { CostomFormField } from "@/components/costom-formfield";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";

import {
  registerAccount,
  registerSchema,
  RegisterSchema,
} from "@/utils/apis/auth";

const RegisterPage: React.FC = () => {

    const navigate = useNavigate();
    const { toast } = useToast();
  
    const form = useForm<RegisterSchema>({
      resolver: zodResolver(registerSchema),
      defaultValues: {
        full_name: "",
        email: "",
        password: "",
        repassword: "",
        address: "",
        phone_number: "",
      },
    });

    async function onSubmitRegister(data: RegisterSchema) {
      try {
        const result = await registerAccount(data);
        toast({
          description: result.message,
        });
        navigate("/login");
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
            <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmitRegister)}>
            <h3 className="text-sm font-bold" style={{ color: '#05BFDB' }}>Full Name</h3>
            <CostomFormField control={form.control} name="full_name" label="">
              {(field) => (
              <Input
              {...field}
              placeholder="Enter your full name"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
              />
              )}
            </CostomFormField>

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

            <h3 className="text-sm font-bold mt-3" style={{ color: '#05BFDB' }}>Retype Password</h3>
            <CostomFormField control={form.control} name="repassword" label="">
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

            <h3 className="text-sm font-bold mt-3" style={{ color: '#05BFDB' }}>Address</h3>
            <CostomFormField control={form.control} name="address" label="">
              {(field) => (
              <Input
              {...field}
              placeholder="Enter your address"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
              />
              )}
            </CostomFormField>

            <h3 className="text-sm font-bold mt-3" style={{ color: '#05BFDB' }}>Phone Number</h3>
            <CostomFormField control={form.control} name="phone_number" label="">
              {(field) => (
              <Input
              {...field}
              placeholder="Enter your phone number"
              type="tel"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
              />
              )}
            </CostomFormField>
            <div className="flex justify-between mt-3">
              <div>
                <h3 className="text-sm" style={{ color: '#0A4D68' }}>Already have an account?</h3>
                <h3 className="text-sm" style={{ color: '#0A4D68' }}>Login instead</h3>
              </div>
              <Button className="px-auto border rounded-lg" type="submit" style={{background: "#0A4D68"}}
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? (
                <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                </>
                ) : (
                  "Register"
                  )}</Button>
            </div>
            </form>
        </div>
      </div>
    </Form>
  );  
};

export default RegisterPage;