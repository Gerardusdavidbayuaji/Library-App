import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

import { Profile, getProfile } from "@/utils/apis/user";
import NavbarContent from "@/components/navbar-content";
import FooterContent from "@/components/footer-content";

const ProfilePage = () => {
  const { toast } = useToast();

  const [profile, setProfile] = useState<Profile>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getProfile();
      setProfile(result.payload);
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
      <div className="container grow mx-auto py-8 px-8 flex flex-col items-center justify-center">
        <figure className="w-60 h-60 mb-5">
          <img
            className="aspect-square rounded-full object-cover"
            src={profile?.profile_picture}
            alt={profile?.full_name}
          />
        </figure>
        <p className="font-bold text-2xl">{profile?.full_name}</p>
        <p>{profile?.email}</p>
        <p>{profile?.address}</p>
        <p>{profile?.phone_number}</p>
        <Button asChild className="mt-5 w-40">
          <Link to="/edit-profile">Edit Profile</Link>
        </Button>
      </div>
      <FooterContent/>
      </div>
  );
};

export default ProfilePage;