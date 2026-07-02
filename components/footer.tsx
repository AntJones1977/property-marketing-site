import Link from 'next/link'
import { Building2 } from 'lucide-react'
import {
  COMPANY_NAME,
  COMPANY_NUMBER,
  PLACE_OF_REGISTRATION,
  REGISTERED_OFFICE,
} from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Building2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">PropertyApp</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Property portfolio management, simplified. Built for UK buy-to-let landlords.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/features" className="hover:text-foreground transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link href="/guides" className="hover:text-foreground transition-colors">Guides</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Statutory trading disclosures — Companies Act 2006 / Trading
            Disclosures Regulations 2015. Do not remove this block. */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            {COMPANY_NAME} is registered in {PLACE_OF_REGISTRATION}
            {COMPANY_NUMBER && <>, company no. {COMPANY_NUMBER}</>}
            {REGISTERED_OFFICE && <>. Registered office: {REGISTERED_OFFICE}</>}.
          </p>
        </div>
      </div>
    </footer>
  )
}
