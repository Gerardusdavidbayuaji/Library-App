import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";

import { CostomFormField } from "@/components/costom-formfield";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";

import { addBookSchema, AddBookSchema } from "@/utils/apis/books";

const AddBookPage: React.FC = () => {

    const navigate = useNavigate();
    const { toast } = useToast();
  
    const form = useForm<AddBookSchema>({
      resolver: zodResolver(addBookSchema),
      defaultValues: {
        title: "",
        author: "",
        isbn: "",
        category: "",
        description: "",
      },
    });

    async function onAddBook(data: AddBookSchema) {
      try {
        const result = await AddBookPage(data);
        toast({
          description: result.message,
        });
        navigate("/add-books");
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
            <h1 className="text-3xl mb-2 font-roboto font-bold" style={{ color: '#0A4D68' }}>Register</h1>
            <form className="flex flex-col gap-3" onSubmit={form.handleSubmit(onAddBook)}>

            <CostomFormField control={form.control} name="full_name" label="Full Name">
              {(field) => (
              <Input
              {...field}
              placeholder="Enter your full name"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
              />
              )}
            </CostomFormField>

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

            <CostomFormField control={form.control} name="repassword" label="Retype Password">
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

            <CostomFormField control={form.control} name="address" label="Address">
              {(field) => (
              <Input
              {...field}
              placeholder="Enter your address"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
              />
              )}
            </CostomFormField>

            <CostomFormField control={form.control} name="phone_number" label="Phone Number">
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
            <div className="flex">
              <div>
                <h3 className="text-sm pr-8" style={{ color: '#0A4D68' }}>Don't have an account?</h3>
                <Link to="/login" className="text-sm" style={{ color: '#05BFDB'}}>Login instead</Link>
              </div>
              <Button className="px-auto ml-12 float-right border rounded-full" type="submit"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? (
                <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
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

export default AddBookPage;