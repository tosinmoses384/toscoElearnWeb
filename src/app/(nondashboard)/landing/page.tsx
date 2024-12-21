"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useCarousel } from "@/hooks/useCarousel";
// import { Skeleton } from "@/components/ui/skeleton";
// import { useGetCoursesQuery } from "@/state/api";
import { useRouter } from "next/navigation";
import CourseCardSearch from "@/components/CourseCardSearch";

// const LoadingSkeleton = () => {
//   return (
//     <div className="landing-skeleton">
//       <div className="landing-skeleton__hero">
//         <div className="landing-skeleton__hero-content">
//           <Skeleton className="landing-skeleton__title" />
//           <Skeleton className="landing-skeleton__subtitle" />
//           <Skeleton className="landing-skeleton__subtitle-secondary" />
//           <Skeleton className="landing-skeleton__button" />
//         </div>
//         <Skeleton className="landing-skeleton__hero-image" />
//       </div>

//       <div className="landing-skeleton__featured">
//         <Skeleton className="landing-skeleton__featured-title" />
//         <Skeleton className="landing-skeleton__featured-description" />

//         <div className="landing-skeleton__tags">
//           {[1, 2, 3, 4, 5].map((_, index) => (
//             <Skeleton key={index} className="landing-skeleton__tag" />
//           ))}
//         </div>

//         <div className="landing-skeleton__courses">
//           {[1, 2, 3, 4].map((_, index) => (
//             <Skeleton key={index} className="landing-skeleton__course-card" />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

