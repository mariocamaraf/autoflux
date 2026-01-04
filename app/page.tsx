"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, Layout, Workflow, ArrowRight, Menu, X, Shield, Zap, Users, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function AutoFluxLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-[#0A0E27] text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0E27]/80 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="AutoFlux Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                AutoFlux
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicios" className="text-gray-300 hover:text-cyan-400 transition-colors relative group">
                Servicios
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#casos" className="text-gray-300 hover:text-cyan-400 transition-colors relative group">
                Casos de Éxito
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#contacto" className="text-gray-300 hover:text-cyan-400 transition-colors relative group">
                Contacto
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all">
                Consulta Gratis
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-cyan-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-cyan-500/10">
              <div className="flex flex-col gap-4">
                <a href="#servicios" className="text-gray-300 hover:text-cyan-400">
                  Servicios
                </a>
                <a href="#casos" className="text-gray-300 hover:text-cyan-400">
                  Casos de Éxito
                </a>
                <a href="#contacto" className="text-gray-300 hover:text-cyan-400">
                  Contacto
                </a>
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600">Consulta Gratis</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 217, 255, 0.15) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent leading-tight text-balance">
              Automatiza tu Negocio con Inteligencia Artificial
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed text-pretty">
              Chatbots inteligentes, landing pages de alta conversión y soluciones personalizadas para clínicas y
              negocios en México
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all"
                onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Servicios
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                asChild
              >
                <a href="https://wa.me/523312443033" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={20} />
                  Hablar con un Experto
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Nuestros Servicios
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Soluciones de IA diseñadas para transformar tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* WhatsApp Chatbots */}
            <Card className="bg-[#0F0F23]/50 backdrop-blur-md border-cyan-500/20 hover:border-cyan-500/50 transition-all group hover:shadow-lg hover:shadow-cyan-500/20">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                  <MessageCircle className="text-cyan-400" size={32} />
                </div>
                <CardTitle className="text-2xl text-white">WhatsApp Chatbots con IA</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base leading-relaxed mb-4">
                  Automatiza la atención al cliente 24/7 con agentes de IA que entienden y responden naturalmente
                </CardDescription>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2 group/link">
                  Más información
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>

            {/* Landing Pages */}
            <Card className="bg-[#0F0F23]/50 backdrop-blur-md border-purple-500/20 hover:border-purple-500/50 transition-all group hover:shadow-lg hover:shadow-purple-500/20">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                  <Layout className="text-purple-400" size={32} />
                </div>
                <CardTitle className="text-2xl text-white">Landing Pages de Alta Conversión</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base leading-relaxed mb-4">
                  Páginas web optimizadas para clínicas dentales y médicas en Guadalajara. Diseño + conversión
                  garantizada
                </CardDescription>
                <a href="#" className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-2 group/link">
                  Más información
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>

            {/* Automation */}
            <Card className="bg-[#0F0F23]/50 backdrop-blur-md border-cyan-500/20 hover:border-cyan-500/50 transition-all group hover:shadow-lg hover:shadow-cyan-500/20">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                  <Workflow className="text-cyan-400" size={32} />
                </div>
                <CardTitle className="text-2xl text-white">Automatización con n8n</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base leading-relaxed mb-4">
                  Workflows inteligentes que conectan tus herramientas y automatizan procesos repetitivos
                </CardDescription>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2 group/link">
                  Más información
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="casos" className="py-20 relative bg-[#0F0F23]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Casos de Uso
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Resultados reales para negocios como el tuyo</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Medical Clinics */}
            <Card className="bg-[#0F0F23]/50 backdrop-blur-md border-cyan-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Users className="text-cyan-400" size={28} />
                  Clínicas Médicas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Sistema completo de WhatsApp con agendamiento, recordatorios y FAQ automatizado
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-1 drop-shadow-[0_0_10px_rgba(0,217,255,0.5)]">
                      70% ↓
                    </div>
                    <div className="text-sm text-gray-400">Tiempo respuesta</div>
                  </div>
                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-1 drop-shadow-[0_0_10px_rgba(0,217,255,0.5)]">
                      24/7
                    </div>
                    <div className="text-sm text-gray-400">Disponibilidad</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dental Clinics */}
            <Card className="bg-[#0F0F23]/50 backdrop-blur-md border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <TrendingUp className="text-purple-400" size={28} />
                  Clínicas Dentales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Landing pages + chatbot integrado para captar y convertir pacientes nuevos
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-1 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                      3x
                    </div>
                    <div className="text-sm text-gray-400">Más conversiones</div>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-1 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                      +150
                    </div>
                    <div className="text-sm text-gray-400">Leads/mes</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Nuestro Proceso
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Un enfoque estructurado para llevar tu proyecto de la idea a la realidad
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Consulta Inicial",
                description: "Gratis - 30 minutos",
                icon: MessageCircle,
              },
              {
                number: "2",
                title: "Diseño de Solución",
                description: "Personalizada para tu negocio",
                icon: Layout,
              },
              {
                number: "3",
                title: "Implementación",
                description: "En 2-4 semanas",
                icon: Zap,
              },
              {
                number: "4",
                title: "Soporte Continuo",
                description: "Optimización permanente",
                icon: Shield,
              },
            ].map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                      <Icon className="text-cyan-400" size={28} />
                    </div>
                    <div className="text-4xl font-bold text-cyan-400/30 mb-2">{step.number}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Preguntas Frecuentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "¿Cuánto tiempo toma implementar un chatbot de WhatsApp?",
                answer:
                  "La implementación típica toma entre 2-4 semanas, dependiendo de la complejidad de los flujos de conversación y las integraciones necesarias. Comenzamos con una consulta inicial para entender tus necesidades específicas.",
              },
              {
                question: "¿Los chatbots funcionan con WhatsApp Business API?",
                answer:
                  "Sí, nuestros chatbots están construidos sobre WhatsApp Business API oficial, lo que garantiza estabilidad, seguridad y cumplimiento con las políticas de Meta. Nosotros manejamos toda la configuración técnica.",
              },
              {
                question: "¿Ofrecen soporte técnico después de la implementación?",
                answer:
                  "Absolutamente. Todos nuestros planes incluyen soporte técnico continuo. Además, monitoreamos el rendimiento y optimizamos las conversaciones basándonos en datos reales para mejorar constantemente los resultados.",
              },
              {
                question: "¿Pueden integrar con mi sistema actual (CRM, agenda)?",
                answer:
                  "Sí, utilizamos n8n para crear integraciones personalizadas con prácticamente cualquier sistema: CRMs como HubSpot o Salesforce, calendarios como Google Calendar, y sistemas de gestión médica específicos.",
              },
              {
                question: "¿El chatbot puede agendar citas automáticamente?",
                answer:
                  "Sí, nuestros chatbots pueden agendar citas automáticamente consultando disponibilidad en tu calendario, confirmando con el paciente, y enviando recordatorios automáticos. Todo sin intervención humana.",
              },
              {
                question: "¿Qué pasa si necesito cambios después del lanzamiento?",
                answer:
                  "Ofrecemos flexibilidad total. Los planes Professional y Enterprise incluyen actualizaciones y ajustes continuos. Para el plan Starter, puedes solicitar cambios adicionales con una cotización simple.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#0F0F23]/50 backdrop-blur-md border border-cyan-500/20 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white hover:text-cyan-400 text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0F23] border-t border-cyan-500/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/images/logo.png" alt="AutoFlux Logo" width={32} height={32} className="w-8 h-8" />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  AutoFlux
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">Automatización inteligente para negocios modernos</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">
                    Chatbots WhatsApp
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">
                    Landing Pages
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">
                    Automatización
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">
                    Casos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>info@autoflux.mx</li>
                <li>Guadalajara, México</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cyan-500/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">© 2025 AutoFlux. Todos los derechos reservados.</p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">
                  Privacidad
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">
                  Términos
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/523312443033"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-110 transition-all"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="text-white" size={28} />
      </a>
    </div>
  )
}
