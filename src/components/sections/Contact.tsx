import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, type Variants } from "framer-motion"

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

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message must be at least 5 characters"),
})

type ContactForm = z.infer<typeof ContactSchema>

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
}

const Contact = () => {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const form = useForm<ContactForm>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { name: "", email: "", message: "" },
  })

  const onSubmit = async (data: ContactForm) => {
    setLoading(true)
    console.log("Submitted:", data)
    await new Promise((res) => setTimeout(res, 1200))
    toast.success("Message sent successfully!")
    setSuccess(true)
    setTimeout(() => setSuccess(false), 4000)
    form.reset()
    setLoading(false)
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative border-b border-text overflow-hidden"
    >
      {/* Parallax Banner Background */}
      <div
        role="img"
        aria-label="Fresh vegetables background"
        className="
          relative h-[82vh] sm:h-[90vh] lg:h-[99vh]
          min-h-[620px] sm:min-h-[700px] w-full
          sm:bg-fixed bg-center bg-cover
        "
        style={{ backgroundImage: "url('/images/banner-vegetables.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
      </div>

      {/* Floating Contact Card */}
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
        <motion.h2
          id="contact-title"
          className="text-center mb-4 sm:mb-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true, amount: 0.5 }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg text-center mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.1}
          viewport={{ once: true, amount: 0.5 }}
        >
          Have a question? Get in touch!
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
              aria-label="Contact form"
            >
              {/* Success Message */}
              {success && (
                <div
                  role="status"
                  aria-live="polite"
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
                    <FormLabel className="form-label" htmlFor="name">
                      Name <span aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="name"
                        type="text"
                        autoComplete="name"
                        className="form-input"
                      />
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
                    <FormLabel className="form-label" htmlFor="email">
                      Email <span aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        className="form-input"
                      />
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
                    <FormLabel className="form-label" htmlFor="message">
                      Message <span aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        id="message"
                        rows={4}
                        className="form-textarea"
                      />
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
                  aria-disabled={loading}
                  aria-label={loading ? "Sending your message" : "Send message"}
                  className="
                    btn h-auto
                    w-full sm:w-[180px]
                    py-3 shadow-none
                    flex items-center justify-center
                    mx-auto cursor-pointer
                  "
                >
                  {loading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                  )}
                  {loading ? "Sending..." : "Send"}
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact