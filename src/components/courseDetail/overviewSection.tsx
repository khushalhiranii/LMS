import { homeData } from "@/constants";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
  BriefcaseBusinessIcon,
  ChevronDown,
  ChevronUp,
  DownloadIcon,
  PanelBottomOpenIcon,
  PanelTop,
  PlayCircleIcon,
  UserIcon,
} from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { CheckmarkIcon } from "react-hot-toast";
import { FadeIn } from "../animation";
import { useRouter } from "next/navigation";

const OverviewSection: React.FC<any> = ({ courseData, id }) => {
  const overview = courseData?.courseDetail?.overview;
  return (
    <section className="mt-5">
      {/* upper-banner */}
      <CarrerDetailBanner data={courseData?.courseDetail?.careerDetail} />

      {/* most effective section */}
      <MostEffectiveSection courseData={courseData} overview={overview} />

      {/* HIGH DEMAND AND PROFFesional */}
      <HighDemandAndAccerlated
        data={courseData?.courseDetail?.highDemandAndAccerlated}
      />

      {/* KnowledgeHUT */}
      <KnowledgeHutAdvantage
        title={courseData?.title}
        data={courseData?.courseDetail?.knowledgeHut}
      />

      {/* TutitionAndTrainigFee */}
      <TutitionAndTrainigFee
        data={courseData?.courseDetail?.aboutCourse}
        courseName={courseData?.title}
      />

      {/* CourseAndInstructor */}
      <CourseAndInstructor data={courseData} />

      {/* course curriculm */}
      <CourseCurriculm data={courseData} />

      {/* learning objective */}
      <LearningObjective data={courseData?.courseDetail?.learningObjective} />

      {/* Pre-requistics and eligiblity */}
      <PrequisticsEligiblity data={courseData} />

      {/* course certification and banner */}
      <CourseCertification data={courseData} />

      {/* who can attend the course */}
      <WhoCanAttendTheCourse data={courseData} />

      {/* About course page */}
      <AccordinCourse
        data={courseData?.courseDetail?.aboutCourse}
        courseName={courseData?.title}
      />

      {/* contact learning advisor */}
      <ContactLearningAdvisor />

      {/* FAQ's Section */}
      <FaqsQuestions
        courseName={courseData?.title}
        data={courseData?.courseDetail?.faqs}
      />

      <OtherCourses id={id} courses={homeData?.courses} />
    </section>
  );
};

export const OtherCourses: React.FC<any> = ({ id, courses }) => {
  const otherCourses = courses?.filter((data: any) => data?.id !== Number(id));
  const router = useRouter();
  return (
    <section className="">
      <p className="text-xl my-3 uppercase text-center">Other Courses</p>
      <div className="flex w-full flex-wrap items-center gap-3">
      {otherCourses?.map((element:any,index:number)=>(
        <div onClick={()=> router.push(`/course-detail/${element?.id}`)} key={index} className="bg-grey-30 p-3 cursor-pointer">{element?.title}</div>
      ))}
      </div>
     
    </section>
  );
};

