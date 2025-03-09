"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IUser } from "@/types";
import TutorCard from "./TutorCard";

const FindTutors = ({ tutors }: { tutors: IUser[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [subject, setSubject] = useState("All");
  const [rating, setRating] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [address, setAddress] = useState("");

  const filteredTutors = tutors
    .filter((tutor) =>
      searchTerm ? tutor.name?.toLowerCase().includes(searchTerm.toLowerCase()) : true
    )
    .filter((tutor) => (subject !== "All" ? tutor.subjects?.includes(subject) : true))
    .filter((tutor) => (address ? tutor.address?.toLowerCase().includes(address.toLowerCase()) : true))
    .sort((a, b) => {
      if (rating === "asc") return (a.averageRating ?? 0) - (b.averageRating ?? 0);
      if (rating === "dsc") return (b.averageRating ?? 0) - (a.averageRating ?? 0);
      return 0;
    })
    .sort((a, b) => {
      if (priceSort === "lowtohigh") return (a.price ?? 0) - (b.price ?? 0);
      if (priceSort === "hightolow") return (b.price ?? 0) - (a.price ?? 0);
      return 0;
    });

  return (
    <div className="mx-auto max-w-7xl py-20">
      <div className="mb-16 w-full flex flex-wrap items-center gap-12 justify-center">
        <Input
          type="text"
          placeholder="Search by tutor name"
          className="w-full md:w-48 border-blue-600 hover:shadow-lg "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Select onValueChange={setSubject}>
          <SelectTrigger className="w-full md:w-48 border-blue-600 hover:shadow-lg ">
            <SelectValue placeholder="Select Subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            {["Mathematics", "Physics", "English", "Biology", "Chemistry", "Higher Math", "Bangla", "General Science", "Accounting", "Economics"].map((subj) => (
              <SelectItem key={subj} value={subj}>{subj}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setRating}>
          <SelectTrigger className="w-full md:w-48 border-blue-600 hover:shadow-lg ">
            <SelectValue placeholder="Rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">Ascending</SelectItem>
            <SelectItem value="dsc">Descending</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setPriceSort}>
          <SelectTrigger className="w-full md:w-48 border-blue-600 hover:shadow-lg ">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="lowtohigh">Low to High</SelectItem>
            <SelectItem value="hightolow">High to Low</SelectItem>
          </SelectContent>
        </Select>

        <Input
          type="text"
          placeholder="address"
          className="w-full md:w-48 border-blue-600 hover:shadow-lg "
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-12 justify-center items-center">
        {filteredTutors.length > 0 ? (
          filteredTutors.map((tutor) => <TutorCard key={tutor.email} tutor={tutor} />)
        ) : (
          <p className="text-center text-gray-500 w-full">No tutors found.</p>
        )}
      </div>
    </div>
  );
};

export default FindTutors;
