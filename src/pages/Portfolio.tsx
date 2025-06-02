import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 4,
      title: "Print Design Collection",
      description: "solve a problem, target a specific market, offer a unique value proposition, and have potential for growth.",
      image: "/7.png",
      tags: ["Design", "Brochure", "Marketing"],
      category: "Business Idea",
    },
    {
      id: 5,
      title: "Social Media Campaign",
      description: "a visually engaging idea, message, or quote, often presented as a graphic design.",
      image: "/6.png",
      tags: ["Social Media", "Campaign", "Fashion"],
      category: "Graphic Day",
    },
    {
      id: 6,
      title: "Corporate Presentation",
      description: "Love is all you knead.",
      image: "/5.png",
      tags: ["Marketing", "Corporate", "Infographics"],
      category: "Get Offer",
    },
    {
      id: 7,
      title: "Innovative Business Idea Design",
      description: "refers to the ideas, strategies, and opinions held by a marketing agency, often regarding their services, industry trends, or client needs.",
      image: "/5.jpg",
      tags: ["Business", "Marketing", "Innovation"],
      category: "Marketing Agency",
    },
    {
      id: 8,
      title: "Graphic Day Poster",
      description: "Bright and colorful graphic day poster design.",
      image: "/1.jpg",
      tags: ["Poster", "Graphics", "Design"],
      category: "Design",
    },
    {
      id: 9,
      title: "Logo Maker Design",
      description: "Dynamic and creative logo creation concept.",
      image: "/2.jpg",
      tags: ["Logo", "Colorful", "Creative"],
      category: "Logo",
    },
    {
      id: 10,
      title: "Typography Poster",
      description: "Typography-based poster showcasing bold and creative design.",
      image: "/3.jpg",
      tags: ["Typography", "Poster", "Design"],
      category: "Typography",
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            My <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my latest design work showcasing creativity, innovation, and attention to detail
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <CardContent className="p-6">
                <div className="mb-3">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 mb-2">
                    {project.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-screen rounded-lg shadow-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
