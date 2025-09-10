"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Linkedin, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-6">
              Do you want to take your idea to the next level? Let's talk.
            </p>
            <p className="font-open-sans text-muted-foreground">
              We're excited to hear about your project and explore how we can bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-montserrat font-bold text-xl text-foreground">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="font-open-sans"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="font-open-sans"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="font-open-sans resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-open-sans font-semibold group"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-lg text-foreground mb-2">Email Us</h3>
                      <p className="font-open-sans text-muted-foreground mb-2">
                        Get in touch via email for detailed discussions
                      </p>
                      <a
                        href="mailto:hello@dlay.dev"
                        className="font-open-sans text-primary hover:text-primary/80 transition-colors font-semibold"
                      >
                        hello@dlay.dev
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-lg text-foreground mb-2">WhatsApp</h3>
                      <p className="font-open-sans text-muted-foreground mb-2">Quick questions? Message us directly</p>
                      <a
                        href="https://wa.me/1234567890"
                        className="font-open-sans text-primary hover:text-primary/80 transition-colors font-semibold"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Linkedin className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-lg text-foreground mb-2">LinkedIn</h3>
                      <p className="font-open-sans text-muted-foreground mb-2">Connect with us professionally</p>
                      <a
                        href="https://linkedin.com/company/dlay-dev"
                        className="font-open-sans text-primary hover:text-primary/80 transition-colors font-semibold"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        /company/dlay-dev
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
