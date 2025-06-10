import React from 'react'
import { useState } from "react";
import { useAuthStore } from '../store/useAuthStore'
import { Camera, Mail, User } from "lucide-react";

function ProfilePage() {
   const{authUser, isUpdatingProfile,updateProfile} =useAuthStore()
   const [selectedImg, setSelectedImg] = useState(null);
   
   const handleImageUpload=async(e)=>{
        const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
   }
   
   return (
    <div className="min-h-screen bg-base-200 pt-20">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="card bg-base-100 shadow-2xl border border-base-300">
          <div className="card-body space-y-8">
            {/* Header */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-base-content">Profile</h1>
              <p className="mt-2 text-base-content/70 text-lg">Your profile information</p>
            </div>

            {/* Avatar Upload Section */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="avatar">
                  <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 group-hover:ring-primary/70 transition-all duration-300">
                    <img
                      src={selectedImg || authUser.profilePic || "/avatar.png"}
                      alt="Profile"
                      className="object-cover"
                    />
                  </div>
                </div>
                <label
                  htmlFor="avatar-upload"
                  className={`
                    absolute bottom-0 right-0 
                    btn btn-primary btn-circle btn-sm
                    transition-all duration-200 shadow-lg hover:shadow-xl
                    transform hover:scale-110
                    ${isUpdatingProfile ? "loading pointer-events-none" : ""}
                  `}
                >
                  <Camera className="w-4 h-4" />
                  <input
                    type="file"
                    id="avatar-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={isUpdatingProfile}
                  />
                </label>
              </div>
              <p className="text-sm text-base-content/60 text-center max-w-xs">
                {isUpdatingProfile ? (
                  <span className="text-primary font-medium">Uploading...</span>
                ) : (
                  "Click the camera icon to update your photo"
                )}
              </p>
            </div>

            {/* User Information */}
            <div className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Full Name
                  </span>
                </label>
                <div className="input input-bordered flex items-center bg-base-200 cursor-default">
                  {authUser?.fullName}
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email Address
                  </span>
                </label>
                <div className="input input-bordered flex items-center bg-base-200 cursor-default">
                  {authUser?.email}
                </div>
              </div>
            </div>

            {/* Account Information */}
            <div className="card bg-base-200 border border-base-300">
              <div className="card-body">
                <h2 className="card-title text-base-content mb-4">
                  Account Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-base-300">
                    <span className="text-base-content/80 font-medium">Member Since</span>
                    <span className="text-base-content font-semibold">
                      {authUser.createdAt?.split("T")[0]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-base-content/80 font-medium">Account Status</span>
                    <div className="badge badge-success">
                      Active
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage