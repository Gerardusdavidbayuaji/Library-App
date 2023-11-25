import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Profile, getProfile } from "@/utils/apis/user";

const ProfileAdmin = () => {
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
    <div className="grid justify-center mx-auto py-20">
      <figure className="w-52 h-52 mb-5">
          <img
            className="aspect-square rounded-full object-cover"
            src={profile?.profile_picture}
            alt={profile?.full_name}
          />
      </figure>
      <div className="grid justify-center text-center mx-auto">
        <p className="font-bold text-2xl">{profile?.full_name}</p>
        <p>{profile?.email}</p>
        <p>{profile?.address}</p>
        <p>{profile?.phone_number}</p>
      </div>
    </div>
  );
};

export default ProfileAdmin;