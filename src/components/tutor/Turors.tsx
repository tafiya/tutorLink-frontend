'use client';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { IUser } from '@/types';
import TutorCard from './TutorCard';
import { useSearchParams } from 'next/navigation';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { GiFunnel } from 'react-icons/gi';
// import { ScrollArea } from '../ui/scroll-area';

const FindTutors = ({ tutors }: { tutors: IUser[] }) => {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [subject, setSubject] = useState('All');
  const [rating, setRating] = useState('');
  const [priceSort, setPriceSort] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const initialSearchTerm = decodeURIComponent(
      searchParams.get('search') || '',
    );
    setSearchTerm(initialSearchTerm);
  }, [searchParams]);

  const filteredTutors = tutors
    ?.filter((tutor) =>
      searchTerm
        ? tutor.name?.toLowerCase().includes(searchTerm.toLowerCase())
        : true,
    )
    ?.filter((tutor) =>
      subject !== 'All' ? tutor.subjects?.includes(subject) : true,
    )
    ?.filter((tutor) =>
      address
        ? tutor.address?.toLowerCase().includes(address.toLowerCase())
        : true,
    )
    .sort((a, b) => {
      if (rating === 'asc')
        return (a.averageRating ?? 0) - (b.averageRating ?? 0);
      if (rating === 'dsc')
        return (b.averageRating ?? 0) - (a.averageRating ?? 0);
      return 0;
    })
    .sort((a, b) => {
      if (priceSort === 'lowtohigh') return (a.price ?? 0) - (b.price ?? 0);
      if (priceSort === 'hightolow') return (b.price ?? 0) - (a.price ?? 0);
      return 0;
    });
  // pagination

  const [currentPage, setCurrentPage] = useState(1);
  const tutorsPerPage = 6;
  const totalTutors = filteredTutors?.length ?? 0;
  const totalPages = Math.ceil(totalTutors / tutorsPerPage);

  // Paginate the filtered results
  const paginatedTutors = filteredTutors?.slice(
    (currentPage - 1) * tutorsPerPage,
    currentPage * tutorsPerPage,
  );

  return (
    <div className="mx-auto max-w-7xl py-10 md:py-20">
      {/* Sheet Trigger for Mobile/Tablet */}
      <div className="xl:hidden mb-8 text-center text-white">
        <Sheet>
          <SheetTrigger asChild className=" flex justify-end">
            <Button variant="outline" className="border-blue-600 text-white">
              <GiFunnel />
              Filter Tutors
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[300px] sm:w-[400px] text-white py-8  px-6 overflow-y-scroll  "
          >
            <SheetTitle className="text-lg font-semibold mb-4"></SheetTitle>
            <div className=" flex justify-between items-center">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setAddress('');
                  setSubject('All');
                  setRating('');
                  setPriceSort('');
                }}
                className="text-base text-red-500 hover:underline"
              >
                Clear All
              </button>
            </div>
            {/* <ScrollArea className="h-[450px]"> */}
            <div className="flex flex-col gap-6 w-full ">
              {/* Search by name */}
              <Collapsible defaultOpen className=" my-4">
                <CollapsibleTrigger asChild>
                  <button className="group flex items-center justify-between w-full text-left font-medium text-white">
                    <span>Search By Name</span>
                    <span className="transition-transform duration-300 group-data-[state=open]:rotate-180">
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                  <Input
                    type="text"
                    placeholder="Search by tutor name"
                    className="text-white placeholder-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </CollapsibleContent>
              </Collapsible>
              {/* search by location */}
              <Collapsible defaultOpen>
                <CollapsibleTrigger asChild>
                  <button className="group flex items-center justify-between w-full text-left font-medium text-white">
                    <span>Location</span>
                    <span className="transition-transform duration-300 group-data-[state=open]:rotate-180">
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                  <Input
                    type="text"
                    placeholder="Enter the location"
                    className=" hover:shadow-lg"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </CollapsibleContent>
              </Collapsible>
              <Collapsible defaultOpen className=" my-4">
                <CollapsibleTrigger asChild>
                  <button className="group flex text-base items-center justify-between w-full text-left font-medium text-white">
                    <span>Sort By Subject</span>
                    <span className="transition-transform duration-300 group-data-[state=open]:rotate-180">
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <Select onValueChange={setSubject} value={subject}>
                    <SelectTrigger className="hover:shadow-lg w-full text-white placeholder-white">
                      <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent className="">
                      <SelectItem value="All">All</SelectItem>
                      {[
                        'Mathematics',
                        'Physics',
                        'English',
                        'Biology',
                        'Chemistry',
                        'Higher Math',
                        'Bangla',
                        'General Science',
                        'Accounting',
                        'Economics',
                      ].map((subj) => (
                        <SelectItem className="" key={subj} value={subj}>
                          {subj}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible defaultOpen>
                <CollapsibleTrigger asChild>
                  <button className="group flex items-center justify-between w-full text-left font-medium text-white">
                    <span>Rating</span>
                    <span className="transition-transform duration-300 group-data-[state=open]:rotate-180">
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                  <Select onValueChange={setRating}>
                    <SelectTrigger className=" hover:shadow-lg w-full">
                      <SelectValue placeholder="Rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asc">Ascending</SelectItem>
                      <SelectItem value="dsc">Descending</SelectItem>
                    </SelectContent>
                  </Select>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible defaultOpen className=" my-4">
                <CollapsibleTrigger asChild>
                  <button className="group flex items-center justify-between w-full text-left font-medium text-white">
                    <span>Sort By</span>
                    <span className="transition-transform duration-300 group-data-[state=open]:rotate-180">
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                  <Select onValueChange={setPriceSort}>
                    <SelectTrigger className=" hover:shadow-lg w-full">
                      <SelectValue placeholder="Price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lowtohigh">Low to High</SelectItem>
                      <SelectItem value="hightolow">High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </CollapsibleContent>
              </Collapsible>
            </div>
            {/* </ScrollArea> */}
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop layout */}
      <div className="flex flex-col lg:flex-row gap-8 text-white">
        {/* Sidebar Filter for Large Devices */}
        <div className="hidden xl:block w-full max-w-xs py-8 bg-blue-800/10 hover:bg-blue-800/20 border-r-2 border-blue-400 px-6  rounded-xl shadow-md h-fit">
          <div className=" flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <button
              onClick={() => {
                setSearchTerm('');
                setAddress('');
                setSubject('All');
                setRating('');
                setPriceSort('');
              }}
              className="text-base text-red-500 hover:underline"
            >
              Clear All
            </button>
          </div>

          <div className="flex flex-col gap-6 w-full">
            {/* Search by name */}
            <Collapsible defaultOpen className=" my-4">
              <CollapsibleTrigger asChild>
                <button className="group flex items-center justify-between w-full text-left font-medium text-white">
                  <span>Search By Name</span>
                  <span className="transition-transform duration-300 group-data-[state=open]:rotate-180">
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <Input
                  type="text"
                  placeholder="Search by tutor name"
                  className="text-white placeholder-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </CollapsibleContent>
            </Collapsible>
            {/* search by location */}
            <Collapsible defaultOpen>
              <CollapsibleTrigger asChild>
                <button className="group flex items-center justify-between w-full text-left font-medium text-white">
                  <span>Location</span>
                  <span className="transition-transform duration-300 group-data-[state=open]:rotate-180">
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <Input
                  type="text"
                  placeholder="Enter the location"
                  className=" hover:shadow-lg"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </CollapsibleContent>
            </Collapsible>
            <Collapsible defaultOpen className=" my-4">
              <CollapsibleTrigger asChild>
                <button className="group flex text-base items-center justify-between w-full text-left font-medium text-white">
                  <span>Sort By Subject</span>
                  <span className="transition-transform duration-300 group-data-[state=open]:rotate-180">
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4">
                <Select onValueChange={setSubject} value={subject}>
                  <SelectTrigger className="hover:shadow-lg w-full text-white placeholder-white">
                    <SelectValue placeholder="Select Subject" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectItem value="All">All</SelectItem>
                    {[
                      'Mathematics',
                      'Physics',
                      'English',
                      'Biology',
                      'Chemistry',
                      'Higher Math',
                      'Bangla',
                      'General Science',
                      'Accounting',
                      'Economics',
                    ].map((subj) => (
                      <SelectItem className="" key={subj} value={subj}>
                        {subj}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible defaultOpen>
              <CollapsibleTrigger asChild>
                <button className="group flex items-center justify-between w-full text-left font-medium text-white">
                  <span>Rating</span>
                  <span className="transition-transform duration-300 group-data-[state=open]:rotate-180">
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <Select onValueChange={setRating}>
                  <SelectTrigger className=" hover:shadow-lg w-full">
                    <SelectValue placeholder="Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asc">Ascending</SelectItem>
                    <SelectItem value="dsc">Descending</SelectItem>
                  </SelectContent>
                </Select>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible defaultOpen className=" my-4">
              <CollapsibleTrigger asChild>
                <button className="group flex items-center justify-between w-full text-left font-medium text-white">
                  <span>Sort By</span>
                  <span className="transition-transform duration-300 group-data-[state=open]:rotate-180">
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <Select onValueChange={setPriceSort}>
                  <SelectTrigger className=" hover:shadow-lg w-full">
                    <SelectValue placeholder="Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lowtohigh">Low to High</SelectItem>
                    <SelectItem value="hightolow">High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        {/* Tutor Cards */}
        <div className="flex-1">
          <div className=" flex flex-wrap gap-12 justify-center">
            {paginatedTutors?.length > 0 ? (
              paginatedTutors.map((tutor) => (
                <TutorCard key={tutor.email} tutor={tutor} />
              ))
            ) : (
              <p className="text-center text-gray-500 w-full">
                No tutors found.
              </p>
            )}
          </div>
      
        </div>
      </div>
      <div className="flex justify-center items-center mt-6 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-white'
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FindTutors;
