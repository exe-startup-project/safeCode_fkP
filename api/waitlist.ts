import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

// ── helpers ──────────────────────────────────────────────────────────────────

function isValidEmail(email: unknown): email is string {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidRole(role: unknown): role is 'freelancer' | 'client' | 'both' {
  return role === 'freelancer' || role === 'client' || role === 'both'
}

// ── handler ──────────────────────────────────────────────────────────────────

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method not allowed' })
  }

  // Parse body
  const { email, role, useCase } = req.body as {
    email: unknown
    role: unknown
    useCase: unknown
  }

  // Server-side validation
  if (!isValidEmail(email)) {
    return res.status(400).json({ status: 'error', message: 'Invalid email address' })
  }
  if (!isValidRole(role)) {
    return res.status(400).json({ status: 'error', message: 'Invalid role' })
  }

  const sanitizedUseCase =
    typeof useCase === 'string' && useCase.trim().length > 0 ? useCase.trim() : null

  // ── Supabase insert ─────────────────────────────────────────────────────────
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  )

  const { error: dbError } = await supabase.from('waitlist').insert({
    email,
    role,
    use_case: sanitizedUseCase,
  })

  if (dbError) {
    // Unique constraint violation → already on the list
    if (dbError.code === '23505') {
      return res.status(200).json({ status: 'already_joined' })
    }
    console.error('[waitlist] db error:', dbError)
    return res.status(500).json({ status: 'error' })
  }

  // ── Resend emails ───────────────────────────────────────────────────────────
  const resend = new Resend(process.env.RESEND_API_KEY!)

  // 1. Confirmation to the user
  await resend.emails.send({
    from: 'SafeCode <noreply@safecode.dev>',
    to: email,
    subject: "You're on the SafeCode waitlist",
    html: `
      <div style="font-family: 'IBM Plex Sans', sans-serif; max-width: 480px; margin: 0 auto; color: #334155;">
        <p style="font-size: 18px; font-weight: 600; color: #0f172a;">You're on the list.</p>
        <p>Thanks for signing up for early access to SafeCode. We're working through beta spots in order — we'll reach out when yours opens up.</p>
        <p>In the meantime, if you have questions or want to share more about your use case, reply directly to this email.</p>
        <p style="color: #64748b; font-size: 13px;">— The SafeCode team</p>
      </div>
    `,
  }).catch(err => console.error('[waitlist] confirmation email error:', err))

  // 2. Notification to the team
  const notifyEmail = process.env.NOTIFY_EMAIL
  if (notifyEmail) {
    await resend.emails.send({
      from: 'SafeCode Waitlist <noreply@safecode.dev>',
      to: notifyEmail,
      subject: `New waitlist sign-up: ${email}`,
      html: `
        <div style="font-family: monospace; max-width: 480px; margin: 0 auto; color: #334155;">
          <p><strong>email:</strong> ${email}</p>
          <p><strong>role:</strong> ${role}</p>
          <p><strong>use_case:</strong> ${sanitizedUseCase ?? '—'}</p>
        </div>
      `,
    }).catch(err => console.error('[waitlist] notify email error:', err))
  }

  return res.status(200).json({ status: 'joined' })
}