export const SecretSauceCourse: React.FC<any> = ({ data }) => {
  if (!data?.length) {
    return;
  }
  return (
    <section className="max-w-[1280px] mx-auto">
      <div className="text-center text-3xl font-bold">
        Our Secret Sauce for Exam and Career Success
      </div>
      <div className="grid grid-cols-4 place-items-center gap-4 mt-5">
        {data?.map((element: any, index: number) => (
          <div
            key={index}
            className="bg-white-10 border border-grey-10 shadow-2xl drop-shadow rounded-xl"
          >
            <img className="w-full h-[188px]" src={element?.image} alt="" />
            <div className="w-full bg-grey-50 text-center p-4 rounded-xl text-ellipsis">
              {element?.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const TutitionAndTrainigFee: React.FC<any> = ({ courseName }) => {
  return (
    <section
      id="tuition"
      className="bg-grey-30 p-3  my-5 shadow-md shadow-gray-500 rounded-xl "
    >
      <div className="text-center text-xl py-3">{courseName} Price</div>
      <div className="flex items-center gap-3">
        <TutitionAndTrainigFeeCard />
        <TutitionAndTrainigFeeCard />
      </div>
    </section>
  );
};

export const TutitionAndTrainigFeeCard: React.FC<any> = () => {
  return (
    <div
      id="tuition"
      className="my-3 bg-white-10 rounded-lg shadow-lg p-6 max-w-md border border-gray-200"
    >
      <div className="bg-green-600 text-white-10 text-center rounded-t-lg py-1">
        Best Seller
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-center">
          Instructor-Led Training
        </h2>
        <p className="text-center text-gray-600">
          Learn in Expert-Led Sessions
        </p>
        <hr className="my-4" />
        <h3 className="font-semibold">Solid Experiential Learning</h3>
        <ul className="mt-2 flex flex-col gap-3">
          <li className="flex items-start gap-3">
            <CheckmarkIcon className="w-4 h-4" />
            16 Hours of Instructor-led Training
          </li>
          <li className="flex items-start gap-3">
            <CheckmarkIcon />
            Lifetime Access to On-Demand Courseware
          </li>
          <li className="flex items-start gap-3">
            <CheckmarkIcon />5 Simulation Exams, 8 Mock Tests, 8 Assessments
          </li>
          <li className="flex items-start gap-3 w-full">
            <CheckmarkIcon className="w-full h-full" />
            Includes Exam Fee & PeopleCert Training Material
          </li>
        </ul>
        <hr className="my-4" />
      </div>
      <div className="bg-green-50 p-4 rounded-b-lg">
        <p className="text-green-600 font-semibold">
          <span className="text-red-500">Offer Discount: &nbsp;</span>
          21% OFF
        </p>
        <p className="text-2xl font-bold text-green-800">
          ₹27,999 <span className="line-through text-gray-500">₹35,499</span>
        </p>
        <button className="mt-4 w-full bg-blue-600 text-white-10 py-2 rounded-lg">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export const FaqsQuestions: React.FC<any> = ({ data, courseName = "" }) => {
  const faqType = Array.from(
    new Set(data?.map((element: any) => element?.type))
  );
  const [selectedMode, setSelectedMode] = useState(faqType ? faqType[0] : "");

  useEffect(() => {
    if (faqType) {
      setSelectedMode(faqType[0]);
    }
  }, []);

  const filterFaq = useMemo(() => {
    return data?.filter((element: any) => element.type === selectedMode);
  }, [data, selectedMode]);

  return (
    <section id="faqs" className="my-10">
      <div className="w-full p-6 bg-white-10  rounded-lg shadow-sm shadow-black-50  my-10">
        <h2 className="text-gray-600 text-sm font-semibold text-center">
          {courseName} FAQS
        </h2>
        <h1 className="text-2xl font-bold mt-2 text-center">
          {" "}
          Frequently Asked Questions
        </h1>

        <div className="border-[2px] border-grey-500 rounded-2xl px-3 py-1 flex items-center mt-6 w-fit mx-auto ">
          {faqType?.map((data: any, index: number) => (
            <button
              key={index}
              onClick={() => setSelectedMode(data)}
              className={`text-sm ${
                selectedMode === data
                  ? "bg-blue-10 text-white-10 "
                  : "text-black-10"
              }  px-3 py-2 rounded-xl`}
            >
              {data}
            </button>
          ))}
        </div>

        <div className="my-4">
          <AccordinCourse data={filterFaq} />
        </div>
      </div>
    </section>
  );
};

export const AccordinCourse: React.FC<any> = ({ courseName, data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!data?.length) {
    return;
  }
  return (
    <section className="">
      {/* <div className="text-blue-10 text-center text-3xl font-bold">About</div> */}
      {courseName && (
        <div className="text-3xl leading-9.75 font-bold my-4 text-center">
          About {courseName}{" "}
        </div>
      )}

      <ul className="flex flex-col gap-4">
        {data.map((element: any, index: number) => (
          <li
            onClick={() => setSelectedIndex(index)}
            key={index}
            className={`${
              selectedIndex === index
                ? "border-green-700 shadow-md shadow-green-700"
                : "border-grey-30"
            } p-4 border  rounded-xl  cursor-pointer`}
          >
            <div className="flex w-full justify-between items-center font-semibold text-lg ">
              {index + 1} . {element.question}
              {selectedIndex !== index ? <ChevronDown /> : <ChevronUp />}
            </div>
            {selectedIndex === index && (
              <hr className="my-3 bg-green-950 text-green-900 stroke-gray-900" />
            )}

            {selectedIndex === index && (
              <div className="my-5 text-sm ">{element?.answer}</div>
            )}
          </li>
        ))}
      </ul>

      <div className=""></div>
    </section>
  );
};

export const ContactLearningAdvisor: React.FC<any> = () => {
  return (
    <div className="bg-cream-10 p-8 rounded-lg shadow-sm shadow-black-50 drop-shadow flex items-center justify-between max-w-[1280px] mx-auto my-10">
      <div className="relative">
        <img
          src="https://d2o2utebsixu4k.cloudfront.net/CTA2-f1d21eb4869140808b780adec0efb253.svg"
          alt="A person standing with arms crossed, smiling confidently"
          className="rounded-full w-full h-full flex-1"
        />
      </div>
      <div className="flex-1 w-[30%]">
        <div className="text-sm uppercase font-semibold text-neutral-500">
          Need more information?
        </div>
        <div className="text-3xl leading-9.75 font-bold my-4">
          {"Have more questions or need personalized guidance?"}
        </div>

        <button className="font-bold text-base transition duration-300 ease-in-out bg-black-50 hover:bg-green-700 rounded text-white-10 px-6 py-4 items-center justify-center inline-flex md:h-14 h-11 ">
          Contact Learning Advisor
        </button>
      </div>
    </div>
  );
};

export const CourseCertification: React.FC<any> = ({ data }) => {
  const certification = data?.courseDetail?.certification;

  return (
    <section className="my-10">
      {certification?.certificateImage &&
        certification?.certificateImage !== "" && (
          <>
            <div className="text-sm uppercase font-semibold text-neutral-500">
              {data?.title} Certification
            </div>
            <div className="text-3xl leading-9.75 font-bold my-4">
              Earn The Coveted {data?.title}
            </div>

            <div className="text-sm leading-5.5 text-black-50 mt-5 mb-4">
              {certification.certificationDetail}
            </div>

            <img
              className="w-full h-full"
              alt="certificate-image"
              src={certification.certificateImage}
            ></img>

            <div className="text-3xl w-full flex items-center gap-3 justify-end ">
              Shareable On{" "}
              <LinkedInLogoIcon className="text-[blue] w-10 h-10" />
            </div>
          </>
        )}

      <div className="bg-cream-10 p-3 mt-4 rounded-xl shadow-xl drop-shadow-sm flex items-center gap-4 justify-between">
        <img className="h-[100px]" src={certification?.bannerImage}></img>
        <p className="text-xl font-bold flex-grow flex-1 text-neutral-800 text-left md:w-126">
          {certification?.bannerTitle}
        </p>
        <button className="font-bold text-base transition duration-300 ease-in-out bg-black-50 hover:bg-green-700 rounded text-white-10 px-6 py-4 items-center justify-center inline-flex md:h-14 h-11 ">
          Contact Learning Advisor
        </button>
      </div>
    </section>
  );
};

export const WhoCanAttendTheCourse: React.FC<any> = ({ data }) => {
  return (
    <div className="bg-white-10 p-8 rounded-lg shadow-sm shadow-black-50 drop-shadow flex items-center justify-between max-w-[1280px] mx-auto my-10">
      <div className="">
        <div className="text-sm uppercase font-semibold text-neutral-500">
          Who Can Attend the {data?.title}
        </div>
        <div className="text-3xl leading-9.75 font-bold my-4">
          {"Who This Course Is For"}
        </div>

        <div className="grid  grid-cols-2 gap-2 text-lg p-2 ">
          {data?.courseDetail?.whoCanAttendCourse.map(
            (element: any, index: number) => (
              <ul key={index} className="list-disc">
                <li>{element}</li>
              </ul>
            )
          )}
        </div>
      </div>

      <div className="relative">
        <img
          src="https://d2o2utebsixu4k.cloudfront.net/Who should attend-02-c450ca6d25cc4e8d831bd5a50355bb3a.svg"
          alt="A person standing with arms crossed, smiling confidently"
          className="rounded-full w-full h-full"
        />
      </div>
    </div>
  );
};

export const PrequisticsEligiblity: React.FC<any> = ({ data }) => {
  if (!data?.courseDetail?.prerequisites) {
    return;
  }
  return (
    <div className="bg-white-10 p-8 rounded-lg shadow-sm shadow-black-50 drop-shadow flex items-center justify-between max-w-[1280px] mx-auto">
      <div className="">
        <div className="text-sm uppercase font-semibold text-neutral-500">
          Prerequisites for {data?.title}
        </div>
        <div className="text-3xl leading-9.75 font-bold my-4">
          {"Prerequisites and Eligibility"}
        </div>

        <div className="grid gap-4 text-lg p-2 ">
          {data?.courseDetail?.prerequisites.map(
            (element: any, index: number) => (
              <ul key={index} className="list-disc">
                <li>{element}</li>
              </ul>
            )
          )}
        </div>
      </div>

      <div className="relative">
        <img
          src="https://d2o2utebsixu4k.cloudfront.net/Prerequisites-7a0e6d93848a4b9baec819249cc90c5d.svg"
          alt="A person standing with arms crossed, smiling confidently"
          className="rounded-full w-full h-full"
        />
      </div>
    </div>
  );
};

export const LearningObjective: React.FC<any> = ({ data }) => {
  const [viewAll, setViewAll] = useState(false);
  return (
    <div className="w-full p-6 bg-white-10  rounded-lg shadow-sm shadow-black-50  my-10">
      <h2 className="text-gray-600 text-sm font-semibold">
        WHAT YOU WILL LEARN
      </h2>
      <h1 className="text-2xl font-bold mt-2">Learning Objectives</h1>
      <hr className="my-3" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {data
          .slice(0, viewAll ? data?.length : 6)
          .map((element: any, index: number) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex items-center justify-center  bg-grey-50 border border-green-700 rounded-full">
                <span className="text-green-600 font-bold px-4 py-2">
                  {index + 1}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{element?.title}</h3>
                <p className="text-gray-600">{element?.description}</p>
              </div>
            </div>
          ))}
      </div>
      {data?.length > 6 && (
        <>
          <hr className="my-3" />
          <div className="mt-6 text-center w-full">
            <div
              onClick={() => setViewAll(!viewAll)}
              className="text-blue-600 cursor-pointer flex items-center gap-2 justify-center font-semibold"
            >
              {viewAll ? "View Less" : "View All"}
              {viewAll ? <ChevronUp /> : <ChevronDown />}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const CourseCurriculm: React.FC<any> = ({ data }) => {
  const curriculm = data?.courseDetail.courseCurriculm;
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section id="curriculum">
      <h3 className="font-bold text-bold text-blue-10 uppercase text-center text-2xl">
        Course Curriculm
      </h3>
      <div className="  w-full bg-white-10 p-6 rounded-xl drop-shadow-sm my-10 shadow-black-60 shadow">
        <h1 className="text-xl font-semibold mb-4 uppercase">
          {data?.title} CURRICULUM
        </h1>
        <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
        {curriculm?.map((element: any, index: number) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="border cursor-pointer border-gray-300 rounded-lg mb-4 shadow shadow-green-800"
          >
            <div className="border-b border-gray-300 p-4 flex justify-between items-center ">
              <h3 className="font-semibold">
                {index + 1}. {element?.title}
              </h3>
              <div className="flex items-center gap-3">
                {element?.isPreview && (
                  <span className="text-gray-500 flex items-center gap-3">
                    <PlayCircleIcon className="text-grey-10" />
                    Preview available
                  </span>
                )}
                <button className="">
                  {selectedIndex !== index ? <ChevronDown /> : <ChevronUp />}
                </button>
              </div>
            </div>
            {selectedIndex === index && (
              <div className="p-4">
                <p className="mb-4">
                  <strong>Learning Objectives:</strong>
                  {element?.objective}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Topics:</h4>
                  <ul className="list-none pl-0">
                    {element?.topics.map((element: any, index: number) => (
                      <li key={index} className="flex items-center mb-2 gap-3">
                        <CheckmarkIcon className="text-green-700" />
                        {element}
                      </li>
                    ))}
                  </ul>
                </div>
                {element?.isPreview && (
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-3">
                    <PlayCircleIcon className="text-white-10" />
                    <span className="mr-2 text-white-10">
                      Preview the course
                    </span>
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
        <div className="mt-6 w-full">
          <button className="bg-black-50 mx-auto text-white-10 px-6 py-3 rounded-lg flex items-center gap-3">
            <DownloadIcon className="" />
            Download Curriculum
          </button>
        </div>
      </div>
    </section>
  );
};

export const CourseAndInstructor: React.FC<any> = ({ data }) => {
  const [selectedMode, setSelectedMode] = useState("instructor");

  if (
    !data?.courseDetail?.courseInstructor?.length &&
    !data?.courseDetail?.courseAuthor?.length
  ) {
    return;
  }
  return (
    <section id="instructor" className="my-20">
      <div className="text-sm uppercase font-semibold text-neutral-500">
        OUR SUPPORT SYSTEM FOR {data?.title}
      </div>
      <div className="text-3xl leading-9.75 font-bold my-4">
        {"Meet the Team That's Invested in Your Success"}
      </div>
      <div className="border border-green-500 rounded-2xl p-3  flex items-center justify-between gap-3 max-w-fit">
        <button
          onClick={() => setSelectedMode("instructor")}
          className={`text-sm ${
            selectedMode === "instructor"
              ? "bg-blue-10 text-white-10 "
              : "text-black-10"
          }  px-3 py-2 rounded-xl`}
        >
          Instructors
        </button>
        {data?.courseAuthor && (
          <button
            onClick={() => setSelectedMode("author")}
            className={`text-sm ${
              selectedMode === "author"
                ? "bg-blue-10 text-white-10 "
                : "text-black-10"
            } px-2 py-2 rounded-xl`}
          >
            Course Author
          </button>
        )}
      </div>

      <div className="flex items-center justify-start w-full my-10 gap-4">
        {selectedMode === "instructor" ? (
          <>
            {data?.courseDetail?.courseInstructor?.map(
              (element: any, index: number) => (
                <CourseInstructorCard key={index} element={element} />
              )
            )}
          </>
        ) : (
          <>
            {data?.courseDetail?.courseAuthor?.map(
              (element: any, index: number) => (
                <CourseInstructorCard key={index} element={element} />
              )
            )}
          </>
        )}
      </div>
    </section>
  );
};

export const CourseInstructorCard: React.FC<any> = ({ element }) => {
  return (
    <div className="max-w-sm h-[280px] bg-white rounded-lg shadow-md shadow-black-60 drop-shadow-sm  p-6">
      <div className="flex items-center">
        <img
          className="w-12 h-12 rounded-full"
          src={element?.profilePic}
          alt="Profile picture of Alpesh Vasant"
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {element?.instructorName}
          </h2>
          <p className="text-sm text-gray-500">
            {element?.instructorProfession}
          </p>
        </div>
      </div>
      <p className="mt-4 text-gray-600">
        {element?.instructorDetail.slice(0, 100) + "..."}
        <span className="text-blue-500">Read More</span>
      </p>
      <div className="mt-4 flex items-center">
        <img className="w-8 h-auto" src={element?.companyLogo} alt="logo" />
      </div>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-base">
          Experience: {element?.experience}+ years
        </p>
        <LinkedInLogoIcon className="text-[blue] w-4 h-4" />
      </div>
    </div>
  );
};

export const KnowledgeHutAdvantage: React.FC<any> = ({ data, title }) => {
  return (
    <div id="why-knowledge-hut" className="">
      <p className="text-sm uppercase font-semibold text-neutral-500">
        WHY KNOWLEDGEHUT FOR {title}
      </p>
      <p className="text-3xl leading-9.75 font-bold text-mono-black mt-spacing6 mb-spacing40 my-5">
        {data?.subtitle}
      </p>
      <div className="grid grid-cols-2 w-full gap-3">
        {data?.knowledgeHutData?.map((element: any, index: number) => (
          <CourseInfoCard
            key={index}
            element={element}
            className="p-4 text-base leading-6.5 w-full  text-neutral-800  overview-list bg-white-10 shadow-sm rounded-xl drop-shadow"
          />
        ))}
      </div>
    </div>
  );
};

export const HighDemandAndAccerlated: React.FC<any> = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showReadMore, setReadMore] = useState(false);

  if (!data?.demandData?.length) {
    return;
  }

  return (
    <div className="mt-10 mb-20 max-w-[1280px] mx-auto">
      <div className="flex items-start gap-3 w-full">
        <div className="bg-[#f8f8f8] flex-1 w-full p-8 rounded-lg shadow-md shadow-black-60 drop-shadow">
          <h2 className="text-sm text-gray-500 mb-2">{data?.title}</h2>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {data?.demandHeading}
          </h1>
          <div className="bg-white-10 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-6 gap-6">
              {data?.demandData?.map((element: any, index: number) => (
                <button
                  onClick={() => setSelectedIndex(index)}
                  key={index}
                  className={`px-4 py-2 border border-gray-300 rounded-lg text-gray-700 ${
                    selectedIndex === index && "bg-green-900 text-white-10"
                  }`}
                >
                  {element?.type}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <h3 className="text-sm text-gray-500 mb-2">Salary</h3>
                <div className="flex justify-center items-end h-24">
                  <div className="bg-[#f8e5c2] w-8 h-16 mx-1"></div>
                  <div className="bg-cream-20 w-8 h-24 mx-1"></div>
                  <div className="bg-[#f8e5c2] w-8 h-20 mx-1"></div>
                </div>
                <div className="flex justify-center gap-2 text-sm text-gray-500 mt-2">
                  {data?.demandData[selectedIndex]?.averageSalary.map(
                    (element: string, index: number) => (
                      <React.Fragment key={index}>
                        <span>{element}L</span>
                      </React.Fragment>
                    )
                  )}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-sm text-gray-500 mb-2">Hiring Companies</h3>
                <div className="flex flex-wrap justify-center items-center h-24">
                  {/* company LOGO */}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-sm text-gray-500 mb-2">Demand</h3>
                <div className="flex justify-center items-center h-24">
                  <BriefcaseBusinessIcon className="w-[100px] h-[50px] text-yellow-500" />
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  <span>
                    {data?.demandData[selectedIndex]?.demand?.percant}
                  </span>
                  <p>{data?.demandData[selectedIndex]?.demand?.description}</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-6">
            {data?.demandDetail.slice(
              0,
              showReadMore ? data?.demandDetail?.length : 300
            ) + "..."}
          </p>
          <div
            onClick={() => setReadMore(!showReadMore)}
            className="text-blue-500 flex items-center  justify-center text-sm mt-2"
          >
            {showReadMore ? "Read Less" : "Read More"}
            {showReadMore ? <ChevronUp /> : <ChevronDown />}
          </div>
          <div className="mt-6 w-full flex justify-center">
            <button className="bg-blue-600 text-white-10 px-6 py-3 rounded-lg">
              Connect with us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CourseInfoCard: React.FC<any> = ({ element, ...style }) => {
  return (
    <div {...style}>
      <UserIcon className="text-green-700" />
      {element?.topic && (
        <p className="mt-2 text-base font-bold">{element?.topic}</p>
      )}
      <p className="mt-2 text-sm">{element?.value}</p>
    </div>
  );
};

export const OrderedList: React.FC<any> = ({ element, index }) => {
  return (
    <li key={index} className="flex items-start gap-2">
      <div className="flex-none">
        {/* Automatically display the list number */}
        <span className="font-semibold">{index + 1}.</span>{" "}
        {/* Show the number */}
      </div>
      <div className="flex-grow">
        {/* Display title and value with proper formatting */}
        <b className="whitespace-nowrap text-gray-800">
          {element?.title}:&nbsp;
        </b>
        <span className="text-gray-600">{element?.value}</span>
      </div>
    </li>
  );
};

export const MostEffectiveSection: React.FC<any> = ({
  courseData,
  overview,
}) => {
  const [showOverviewDescription, setShowOverviewDescription] = useState(false);
  return (
    <section className="my-10">
      <p className="text-sm uppercase font-semibold text-neutral-500">
        {courseData?.title}
      </p>
      <p className="text-3xl leading-9.75 font-bold text-mono-black mt-spacing6 mb-spacing40 my-5">
        The Most Effective {courseData?.title} Preparation
      </p>
      <div className="grid grid-cols-3 w-full gap-3">
        {overview?.courseDetail?.map((element: any, index: number) => (
          <CourseInfoCard
            key={index}
            element={element}
            className="p-2 text-base leading-6.5 w-full md:max-w-[300px] text-neutral-800  overview-list bg-white-10 shadow-sm rounded-xl drop-shadow"
          />
        ))}
      </div>

      {!showOverviewDescription && (
        <div
          onClick={() => setShowOverviewDescription(!showOverviewDescription)}
          className="underline cursor-pointer text-blue-10 font-bold my-3 flex items-center gap-2"
        >
          {showOverviewDescription ? <PanelBottomOpenIcon /> : <PanelTop />}
          {showOverviewDescription ? "Read Less" : "Read More"}
        </div>
      )}

      {showOverviewDescription && (
        <FadeIn delay={0.2}>
          <div className="transition-all duration-500 overflow-hidden w-full">
            <p className="text-sm  text-ellipsis my-5">
              {overview?.overviewDetail}
            </p>
            <ol className="list-decimal list-inside ml-6 space-y-4 mt-3">
              {overview?.overviewPoints?.map((element: any, index: number) => (
                <OrderedList key={index} element={element} index={index} />
              ))}
            </ol>

            <p className="mt-3 text-sm">
              {overview?.overviewCourseDescription}
            </p>
          </div>
        </FadeIn>
      )}

      {showOverviewDescription && (
        <div
          onClick={() => setShowOverviewDescription(!showOverviewDescription)}
          className="underline cursor-pointer text-blue-10 font-bold my-3 flex items-center gap-2"
        >
          {showOverviewDescription ? <PanelBottomOpenIcon /> : <PanelTop />}
          {showOverviewDescription ? "Read Less" : "Read More"}
        </div>
      )}
    </section>
  );
};

export const CarrerDetailBanner: React.FC<any> = ({ data = [] }) => {
  return (
    <div
      id="overview"
      className="flex relative overflow-hidden p-9 bg-cream-10  justify-between w-full rounded-xl "
    >
      {data.map((element: any, index: number) => (
        <div key={index} className="">
          <p className="text-2xl font-bold text-brown-10 mb-spacing2">
            {element?.value}+
          </p>
          <p className="text-sm  leading-5.5 font-normal text-brown-20">
            {element.carrer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OverviewSection;
