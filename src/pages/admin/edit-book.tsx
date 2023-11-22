import { useNavigate, } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";

import { CostomFormField } from "@/components/costom-formfield";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";


import { EditBookSchema, addBookSchema } from "@/utils/apis/books";
import CostomSelect from "@/components/costom-select";

const EditBookPage: React.FC = () => {

    const navigate = useNavigate();
    const { toast } = useToast();
  
    const form = useForm<EditBookSchema>({
      resolver: zodResolver(addBookSchema),
      defaultValues: {
        title: "",
        author: "",
        isbn: "",
        category: "",
        description: "",
      },
    });

    async function onEditBook(data: EditBookSchema) {
      try {
        const result = await EditBookPage(data);
        if (result) {
          toast({
            description: result.toString(),
          });
          navigate("/edit-books");
        } else {
          throw new Error("Unexpected result value");
        }
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
            <h1 className="text-3xl mb-2 font-roboto font-bold" style={{ color: '#0A4D68' }}>Edit a Book</h1>
            <form className="flex flex-col gap-3" onSubmit={form.handleSubmit(onEditBook)}>

            <CostomFormField control={form.control} name="title" label="Title">
              {(field) => (
              <Input
              {...field}
              placeholder="Title book"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
              />
              )}
            </CostomFormField>

            <CostomFormField control={form.control} name="cover_image" label="Cover Image">
              {(field) => (
              <Input
              {...field}
              placeholder="no file selected"
              type="file"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
              />
              )}
            </CostomFormField>

            <CostomFormField control={form.control} name="author" label="Author">
              {(field) => (
              <Input
              {...field}
              placeholder="Author"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
              />
              )}
            </CostomFormField>

            <CostomFormField control={form.control} name="isbn" label="ISBN">
              {(field) => (
              <Input
              {...field}
              placeholder="ISBN"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
              />
              )}
            </CostomFormField>

            <CostomFormField control={form.control} name="category" label="Category">
              {(field) => (
              <CostomSelect
              />
              )}
            </CostomFormField>

            <CostomFormField control={form.control} name="description" label="Description">
              {(field) => (
              <Textarea
              {...field}
              placeholder="Description"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
              />
              )}
            </CostomFormField>

            <div className="flex justify-end">
              <Button className="flex px-auto w-24 rounded-lg object-right"
              style={{ background: '#0A263E' }}
              type="submit"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? (
                <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                </>
                ) : (
                  "Add"
                  )}</Button>
            </div>
            </form>
        </div>
      </div>
    </Form>
  );  
};

export default EditBookPage;