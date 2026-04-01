import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, type Variants } from "framer-motion"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"

const NewsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
  optIn: z.boolean().refine((val) => val === true, {
    message: "You must agree to subscribe",
  }),
})

type NewsletterFormData = z.infer<typeof NewsletterSchema>

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
}

const NewsletterForm = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(NewsletterSchema),
    defaultValues: { email: "", optIn: false },
  })

  const onSubmit = async (data: NewsletterFormData) => {
    setLoading(true)
    setSuccess(null)
    const payload = { email: data.email, optIn: data.optIn }
    void payload
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setLoading(false)
    setSuccess("Thank you for subscribing!")
    toast.success("Subscribed successfully!")
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        aria-label="Newsletter subscription form"
        className="flex flex-col items-start space-y-6 w-full max-w-[400px] sm:pr-10 text-[15px] sm:text-base"
      >
        {/* EMAIL */}
        <motion.div
          className="w-full"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true, amount: 0.5 }}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="form-label" htmlFor="newsletter_email">
                  Email <span aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="newsletter_email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    className="form-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        {/* CHECKBOX */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.1}
          viewport={{ once: true, amount: 0.5 }}
        >
          <FormField
            control={form.control}
            name="optIn"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-0.5">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    id="newsletter_optIn"
                    aria-required="true"
                  />
                </FormControl>
                <FormLabel
                  className="text-[15px] sm:text-base font-light cursor-pointer"
                  htmlFor="newsletter_optIn"
                >
                  I want to subscribe to your mailing list.{" "}
                  <span aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        {/* SUCCESS MESSAGE */}
        {success && (
          <motion.p
            role="status"
            aria-live="polite"
            className="text-green-600 text-sm"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {success}
          </motion.p>
        )}

        {/* SUBMIT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Button
            type="submit"
            disabled={loading}
            aria-disabled={loading}
            aria-label={loading ? "Subscribing, please wait" : "Subscribe to newsletter"}
            className="
              mt-1 px-6 py-2.5
              border border-btn-bg bg-btn-bg
              text-btn-text hover:bg-btn-bg/80
              flex items-center gap-2
              cursor-pointer
            "
          >
            {loading && (
              <span
                aria-hidden="true"
                className="w-4 h-4 border-2 border-white/50 border-t-transparent rounded-full animate-spin"
              />
            )}
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </motion.div>

      </form>
    </Form>
  )
}

export default NewsletterForm