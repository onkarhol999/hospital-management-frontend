import React from "react";
import Navbar from "./NavBar";

export default function Blogs() {
  const blogs = [
    {
      title: "The Science of Healthy Living",
      description: "Explore how daily habits impact long-term health and wellness.",
      link: "https://www.healthline.com/nutrition/healthy-lifestyle",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRofGVufDB8fDB8fHww",
    },
    {
      title: "10 Best Foods for a Stronger Immune System",
      description: "Boost your immunity naturally with these nutritious foods.",
      link: "https://www.medicalnewstoday.com/articles/322412",
      image: "https://www.healthista.com/wp-content/uploads/2024/03/Neuro-divergence-and-mental-health-MAIN.jpg",
    },
    {
      title: "How to Improve Mental Health",
      description: "Tips and practices to enhance mental well-being.",
      link: "https://www.verywellmind.com/how-to-improve-mental-health-3145079",
      image: "https://www.healthista.com/wp-content/uploads/2023/11/Dr-Micheal-Mosley-reveals-3-benefits-of-intermittent-fasting-plus-how-to-get-started-MAIN.jpg",
    },
    {
      title: "Benefits of Regular Exercise",
      description: "How staying active can transform your body and mind.",
      link: "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389",
      image: "https://media.theeverygirl.com/wp-content/uploads/2020/07/lack-of-poc-in-wellness-the-everygirl-3.jpg",
    },
    {
      title: "Mindful Eating: A New Approach to Dieting",
      description: "Learn how to enjoy food while maintaining a healthy lifestyle.",
      link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5556586/",
      image: "https://creeksideobgyn.com/wp-content/uploads/2023/12/Motherhood-and-Mental-Health-980x551.jpg",
    },
    {
      title: "The Role of Sleep in Health & Fitness",
      description: "Why sleep is as important as diet and exercise.",
      link: "https://www.sleepfoundation.org/sleep-hygiene",
      image: "https://www.healthywomen.org/media-library/image.jpg?id=51803995&width=1200&height=800&quality=85&coordinates=0%2C0%2C0%2C0",
    },
    {
      title: "How Stress Affects Your Body",
      description: "Understanding the physical and mental impact of stress.",
      link: "https://www.apa.org/topics/stress/body",
      image: "https://www.kcobgyn.com/images/Blog/the-benefits-to-cord-blood-banking.png",
    },
    {
      title: "Top 5 Yoga Poses for Beginners",
      description: "Start your yoga journey with these simple yet effective poses.",
      link: "https://www.yogajournal.com/poses/yoga-by-benefit/beginner-yoga/",
      image: "https://source.unsplash.com/400x250/?yoga,meditation",
    },
    {
      title: "The Link Between Gut Health and Mood",
      description: "How your digestive system influences mental health.",
      link: "https://www.health.harvard.edu/blog/the-gut-brain-connection-2020050119889",
      image: "https://source.unsplash.com/400x250/?gut,health",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col items-center py-16 px-6">
      <Navbar/>
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-blue-800 mb-10 drop-shadow-lg">
        Health & Wellness Blogs
      </h1>

      {/* Blogs Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <a
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="overflow-hidden rounded-2xl shadow-lg bg-white border border-blue-300 hover:border-indigo-400 transition-transform transform group-hover:scale-105 group-hover:shadow-2xl duration-300">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-center">
                <h2 className="text-xl font-semibold text-blue-900 group-hover:text-indigo-700 transition-colors duration-300">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mt-2">{blog.description}</p>
                <div className="mt-4 text-blue-600 font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read More →
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
