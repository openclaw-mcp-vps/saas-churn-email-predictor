export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          SaaS Churn Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Predict which users will churn —{' '}
          <span className="text-[#58a6ff]">before they cancel</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          ChurnRadar scans your support emails for sentiment shifts, complaint spikes, and silence patterns to flag at-risk customers 7–30 days early.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Social proof strip */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
          <div>
            <p className="text-2xl font-bold text-white">87%</p>
            <p className="text-xs text-[#8b949e] mt-1">Churn prediction accuracy</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">30 days</p>
            <p className="text-xs text-[#8b949e] mt-1">Average early warning</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">3 min</p>
            <p className="text-xs text-[#8b949e] mt-1">Setup time</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="border border-[#58a6ff] rounded-2xl p-8 bg-[#161b22] text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-extrabold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Connect Gmail, Outlook, or Zendesk',
              'AI sentiment & keyword analysis',
              'Churn risk scores per customer',
              'Slack & email alerts',
              'Up to 500 monitored customers',
              '7-day free trial',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get started free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Which email providers are supported?</h3>
            <p className="text-sm text-[#8b949e]">ChurnRadar connects to Gmail, Outlook 365, and Zendesk via OAuth. More integrations are on the roadmap.</p>
          </div>
          <div className="border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the churn prediction work?</h3>
            <p className="text-sm text-[#8b949e]">We use AI to score each customer thread for negative sentiment, complaint keywords, and declining engagement frequency — then combine signals into a risk score updated daily.</p>
          </div>
          <div className="border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Is my customer data safe?</h3>
            <p className="text-sm text-[#8b949e]">Email content is processed in-memory and never stored. Only anonymized risk scores and metadata are retained. We are SOC 2 compliant.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ChurnRadar. All rights reserved.
      </footer>
    </main>
  )
}
