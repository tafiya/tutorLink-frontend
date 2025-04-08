"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { IUser } from "@/types";
import TutorCard from "./TutorCard";
import { useSearchParams } from "next/navigation";

const FindTutors = ({ tutors }: { tutors: IUser[] }) => {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [subject, setSubject] = useState("All");
  const [rating, setRating] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const initialSearchTerm = decodeURIComponent(searchParams.get("search") || "");
    setSearchTerm(initialSearchTerm);
  }, [searchParams]);

  const filteredTutors = tutors
    ?.filter((tutor) =>
      searchTerm
        ? tutor.name?.toLowerCase().includes(searchTerm.toLowerCase())
        : true
    )
    ?.filter((tutor) =>
      subject !== "All" ? tutor.subjects?.includes(subject) : true
    )
    ?.filter((tutor) =>
      address
        ? tutor.address?.toLowerCase().includes(address.toLowerCase())
        : true
    )
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
    <div className="mx-auto max-w-7xl py-20 px-4">
      {/* Sheet Trigger for Mobile/Tablet */}
      <div className="lg:hidden mb-8 text-center text-white">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="border-blue-600 text-white">
              Filter Tutors
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] text-white">
        
          <SheetTitle className="text-lg font-semibold mb-4">Filters</SheetTitle>
          <div className="flex flex-col gap-4 w-full">
      <label htmlFor=""> Search By Name</label>
      <Input
        type="text"
        placeholder="Search by tutor name"
        className="border-blue-600 hover:shadow-lg text-white placeholder-white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <label htmlFor=""> Location</label>
            <Input
        type="text"
        placeholder="Address"
        className="border-blue-600 hover:shadow-lg"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
 <label htmlFor=""> Sort By Subject</label>
      <Select onValueChange={setSubject} value={subject}>
        <SelectTrigger className="border-blue-600 hover:shadow-lg w-full text-white placeholder-white">
          <SelectValue placeholder="Select Subject" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectItem value="All">All</SelectItem>
          {[
            "Mathematics",
            "Physics",
            "English",
            "Biology",
            "Chemistry",
            "Higher Math",
            "Bangla",
            "General Science",
            "Accounting",
            "Economics",
          ].map((subj) => (
            <SelectItem className="" key={subj} value={subj}>
              {subj}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <label htmlFor=""> Rating</label>
      <Select onValueChange={setRating}>
        <SelectTrigger className="border-blue-600 hover:shadow-lg w-full">
          <SelectValue placeholder="Rating" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">Ascending</SelectItem>
          <SelectItem value="dsc">Descending</SelectItem>
        </SelectContent>
      </Select>
      <label htmlFor="">Sort By</label>
      <Select onValueChange={setPriceSort}>
        <SelectTrigger className="border-blue-600 hover:shadow-lg w-full">
          <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="lowtohigh">Low to High</SelectItem>
          <SelectItem value="hightolow">High to Low</SelectItem>
        </SelectContent>
      </Select>


    </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop layout */}
      <div className="flex flex-col lg:flex-row gap-12 text-white">
        {/* Sidebar Filter for Large Devices */}
        <div className="hidden lg:block w-full max-w-xs border p-4 rounded-xl shadow-md h-fit">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="flex flex-col gap-4 w-full">
      <label htmlFor=""> Search By Name</label>
      <Input
        type="text"
        placeholder="Search by tutor name"
        className="border-blue-600 hover:shadow-lg text-white placeholder-white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <label htmlFor=""> Location</label>
            <Input
        type="text"
        placeholder="Address"
        className="border-blue-600 hover:shadow-lg"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
 <label htmlFor=""> Sort By Subject</label>
      <Select onValueChange={setSubject} value={subject}>
        <SelectTrigger className="border-blue-600 hover:shadow-lg w-full text-white placeholder-white">
          <SelectValue placeholder="Select Subject" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectItem value="All">All</SelectItem>
          {[
            "Mathematics",
            "Physics",
            "English",
            "Biology",
            "Chemistry",
            "Higher Math",
            "Bangla",
            "General Science",
            "Accounting",
            "Economics",
          ].map((subj) => (
            <SelectItem className="" key={subj} value={subj}>
              {subj}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <label htmlFor=""> Rating</label>
      <Select onValueChange={setRating}>
        <SelectTrigger className="border-blue-600 hover:shadow-lg w-full">
          <SelectValue placeholder="Rating" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">Ascending</SelectItem>
          <SelectItem value="dsc">Descending</SelectItem>
        </SelectContent>
      </Select>
      <label htmlFor="">Sort By</label>
      <Select onValueChange={setPriceSort}>
        <SelectTrigger className="border-blue-600 hover:shadow-lg w-full">
          <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="lowtohigh">Low to High</SelectItem>
          <SelectItem value="hightolow">High to Low</SelectItem>
        </SelectContent>
      </Select>


    </div>
        </div>

        {/* Tutor Cards */}
        <div className="flex-1">
          <div className="flex flex-wrap gap-8 justify-center">
            {filteredTutors?.length > 0 ? (
              filteredTutors.map((tutor) => (
                <TutorCard key={tutor.email} tutor={tutor} />
              ))
            ) : (
              <p className="text-center text-gray-500 w-full">No tutors found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTutors;
