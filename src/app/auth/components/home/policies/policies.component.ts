

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavController } from '@ionic/angular';

type PolicyBlock = { type: 'p' | 'ul'; text?: string; items?: string[] };

interface PolicySection {
  id: string;
  titleEn: string;
  titleAr: string;
  icon?: string;
  blocksEn: PolicyBlock[];
  blocksAr: PolicyBlock[];
}

@Component({
  selector: 'app-policies',
  standalone: false,
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss'],
})
export class PoliciesComponent implements OnInit {
  appName = 'Rajee';
  companyNameEn = 'Rajee Marketplace';
  companyNameAr = 'سوق راجي';
  supportEmail = 'support@rajee.sa';
  supportPhone = '+966-XX-XXX-XXXX';
  websiteUrl = 'https://rajee.sa';
  addressEn = 'Saudi Arabia';
  addressAr = 'المملكة العربية السعودية';
  lastUpdatedEn = 'January 22, 2026';
  lastUpdatedAr = '22 يناير 2026';

  selectedLanguage = 'en';
  query = '';

  sections: PolicySection[] = [
    // ================= OVERVIEW =================
    {
      id: 'intro',
      titleEn: 'Overview',
      titleAr: 'نظرة عامة',
      icon: 'information-circle-outline',
      blocksEn: [
        {
          type: 'p',
          text: `${this.appName} is a marketplace app where users post ads/listings and buyers/sellers deal with each other directly. We are not a direct party to transactions, but we enforce platform rules.`,
        },
        {
          type: 'ul',
          items: [
            'By using the platform, you agree to these policies and terms.',
            'We may update policies; please check the "Last Updated" date.',
            'If you do not agree, please do not use the app / delete your account.',
          ],
        },
      ],
      blocksAr: [
        {
          type: 'p',
          text: `${this.appName} هو تطبيق سوق إلكتروني يقوم فيه المستخدمون بنشر الإعلانات ويتعامل البائعون والمشترون مع بعضهم البعض مباشرة. نحن لسنا طرفاً مباشراً في المعاملات، ولكننا نطبق قواعد المنصة.`,
        },
        {
          type: 'ul',
          items: [
            'باستخدام المنصة، فإنك توافق على هذه السياسات والشروط.',
            'قد نقوم بتحديث السياسات؛ يرجى التحقق من تاريخ "آخر تحديث".',
            'إذا كنت لا توافق، يرجى عدم استخدام التطبيق / حذف حسابك.',
          ],
        },
      ],
    },

    // ================= PRIVACY POLICY =================
    {
      id: 'privacy',
      titleEn: 'Privacy Policy',
      titleAr: 'سياسة الخصوصية',
      icon: 'shield-checkmark-outline',
      blocksEn: [
        { type: 'p', text: 'We take your privacy seriously. Below is what data we collect and why.' },
        {
          type: 'ul',
          items: [
            'Account info: name, phone/email, profile photo (if you add one).',
            'Listings/Ads info: title, description, price, images, location (if you share).',
            'Usage data: app performance logs, crash reports, basic analytics (for improvement).',
            'Device info: device model, OS version, unique identifiers (for security/anti-fraud).',
          ],
        },
        { type: 'p', text: 'How we use data:' },
        {
          type: 'ul',
          items: [
            'Account management, login/security, spam/fraud control.',
            'Displaying listings, search/filter, improving recommendations.',
            'Support and dispute handling (when you report/contact us).',
            'Legal compliance and policy enforcement.',
          ],
        },
        { type: 'p', text: 'Data sharing:' },
        {
          type: 'ul',
          items: [
            'We do not "sell" your personal data.',
            'Third-party services (e.g., hosting, analytics, push notifications) may process data only to provide services.',
            'Data may be shared in legal requests / fraud investigations.',
          ],
        },
        { type: 'p', text: 'Security:' },
        {
          type: 'ul',
          items: [
            'We use reasonable security measures, but 100% guarantee is not possible.',
            'Do not share your password/OTP with anyone.',
          ],
        },
        { type: 'p', text: 'Your rights:' },
        {
          type: 'ul',
          items: [
            'You can update/rectify your data.',
            'You can request account deletion and data removal (some logs may be retained for legal/security reasons).',
          ],
        },
      ],
      blocksAr: [
        { type: 'p', text: 'نحن نأخذ خصوصيتك على محمل الجد. فيما يلي البيانات التي نجمعها ولماذا.' },
        {
          type: 'ul',
          items: [
            'معلومات الحساب: الاسم، الهاتف/البريد الإلكتروني، صورة الملف الشخصي (إذا أضفتها).',
            'معلومات الإعلانات: العنوان، الوصف، السعر، الصور، الموقع (إذا شاركته).',
            'بيانات الاستخدام: سجلات أداء التطبيق، تقارير الأعطال، التحليلات الأساسية (للتحسين).',
            'معلومات الجهاز: طراز الجهاز، إصدار نظام التشغيل، المعرفات الفريدة (للأمان/مكافحة الاحتيال).',
          ],
        },
        { type: 'p', text: 'كيف نستخدم البيانات:' },
        {
          type: 'ul',
          items: [
            'إدارة الحساب، تسجيل الدخول/الأمان، التحكم في البريد العشوائي/الاحتيال.',
            'عرض الإعلانات، البحث/التصفية، تحسين التوصيات.',
            'الدعم ومعالجة النزاعات (عند الإبلاغ/الاتصال بنا).',
            'الامتثال القانوني وتطبيق السياسات.',
          ],
        },
        { type: 'p', text: 'مشاركة البيانات:' },
        {
          type: 'ul',
          items: [
            'نحن لا "نبيع" بياناتك الشخصية.',
            'قد تقوم خدمات الطرف الثالث (مثل الاستضافة، التحليلات، الإشعارات) بمعالجة البيانات فقط لتقديم الخدمات.',
            'قد تتم مشاركة البيانات في الطلبات القانونية / تحقيقات الاحتيال.',
          ],
        },
        { type: 'p', text: 'الأمان:' },
        {
          type: 'ul',
          items: [
            'نستخدم تدابير أمنية معقولة، ولكن الضمان بنسبة 100٪ غير ممكن.',
            'لا تشارك كلمة المرور/رمز التحقق مع أي شخص.',
          ],
        },
        { type: 'p', text: 'حقوقك:' },
        {
          type: 'ul',
          items: [
            'يمكنك تحديث/تصحيح بياناتك.',
            'يمكنك طلب حذف الحساب وإزالة البيانات (قد يتم الاحتفاظ ببعض السجلات لأسباب قانونية/أمنية).',
          ],
        },
      ],
    },

    // ================= TERMS OF USE =================
    {
      id: 'terms',
      titleEn: 'Terms of Use',
      titleAr: 'شروط الاستخدام',
      icon: 'document-text-outline',
      blocksEn: [
        {
          type: 'ul',
          items: [
            'You will use the app only for lawful and honest purposes.',
            'You are responsible for the accuracy of your listing (price, condition, photos).',
            'Buyer/Seller make their own deals; the platform is a third-party intermediary.',
            'We are not liable for any deal/transaction loss, fraud, or dispute (to the maximum extent allowed by law).',
            'We can suspend/remove any user or ad if policy is violated.',
          ],
        },
      ],
      blocksAr: [
        {
          type: 'ul',
          items: [
            'ستستخدم التطبيق فقط لأغراض قانونية وصادقة.',
            'أنت مسؤول عن دقة إعلانك (السعر، الحالة، الصور).',
            'المشتري/البائع يبرمان صفقاتهما بأنفسهما؛ المنصة وسيط من طرف ثالث.',
            'لسنا مسؤولين عن أي خسارة أو احتيال أو نزاع في الصفقة/المعاملة (إلى أقصى حد يسمح به القانون).',
            'يمكننا تعليق/إزالة أي مستخدم أو إعلان في حالة انتهاك السياسة.',
          ],
        },
      ],
    },

    // ================= ADS / LISTING RULES =================
    {
      id: 'posting',
      titleEn: 'Ads / Listing Rules',
      titleAr: 'قواعد الإعلانات',
      icon: 'megaphone-outline',
      blocksEn: [
        { type: 'p', text: 'Follow these rules when posting ads:' },
        {
          type: 'ul',
          items: [
            'Upload real photos of real product/service (avoid fake/stock images).',
            'Keep title and description clear and honest.',
            'No misleading pricing, hidden charges, or fake discounts.',
            'Do not repeat contact info in spam style.',
            'Avoid duplicate ads for the same item.',
          ],
        },
      ],
      blocksAr: [
        { type: 'p', text: 'اتبع هذه القواعد عند نشر الإعلانات:' },
        {
          type: 'ul',
          items: [
            'ارفع صوراً حقيقية للمنتج/الخدمة الحقيقية (تجنب الصور المزيفة/الجاهزة).',
            'اجعل العنوان والوصف واضحين وصادقين.',
            'لا أسعار مضللة أو رسوم مخفية أو خصومات وهمية.',
            'لا تكرر معلومات الاتصال بأسلوب البريد العشوائي.',
            'تجنب الإعلانات المكررة لنفس المنتج.',
          ],
        },
      ],
    },

    // ================= PROHIBITED ITEMS =================
    {
      id: 'prohibited',
      titleEn: 'Prohibited Items & Content',
      titleAr: 'العناصر والمحتوى المحظور',
      icon: 'ban-outline',
      blocksEn: [
        { type: 'p', text: 'The following are strictly prohibited (listing removal + account action may apply):' },
        {
          type: 'ul',
          items: [
            'Illegal items, stolen goods, counterfeit products.',
            'Weapons/ammunition/explosives (according to local law).',
            'Drugs, controlled substances, intoxication items.',
            'Adult/explicit content, harassment, hate speech.',
            'Scams: advance payment fraud, phishing links, fake escrow.',
            'Selling personal data (ID, bank data, etc.).',
          ],
        },
      ],
      blocksAr: [
        { type: 'p', text: 'الآتي ممنوع منعاً باتاً (قد يتم إزالة الإعلان + اتخاذ إجراء بحق الحساب):' },
        {
          type: 'ul',
          items: [
            'العناصر غير القانونية، البضائع المسروقة، المنتجات المقلدة.',
            'الأسلحة/الذخيرة/المتفجرات (وفقاً للقانون المحلي).',
            'المخدرات، المواد الخاضعة للرقابة، مواد الإسكار.',
            'محتوى للبالغين/صريح، المضايقات، خطاب الكراهية.',
            'الاحتيال: احتيال الدفع المسبق، روابط التصيد، الضمان الوهمي.',
            'بيع البيانات الشخصية (الهوية، البيانات البنكية، إلخ).',
          ],
        },
      ],
    },

    // ================= REPORTING =================
    {
      id: 'reporting',
      titleEn: 'Reporting & Removal of Violating Ads',
      titleAr: 'الإبلاغ وإزالة الإعلانات المخالفة',
      icon: 'flag-outline',
      blocksEn: [
        {
          type: 'p',
          text: 'If you find any ad/user suspicious or policy-violating, use the "Report" feature. We will review and take action.',
        },
        {
          type: 'ul',
          items: [
            'After review, the ad may be removed/suspended.',
            'Repeat violations may result in account suspension/ban.',
            'In fraud/illegal activity, we may cooperate with law enforcement.',
            'Misuse of false reporting is also a violation.',
          ],
        },
      ],
      blocksAr: [
        {
          type: 'p',
          text: 'إذا وجدت أي إعلان/مستخدم مشبوه أو مخالف للسياسة، استخدم ميزة "الإبلاغ". سنقوم بالمراجعة واتخاذ الإجراء المناسب.',
        },
        {
          type: 'ul',
          items: [
            'بعد المراجعة، قد يتم إزالة/تعليق الإعلان.',
            'الانتهاكات المتكررة قد تؤدي إلى تعليق/حظر الحساب.',
            'في حالات الاحتيال/النشاط غير القانوني، قد نتعاون مع جهات إنفاذ القانون.',
            'إساءة استخدام الإبلاغ الكاذب تعتبر أيضاً انتهاكاً.',
          ],
        },
      ],
    },

    // ================= SAFETY TIPS =================
    {
      id: 'safety',
      titleEn: 'Safety Tips (Buyer/Seller)',
      titleAr: 'نصائح السلامة (للبائع/المشتري)',
      icon: 'alert-circle-outline',
      blocksEn: [
        {
          type: 'ul',
          items: [
            'Meet in a public place; do not go alone.',
            'Avoid requests for advance payment/OTP/screen sharing.',
            'Check the product before making payment.',
            'Do not click on suspicious links/WhatsApp "verify" requests.',
          ],
        },
      ],
      blocksAr: [
        {
          type: 'ul',
          items: [
            'قابل في مكان عام؛ لا تذهب بمفردك.',
            'تجنب طلبات الدفع المسبق/رمز التحقق/مشاركة الشاشة.',
            'افحص المنتج قبل الدفع.',
            'لا تنقر على الروابط المشبوهة/طلبات "التحقق" عبر واتساب.',
          ],
        },
      ],
    },

    // ================= PAYMENTS/REFUNDS =================
    {
      id: 'payments',
      titleEn: 'Payments / Refunds (If applicable)',
      titleAr: 'المدفوعات / الاسترداد (إن وجدت)',
      icon: 'card-outline',
      blocksEn: [
        { type: 'p', text: 'If the app has in-app payments/featured ads, the following applies:' },
        {
          type: 'ul',
          items: [
            'Featured/Boosted ads fees may be non-refundable (as per our policy).',
            'Chargeback/fraud cases will be investigated before decision.',
            'Taxes/fees may apply according to local regulations.',
          ],
        },
      ],
      blocksAr: [
        { type: 'p', text: 'إذا كان التطبيق يحتوي على مدفوعات داخلية/إعلانات مميزة، ينطبق ما يلي:' },
        {
          type: 'ul',
          items: [
            'قد تكون رسوم الإعلانات المميزة/المعززة غير قابلة للاسترداد (حسب سياستنا).',
            'سيتم التحقيق في حالات الاسترداد/الاحتيال قبل اتخاذ القرار.',
            'قد تنطبق الضرائب/الرسوم وفقاً للوائح المحلية.',
          ],
        },
      ],
    },

    // ================= CONTACT US =================
    {
      id: 'contact',
      titleEn: 'Contact Us',
      titleAr: 'اتصل بنا',
      icon: 'mail-outline',
      blocksEn: [
        {
          type: 'p',
          text: `For support: ${this.supportEmail} | ${this.supportPhone}\nWebsite: ${this.websiteUrl}\nRegion: Saudi Arabia`,
        },
      ],
      blocksAr: [
        {
          type: 'p',
          text: `للدعم: ${this.supportEmail} | ${this.supportPhone}\nالموقع: ${this.websiteUrl}\nالمنطقة: المملكة العربية السعودية`,
        },
      ],
    },
  ];

