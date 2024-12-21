"use client";

import Toolbar from "@/components/Toolbar";
import CourseCard from "@/components/CourseCard";
// import { useGetUserEnrolledCoursesQuery } from "@/state/api";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
// import { useUser } from "@clerk/nextjs";
import { useState, useMemo } from "react";
// import Loading from "@/components/Loading";

const Courses = () => {
  const router = useRouter();
  // const { user, isLoaded } = useUser();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // const {
  //   data: courses,
  //   isLoading,
  //   isError,
  // } = useGetUserEnrolledCoursesQuery(user?.id ?? "", {
  //   skip: !isLoaded || !user,
  // });

  const courses =    [ {
    "courseId": "3a9f3d6c-c391-4b1c-9c3d-6c3f3d6c3f3d",
    "teacherId": "user_7kFh92JkCpQw3N8M5L4xRzVtYs",
    "teacherName": "John Doe",
    "title": "Introduction to Programming",
    "description": "Learn the basics of programming with this comprehensive course.",
    "category": "Computer Science",
    "image": "https://images.pexels.com/photos/5905888/pexels-photo-5905888.jpeg",
    "price": 4999,
    "level": "Beginner",
    "status": "Published",
    "enrollments": [
      { "userId": "user_2ntu96pUCljUV2T9W0AThzjacQB" },
      { "userId": "user_9xWp45MnKjL8vRt2Hs6BqDcEy" }
    ],
    "sections": [
      {
        "sectionId": "2f9d1e8b-5a3c-4b7f-9e6d-8c2a1f0b3d5e",
        "sectionTitle": "Getting Started",
        "sectionDescription": "Learn the basics of programming and set up your development environment.",
        "chapters": [
          {
            "chapterId": "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6",
            "type": "Video",
            "title": "Welcome to Programming",
            "content": "https://example.com/videos/welcome.mp4",
            "video": "https://example.com/videos/welcome.mp4",
            "comments": [
              {
                "commentId": "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
                "userId": "emma.wilson@hotmail.com",
                "text": "Great introduction!",
                "timestamp": "2023-03-10T09:15:00Z"
              }
            ]
          },
          {
            "chapterId": "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7",
            "type": "Text",
            "title": "What is Programming?",
            "content": "Programming is the process of creating instructions for computers to follow...",
            "comments": []
          },
          {
            "chapterId": "c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8",
            "type": "Quiz",
            "title": "Programming Basics Quiz",
            "content": "1. What is a variable?\n2. What is the difference between a compiler and an interpreter?\n3. Name three popular programming languages.",
            "comments": []
          }
        ]
      },
      {
        "sectionId": "3g0e2f9c-6d4e-5a7f-8b9g-1h2i3j4k5l6m",
        "sectionTitle": "Basic Programming Concepts",
        "sectionDescription": "Explore fundamental programming concepts and data types.",
        "chapters": [
          {
            "chapterId": "d4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9",
            "type": "Video",
            "title": "Variables and Data Types",
            "content": "https://example.com/videos/variables-data-types.mp4",
            "video": "https://example.com/videos/variables-data-types.mp4",
            "comments": []
          },
          {
            "chapterId": "e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0",
            "type": "Text",
            "title": "Control Structures",
            "content": "Control structures are fundamental elements in programming that allow you to control the flow of your program...",
            "comments": []
          },
          {
            "chapterId": "f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u1",
            "type": "Quiz",
            "title": "Control Structures Quiz",
            "content": "1. What is an if-else statement?\n2. Explain the purpose of a loop.\n3. What is a switch statement?",
            "comments": []
          }
        ]
      },
      {
        "sectionId": "4h1f3g0d-7e5f-6b8g-9c0h-2i3j4k5l6m7n",
        "sectionTitle": "Functions and Modules",
        "sectionDescription": "Learn how to organize your code using functions and modules.",
        "chapters": [
          {
            "chapterId": "g7h8i9j0-k1l2-m3n4-o5p6-q7r8s9t0u1v2",
            "type": "Video",
            "title": "Introduction to Functions",
            "content": "https://example.com/videos/intro-to-functions.mp4",
            "video": "https://example.com/videos/intro-to-functions.mp4",
            "comments": []
          },
          {
            "chapterId": "h8i9j0k1-l2m3-n4o5-p6q7-r8s9t0u1v2w3",
            "type": "Text",
            "title": "Creating and Using Modules",
            "content": "Modules are a way to organize and reuse code across different parts of your program...",
            "comments": []
          },
          {
            "chapterId": "i9j0k1l2-m3n4-o5p6-q7r8-s9t0u1v2w3x4",
            "type": "Quiz",
            "title": "Functions and Modules Quiz",
            "content": "1. What is the difference between a function and a method?\n2. How do you import a module in Python?\n3. What is the purpose of the 'return' statement in a function?",
            "comments": []
          }
        ]
      }
    ]
  }]

  const filteredCourses = useMemo(() => {
    if (!courses) return [];

    return courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [courses, searchTerm, selectedCategory]);

  const handleGoToCourse = (course: Course) => {
    if (
      course.sections &&
      course.sections.length > 0 &&
      course.sections[0].chapters.length > 0
    ) {
      const firstChapter = course.sections[0].chapters[0];
      router.push(
        `/user/courses/${course.courseId}/chapters/${firstChapter.chapterId}`,
        {
          scroll: false,
        }
      );
    } else {
      router.push(`/user/courses/${course.courseId}`, {
        scroll: false,
      });
    }
  };

  // if (!isLoaded || isLoading) return <Loading />;
  // if (!user) return <div>Please sign in to view your courses.</div>;
  // if (isError || !courses || courses.length === 0)
  //   return <div>You are not enrolled in any courses yet.</div>;

  return (
    <div className="user-courses">
      <Header title="My Courses" subtitle="View your enrolled courses" />
      <Toolbar
        onSearch={setSearchTerm}
        onCategoryChange={setSelectedCategory}
      />
      {/* <div className="user-courses__grid">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.courseId}
            course={course}
            onGoToCourse={handleGoToCourse}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Courses;
