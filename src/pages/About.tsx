
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Clock, Star } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Adobe Photoshop", level: 95 },
    { name: "Adobe Illustrator", level: 90 },
    { name: "Figma", level: 88 },
    { name: "Adobe InDesign", level: 85 },
    { name: "UI/UX Design", level: 82 },
    { name: "Branding", level: 90 },
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "10+", label: "Happy Clients" },
    { icon: <Award className="w-8 h-8" />, number: "25+", label: "Projects Completed" },
    { icon: <Clock className="w-8 h-8" />, number: "1+", label: "Years Experience" },
    { icon: <Star className="w-8 h-8" />, number: "4.9", label: "Average Rating" },
  ];

  const services = [
    "Brand Identity Design",
    "Logo Design",
    "Templets Design",
    "Graphic Design",
    "Print Design",
    "Social Media Graphics",
    "Packaging Design",
    "UI/UX Design"
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate graphic designer with a love for creating meaningful visual experiences
          </p>
        </div>

        {/* Hero About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="/12.jpg"
              alt="Designer workspace"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Hi, I'm a Creative Designer
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 1 years of experience in graphic design, I specialize in creating compelling visual stories that connect brands with their audiences. My passion lies in transforming complex ideas into simple, beautiful, and effective designs.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I believe that good design is not just about making things look pretty—it's about solving problems, communicating messages, and creating emotional connections. Every project I take on is an opportunity to push creative boundaries and deliver exceptional results.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                  <div className="flex justify-center text-purple-600 mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            My Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Services I Offer
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 text-center">
                  <Badge variant="secondary" className="w-full py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700">
                    {service}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate with passionate individuals and businesses. Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="secondary" className="bg-white text-purple-600 px-4 py-2 text-sm">
                📧 Available for freelance projects
              </Badge>
              <Badge variant="secondary" className="bg-white text-purple-600 px-4 py-2 text-sm">
                🚀 Quick turnaround time
              </Badge>
              <Badge variant="secondary" className="bg-white text-purple-600 px-4 py-2 text-sm">
                💡 Creative solutions
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
