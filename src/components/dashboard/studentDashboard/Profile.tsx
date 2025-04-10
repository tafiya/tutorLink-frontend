/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";

import { Card, CardContent, CardHeader} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { getAllUser, updateUser } from "@/services/user";


const UserCard = () => {
  const { user } = useUser();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false); // Modal state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    image: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const users = await getAllUser();
        if (users.success !== false) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const loggedInUser = users?.data.find((u: any) => u.email === user?.email);
          setCurrentUser(loggedInUser);
          setFormData({
            name: loggedInUser?.name || "",
            email: loggedInUser?.email || "",
            address: loggedInUser?.address || "",
            phone: loggedInUser?.phone || "",
            image: loggedInUser?.image || "",
          });
        }
      } catch (error) {
        console.error("Failed to fetch user", error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchUser();
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      if (!currentUser?._id) return;
       await updateUser(formData, currentUser._id);
      const users = await getAllUser();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const updatedUser = users.data.find((u: any) => u.email === user?.email);
      setCurrentUser(updatedUser);
      toast.success("User updated successfully!");
      setOpen(false);
    } catch (error) {
      toast.error("Failed to update user.");
      console.error(error);
    }
  };

  return (
    <Card className="shadow-lg rounded-xl border p-4">
      <CardHeader>
  
      </CardHeader>
      <CardContent>
        {loading ? (
          <Skeleton className="h-6 w-full mb-2" />
        ) : currentUser ? (
          <div className="space-y-5">
            <img src={currentUser.profilePicture || "/default-avatar.png"} alt="User Avatar" className="w-40 h-40 border mx-auto" />
            <p><strong>Name:</strong> {currentUser.name}</p>
            <p><strong>Email:</strong> {currentUser.email}</p>
            <p><strong>Address:</strong> {currentUser.address}</p>
            <p><strong>Phone:</strong> {currentUser.phone}</p>
            <Button onClick={() => setOpen(true)} className="w-full mt-2 bg-blue-600 hover:bg-blue-500">Edit Profile</Button>
          </div>
        ) : (
          <p className="text-red-500">User not found</p>
        )}
      </CardContent>

      {/* Modal for Editing User Info */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className="bg-white text-black">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <Label>Email</Label>
              <Input name="email" value={formData.email} disabled />
            </div>
            <div>
              <Label>Address</Label>
              <Input name="address" value={formData.address} onChange={handleChange} />
            </div>
            <div>
              <Label>Phone</Label>
              <Input name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div>
              <Label>Profile Image URL</Label>
              <Input name="image" value={formData.image} onChange={handleChange} />
            </div>
            <Button onClick={handleUpdate} className="w-full">Save Changes</Button>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default UserCard;
