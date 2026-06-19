import React, { useState, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from './ui/Button'
import { fadeUpVariant, staggerContainer } from '@/lib/motion'

type Role = 'freelancer' | 'client' | 'both'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function WaitlistForm() {
  const emailId = useId()
  const roleId = useId()
  const useCaseId = useId()

  const [email, setEmail] = useState('')
  const [role, setRole] = useState<Role>('freelancer')
  const [useCase, setUseCase] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const emailValid = isValidEmail(email)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!emailValid || loading) return

    setLoading(true)
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role, useCase: useCase || null }),
      })
      const data = await res.json() as { status: string }

      if (data.status === 'joined') {
        setSuccess(true)
        toast.success("You're on the list! Check your inbox.")
      } else if (data.status === 'already_joined') {
        toast.info("You're already on the waitlist.")
      } else {
        toast.error('Something went wrong, try again.')
      }
    } catch {
      toast.error('Something went wrong, try again.')
    } finally {
      setLoading(false)
    }
  }

  const roles: { value: Role; label: string }[] = [
    { value: 'freelancer', label: 'Freelancer' },
    { value: 'client', label: 'Client' },
    { value: 'both', label: 'Both' },
  ]

  return (
    <div className="w-full max-w-[480px] mx-auto">
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.26 }}
            className="bg-bg-base border border-border rounded-lg p-10 text-center"
            role="status"
            aria-live="polite"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
              className="flex justify-center mb-4"
            >
              <CheckCircle2 className="w-14 h-14 text-status-success" aria-hidden="true" />
            </motion.div>
            <h3 className="font-heading font-semibold text-ink-900 text-xl mb-2">
              You're on the list
            </h3>
            <p className="font-body text-ink-500 text-sm leading-relaxed">
              We'll reach out when a beta slot opens. Keep an eye on your inbox.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            noValidate
            className="bg-bg-base border border-border rounded-lg p-8 space-y-5"
            aria-label="Waitlist sign-up form"
          >
            {/* Email */}
            <motion.div variants={fadeUpVariant}>
              <label
                htmlFor={emailId}
                className="block font-body font-medium text-ink-900 text-sm mb-1.5"
              >
                Email address
              </label>
              <input
                id={emailId}
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-sm border border-border bg-bg-base text-ink-900 font-body text-sm placeholder:text-ink-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 transition"
                aria-required="true"
              />
            </motion.div>

            {/* Role toggle */}
            <motion.div variants={fadeUpVariant}>
              <p
                id={roleId}
                className="block font-body font-medium text-ink-900 text-sm mb-1.5"
              >
                I am a…
              </p>
              <div
                className="flex gap-2"
                role="group"
                aria-labelledby={roleId}
              >
                {roles.map(r => (
                  <button
                    key={r.value}
                    type="button"
                    onClick={() => setRole(r.value)}
                    aria-pressed={role === r.value}
                    className={`flex-1 py-2 px-3 rounded-sm border text-sm font-body font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 ${
                      role === r.value
                        ? 'bg-ink-900 text-white border-ink-900'
                        : 'bg-bg-base text-ink-700 border-border hover:border-ink-500'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Use case */}
            <motion.div variants={fadeUpVariant}>
              <label
                htmlFor={useCaseId}
                className="block font-body font-medium text-ink-900 text-sm mb-1.5"
              >
                Tell us about your use case{' '}
                <span className="text-ink-500 font-normal">(optional)</span>
              </label>
              <textarea
                id={useCaseId}
                rows={3}
                placeholder="e.g. I build SaaS MVPs for startups and want to protect my code during delivery…"
                value={useCase}
                onChange={e => setUseCase(e.target.value)}
                className="w-full px-4 py-2.5 rounded-sm border border-border bg-bg-base text-ink-900 font-body text-sm placeholder:text-ink-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 transition resize-none"
              />
            </motion.div>

            {/* Submit */}
            <motion.div variants={fadeUpVariant}>
              <Button
                type="submit"
                variant="primary"
                fullWidth
                loading={loading}
                disabled={!emailValid}
                className="group"
              >
                {loading ? 'Submitting…' : (
                  <>
                    Join the Waitlist
                    <ArrowRight
                      className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </>
                )}
              </Button>
              <p className="text-center text-xs text-ink-500 font-body mt-3">
                No spam. No credit card. Unsubscribe any time.
              </p>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
