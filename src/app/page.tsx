import {
  Award,
  BookOpen,
  Briefcase,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Terminal,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LinkedinIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";

const personalInfo = {
  name: "Bhavuk Agrawal",
  email: "bhavukagrawal1409@gmail.com",
  phone: "+917060802357",
  github: "https://github.com/bhavuk1409",
  linkedin: "https://www.linkedin.com/in/bhavuk-agrawal-b48115288",
  location: "Greater Noida, Uttar Pradesh, India",
  bio: "A passionate and driven Computer Science student with a strong foundation in AI/ML, web development, and competitive programming. I thrive on solving complex problems and building innovative solutions that push the boundaries of technology.",
};

const education = [
  {
    institution: "Bennett University",
    location: "Greater Noida, Uttar Pradesh, India",
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    cgpa: "9.0/10",
    duration: "Expected Graduation: 2027",
  },
  {
    institution: "Amarnath Vidya Ashram Senior Secondary School",
    location: "Mathura, Uttar Pradesh, India",
    degree: "Class XII (CBSE)",
    cgpa: "Percentage: 90%",
    duration: "Graduated: 2023",
  },
];

const workExperience = [
  {
    role: "Machine Learning Intern",
    company: "National University of Singapore (NUS)",
    location: "Singapore, Singapore (On-Site)",
    duration: "June 2024 – July 2024",
    description: "An intensive internship focused on practical application of AI/ML concepts.",
    points: [
      "Gained hands-on training in AI/ML, NLP, and cloud technologies under the guidance of NUS faculty and researchers.",
      "Implemented a Medical Report Analysis Tool using TF-IDF for efficient medical text processing as part of guided research.",
      "Learned and applied AWS CloudFormation to automate infrastructure setup for scalable deployments.",
      "Deployed machine learning models using AWS SageMaker and optimized workflows with AWS tools.",
      "Collaborated with peers and mentors to translate academic concepts into working prototypes.",
    ],
  },
];

const projects = [
  {
    title: "AI-Powered Real-Time Video Conferencing",
    year: "2025",
    description: "Built a platform with real-time multilingual subtitles (Whisper), auto-summarization (BART), and a RAG chatbot (LLaMA + LangChain) on AWS + WebRTC; optimized latency by ~40%.",
    repo: "https://github.com/bhavuk1409/intellimeet_updated",
    tech: ["Whisper", "BART", "LLaMA", "LangChain", "AWS", "WebRTC", "GenAI"],
  },
  {
    title: "Radiology Report Analysis with Integrated Chatbot",
    year: "2025",
    description: "Automated radiology report parsing and integrated a LLaMA + LangChain chatbot for clinician Q&A; deployed on Streamlit for secure real-time use.",
    repo: "https://github.com/bhavuk1409/my-ai-radiologist",
    demo: "https://radimate.streamlit.app/",
    tech: ["LLaMA", "LangChain", "Streamlit", "GenAI", "NLP"],
  },
  {
    title: "Speech-to-ASL (American Sign Language) Translator",
    year: "2024",
    description: "Converted Gujarati speech into ASL video using Azure Speech/Translate, Stanza NLP, MoviePy with a Gradio UI for real-time translation.",
    repo: "https://github.com/bhavuk1409/Speech_to_ASL",
    tech: ["Azure Speech", "Stanza NLP", "MoviePy", "Gradio", "NLP"],
  },
  {
    title: "Football Game Analysis",
    year: "2024",
    description: "Developed a YOLOv8-based CV system to track players/ball, compute speeds, possession, coverage maps, and deliver near real-time analytics.",
    repo: "https://github.com/bhavuk1409/Object-Detection-Using-Yolo",
    tech: ["YOLOv8", "Computer Vision", "Python", "OpenCV"],
  },
];

const technicalSkills = {
  languages: ["C++", "Python", "Java", "JavaScript"],
  ml_ai: ["Computer Vision", "LLMs", "Generative AI", "LangChain", "Langraph", "Langsmith", "Vector DBs", "RAG", "TensorFlow", "PyTorch", "NLP"],
  web_backend: ["FastAPI", "MongoDB", "AWS", "SQL", "React"],
  problem_solving: ["Data Structure & Algorithms", "Competitive Programming"],
  get all() {
    return [...this.languages, ...this.ml_ai, ...this.web_backend, ...this.problem_solving];
  }
};

const achievements = [
  "Maintained a consistent CGPA of 9.0/10 in B.Tech (CSE) at Bennett University.",
  "Selected for a competitive on-site academic internship at NUS, Singapore, focusing on AI/ML and cloud deployments.",
  "Certified in 'Improving Deep Neural Networks' by DeepLearning.AI and 'Data Structures' by UC San Diego.",
  "Actively participated in multiple hackathons and coding competitions, building innovative AI-driven solutions.",
  "Regularly solve DSA and competitive programming challenges on platforms like LeetCode.",
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="container mx-auto max-w-5xl flex-1 px-4 py-12 md:px-6 md:py-16">
        <header className="mb-12 text-center md:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            {personalInfo.name}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground md:text-xl">
            AI & Machine Learning Engineer | Full-Stack Developer
          </p>
          <div className="mt-4 flex justify-center md:justify-start items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
          <div className="mt-6 flex justify-center md:justify-start gap-2">
            <Button variant="outline" size="icon" asChild>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                <Mail />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={`tel:${personalInfo.phone}`} aria-label="Phone">
                <Phone />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-12">
          <section id="about">
            <p className="text-lg leading-relaxed text-foreground/90">
              {personalInfo.bio}
            </p>
          </section>

          <section id="experience">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold tracking-tight text-primary">
              <Briefcase className="h-6 w-6" /> Work Experience
            </h2>
            <div className="space-y-6">
              {workExperience.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                      <CardTitle>{exp.role}</CardTitle>
                      <Badge variant="secondary" className="mt-2 sm:mt-0">{exp.duration}</Badge>
                    </div>
                    <CardDescription>
                      {exp.company} - {exp.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                      {exp.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="projects">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold tracking-tight text-primary">
              <BookOpen className="h-6 w-6" /> Projects
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} userSkills={technicalSkills.all} />
              ))}
            </div>
          </section>

          <section id="skills">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold tracking-tight text-primary">
              <Terminal className="h-6 w-6" /> Technical Skills
            </h2>
            <Card>
              <CardContent className="p-6 space-y-6">
                <SkillCategory title="Programming Languages" skills={technicalSkills.languages} />
                <SkillCategory title="Machine Learning & AI" skills={technicalSkills.ml_ai} />
                <SkillCategory title="Web Development & Backend" skills={technicalSkills.web_backend} />
                <SkillCategory title="Problem Solving" skills={technicalSkills.problem_solving} />
              </CardContent>
            </Card>
          </section>

          <section id="education">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold tracking-tight text-primary">
              <GraduationCap className="h-6 w-6" /> Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{edu.institution}</CardTitle>
                    <CardDescription>{edu.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{edu.degree}</p>
                    <p className="text-muted-foreground">{edu.cgpa}</p>
                    <p className="text-sm text-muted-foreground">{edu.duration}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          <section id="achievements">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold tracking-tight text-primary">
              <Award className="h-6 w-6" /> Achievements
            </h2>
            <Card>
              <CardContent className="p-6">
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <section id="contact">
            <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-primary">Get in Touch</h2>
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Contact Me</CardTitle>
                    <CardDescription>
                        Have a question or want to work together? Feel free to reach out.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ContactForm />
                </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div>
    <h3 className="mb-3 text-lg font-semibold text-foreground/90">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <Badge key={index} variant="secondary" className="font-mono text-sm">{skill}</Badge>
      ))}
    </div>
  </div>
);
