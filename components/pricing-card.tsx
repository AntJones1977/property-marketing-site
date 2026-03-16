import { Check, X } from 'lucide-react'

const APP_URL = 'https://property-app-pi-fawn.vercel.app'

interface PricingFeature {
  label: string
  included: boolean
  note?: string
}

interface PricingCardProps {
  name: string
  price: string
  period: string
  description: string
  propertyLimit: string
  features: PricingFeature[]
  popular?: boolean
  cta: string
}

export function PricingCard({
  name,
  price,
  period,
  description,
  propertyLimit,
  features,
  popular,
  cta,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-xl border p-6 flex flex-col ${
        popular ? 'border-primary ring-2 ring-primary relative' : 'border-border'
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>

      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-muted-foreground">/{period}</span>
      </div>

      <p className="text-sm font-medium text-muted-foreground mb-4">{propertyLimit}</p>

      <ul className="space-y-2.5 mb-6 flex-1">
        {features.map((feature) => (
          <li key={feature.label} className="flex items-start gap-2 text-sm">
            {feature.included ? (
              <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
            ) : (
              <X className="h-4 w-4 text-muted-foreground/40 mt-0.5 shrink-0" />
            )}
            <span className={feature.included ? '' : 'text-muted-foreground/60'}>
              {feature.label}
              {feature.note && (
                <span className="text-muted-foreground text-xs ml-1">({feature.note})</span>
              )}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={`${APP_URL}/signup`}
        className={`inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors w-full ${
          popular
            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
            : 'border border-border hover:bg-accent'
        }`}
      >
        {cta}
      </a>
    </div>
  )
}
