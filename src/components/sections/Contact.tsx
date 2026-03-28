import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"

import { Loader2 } from "lucide-react"
import { toast } from "sonner"

// ------------------
// Validation Schema
// ------------------
const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message must be at least 5 characters"),
})

type ContactForm = z.infer<typeof ContactSchema>

const Contact = () => {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const form = useForm<ContactForm>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactForm) => {
    setLoading(true)
    console.log("Submitted:", data)

    // Simulate async API request
    await new Promise((res) => setTimeout(res, 1200))

    toast.success("Message sent successfully!")
    setSuccess(true)

    setTimeout(() => setSuccess(false), 4000)

    form.reset()
    setLoading(false)
  }

  return (
    <section id="contact" className="relative border-b border-text overflow-hidden">

      {/* --- Parallax Banner Background --- */}
      <div
        className="
          relative h-[82vh] sm:h-[90vh] lg:h-[99vh] 
          min-h-[620px] sm:min-h-[700px] w-full
          sm:bg-fixed bg-center bg-cover
        "
        style={{ backgroundImage: "url('/images/banner-vegetables.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* --- Floating Contact Card --- */}
      <div
        className="
          absolute z-10
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[90%] max-w-[700px]
          mx-auto bg-bg
          py-10 px-6 sm:px-14
          shadow-xl rounded-xl
        "
      >
        <h2 className="text-center mb-4 sm:mb-5">
          Contact Us
        </h2>
        <p className="text-base sm:text-lg text-center mb-8">
          Have a question? Get in touch!
        </p>

        {/* ---- shadcn Form ---- */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            {/* --- Success Message --- */}
            {success && (
              <div
                className="
                  w-full bg-green-100 text-btn-bg border border-btn-bg 
                  px-4 py-3 rounded-md text-center 
                  animate-fade-in
                "
              >
                Your message has been sent successfully!
              </div>
            )}

            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="gap-1">
                  <FormLabel className="text-sm font-light" htmlFor="name">
                    Name *
                  </FormLabel>
                  <FormControl>
                    <Input {...field} aria-label="Your Name" id="name" type="text" className="form-input" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="gap-1">
                  <FormLabel className="text-sm font-light" htmlFor="email">
                    Email *
                  </FormLabel>
                  <FormControl>
                    <Input {...field} aria-label="Your Email" id="email" type="email" className="form-input" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="gap-1">
                  <FormLabel className="text-sm font-light" htmlFor="message">
                    Message *
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field} aria-label="Your Message" id="message" rows={4} className="form-textarea" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <div className="mx-auto text-center pt-3 sm:pt-4">
              <Button
                type="submit"
                disabled={loading}
                className="
                  btn h-auto
                  w-full sm:w-[180px]
                  py-2.5 sm:py-3
                  shadow-none
                  flex items-center justify-center
                  mx-auto
                  cursor-pointer
                "
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {loading ? "Sending..." : "Send"}
              </Button>
            </div>

          </form>
        </Form>
      </div>
    </section>
  )
}

export default Contact;