  constructor(
    private translate: TranslateService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) this.selectedLanguage = savedLang;

    this.translate.onLangChange.subscribe(() => {
      this.selectedLanguage = this.translate.currentLang;
    });
  }

  get displayTitle(): string {
    return this.selectedLanguage === 'ar' ? `سياسات ${this.appName}` : `${this.appName} Policies`;
  }

  get displayLastUpdated(): string {
    return this.selectedLanguage === 'ar'
      ? `آخر تحديث: ${this.lastUpdatedAr}`
      : `Last Updated: ${this.lastUpdatedEn}`;
  }

  get filteredSections(): PolicySection[] {
    const q = (this.query || '').trim().toLowerCase();
    if (!q) return this.sections;

    return this.sections.filter((s) => {
      const title = this.selectedLanguage === 'ar' ? s.titleAr : s.titleEn;
      if (title.toLowerCase().includes(q)) return true;

      const blocks = this.selectedLanguage === 'ar' ? s.blocksAr : s.blocksEn;
      return blocks.some((b) => {
        if (b.type === 'p' && (b.text || '').toLowerCase().includes(q)) return true;
        if (b.type === 'ul' && (b.items || []).some((x) => x.toLowerCase().includes(q))) return true;
        return false;
      });
    });
  }

  getSectionTitle(section: PolicySection): string {
    return this.selectedLanguage === 'ar' ? section.titleAr : section.titleEn;
  }

  getSectionBlocks(section: PolicySection): PolicyBlock[] {
    return this.selectedLanguage === 'ar' ? section.blocksAr : section.blocksEn;
  }

  mailToSupport() {
    window.location.href = `mailto:${this.supportEmail}?subject=${encodeURIComponent(this.appName + ' Support')}`;
  }

  goBack() {
    this.navCtrl.back();
  }

  trackByFn(index: number, section: PolicySection): string {
    return section.id;
  }
}
