import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Mail, ExternalLink, Terminal, Globe, Database, Server, Smartphone, Network } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const projects = [
    {
      title: 'Esports Hub - API',
      desc: 'Middleware assíncrono projetado para contornar limites de requisição. Implementa rotação automática de chaves, background polling com APScheduler e I/O não-bloqueante.',
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'Render'],
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      link: 'https://github.com/FilipeLacerda738/esports-pro-api'
    },
    {
      title: 'Esports Hub - Android',
      desc: 'Aplicativo nativo consumindo a API customizada. Utiliza Jetpack Compose, MVVM e Coroutines, com otimização rigorosa do R8/ProGuard que reduziu o APK em mais de 80%.',
      tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Retrofit'],
      icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
      link: 'https://github.com/FilipeLacerda738/EsportsNewsAppAndroid'
    },
    {
      title: 'DNS Switcher',
      desc: 'Automação para alteração rápida e fallback de servidores DNS (IPv4/IPv6) integrando diretamente com o NetworkManager do Linux via comandos nmcli.',
      tags: ['Python', 'Linux', 'NetworkManager', 'Shell'],
      icon: <Network className="w-6 h-6 text-emerald-400" />,
      link: 'https://github.com/FilipeLacerda738/auto_dns'
    },
    {
      title: 'Barbershop API',
      desc: 'Backend estruturado para agendamentos de barbearias, gerenciamento de disponibilidade de profissionais e autenticação segura.',
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      link: 'https://github.com/FilipeLacerda738/barbershop'
    },
    {
      title: 'Conversor de Moedas',
      desc: 'Aplicação interativa para conversão financeira em tempo real consumindo APIs externas de taxas de câmbio.',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'API'],
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      link: 'https://github.com/FilipeLacerda738/Conversor-de-Moedas'
    },
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-emerald-500/30">
      
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 origin-left z-[100]" style={{ scaleX }} />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/5 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <header className="fixed top-0 w-full z-50 bg-zinc-950/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.a initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} href="#" className="text-xl font-bold tracking-tighter text-white">
            G<span className="text-emerald-400">.</span>FILIPE
          </motion.a>

          <nav className="hidden md:flex gap-10">
            {['Sobre', 'Skills', 'Projetos', 'Contato'].map((item, i) => (
              <motion.a initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold tracking-wide text-zinc-400 hover:text-emerald-400 transition-colors uppercase">
                {item}
              </motion.a>
            ))}
          </nav>

          <button className="md:hidden p-2 text-zinc-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      <main className="relative z-10">
        
        <section id="sobre" className="min-h-screen flex items-center justify-center pt-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                SYSTEM_READY
              </motion.div>
              
              <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-8xl font-black tracking-tight text-white mb-6">
                FullStack <br />
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                  Developer
                </span>
              </motion.h1>
              
              <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
                Estudante de Análise e Desenvolvimento de Sistemas construindo soluções escaláveis e completas. Especializado na arquitetura de APIs de alta performance, interfaces dinâmicas e desenvolvimento mobile nativo.
              </motion.p>
              
              <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#projetos" className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                  <Terminal className="w-5 h-5" />
                  Executar Projetos
                </a>
                <a href="https://github.com/FilipeLacerda738" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-lg border border-zinc-800 transition-all flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  GitHub Profile
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="py-24 border-y border-white/5 bg-zinc-950/50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { n: 'JavaScript', i: 'javascript-original' },
                { n: 'React', i: 'react-original' },
                { n: 'Node.js', i: 'nodejs-original' },
                { n: 'Python', i: 'python-original' },
                { n: 'Java', i: 'java-original' },
                { n: 'Kotlin', i: 'kotlin-original' },
                { n: 'PostgreSQL', i: 'postgresql-original' },
                { n: 'MongoDB', i: 'mongodb-original' },
                { n: 'Vite', i: 'vitejs-original' },
                { n: 'Android', i: 'android-original' },
                { n: 'Git', i: 'git-original' },
                { n: 'Linux', i: 'linux-original' }
              ].map((skill) => (
                <motion.div key={skill.n} variants={fadeUpVariant} className="flex flex-col items-center justify-center p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-emerald-500/50 transition-colors group">
                  <img src={`https://cdn.jsdelivr.net/npm/devicon@latest/icons/${skill.i.split('-')[0]}/${skill.i}.svg`} className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" alt={skill.n} />
                  <span className="text-sm font-medium text-zinc-400 group-hover:text-emerald-400">{skill.n}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="projetos" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="mb-16">
              <h2 className="text-4xl font-black text-white">Projetos</h2>
              <p className="text-emerald-400 font-mono mt-2">&gt; ls ./portfolio/projetos</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <motion.a href={project.link} target="_blank" rel="noreferrer" key={project.title} variants={fadeUpVariant} whileHover={{ y: -8 }} className="group block bg-zinc-900/30 border border-zinc-800 p-8 rounded-3xl hover:bg-zinc-900/80 hover:border-emerald-500/30 transition-all relative overflow-hidden flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-zinc-400 group-hover:text-emerald-400 transition-colors">
                      {project.icon}
                    </div>
                    <ExternalLink className="w-5 h-5 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-1">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs font-mono rounded-md group-hover:border-emerald-500/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contato" className="py-32 relative">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-black text-white mb-6">
                Status: <span className="text-emerald-400">Online</span>
              </motion.h2>
              <motion.p variants={fadeUpVariant} className="text-zinc-400 text-lg mb-10 font-mono">
                &gt; Aberto para novas oportunidades e desafios._
              </motion.p>
              
              <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:filipelacerda122@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 font-bold rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  filipelacerda122@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/filipe-lacerda-" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-lg hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#0A66C2]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  LinkedIn
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-white/5 text-center text-zinc-600 text-sm font-mono bg-zinc-950">
        <p>sys.exit(0) | George Filipe &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}