const Landing = () => {
  const router = useRouter();
  const currentImage = useCarousel({ totalImages: 3 });
  
  // IN ORDER TO DEPLOY AND QUICKLY SHARE TO THE WORLD 
  // const { data: courses, isLoading, isError } = useGetCoursesQuery({});

  const courses = [
    {
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
    },
    {
      "courseId": "8b4f7d9c-4b1c-4b1c-8b4f-7d9c8b4f7d9c",
      "teacherId": "user_4mNj68RtPvXw2Ky9Qc7HbSdAf",
      "teacherName": "Alice Johnson",
      "title": "Advanced Machine Learning",
      "description": "Dive deep into machine learning algorithms and techniques.",
      "category": "Artificial Intelligence",
      "image": "https://images.pexels.com/photos/6303596/pexels-photo-6303596.jpeg",
      "price": 9999,
      "level": "Advanced",
      "status": "Published",
      "enrollments": [
        { "userId": "user_2ntu96pUCljUV2T9W0AThzjacQB" },
        { "userId": "user_5vBn23WsLkMp7Jh4Gt8FxYcRz" }
      ],
      "sections": [
        {
          "sectionId": "1a7b3c5d-9e2f-4g6h-8i0j-2k4l6m8n0p1q",
          "sectionTitle": "Neural Networks",
          "sectionDescription": "Learn about neural networks and their applications.",
          "chapters": [
            {
              "chapterId": "c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8",
              "type": "Video",
              "title": "Introduction to Neural Networks",
              "content": "https://example.com/videos/neural-networks-intro.mp4",
              "videoLength": 1200,
              "comments": [],
              "videoUrl": "https://example.com/videos/neural-networks-intro.mp4",
              "videoUniqueId": "vid_004",
              "videoType": "hls"
            },
            {
              "chapterId": "d4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9",
              "type": "Quiz",
              "title": "Neural Networks Quiz",
              "content": "1. What is a neuron?\n2. Explain backpropagation.\n3. What is an activation function?",
              "comments": []
            },
            {
              "chapterId": "e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0",
              "type": "Text",
              "title": "Types of Neural Networks",
              "content": "There are various types of neural networks, each designed for specific tasks...",
              "comments": []
            }
          ]
        },
        {
          "sectionId": "2b8c4d6e-0f3g-5h7i-9j1k-3l5m7n9p1q3r",
          "sectionTitle": "Deep Learning",
          "sectionDescription": "Explore advanced deep learning techniques and architectures.",
          "chapters": [
            {
              "chapterId": "f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u1",
              "type": "Video",
              "title": "Convolutional Neural Networks",
              "content": "https://example.com/videos/cnn-explained.mp4",
              "videoLength": 1500,
              "comments": [],
              "videoUrl": "https://example.com/videos/cnn-explained.mp4",
              "videoUniqueId": "vid_005",
              "videoType": "dash"
            },
            {
              "chapterId": "g7h8i9j0-k1l2-m3n4-o5p6-q7r8s9t0u1v2",
              "type": "Text",
              "title": "Recurrent Neural Networks",
              "content": "Recurrent Neural Networks (RNNs) are a class of neural networks designed to work with sequential data...",
              "comments": []
            },
            {
              "chapterId": "h8i9j0k1-l2m3-n4o5-p6q7-r8s9t0u1v2w3",
              "type": "Quiz",
              "title": "Deep Learning Architectures Quiz",
              "content": "1. What is the main advantage of CNNs?\n2. Explain the vanishing gradient problem in RNNs.\n3. What is transfer learning?",
              "comments": []
            }
          ]
        },
        {
          "sectionId": "3c9d5e7f-1g4h-6i8j-0k2l-4m6n8p0q2r4s",
          "sectionTitle": "Advanced ML Algorithms",
          "sectionDescription": "Study cutting-edge machine learning algorithms and their implementations.",
          "chapters": [
            {
              "chapterId": "i9j0k1l2-m3n4-o5p6-q7r8-s9t0u1v2w3x4",
              "type": "Video",
              "title": "Generative Adversarial Networks",
              "content": "https://example.com/videos/gan-explained.mp4",
              "videoLength": 1800,
              "comments": [],
              "videoUrl": "https://example.com/videos/gan-explained.mp4",
              "videoUniqueId": "vid_006",
              "videoType": "mp4"
            },
            {
              "chapterId": "j0k1l2m3-n4o5-p6q7-r8s9-t0u1v2w3x4y5",
              "type": "Text",
              "title": "Reinforcement Learning",
              "content": "Reinforcement Learning is a type of machine learning where an agent learns to make decisions by interacting with an environment...",
              "comments": []
            },
            {
              "chapterId": "k1l2m3n4-o5p6-q7r8-s9t0-u1v2w3x4y5z6",
              "type": "Quiz",
              "title": "Advanced ML Algorithms Quiz",
              "content": "1. What are the components of a GAN?\n2. Explain the difference between Q-learning and policy gradients.\n3. What is the purpose of the discriminator in a GAN?",
              "comments": []
            }
          ]
        }
      ]
    },
    {
      "courseId": "c5d6e7f8-g9h0-i1j2-k3l4-m5n6o7p8q9r0",
      "teacherId": "user_7kFh92JkCpQw3N8M5L4xRzVtYs",
      "teacherName": "John Doe",
      "title": "Web Development Fundamentals",
      "description": "Learn the basics of HTML, CSS, and JavaScript to build modern websites.",
      "category": "Web Development",
      "image": "https://images.pexels.com/photos/6001397/pexels-photo-6001397.jpeg",
      "price": 7999,
      "level": "Beginner",
      "status": "Published",
      "enrollments": [
        { "userId": "user_6tHm89QwNpKj3Fx5Vy2RdLcBs" },
        { "userId": "user_9xWp45MnKjL8vRt2Hs6BqDcEy" }
      ],
      "sections": [
        {
          "sectionId": "3e5f7g9h-1i3j-5k7l-9m1n-3o5p7q9r1s3t",
          "sectionTitle": "HTML Basics",
          "sectionDescription": "Learn the fundamentals of HTML.",
          "chapters": [
            {
              "chapterId": "e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0",
              "type": "Video",
              "title": "Introduction to HTML",
              "content": "https://example.com/videos/intro-to-html.mp4",
              "video": "https://example.com/videos/intro-to-html.mp4",
              "comments": []
            },
            {
              "chapterId": "f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u1",
              "type": "Quiz",
              "title": "HTML Tags Quiz",
              "content": "1. What does HTML stand for?\n2. Name three basic HTML tags.\n3. What is the purpose of the <head> tag?",
              "comments": []
            },
            {
              "chapterId": "g7h8i9j0-k1l2-m3n4-o5p6-q7r8s9t0u1v2",
              "type": "Text",
              "title": "HTML Forms and Input Elements",
              "content": "HTML forms are used to collect user input. Learn about various input types and form elements...",
              "comments": []
            }
          ]
        },
        {
          "sectionId": "4f6g8h0i-2j4k-6l8m-0n2p-4q6r8s0t2u4v",
          "sectionTitle": "CSS Styling",
          "sectionDescription": "Learn how to style your HTML with CSS.",
          "chapters": [
            {
              "chapterId": "h8i9j0k1-l2m3-n4o5-p6q7-r8s9t0u1v2w3",
              "type": "Video",
              "title": "CSS Basics",
              "content": "https://example.com/videos/css-basics.mp4",
              "video": "https://example.com/videos/css-basics.mp4",
              "comments": []
            },
            {
              "chapterId": "i9j0k1l2-m3n4-o5p6-q7r8-s9t0u1v2w3x4",
              "type": "Text",
              "title": "CSS Layout Techniques",
              "content": "Learn about different CSS layout techniques including Flexbox and Grid...",
              "comments": []
            },
            {
              "chapterId": "j0k1l2m3-n4o5-p6q7-r8s9-t0u1v2w3x4y5",
              "type": "Quiz",
              "title": "CSS Styling Quiz",
              "content": "1. What is the box model in CSS?\n2. Explain the difference between inline and block elements.\n3. How do you center an element horizontally and vertically using Flexbox?",
              "comments": []
            }
          ]
        }
      ]
    },
    {
      "courseId": "d4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9",
      "teacherId": "user_3rTg67LmZnXc4Vb8Wd0JyUhEq",
      "teacherName": "Michael Brown",
      "title": "Data Science Fundamentals",
      "description": "Learn the basics of data science, including statistics, data visualization, and machine learning.",
      "category": "Data Science",
      "image": "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg",
      "price": 8999,
      "level": "Intermediate",
      "status": "Published",
      "enrollments": [
        { "userId": "user_6tHm89QwNpKj3Fx5Vy2RdLcBs" },
        { "userId": "user_9xWp45MnKjL8vRt2Hs6BqDcEy" }
      ],
      "sections": [
        {
          "sectionId": "4u6v8w0x-2y4z-6a8b-0c2d-4e6f8g0h2i4j",
          "sectionTitle": "Introduction to Data Science",
          "sectionDescription": "Learn the basics of data science and its applications.",
          "chapters": [
            {
              "chapterId": "g7h8i9j0-k1l2-m3n4-o5p6-q7r8s9t0u1v2",
              "type": "Video",
              "title": "What is Data Science?",
              "content": "https://example.com/videos/what-is-data-science.mp4",
              "video": "https://example.com/videos/what-is-data-science.mp4",
              "comments": []
            },
            {
              "chapterId": "h8i9j0k1-l2m3-n4o5-p6q7-r8s9t0u1v2w3",
              "type": "Quiz",
              "title": "Data Science Basics Quiz",
              "content": "1. Define data science.\n2. What are the main components of data science?\n3. How does machine learning relate to data science?",
              "comments": []
            }
          ]
        }
      ]
    },
    {
      "courseId": "e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0",
      "teacherId": "user_7kFh92JkCpQw3N8M5L4xRzVtYs",
      "teacherName": "John Doe",
      "title": "Mobile App Development with React Native",
      "description": "Build cross-platform mobile apps using React Native and JavaScript.",
      "category": "Mobile Development",
      "image": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      "price": 12999,
      "level": "Advanced",
      "status": "Published",
      "enrollments": [{ "userId": "user_6tHm89QwNpKj3Fx5Vy2RdLcBs" }],
      "sections": [
        {
          "sectionId": "5k7l9m1n-3o5p-7q9r-1s3t-5u7v9w1x3y5z",
          "sectionTitle": "Getting Started with React Native",
          "sectionDescription": "Learn the basics of React Native development.",
          "chapters": [
            {
              "chapterId": "i9j0k1l2-m3n4-o5p6-q7r8-s9t0u1v2w3x4",
              "type": "Video",
              "title": "Setting Up Your Development Environment",
              "content": "https://example.com/videos/react-native-setup.mp4",
              "video": "https://example.com/videos/react-native-setup.mp4",
              "comments": []
            },
            {
              "chapterId": "j0k1l2m3-n4o5-p6q7-r8s9-t0u1v2w3x4y5",
              "type": "Text",
              "title": "React Native Basics",
              "content": "Learn about functions, objects, and other core concepts in JavaScript...",
              "comments": []
            }
          ]
        }
      ]
    }
  ]
  
  
  const handleCourseClick = (courseId: string) => {
    router.push(`/search?id=${courseId}`, {
      scroll: false,
    });
  };

  // if (isLoading) return <LoadingSkeleton />;
  
  console.log("courses:", courses);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="landing"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="landing__hero"
      >
        <div className="landing__hero-content">
          <h1 className="landing__title">Courses</h1>
          <p className="landing__description">
            This is the list of the courses you can enrol in.
            <br />
            Courses when you need them and want them.
          </p>
          <div className="landing__cta">
            <Link href="/search">
              <div className="landing__cta-button">Search for Courses</div>
            </Link>
          </div>
        </div>

        <div className="landing__hero-images">
          {["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"].map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Hero Banner ${index + 1}`}
              fill
              priority={index === currentImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`landing__hero-image ${
                index === currentImage ? "landing__hero-image--active" : ""
              }`}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.3, once: true }}
        className="landing__featured"
      >
        <h2 className="landing__featured-title">Featured Courses</h2>
        <p className="landing__featured-description">
          From beginner to advanced, in all industries, we have the right
          courses just for you and preparing your entire journey for learning
          and making the most.
        </p>

        <div className="landing__tags">
          {[
            "web development",
            "enterprise IT",
            "react nextjs",
            "JavaScript",
            "backend development",
          ].map((tag, index) => (
            <span key={index} className="landing__tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="landing__courses">
          {/* COURSES DISPLAY */}
          {courses &&
            courses.slice(0, 4).map((course:any, index) => (
              <motion.div
                key={course.courseId}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ amount: 0.4 }}
              >
                <CourseCardSearch
                  course={course}
                  onClick={() => handleCourseClick(course.courseId)}
                />
              </motion.div>
            ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Landing;
