import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

type PolicyBlock = { type: 'p' | 'ul'; text?: string; items?: string[] };

interface PolicySection {
  id: string;
  title: string;
  icon?: string;
  blocks: PolicyBlock[];
}

@Component({
  selector: 'app-policies',
  standalone: false,
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss'],
})
export class PoliciesComponent {
  // ====== EDIT THESE ======
  appName = 'Rajee';
  companyName = 'Rajee Marketplace';
  supportEmail = 'support@rajeemarketplace.com';
  supportPhone = '+92-3XX-XXXXXXX';
  websiteUrl = 'https://rajeemarketplace.com';
  address = 'Pakistan';
  lastUpdated = '18 Jan 2026';

  query = '';

  sections: PolicySection[] = [
    {
      id: 'intro',
      title: 'Overview',
      icon: 'information-circle-outline',
      blocks: [
        {
          type: 'p',
          text:
            `${this.appName} aik marketplace app hai jahan users ads/listings post karte hain aur buyers/sellers aapas me deal karte hain. ` +
            `Hum transaction ka direct hissa nahi hotay, lekin platform rules enforce karte hain.`,
        },
        {
          type: 'ul',
          items: [
            'Platform use karne se aap in policies aur terms se agree karte hain.',
            'Hum policies ko update kar sakte hain; “Last Updated” date check karte rahen.',
            'Agar aap agree nahi, to app use na karein / account delete kar dein.',
          ],
        },
      ],
    },

    // ================= PRIVACY =================
    {
      id: 'privacy',
      title: 'Privacy Policy',
      icon: 'shield-checkmark-outline',
      blocks: [
        { type: 'p', text: 'Hum aap ki privacy ko serious lete hain. Neeche bataya gaya hai ke hum kya data lete hain aur kyun.' },
        {
          type: 'ul',
          items: [
            'Account info: name, phone/email, profile photo (agar aap add karein).',
            'Listings/Ads info: title, description, price, images, location (agar aap share karein).',
            'Usage data: app performance logs, crash reports, basic analytics (behtari ke liye).',
            'Device info: device model, OS version, unique identifiers (security/anti-fraud).',
          ],
        },
        { type: 'p', text: 'Data use kaisay hota hai:' },
        {
          type: 'ul',
          items: [
            'Account chalana, login/security, spam/fraud control.',
            'Listings dikhana, search/filter, recommendations improve karna.',
            'Support aur dispute handling (jab aap report/contact karein).',
            'Legal compliance aur policy enforcement.',
          ],
        },
        { type: 'p', text: 'Data sharing:' },
        {
          type: 'ul',
          items: [
            'Hum aap ka personal data “sell” nahi karte.',
            'Third-party services (example: hosting, analytics, push notifications) sirf service dene ke liye data process kar sakti hain.',
            'Legal request / fraud investigation me data share ho sakta hai.',
          ],
        },
        { type: 'p', text: 'Security:' },
        {
          type: 'ul',
          items: [
            'Hum reasonable security measures use karte hain, lekin 100% guarantee possible nahi.',
            'Aap apna password/OTP kisi ko share na karein.',
          ],
        },
        { type: 'p', text: 'Aap ke rights:' },
        {
          type: 'ul',
          items: [
            'Aap data update/rectify kar sakte hain.',
            'Aap account delete aur data removal request kar sakte hain (kuch logs legal/security reasons ki wajah se retain ho sakte hain).',
          ],
        },
      ],
    },

    // ================= TERMS =================
    {
      id: 'terms',
      title: 'Terms of Use',
      icon: 'document-text-outline',
      blocks: [
        {
          type: 'ul',
          items: [
            'Aap sirf lawful aur honest purpose ke liye app use karenge.',
            'Aap apni listing ki accuracy (price, condition, photos) ke zimmedar hain.',
            'Buyer/Seller apni deal khud karte hain; platform third-party intermediary hai.',
            'Hum kisi deal/transaction ke loss, fraud, ya dispute ke liable nahi (maximum extent allowed by law).',
            'Hum kisi bhi user ya ad ko suspend/remove kar sakte hain agar policy violate ho.',
          ],
        },
      ],
    },

    // ================= ADS / POSTING RULES =================
    {
      id: 'posting',
      title: 'Ads / Listing Rules',
      icon: 'megaphone-outline',
      blocks: [
        { type: 'p', text: 'Ads post karte hue ye rules follow karein:' },
        {
          type: 'ul',
          items: [
            'Real product/service ki real photos upload karein (fake/stock images avoid).',
            'Title aur description clear aur honest rakhein.',
            'Misleading pricing, hidden charges, ya fake discount nahi.',
            'Contact info ko spam style me repeat na karein.',
            'Same item ki duplicate ads avoid karein.',
          ],
        },
      ],
    },

    // ================= PROHIBITED =================
    {
      id: 'prohibited',
      title: 'Prohibited Items & Content',
      icon: 'ban-outline',
      blocks: [
        { type: 'p', text: 'Niche cheezen sakht mana hain (listing remove + account action ho sakta hai):' },
        {
          type: 'ul',
          items: [
            'Illegal items, stolen goods, counterfeit products.',
            'Weapons/ammunition/explosives (local law ke mutabiq).',
            'Drugs, controlled substances, intoxication items.',
            'Adult/explicit content, harassment, hate speech.',
            'Scams: advance payment fraud, phishing links, fake escrow.',
            'Personal data selling (CNIC, bank data, etc.).',
          ],
        },
      ],
    },

    // ================= REPORTING & REMOVAL =================
    {
      id: 'reporting',
      title: 'Reporting & Removal of Violating Ads',
      icon: 'flag-outline',
      blocks: [
        {
          type: 'p',
          text:
            'Agar aap ko koi ad/user suspicious ya policy-violating lagay to “Report” feature se report karein. ' +
            'Hum review karke action lete hain.',
        },
        {
          type: 'ul',
          items: [
            'Review ke baad ad remove/suspend ho sakti hai.',
            'Repeat violation par account suspend/ban ho sakta hai.',
            'Fraud/illegal activity me law enforcement ko cooperate kar sakte hain.',
            'False reporting ka misuse bhi violation ho sakta hai.',
          ],
        },
      ],
    },

    // ================= SAFETY =================
    {
      id: 'safety',
      title: 'Safety Tips (Buyer/Seller)',
      icon: 'alert-circle-outline',
      blocks: [
        {
          type: 'ul',
          items: [
            'Meetup public place me karein; akelay na jayen.',
            'Advance payment/OTP/share screen ka demand ho to avoid karein.',
            'Product check kar ke hi payment karein.',
            'Suspicious links/WhatsApp “verify” requests par click na karein.',
          ],
        },
      ],
    },

    // ================= REFUND / PAYMENTS (OPTIONAL) =================
    {
      id: 'payments',
      title: 'Payments / Refunds (Agar app me payment feature ho)',
      icon: 'card-outline',
      blocks: [
        { type: 'p', text: 'Agar aap ki app me in-app payments/featured ads hain to yahan apni policy define karein.' },
        {
          type: 'ul',
          items: [
            'Featured/Boosted ads ki fees non-refundable ho sakti hai (policy aap set karein).',
            'Chargeback/fraud cases me investigation ke baad decision hoga.',
            'Tax/fees local rules ke mutabiq apply ho sakti hain.',
          ],
        },
      ],
    },

    // ================= CONTACT =================
    {
      id: 'contact',
      title: 'Contact Us',
      icon: 'mail-outline',
      blocks: [
        {
          type: 'p',
          text:
            `Support ke liye: ${this.supportEmail} | ${this.supportPhone}\n` +
            `Website: ${this.websiteUrl}\n` +
            `Address/Region: ${this.address}`,
        },
      ],
    },
  ];

  get filteredSections(): PolicySection[] {
    const q = (this.query || '').trim().toLowerCase();
    if (!q) return this.sections;

    return this.sections.filter((s) => {
      if (s.title.toLowerCase().includes(q)) return true;
      return s.blocks.some((b) => {
        if (b.type === 'p' && (b.text || '').toLowerCase().includes(q)) return true;
        if (b.type === 'ul' && (b.items || []).some((x) => x.toLowerCase().includes(q))) return true;
        return false;
      });
    });
  }

  mailToSupport() {
    window.location.href = `mailto:${this.supportEmail}?subject=${encodeURIComponent(this.appName + ' Support')}`;
  }
}
