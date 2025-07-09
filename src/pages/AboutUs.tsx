
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WebsiteHeader from "@/components/WebsiteHeader";
import WebsiteFooter from "@/components/WebsiteFooter";
import { Users, Target, Award, Heart } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "Everything we do is focused on helping our customers succeed and grow their agencies."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously innovate to provide cutting-edge solutions that stay ahead of industry trends."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our product and service delivery."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We build trust through transparency, honesty, and reliable service to our community."
    }
  ];

  const team = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      image: "/placeholder.svg",
      bio: "Former agency owner with 15+ years of experience in digital marketing and operations management."
    },
    {
      name: "Sarah Kim", 
      role: "CTO",
      image: "/placeholder.svg",
      bio: "Technology leader with expertise in scaling SaaS platforms and building enterprise-grade solutions."
    },
    {
      name: "Marcus Johnson",
      role: "Head of Product",
      image: "/placeholder.svg",
      bio: "Product strategist passionate about creating intuitive experiences that solve real business problems."
    },
    {
      name: "Lisa Chen",
      role: "Head of Customer Success",
      image: "/placeholder.svg",
      bio: "Customer advocate dedicated to ensuring every agency gets maximum value from our platform."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <WebsiteHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About OpsDesk
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're on a mission to empower agencies worldwide with the tools they need to operate efficiently, 
            scale successfully, and focus on what they do best - creating amazing work for their clients.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                OpsDesk was born from firsthand experience running a digital marketing agency. Our founder, 
                Alex Thompson, spent years juggling multiple tools, spreadsheets, and platforms just to keep 
                track of clients, projects, and invoices.
              </p>
              <p className="text-gray-600 mb-4">
                After experiencing the pain points of fragmented workflows and inefficient processes, 
                Alex assembled a team of experienced developers and product experts to create a unified 
                solution that would solve these problems once and for all.
              </p>
              <p className="text-gray-600">
                Today, OpsDesk serves over 1000+ agencies worldwide, helping them streamline operations, 
                improve client satisfaction, and focus on growing their business rather than managing it.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-600 mb-4">Agencies Served</div>
                <div className="text-4xl font-bold text-purple-600 mb-2">50k+</div>
                <div className="text-gray-600 mb-4">Projects Managed</div>
                <div className="text-4xl font-bold text-green-600 mb-2">$50M+</div>
                <div className="text-gray-600">Invoices Processed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a passionate team of entrepreneurs, developers, and customer success experts 
              dedicated to helping agencies thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            To democratize agency management by providing powerful, intuitive tools that help agencies 
            of all sizes operate efficiently, deliver exceptional client experiences, and achieve 
            sustainable growth.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-lg text-white italic">
              "We believe that when agencies can focus on their craft instead of administrative overhead, 
              they create better work, happier clients, and more successful businesses."
            </p>
            <p className="text-blue-100 mt-4">- Alex Thompson, CEO & Founder</p>
          </div>
        </div>
      </section>

      <WebsiteFooter />
    </div>
  );
};

export default AboutUs;
