"use client";
import { useRouter } from "next/router";
import Head from "next/head";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import SidebarLayout from "@/components/layouts/sidebarlayout";
import friends from "../../data/friends.json";
import { useEffect, useState } from "react";
// Add this import to your component or layout file

/* Import only the icons you need from Heroicons and Tabler Icons */
import {
  CakeIcon,
  MapPinIcon,
  BeakerIcon,
  BuildingLibraryIcon,
  AcademicCapIcon,
  HeartIcon,
  HomeIcon,
  FilmIcon,
  BookOpenIcon,
  FaceSmileIcon,
  UserIcon,
  ScissorsIcon,
  PhotoIcon,
  PlayCircleIcon,
  PaperAirplaneIcon,
  GlobeAltIcon,
  CheckBadgeIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/solid";
import {
  IconAtom,
  IconBook,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTinder,
  IconBrandYoutube,
  IconBrandYoutubeFilled,
  IconCake,
  IconCakeOff,
  IconChairDirector,
  IconChartBubble,
  IconCheese,
  IconCircleDashedNumber1,
  IconCirclesRelation,
  IconCloudHeart,
  IconDiamond,
  IconExternalLink,
  IconEyeClosed,
  IconFlare,
  IconHandLittleFinger,
  IconHanger,
  IconHeart,
  IconHeartBroken,
  IconHeartFilled,
  IconHearts,
  IconLockPassword,
  IconMapPin,
  IconMasksTheater,
  IconMickey,
  IconMoodKid,
  IconMoodSad,
  IconMoodSmile,
  IconPaint,
  IconPalette,
  IconPaletteFilled,
  IconRings,
  IconSchool,
  IconShirt,
  IconThumbUp,
  IconUserQuestion,
  IconWorld,
} from "@tabler/icons-react";
import { TbRings } from "react-icons/tb";

const FriendsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [username, setUsername] = useState("Guest");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUsername(storedName);
    }
  }, []);

  const friend = friends.find((f) => f.id?.toString() === id);

  if (!friend) {
    return (
      <SidebarLayout>
        <h1 className="text-center text-white text-3xl mt-20">404 - Friend Not Found</h1>
      </SidebarLayout>
    );
  }

  const questionnaire = friend.questionnaire;

  return (
    <>
      <Head>
        <title>{friend.name} - Jai Raj's Slam Book</title>
      </Head>

      <SidebarLayout>
        {/* Changed parent div to fixed height with overflow */}
        <div className="relative h-screen overflow-y-auto text-white bg-black">
          <BackgroundBeamsWithCollision className="fixed inset-0 -z-10" />

          {/* Content container with padding */}
          <div className="relative z-10 p-6 space-y-6 ">
            {/* Questionnaire Display */}
            {questionnaire && (
              <div className="space-y-6 max-w-4xl mx-auto p-5">
                {/* Personal Info Section */}

                <div className="bg-[#18191af7] p-4 rounded-lg shadow-inner lg:px-5 lg:py-5">

                  <div
                    className="rounded-xl mt-2 text-center bg-cover bg-no-repeat bg-center cursor-pointer h-[150px]"
                    style={{
                      backgroundImage: `url('https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?cs=srgb&dl=pexels-andrew-3178786.jpg&fm=jpg')`,
                      backgroundPosition: "0px -40px",
                      backgroundSize: "cover",
                    }}
                  >

                    <div className="flex justify-center">
                      <img
                        alt={friend.fullname}
                        className={` 
                        border-4 border-[#3a3b3c]
                        rounded-full
                        transition duration-300
                        mt-[75px] w-[100px] h-[100px] object-cover 
                        hover:shadow-[6px_5px_3px_0px_rgba(0,0,0,0.36)]
                        `}
                        src={friend.src}
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="mt-4 text-center">
                    <h2 className="text-white cursor-default mt-8 text-xl font-bold capitalize">
                      {friend.fullname}
                      <CheckBadgeIcon
                        className="inline-block w-4 h-4 ml-1 text-[#2d88ff]"
                        title="Verified profile"
                      />
                    </h2>
                    <p className="text-gray-400 text-sm mt-2 mb-3">{friend.instaqoute}</p>

                  </div>

                  </div>

                  {/* Intro section */}
                  <div className="bg-[#18191af7]  p-4 rounded-lg shadow-inner lg:px-10 lg:py-6 ">
                    <h2 className="text-white text-2xl mb-3 font-bold capitalize">Intro</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Left Side */}
                      <div>
                        <div className="mb-4 flex items-start flex-col">
                          <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                            What's your name?
                          </label>
                          <div className="flex items-center">
                            <IconUserQuestion className="w-4 h-4 text-gray-400 mr-1" />
                            <p className="text-white-lite">{questionnaire.personal_info["what's your name?"]}</p>
                          </div>
                        </div>

                        <div className="mb-4 flex items-start flex-col">
                          <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                            When were you born?
                          </label>
                          <div className="flex items-center">
                            <IconCake className="w-4 h-4 text-gray-400 mr-1" />
                            <p className="text-white-lite">{questionnaire.personal_info["when were you born?"]}</p>
                          </div>
                        </div>

                        <div className="mb-0 flex items-start flex-col">
                          <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                            Your School
                          </label>
                          <div className="flex items-center">
                            <BuildingLibraryIcon className="w-4 h-4 text-gray-400 mr-1" />
                            <p className="text-white-lite">{questionnaire.personal_info["your school"]}</p>
                          </div>
                        </div>
                      </div>

                      {/* Right Side */}
                      <div>
                        <div className="mb-4 flex items-start flex-col">
                          <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                            Your College
                          </label>
                          <div className="flex items-center">
                            <IconSchool className="w-4 h-4 text-gray-400 mr-1" />
                            <p className="text-white-lite">{questionnaire.personal_info["your college"]}</p>
                          </div>
                        </div>

                        <div className="mb-4 flex items-start flex-col">
                          <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                            Zodiac sign
                          </label>
                          <div className="flex items-center">
                            <IconAtom className="w-4 h-4 text-gray-400 mr-1" />
                            <p className="text-white-lite">{questionnaire.personal_info["zodiac sign"]}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                {/* Favorites Section */}
                <div className="bg-[#18191af7]  p-4 rounded-lg shadow-inner lg:px-10 lg:py-6">
                  <h2 className="text-white text-2xl mb-3 font-bold capitalize">Favorites</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left Side */}
                    <div>
                      <div className="mb-4 flex items-start flex-col">
                        <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                          Favorite color
                        </label>
                        <div className="flex items-center">
                          <IconPalette className="w-4 h-4 text-gray-400 mr-1" />
                          <p className="text-white-lite">{questionnaire.favorites["fav color"]}</p>
                        </div>
                      </div>

                      <div className="mb-4 flex items-start flex-col">
                        <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                          Favorite place
                        </label>
                        <div className="flex items-center">
                          <IconMapPin className="w-4 h-4 text-gray-400 mr-1" />
                          <p className="text-white-lite">{questionnaire.favorites["fav place"]}</p>
                        </div>
                      </div>

                      <div className="mb-4 flex items-start flex-col">
                        <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                          Favorite food
                        </label>
                        <div className="flex items-center">
                          <IconCheese className="w-4 h-4 text-gray-400 mr-1" />
                          <p className="text-white-lite">{questionnaire.favorites["fav food"]}</p>
                        </div>
                      </div>

                      <div className="mb-0 flex items-start flex-col">
                        <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                          Favorite movie
                        </label>
                        <div className="flex items-center">
                          <IconBrandYoutube className="w-4 h-4 text-gray-400 mr-1" />
                          <p className="text-white-lite">{questionnaire.favorites["fav movie"]}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Side */}
                    <div>
                      <div className="mb-4 flex items-start flex-col">
                        <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                          Favorite actor/actress
                        </label>
                        <div className="flex items-center">
                          <IconMoodSmile className="w-4 h-4 text-gray-400 mr-1" />
                          <p className="text-white-lite font-arial">{questionnaire.favorites["fav actor/actress"]}</p>
                        </div>
                      </div>

                      <div className="mb-4 flex items-start flex-col">
                        <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                          Favorite person
                        </label>
                        <div className="flex items-center">
                          <IconHeart className="w-4 h-4 text-gray-400 mr-1" />
                          <p className="text-white-lite">{questionnaire.favorites["fav person"]}</p>
                        </div>
                      </div>

                      <div className="mb-4 flex items-start flex-col">
                        <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                          Favorite book/novel
                        </label>
                        <div className="flex items-center">
                          <IconBook className="w-4 h-4 text-gray-400 mr-1" />
                          <p className="text-white-lite">{questionnaire.favorites["fav book/novel"]}</p>
                        </div>
                      </div>

                      <div className="mb-4 flex items-start flex-col">
                        <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                          Favorite dress
                        </label>
                        <div className="flex items-center">
                          <IconHanger className="w-4 h-4 text-gray-400 mr-1" />
                          <p className="text-white-lite">{questionnaire.favorites["fav dress"]}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                {/* deep_thoughts Section */}
                <div className="bg-[#18191af7]  p-4 rounded-lg shadow-inner lg:px-10 lg:py-6">
                  <h2 className="text-white text-2xl mb-3 font-bold capitalize">Deep Thoughts</h2>

                  <div className="mb-4 flex items-start flex-col">
                    <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                      Your crazy dreams
                    </label>
                    <div className="flex items-center">
                      <IconCloudHeart className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-white-lite">{questionnaire.deep_thoughts["your crazy dreams"]}</p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-start flex-col">
                    <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                      Your hobbies
                    </label>
                    <div className="flex items-center">
                      <IconChartBubble className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-white-lite">{questionnaire.deep_thoughts["your hobbies"]}</p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-start flex-col">
                    <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                      Special talents
                    </label>
                    <div className="flex items-center">
                      <IconHandLittleFinger className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-white-lite">{questionnaire.deep_thoughts["special talents"]}</p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-start flex-col">
                    <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                      What is your deepest fear?
                    </label>
                    <div className="flex items-center">
                      <IconHeartBroken className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-white-lite">{questionnaire.deep_thoughts["what's your deepest fear?"]}</p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-start flex-col">
                    <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                      Tell me a secret
                    </label>
                    <div className="flex items-center">
                      <IconLockPassword className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-white-lite">{questionnaire.deep_thoughts["tell me one secret"]}</p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-start flex-col">
                    <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                      The most important person in your life
                    </label>
                    <div className="flex items-center">
                      <IconBrandTinder className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-white-lite">{questionnaire.deep_thoughts["the most important person in your life"]}</p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-start flex-col">
                    <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                      What is the most childish thing you still do?
                    </label>
                    <div className="flex items-center">
                      <IconMoodKid className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-white-lite">{questionnaire.deep_thoughts["what's the most childish thing you still do?"]}</p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-start flex-col">
                    <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                      Who is your crush?
                    </label>
                    <div className="flex items-center">
                      <IconHearts className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-white-lite">{questionnaire.deep_thoughts["who's your crush?"]}</p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-start flex-col">
                    <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                      Regarding your interests, what is the ideal person you would like to marry?
                    </label>
                    <div className="flex items-center">
                      <IconDiamond className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-white-lite">{questionnaire.deep_thoughts["on your interest, the person you like to marry"]}</p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-start flex-col">
                    <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                      If you could be invisible, what would you do first?
                    </label>
                    <div className="flex items-center">
                      <IconEyeClosed className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-white-lite">{questionnaire.deep_thoughts["if you can be invisible, what will you do first?"]}</p>
                    </div>
                  </div>
                </div>

                {/* for_me Section */}
                <div className="bg-[#18191af7]  p-4 rounded-lg shadow-inner lg:px-10 lg:py-6">
                  <h2 className="text-white text-2xl mb-3 font-bold capitalize">For me</h2>

                  <div className="mb-4 flex items-start flex-col">
                    <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                      A nickname for me
                    </label>
                    <div className="flex items-center">
                      <IconMickey className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-white-lite">{questionnaire.for_me["a nickname for me"]}</p>
                    </div>
                  </div>
                  <div className="mb-4 flex items-start flex-col">
                    <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                      A song you would like to dedicate to me
                    </label>
                    <div className="flex items-center">
                      <MusicalNoteIcon className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-white-lite">{questionnaire.for_me["a song you want to dedicate me"]}</p>
                    </div>
                  </div>
                  <div className="mb-4 flex items-start flex-col">
                    <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                      Our relationship
                    </label>
                    <div className="flex items-center">
                      <IconCirclesRelation className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-white-lite">{questionnaire.for_me["relation between you and me"]}</p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-start flex-col">
                    <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                      If I were your slave for a day, what would you ask me to do?
                    </label>
                    <div className="flex items-center">
                      <IconMasksTheater className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-white-lite">{questionnaire.for_me["if i was your slave for a day, what would you ask me to do for you?"]}</p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-start flex-col">
                    <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                      Which color suits me best?
                    </label>
                    <div className="flex items-center">
                      <IconPaint className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-white-lite">{questionnaire.for_me["which color suits me the most"]}</p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-start flex-col">
                    <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                      Something you want to tell me
                    </label>
                    <div className="flex items-center">
                      <IconFlare className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-white-lite">{questionnaire.for_me["something you want to tell me"]}</p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-start flex-col">
                    <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                      Something you dislike about me
                    </label>
                    <div className="flex items-center">
                      <IconMoodSad className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-white-lite">{questionnaire.for_me["something you hate in me"]}</p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-start flex-col">
                    <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                      Something you like about me
                    </label>
                    <div className="flex items-center">
                      <IconThumbUp className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-white-lite">{questionnaire.for_me["something you like in me"]}</p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-start flex-col">
                    <label className="block text-gray-400 text-sm font-semibold mb-1 mr-2">
                      What was your first impression of me?
                    </label>
                    <div className="flex items-center">
                      <IconCircleDashedNumber1 className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-white-lite">{questionnaire.for_me["what did you feel when you first saw me?"]}</p>
                    </div>
                  </div>
                </div>

                {/* filled_at timestamp */}
                {questionnaire.filled_at && (
                  <p className="text-gray-500 text-sm mt-4 flex text-center items-center justify-center">Recorded: {questionnaire.filled_at}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </SidebarLayout>
    </>
  );
};

export default FriendsPage;