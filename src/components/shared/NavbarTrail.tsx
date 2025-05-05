'use client';
import clsx from 'clsx';
import {
  LogIn,
  ChevronDown,
  ChevronUp,
  FileText,
  FlaskConical,
  Calculator,
  Atom,
  Globe,
  Computer,
  FolderKanban,
  ChartNoAxesCombined,
  ChartBarStacked,
  Columns2,
  LayoutTemplate,
  EthernetPort,
  MonitorCog,
  LayoutDashboard,
  LogOut,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
import logo from '../../assets/technext.png';
import logo2 from '../../assets/TeachNest_Logo.png';
import navImage from '../../assets/navimage.jpg';
import { Button } from '../ui/button';
import { useUser } from '@/context/UserContext';
import { logout } from '@/services/AuthServices';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ScrollArea } from '../ui/scroll-area';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const menuData = [
  { name: 'Home', href: '/' },
  {
    name: 'Subjects',
    isMegaMenu: true,
    subMenu: [
      {
        title: 'High School',
        links: [
          { name: 'Mathematics', href: '/tutors', icon: Calculator },
          { name: 'Chemistry', href: '/tutors', icon: FlaskConical },
          { name: 'English', href: '/tutors', icon: Globe },
          { name: 'Physic', href: '/tutors', icon: Atom },
        ],
      },
      {
        title: 'College',
        links: [
          { name: 'English', href: '/tutors', icon: Globe },
          { name: 'Literature', href: '/tutors', icon: FileText },
          { name: 'Mathematics', href: '/tutors', icon: Calculator },
        ],
      },
      {
        title: 'University',
        links: [
          { name: 'Computer', href: '/tutor', icon: Computer },
          { name: 'Management', href: '/tutor', icon: FolderKanban },
          { name: 'Statistics', href: '/tutor', icon: ChartNoAxesCombined },
          { name: 'BBA', href: '/tutor', icon: ChartBarStacked },
        ],
      },
      {
        title: 'Basic',
        links: [
          { name: 'Computer Fundamental', href: '/tutors', icon: Computer },
          { name: 'PowerPoint', href: '/tutors', icon: Columns2 },
        ],
      },
      {
        title: 'Technology',
        links: [
          { name: 'Web Development', href: '/tutors', icon: LayoutTemplate },
          { name: 'SQA', href: '/tutors', icon: MonitorCog },
          { name: 'Wordpress', href: '/tutors', icon: EthernetPort },
        ],
      },
    ],
  },
  { name: 'Browse Tutors', href: '/tutors' },
  { name: 'About', href: '/about' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'FAQ', href: '/faq' },

  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { user, setIsLoading } = useUser();
  const location = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    router.push('/');
  };

  return (
    <div
      className={clsx(
        'fixed z-10 w-full transition-all text-white',
        scrolling && 'bg-blue-100 shadow-sm shadow-blue-200 text-black',
      )}
    >
      <nav className="flex justify-between px-8 items-center py-2 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          {/* Mobile Menu Button */}
          <FiMenu
            onClick={() => setMenu(true)}
            className="text-3xl cursor-pointer lg:hidden"
          />
          {scrolling ? (
            <Link href={'/'}>
              <Image src={logo} alt="logo" height={200} width={200} />
            </Link>
          ) : (
            <Link href={'/'}>
              <Image src={logo2} alt="logo" height={200} width={200} />
            </Link>
          )}
          {/* Logo */}
          {/* <Link href={'/'}>
            <Image src={logo} alt="logo" height={200} width={200} />
          </Link> */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {menuData.map((menu, i) =>
            menu.isMegaMenu ? (
              <div key={i} className="relative">
                <button
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                  className={clsx(
                    'flex items-center py-3 gap-1 uppercase  font-semibold',
                    isMegaMenuOpen
                      ? ' text-blue-600'
                      : scrolling &&
                          'flex items-center py-3 gap-1  uppercase font-semibold text-black',
                  )}
                >
                  {menu.name}{' '}
                  {isMegaMenuOpen ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>

                {isMegaMenuOpen && (
                  <div
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                    className="absolute left-0 top-full bg-black shadow-[0px_0px_20px_theme(colors.blue.600)] text-white w-[650px] rounded-md p-4 flex gap-6"
                  >
                    <div className="grid gap-5 lg:grid-cols-3 ">
                      {menu.subMenu.map((section, index) => (
                        <div key={index}>
                          <h3 className="mb-3 text-sm font-semibold ">
                            {section.title}
                          </h3>
                          <div className="space-y-2">
                            {section.links.map((link, idx) => (
                              <Link
                                key={idx}
                                href={`/tutors?subject=${link.name}`}
                                className="flex items-center gap-2 text-sm p-2 hover:text-blue-600 hover:bg-blue-100 rounded"
                              >
                                <link.icon
                                  className=" text-blue-600"
                                  size={16}
                                />
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                      <Image
                        src={navImage}
                        alt="logo"
                        height={200}
                        width={200}
                        className=" rounded-md"
                      />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={i}
                className={clsx(
                  'font-semibold uppercase',
                  location === menu.href
                    ? 'text-blue-600 font-semibold  rounded-lg px-3'
                    : scrolling
                      ? 'text-black group flex  cursor-pointer flex-col hover:text-blue-600'
                      : 'text-white hover:text-blue-600 group flex  cursor-pointer flex-col',
                )}
                href={menu.href ?? ''}
              >
                {menu.name}
                <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ),
          )}
        </div>

        {/* Mobile Sidebar */}
        <div
          className={clsx(
            'fixed h-full w-screen bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all lg:hidden',
            isSideMenuOpen && 'translate-x-0',
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />
            <ScrollArea className="h-96">
              {menuData.map((menu, i) => (
                <div key={i}>
                  {menu.isMegaMenu ? (
                    <>
                      <button
                        onClick={() => setMegaMenuOpen(!isMegaMenuOpen)}
                        className="flex items-center gap-1 font-bold w-full text-left"
                      >
                        {menu.name}{' '}
                        {isMegaMenuOpen ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </button>
                      {isMegaMenuOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {menu.subMenu.map((section, index) => (
                            <div key={index}>
                              <h3 className="font-semibold">{section.title}</h3>
                              {section.links.map((link, idx) => (
                                <Link
                                  key={idx}
                                  href={link.href}
                                  className="block text-sm p-2 hover:bg-gray-100 rounded"
                                >
                                  {link.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      onClick={() => setMenu(false)}
                      className="font-bold block"
                      href={menu.href ?? ''}
                    >
                      {menu.name}
                    </Link>
                  )}
                </div>
              ))}
            </ScrollArea>
          </section>
        </div>

        {/* User Section */}
        <section className="flex items-center gap-4">
          {/* <CartSheet></CartSheet> */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>User</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" bg-black border-blue-600 shadow-[0px_0px_5px_theme(colors.blue.600)]">
                <DropdownMenuLabel className=" items-center text-gray-100 ">
                  {user.role}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                {user.role == 'Student' ? (
                  <DropdownMenuItem>
                    <Link
                      href="/student"
                      className=" flex gap-1 items-center text-lg text-blue-600 "
                    >
                      {' '}
                      <LayoutDashboard className=" text-blue-600" />
                      DashBoard
                    </Link>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem>
                    {' '}
                    <Link
                      className=" flex gap-1 items-center text-base text-blue-600 "
                      href="/tutor"
                    >
                      {' '}
                      <LayoutDashboard className=" text-blue-600" />
                      DashBoard
                    </Link>
                  </DropdownMenuItem>
                )}

                <DropdownMenuItem
                  className=" flex gap-1 items-center text-base text-blue-600 "
                  onClick={handleLogOut}
                >
                  <LogOut className=" text-blue-600" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className=" flex gap-2">
              <Link href={'/login'}>
                <Button
                  variant="outline"
                  className="hover:bg-blue-600 bg-white shadow-lg shadow-blue-600 hover:text-white text-blue-600 border-blue-600 flex items-center gap-2 "
                >
                  <LogIn />
                  Login
                </Button>
              </Link>
              <Link href={'/register'}>
                <Button
                  variant="outline"
                  className="bg-blue-600 text-white shadow-lg shadow-blue-600 hover:text-blue-600 border-blue-600 flex items-center gap-2 "
                >
                  <LogIn />
                  SignUp
                </Button>
              </Link>
            </div>
          )}

          {/* avtar img */}
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
