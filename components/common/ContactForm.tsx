import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label"
import { Send } from 'lucide-react';
import { useState } from 'react';
import { Textarea } from '../ui/textarea';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
      const handleSendEmail = () => {
    const { name, email, message } = formData
    const subject = `Contact from ${name} - Portfolio Inquiry`
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=soumyaranjan.nayakfcs@kiit.ac.in&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.open(gmailUrl, "_blank")
  }
    return (
        <Card className="bg-[#2A2A28] border-[#EBB884]">
            <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#EBB884] mb-6">Send Message</h3>
                <div className="space-y-4 sm:space-y-6">
                    <div>
                        <Label htmlFor="name" className="text-white mb-2 block text-sm sm:text-base">
                            Name
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-[#1F1F1D] border-[#EBB884] text-white placeholder:text-gray-400 focus:border-[#E8BF96] text-sm sm:text-base"
                            placeholder="Your full name"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="email" className="text-white mb-2 block text-sm sm:text-base">
                            Email
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-[#1F1F1D] border-[#EBB884] text-white placeholder:text-gray-400 focus:border-[#E8BF96] text-sm sm:text-base"
                            placeholder="your.email@example.com"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="message" className="text-white mb-2 block text-sm sm:text-base">
                            Message
                        </Label>
                        <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="bg-[#1F1F1D] border-[#EBB884] text-white placeholder:text-gray-400 focus:border-[#E8BF96] min-h-[120px] text-sm sm:text-base"
                            placeholder="Your message here..."
                            required
                        />
                    </div>
                    <Button
                        onClick={handleSendEmail}
                        className="w-full bg-[#EBB884] text-[#1F1F1D] hover:bg-[#E8BF96] font-semibold py-3 hover-lift text-sm sm:text-base"
                        disabled={!formData.name || !formData.email || !formData.message}
                    >
                        <Send className="mr-2 h-4 w-4" />
                        Send Message via Gmail
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ContactForm