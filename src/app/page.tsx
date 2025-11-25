
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
import { AnimatedCode } from "@/components/animated-code";
import { AnimatedSection } from "@/components/animated-section";

const personalInfo = {
  name: "Bhavuk Agrawal",
  email: "bhavukagrawal1409@gmail.com",
  phone: "+917060802357",
  github: "https://github.com/bhavuk1409",
  linkedin: "https://www.linkedin.com/in/bhavukagrawal1409/",
  location: "Greater Noida, Uttar Pradesh, India",
  bio: "A passionate and driven Computer Science student with a strong foundation in AI/ML, Gen AI, and competitive programming. I thrive on solving complex problems and building innovative solutions that push the boundaries of technology.",
};

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
    description:
      "Built a real-time meeting system with multilingual subtitles (Whisper), topic-wise summarization (BART), and a RAG assistant (LLaMA + LangChain) using AWS + WebRTC. Reduced end-to-end latency by ~40% through optimized audio/video pipelines.",
    repo: "https://github.com/bhavuk1409/intellimeet_updated",
  },

  {
    title: "Radiology Report Analysis with Integrated Chatbot",
    year: "2025",
    description:
      "Automated structured extraction from radiology reports and integrated a clinician Q&A chatbot. Deployed as a secure, real-time Streamlit tool for medical workflows.",
    repo: "https://github.com/bhavuk1409/my-ai-radiologist",
    demo: "https://radimate.streamlit.app/",
  },

  {
    title: "R-Search: Reinforcement Learning for Multi-Source Search",
    year: "2025",
    description:
      "Implemented a GRPO-based RL fine-tuning system with multi-source retrieval and structured reasoning constraints. Achieved +25–30% gains on HotpotQA-hard, +40% better format consistency, and ~35% lower VRAM usage.",
    repo: "https://github.com/bhavuk1409/llm-reasoning-search",
  },

  {
    title: "LLM-Enhanced RL Trading System",
    year: "2025",
    description:
      "Created a hybrid PPO + multi-agent LLM trading pipeline using technical, fundamental, sentiment, and risk agents. Delivered +18–25% higher returns than PPO baseline with ~40% lower action volatility.",
    repo: "https://github.com/bhavuk1409/llm-rl-trading",
  },
];

const technicalSkills = {
  languages: ["C++", "Python", "Java", "JavaScript"],
  ml_ai: ["Deep learning","Computer Vision", "LLMs", "Generative AI", "LangChain", "Langraph", "Langsmith", "Vector DBs", "RAG", "TensorFlow", "PyTorch", "NLP"],
  web_backend: ["FastAPI", "MongoDB", "AWS", "SQL", "React", "Docker"],
  problem_solving: ["Data Structure & Algorithms", "Competitive Programming"],
  get all() {
    return [...this.languages, ...this.ml_ai, ...this.web_backend, ...this.problem_solving];
  }
};

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <div className="fixed top-0 left-0 w-full h-full bg-grid-pattern -z-10" />

      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
          <a href="#" className="text-2xl font-bold text-primary">
          </a>
          <nav className="hidden space-x-6 text-sm font-medium md:flex">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
                {link.label.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl flex-1 px-4 py-12 md:px-6 md:py-24">
        <section id="hero" className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center min-h-[calc(100vh-12rem)]">
          <div className="space-y-6">
            <p className="text-2xl">Hello,</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              This is <span className="text-primary">{personalInfo.name}</span>, I'm Passionate About AI, and Solving Real-World Problems.
            </h1>
            <div className="flex gap-4">
               <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-primary">
                <Github size={28} />
              </a>
               <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-primary">
                <LinkedinIcon className="h-7 w-7" />
              </a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="text-muted-foreground transition-colors hover:text-primary">
                <Mail size={28} />
              </a>
            </div>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="/BHAVUK_AG_RESUME_UPDATED.pdf" download>Get Resume</a>
              </Button>
            </div>
          </div>
          <div>
            <AnimatedCode name={personalInfo.name} skills={[...technicalSkills.web_backend, ...technicalSkills.ml_ai]} />
          </div>
        </section>


        <div className="space-y-24">
          <AnimatedSection id="about" className="mt-20">
             <h2 className="mb-8 text-3xl font-bold tracking-tight text-primary">
                About Me
             </h2>
            <p className="text-lg leading-relaxed text-foreground/80">
              {personalInfo.bio}
            </p>
          </AnimatedSection>

          <AnimatedSection id="experience">
            <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold tracking-tight text-primary">
              <Briefcase className="h-8 w-8" /> Work Experience
            </h2>
            <div className="space-y-8 relative border-l-2 border-primary/30">
              {workExperience.map((exp, index) => (
                <Card key={index} className="relative pl-8 md:pl-12 bg-transparent border-0 shadow-none before:content-[''] before:absolute before:left-[-9px] before:top-1 before:w-4 before:h-4 before:rounded-full before:bg-primary">
                  <CardHeader className="p-0">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                      <CardTitle className="text-2xl">{exp.role}</CardTitle>
                      <Badge variant="outline" className="mt-2 sm:mt-0 border-primary/50 text-primary">{exp.duration}</Badge>
                    </div>
                    <CardDescription className="text-lg">
                      {exp.company} - {exp.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 mt-4">
                    <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                      {exp.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection id="projects">
            <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold tracking-tight text-primary">
              <BookOpen className="h-8 w-8" /> Projects
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection id="skills">
            <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold tracking-tight text-primary">
              <Terminal className="h-8 w-8" /> Technical Skills
            </h2>
            <Card className="bg-card/50">
              <CardContent className="p-6 space-y-6">
                <SkillCategory title="Programming Languages" skills={technicalSkills.languages} />
                <SkillCategory title="Machine Learning & AI" skills={technicalSkills.ml_ai} />
                <SkillCategory title="Web Development & Backend" skills={technicalSkills.web_backend} />
                <SkillCategory title="Problem Solving" skills={technicalSkills.problem_solving} />
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection id="contact">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-primary">
                Get in Touch
            </h2>
            <Card className="max-w-2xl mx-auto bg-card/50">
                <CardHeader>
                    <CardTitle className="text-2xl">Contact Me</CardTitle>
                    <CardDescription>
                        Have a question or want to work together? Feel free to reach out.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ContactForm />
                </CardContent>
            </Card>
          </AnimatedSection>
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
    <h3 className="mb-4 text-xl font-semibold text-foreground/90">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <Badge key={index} variant="secondary" className="font-mono text-sm">{skill}</Badge>
      ))}
    </div>
  </div>
);
