import {useEffect} from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import Alert from "@/components/alert";

import { deleteProfile, getProfile, updateProfile } from "@/utils/apis/user";
import { ProfileUpdateSchema } from "@/utils/apis/user";
import { profileUpdateSchema } from "@/utils/apis/user/types";
import { CostomFormField } from "@/components/costom-formfield";
import NavbarContent from "@/components/navbar-content";
import FooterContent from "@/components/footer-content";

const EditProfile = () => {
  const { toast } = useToast();

  const form = useForm<ProfileUpdateSchema>({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: {
      email: "",
      full_name: "",
      password: "",
      phone_number:"",
      address:"",
      profile_picture:""
    },
  })

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getProfile();
      form.setValue("email", result.payload.email);
      form.setValue("full_name", result.payload.full_name);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  async function handleUpdateProfile(data: ProfileUpdateSchema) {
    try {
      const result = await updateProfile(data);
      toast({
        description: result.message,
      });
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  async function handleDeleteProfile() {
    try {
      const result = await deleteProfile();
      toast({
        description: result.message,
      });
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  return (
  <div className="w-full h-screen bg-white dark:bg-black font-roboto flex flex-col overflow-auto">
    <NavbarContent/>
      <div className="container grow mx-auto flex flex-col items-center justify-center">
        <Form {...form}>
          <div className="flex flex-col justify-center font-roboto h-screen">
            <div className="mx-auto">
              <form
              className="flex flex-col gap-4 items-center"
              onSubmit={form.handleSubmit(handleUpdateProfile)}
              >
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

                <CostomFormField control={form.control}
                name="address" label="Address">
                  {(field) => (
                  <Input
                  {...field}
                  placeholder="Enter your address"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                  />
                )}
                </CostomFormField>

                <CostomFormField control={form.control}
                name="phone_number" label="Phone Number">
                  {(field) => (
                  <Input
                  {...field}
                  placeholder="Enter your Phone Number"
                  type="tel"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                  />
                )}
                </CostomFormField>

                <CostomFormField control={form.control}
                name="profile_picture" label="Profile Picture">
                  {(field) => (
                  <Input
                  {...field}
                  placeholder="Enter your Profile Picture"
                  type="file"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                  />
                )}
                </CostomFormField>
                <Button 
                type="submit"
                className="flex px-auto w-24 rounded-lg object-right"
                >Submit</Button>
                
                <Alert
                title="Are you absolutely sure?"
                description="This action cannot be undone. This will permanently delete your account an you cannot use your email again."
                onAction={() => handleDeleteProfile()}
                >
                  <Button type="button" variant="destructive">Delete Account</Button>
                </Alert>
                </form>
              </div>
            </div>
          </Form>
        </div>
      <FooterContent/>
  </div>
  );
};

export default EditProfile;