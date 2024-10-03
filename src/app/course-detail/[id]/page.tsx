"use client";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import AdvisorForm from "@/components/courseDetail/advisorForm";
import Banner from "@/components/courseDetail/banner";
import OverviewSection, {
  SecretSauceCourse,
} from "@/components/courseDetail/overviewSection";
import StickyHeader from "@/components/courseDetail/stickyHeader";
import { homeData } from "@/constants";
import { Course } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const CourseDetail = () => {
  const params = useParams();
  const id = params?.id as string;
  const courseData: Course | undefined = homeData?.courses?.find(
    (ele) => ele?.id === Number(id)
  );
  const [isSticky, setIsSticky] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current && footerRef.current) {
        const bannerBottom = bannerRef.current.getBoundingClientRect().bottom;
        const footerTop = footerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        setIsSticky(bannerBottom <= 0 && footerTop > windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!courseData) {
    return <div>Course not found</div>;
  }

  return (
    <div className="overflow-x-hidden">
      <Header isSticky={false} />

      <Banner courseData={courseData} />

      <div ref={bannerRef}>
        <SecretSauceCourse data={courseData?.courseDetail?.secretSauce} />
      </div>

      <div className="flex relative w-full max-w-[1280px] mx-auto">
        <StickyHeader isSticky={isSticky} />

        <div className="w-[70%] p-4">
          <div className="mb-8 h-auto">
            <OverviewSection id={id} courseData={courseData} />
          </div>
        </div>

        <div className="w-[30%] p-4">
          <div className={`${isSticky ? "fixed top-16 right-4 pr-9" : ""}`}>
            <AdvisorForm />
            {/* Add more content here */}
          </div>
        </div>
      </div>

      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default CourseDetail;
