import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

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

// --------------------
// Zod schema (fixed)
// --------------------
const NewsletterSchema = z.object({
	email: z.string().email("Invalid email address"),
	optIn: z
		.boolean()
		.refine((val) => val === true, {
			message: "You must agree to subscribe",
		}),
})

type NewsletterFormData = z.infer<typeof NewsletterSchema>

// --------------------
// Component
// --------------------
const NewsletterForm = () => {
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState<string | null>(null)

	const form = useForm<NewsletterFormData>({
		resolver: zodResolver(NewsletterSchema),
		defaultValues: {
			email: "",
			optIn: false,
		},
	})

	const onSubmit = async (data: NewsletterFormData) => {
		setLoading(true)
		setSuccess(null)

		// Prepare payload for backend
		const payload = {
		email: data.email,
		optIn: data.optIn,
		}

		// Mark as used (removes lint warning)
		void payload

		// Fake API delay
		await new Promise((resolve) => setTimeout(resolve, 1200))

		setLoading(false)
		setSuccess("Thank you for subscribing! 🎉")

		toast.success("Subscribed successfully!")
		form.reset()
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col items-start space-y-6 w-full max-w-[400px] sm:pr-10 text-[15px] sm:text-base"
			>
				{/* EMAIL FIELD */}
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel className="form-label" htmlFor="your_email">Email *</FormLabel>
							<FormControl>
								<Input
									{...field}
									aria-label="Your email"
									type="email"
									id="your_email"
									className="form-input"
									autoComplete="email"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* CHECKBOX */}
				<FormField
					control={form.control}
					name="optIn"
					render={({ field }) => (
						<FormItem className="flex items-center space-x-0.5">
							<FormControl>
								<Checkbox
									checked={field.value}
									onCheckedChange={field.onChange}
									id="subscribe"
								/>
							</FormControl>
							<FormLabel 
								className="text-[15px] sm:text-base font-light cursor-pointer" 
								htmlFor="subscribe"
							>
								I want to subscribe to your mailing list. *
							</FormLabel>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* SUCCESS MESSAGE */}
				{success && (
				<p className="text-green-600 text-sm animate-fade-in">
					{success}
				</p>
				)}

				{/* BUTTON */}
				<Button
					type="submit"
					disabled={loading}
					className="
						mt-1 px-6 py-2.5
						border border-btn-bg bg-btn-bg
						text-btn-text hover:bg-btn-bg/80
						flex items-center gap-2
						cursor-pointer
					"
					>
					{loading && (
						<span className="w-4 h-4 border-2 border-white/50 border-t-transparent rounded-full animate-spin" />
					)}
					{loading ? "Subscribing..." : "Subscribe"}
				</Button>
			</form>
		</Form>
	)
}

export default NewsletterForm