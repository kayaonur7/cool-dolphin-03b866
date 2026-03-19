// Northern Rock Technology Consulting — i18n
// Supports: en (English), tr (Turkish)
// Usage: data-i18n="key" on elements

(function () {
  var STORAGE_KEY = 'nrt_lang';

  var translations = {
    en: {
      // NAV
      nav_services: 'Services',
      nav_how: 'How we work',
      nav_contact: 'Contact',

      // FOOTER
      footer_privacy: 'Privacy',
      footer_terms: 'Terms',
      footer_email_label: 'Email:',

      // COOKIE
      cookie_title: 'Cookies',
      cookie_text: 'We use cookies to understand site usage and improve our services.',
      cookie_ok: 'OK',

      // ── INDEX ──
      index_eyebrow: 'Austin, Texas • Remote-first',
      index_h1: 'Technology consulting & software delivery.',
      index_lead: 'We help organizations design, build, and improve reliable software systems — from architecture to implementation. Clear scope. Practical delivery. Senior-level ownership.',
      index_cta_consult: 'Request a consultation',
      index_cta_email: 'Email us',
      index_meta_entity_k: 'Entity',
      index_meta_entity_v: 'Texas LLC',
      index_meta_eng_k: 'Engagements',
      index_meta_eng_v: 'Scope • Documentation • Reporting',
      index_meta_sec_k: 'Security',
      index_meta_sec_v: 'NDA-friendly & secure handling',
      index_meta_loc_k: 'Location',
      index_meta_loc_v: 'Austin, TX',
      index_services_h2: 'Services',
      index_services_lead: 'Senior-level consulting with practical delivery — clear outcomes, less complexity.',
      index_s1_h3: 'Technology Strategy & Advisory',
      index_s1_p: 'Assessment, roadmap, and decision support aligned with business goals.',
      index_s1_out: 'Typical outputs: brief, risk notes, prioritized plan.',
      index_s2_h3: 'Software Architecture & Development',
      index_s2_p: 'Scalable system design and implementation with clear documentation.',
      index_s2_out: 'Typical outputs: architecture notes, APIs, delivery plan.',
      index_s3_h3: 'Cloud & Infrastructure Consulting',
      index_s3_p: 'Guidance for deployment, security, and operational readiness.',
      index_s3_out: 'Typical outputs: infra blueprint, security checklist, runbook.',
      index_s4_h3: 'Process & System Optimization',
      index_s4_p: 'Performance, reliability, and maintainability improvements across platforms.',
      index_s4_out: 'Typical outputs: bottleneck analysis, refactor plan, KPIs.',
      index_cta_h3: 'Need a quick consult?',
      index_cta_p: "Send a short summary — we'll respond with next steps and a proposed call time.",
      index_cta_btn: 'Contact',

      // ── SERVICES ──
      services_title: 'Services',
      services_lead: 'Clear scope, senior execution, and documentation you can reuse.',
      services_cta_btn: 'Request a consultation',
      services_s1_h3: 'Technology Strategy & Advisory',
      services_s1_l1: 'Architecture review & target state',
      services_s1_l2: 'Roadmap & prioritization',
      services_s1_l3: 'Risk assessment (security, scale, delivery)',
      services_s2_h3: 'Software Architecture & Development',
      services_s2_l1: 'System design, APIs, integrations',
      services_s2_l2: 'Hands-on implementation support',
      services_s2_l3: 'Documentation: diagrams, ADRs, runbooks',
      services_s3_h3: 'Cloud & Infrastructure',
      services_s3_l1: 'Deployment patterns & environments',
      services_s3_l2: 'Security baseline & identity strategy',
      services_s3_l3: 'Observability (logs, metrics, tracing)',
      services_s4_h3: 'Optimization & Reliability',
      services_s4_l1: 'Performance tuning & bottleneck analysis',
      services_s4_l2: 'Refactoring for maintainability',
      services_s4_l3: 'Incident learnings & reliability improvements',
      services_how_h2: 'How we work',
      services_how_lead: 'Simple, transparent, and measurable.',
      services_how_1_h3: '1) Discovery',
      services_how_1_p: 'We clarify goals, constraints, and success metrics. You get a short written summary.',
      services_how_2_h3: '2) Scope & plan',
      services_how_2_p: 'We propose a scope and timeline. We keep it easy to track and easy to exit.',
      services_how_3_h3: '3) Delivery',
      services_how_3_p: 'Hands-on execution or advisory. Expect frequent checkpoints and reusable documentation.',
      services_how_4_h3: '4) Handover',
      services_how_4_p: 'Final documentation, next steps, and optional support period.',
      services_ready_h3: 'Ready to start?',
      services_ready_p: "Send a short note — we'll reply with next steps.",
      services_ready_btn: 'Contact',
      services_cases_h2: 'Case studies',
      services_cases_lead: 'Selected engagements (details anonymized).',
      services_case1_h3: 'Financial services platform',
      services_case1_prob: 'Problem: Delivery risk and unclear ownership.',
      services_case1_app: 'Approach: Architecture & delivery assessment.',
      services_case1_out: 'Outcome: Clear roadmap, reduced operational risk.',
      services_case2_h3: 'B2B SaaS internal tooling',
      services_case2_prob: 'Problem: Scaling issues and undocumented systems.',
      services_case2_app: 'Approach: Architecture review and execution support.',
      services_case2_out: 'Outcome: Improved reliability and delivery speed.',

      // ── HOW WE WORK ──
      how_title: 'How we work',
      how_lead: 'A practical, senior-level approach focused on clarity and outcomes.',
      how_1_h3: '1. Discover',
      how_1_p: 'Understand business goals, constraints, and risks before proposing solutions.',
      how_2_h3: '2. Design',
      how_2_p: 'Define architecture, responsibilities, and delivery plan aligned with reality.',
      how_3_h3: '3. Deliver',
      how_3_p: 'Support teams through execution with hands-on guidance and reviews.',
      how_4_h3: '4. Optimize',
      how_4_p: 'Continuously reduce risk, improve flow, and document decisions.',
      how_sec_h3: 'Security & NDA',
      how_sec_p: 'Client confidentiality is fundamental. All engagements are NDA-first.',
      how_cta_h3: 'Ready to talk?',
      how_cta_p: "Let's start with a short assessment.",
      how_cta_btn: 'Request a consultation',

      // ── CONTACT ──
      contact_title: 'Contact',
      contact_lead: "Send a consultation request. You'll get an instant success message.",
      contact_biz_h3: 'Business email',
      contact_biz_note: 'Austin, TX • Remote-first',
      contact_biz_tip: 'For faster routing, include: company name, project summary, and timeline.',
      contact_form_h3: 'Request a consultation',
      contact_lbl_name: 'Name',
      contact_lbl_email: 'Email',
      contact_lbl_company: 'Company (optional)',
      contact_lbl_msg: 'Message',
      contact_submit: 'Send',
      contact_secure: 'Secure handling • NDA-friendly',
      contact_modal_h2: 'Message received',
      contact_modal_p: "Thanks — we'll get back to you soon.",
      contact_modal_sub: 'We typically reply within 1 business day.',
      contact_modal_back: 'Back to home',
      contact_modal_close: 'Close',
      contact_toast_ok: 'Sent successfully.',
      contact_toast_err: 'Could not send. Please email info@northernrocktech.com',

      // ── PRIVACY ──
      privacy_title: 'Privacy Policy',
      privacy_h_overview: 'Overview',
      privacy_overview: 'This website is operated by Northern Rock Technology Consulting LLC. We collect limited information to operate the site, respond to inquiries, and understand site performance.',
      privacy_h_provided: 'Information you provide',
      privacy_provided: 'If you submit the contact form, we receive the information you enter (such as name, email, company, and message) so we can respond to your request.',
      privacy_h_analytics: 'Analytics',
      privacy_analytics: 'We use Google Analytics to understand aggregated usage of the website (for example, page views and interactions). Analytics may set cookies or use similar technologies. You can limit cookies in your browser settings.',
      privacy_h_use: 'How we use information',
      privacy_use_l1: 'Respond to consultation requests and inquiries',
      privacy_use_l2: 'Maintain security and reliability of the website',
      privacy_use_l3: 'Improve content and user experience based on aggregated analytics',
      privacy_h_sharing: 'Sharing',
      privacy_sharing: 'We do not sell personal information. We may share data with service providers that help operate the site (for example, hosting, form processing, and analytics), only as needed to provide the service.',
      privacy_h_contact: 'Contact',
      privacy_contact: 'For privacy questions, email info@northernrocktech.com.',
      privacy_h_faturaai: 'FaturaAI Mobile Application',
      privacy_faturaai_1: 'The FaturaAI iOS app does not collect, store, or share any personal data. All invoice data is stored locally on your device only. Camera and file access is used solely for invoice analysis purposes. Invoice images are processed via Anthropic\'s Claude API for analysis only and are not retained on any server. No usage statistics, location data, or identifiers are collected.',
      privacy_faturaai_2: 'For FaturaAI privacy questions, email info@northernrocktech.com.',

      // ── TERMS ──
      terms_title: 'Terms of Use',
      terms_h_use: 'Use of this website',
      terms_use: 'By accessing this website, you agree to use it for lawful purposes only and not to disrupt or attempt to gain unauthorized access to the site or its systems.',
      terms_h_advice: 'No professional advice',
      terms_advice: 'Information on this site is provided for general informational purposes and does not constitute legal, financial, or professional advice. For advice tailored to your situation, request a consultation.',
      terms_h_ip: 'Intellectual property',
      terms_ip: 'Unless otherwise stated, the content on this website is owned by Northern Rock Technology Consulting LLC. You may not reproduce or distribute content without permission.',
      terms_h_liability: 'Limitation of liability',
      terms_liability: 'The website is provided "as is" without warranties of any kind. We are not liable for damages arising from your use of the website to the maximum extent permitted by law.',
      terms_h_contact: 'Contact',
      terms_contact: 'Questions about these terms: info@northernrocktech.com.',

      // ── 404 ──
      notfound_h1: '404',
      notfound_lead: "This page doesn't exist or may have moved.",
      notfound_p: "The page you're looking for isn't available. You can return home or contact us.",
      notfound_home: 'Go to homepage',
      notfound_contact: 'Contact us',

      // ── THANK YOU ──
      thankyou_h1: 'Thank you!',
      thankyou_p: "Your message has been received. We'll get back to you soon.",
      thankyou_back: 'Back to home',

      // ── FATURAAI ──
      fatura_available: 'Available on iOS',
      fatura_eyebrow: 'FaturaAI',
      fatura_h1: 'Instant invoice analysis<br>with AI.',
      fatura_lead: 'Reads, analyzes, and converts your photo, PDF, or e-Archive HTML invoices into organized records in seconds. Designed for freelancers and small businesses.',
      fatura_appstore: 'Download on App Store',
      fatura_how_link: 'How does it work?',
      fatura_meta_platform_k: 'Platform',
      fatura_meta_platform_v: 'iOS (iPhone)',
      fatura_meta_dev_k: 'Developer',
      fatura_meta_dev_v: 'Northern Rock Technology Consulting LLC',
      fatura_meta_ai_k: 'AI Model',
      fatura_meta_ai_v: 'Claude Sonnet (Anthropic)',
      fatura_meta_format_k: 'Supported Formats',
      fatura_meta_format_v: 'Photo · PDF · e-Archive HTML',
      fatura_meta_free_k: 'Free Plan',
      fatura_meta_free_v: '5 invoices (lifetime)',
      fatura_meta_pro_k: 'Pro Plan',
      fatura_meta_pro_v: '$29.99 / year',
      fatura_screens_h2: 'App screenshots',
      fatura_feat_h2: 'Features',
      fatura_feat_lead: 'Single invoice, bulk analysis, full control.',
      fatura_f1_h3: 'Auto-reading with AI',
      fatura_f1_p: 'Powered by Claude Sonnet — automatically extracts company name, invoice number, VAT, total, and all line items from invoice images.',
      fatura_f2_h3: 'PDF & e-Archive Support',
      fatura_f2_p: 'Supports photos, PDFs, and e-Archive HTML invoices. Multi-page analysis included.',
      fatura_f3_h3: 'Bulk Import',
      fatura_f3_p: 'Select dozens of invoices at once. The app analyzes them sequentially and reports success/error status.',
      fatura_f4_h3: 'Excel Export',
      fatura_f4_p: 'Export all your invoices to Excel with one tap. Ready to send to your accountant or archive.',
      fatura_f5_h3: 'Duplicate Protection',
      fatura_f5_p: 'Prevents creating duplicate records with the same invoice number. Eliminates accidental double-entry.',
      fatura_f6_h3: 'Privacy First',
      fatura_f6_p: "Data is stored on your device. Invoice images are sent to Anthropic's API for analysis only and not retained anywhere else.",
      fatura_how_h2: 'How it works',
      fatura_step1_h3: '1. Upload invoice',
      fatura_step1_p: 'Take a photo, select a PDF, or open an e-Archive HTML file.',
      fatura_step2_h3: '2. AI analyzes',
      fatura_step2_p: 'Claude Sonnet reads the invoice and extracts structured data in seconds.',
      fatura_step3_h3: '3. Confirm & save',
      fatura_step3_p: 'Review extracted information, edit if needed, and save.',
      fatura_step4_h3: '4. Export',
      fatura_step4_p: 'Export all your invoices to Excel. Ready format for accounting.',
      fatura_price_h2: 'Pricing',
      fatura_price_lead: 'Start for free.',
      fatura_free_label: 'Free',
      fatura_free_period: 'forever',
      fatura_free_f1: '5 invoices (lifetime)',
      fatura_free_f2: 'All invoice formats',
      fatura_free_f3: 'AI analysis',
      fatura_free_f4: 'Excel export',
      fatura_free_f5: 'Unlimited invoices',
      fatura_free_btn: 'Download Free',
      fatura_pro_label: 'Pro',
      fatura_pro_period: 'yearly · ~$2.50/month',
      fatura_pro_f1: 'Unlimited invoices',
      fatura_pro_f2: 'All invoice formats',
      fatura_pro_f3: 'AI analysis (priority)',
      fatura_pro_f4: 'Excel export',
      fatura_pro_f5: 'Duplicate protection',
      fatura_pro_btn: 'Go Pro',
      fatura_sub_legal: 'Payment will be charged to your Apple ID account at confirmation of purchase. Subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current period. Your account will be charged for renewal within 24 hours prior to the end of the current period. You can manage and cancel your subscriptions by going to your App Store account settings after purchase. Any unused portion of a free trial period will be forfeited when a subscription is purchased.',
      fatura_eula_link: 'EULA',
      fatura_privacy_link: 'Privacy Policy',
      eula_title: 'FaturaAI – End User License Agreement (EULA)',
      eula_intro: 'This End User License Agreement ("Agreement") is between you and Northern Rock Technology Consulting LLC ("Developer") for the FaturaAI iOS application ("App"). By downloading or using the App, you agree to these terms.',
      eula_h_license: 'License',
      eula_license: 'Developer grants you a non-exclusive, non-transferable, revocable license to use the App on Apple-branded devices you own or control, subject to this Agreement and the App Store Terms of Service.',
      eula_h_sub: 'Subscription & Billing',
      eula_sub: 'FaturaAI Pro is offered as an auto-renewing annual subscription at $29.99/year. Payment is charged to your Apple ID at purchase confirmation. The subscription renews automatically unless cancelled at least 24 hours before the end of the current period. You can manage or cancel your subscription in your App Store account settings at any time.',
      eula_h_free: 'Free Plan',
      eula_free: 'The free plan allows analysis of up to 5 invoices (lifetime). No payment is required for the free plan.',
      eula_h_data: 'Data & Privacy',
      eula_data: 'All invoice data is stored locally on your device. Invoice images are sent to Anthropic\'s Claude API solely for analysis and are not retained on any server. The App does not collect personal data.',
      eula_h_ip: 'Intellectual Property',
      eula_ip: 'The App and all its content are owned by Northern Rock Technology Consulting LLC. You may not copy, modify, distribute, or reverse-engineer the App.',
      eula_h_disclaimer: 'Disclaimer',
      eula_disclaimer: 'The App is provided "as is" without warranties of any kind. AI-extracted data may contain errors; always verify important invoice details. Developer is not liable for any inaccuracies in AI-generated output.',
      eula_h_term: 'Termination',
      eula_term: 'This license is effective until terminated. It terminates automatically if you fail to comply with these terms. Upon termination, you must stop using and delete the App.',
      eula_h_governing: 'Governing Law',
      eula_governing: 'This Agreement is governed by the laws of the State of Texas, United States, without regard to conflict of law provisions.',
      eula_h_contact: 'Contact',
      eula_contact: 'Questions about this EULA: info@northernrocktech.com',
      fatura_cta_title: 'Manage your invoices smarter.',
      fatura_cta_sub: 'Developed by Northern Rock Technology. Questions: info@northernrocktech.com',
      fatura_privacy_btn: 'Privacy Policy',
      fatura_footer_ana: 'Home',
      fatura_footer_serv: 'Services',
      fatura_footer_priv: 'Privacy',
      fatura_footer_terms: 'Terms',
      fatura_footer_contact: 'Contact',
    },

    tr: {
      // NAV
      nav_services: 'Hizmetler',
      nav_how: 'Nasıl çalışıyoruz',
      nav_contact: 'İletişim',

      // FOOTER
      footer_privacy: 'Gizlilik',
      footer_terms: 'Şartlar',
      footer_email_label: 'E-posta:',

      // COOKIE
      cookie_title: 'Çerezler',
      cookie_text: 'Site kullanımını anlamak ve hizmetlerimizi geliştirmek için çerez kullanıyoruz.',
      cookie_ok: 'Tamam',

      // ── INDEX ──
      index_eyebrow: 'Austin, Teksas • Uzaktan-öncelikli',
      index_h1: 'Teknoloji danışmanlığı ve yazılım teslimatı.',
      index_lead: 'Kuruluşların güvenilir yazılım sistemleri tasarlamasına, geliştirmesine ve iyileştirmesine yardımcı oluyoruz — mimariden uygulamaya. Net kapsam. Pratik teslimat. Kıdemli sahiplik.',
      index_cta_consult: 'Danışmanlık talep et',
      index_cta_email: 'E-posta gönder',
      index_meta_entity_k: 'Şirket türü',
      index_meta_entity_v: 'Teksas LLC',
      index_meta_eng_k: 'Görevler',
      index_meta_eng_v: 'Kapsam • Dokümantasyon • Raporlama',
      index_meta_sec_k: 'Güvenlik',
      index_meta_sec_v: 'NDA uyumlu ve güvenli',
      index_meta_loc_k: 'Konum',
      index_meta_loc_v: 'Austin, TX',
      index_services_h2: 'Hizmetler',
      index_services_lead: 'Kıdemli düzeyde danışmanlık ve pratik teslimat — net sonuçlar, daha az karmaşıklık.',
      index_s1_h3: 'Teknoloji Stratejisi ve Danışmanlık',
      index_s1_p: 'İş hedefleriyle uyumlu değerlendirme, yol haritası ve karar desteği.',
      index_s1_out: 'Tipik çıktılar: özet, risk notları, önceliklendirilmiş plan.',
      index_s2_h3: 'Yazılım Mimarisi ve Geliştirme',
      index_s2_p: 'Net dokümantasyonla ölçeklenebilir sistem tasarımı ve uygulaması.',
      index_s2_out: 'Tipik çıktılar: mimari notlar, API\'ler, teslimat planı.',
      index_s3_h3: 'Bulut ve Altyapı Danışmanlığı',
      index_s3_p: 'Dağıtım, güvenlik ve operasyonel hazırlık için rehberlik.',
      index_s3_out: 'Tipik çıktılar: altyapı planı, güvenlik kontrol listesi, runbook.',
      index_s4_h3: 'Süreç ve Sistem Optimizasyonu',
      index_s4_p: 'Platformlar genelinde performans, güvenilirlik ve sürdürülebilirlik iyileştirmeleri.',
      index_s4_out: 'Tipik çıktılar: darboğaz analizi, yeniden yapılandırma planı, KPI\'lar.',
      index_cta_h3: 'Hızlı bir danışmaya mı ihtiyacınız var?',
      index_cta_p: 'Kısa bir özet gönderin — sonraki adımlar ve önerilen bir görüşme zamanıyla yanıt verelim.',
      index_cta_btn: 'İletişim',

      // ── SERVICES ──
      services_title: 'Hizmetler',
      services_lead: 'Net kapsam, kıdemli uygulama ve yeniden kullanabileceğiniz dokümantasyon.',
      services_cta_btn: 'Danışmanlık talep et',
      services_s1_h3: 'Teknoloji Stratejisi ve Danışmanlık',
      services_s1_l1: 'Mimari inceleme ve hedef durum',
      services_s1_l2: 'Yol haritası ve önceliklendirme',
      services_s1_l3: 'Risk değerlendirmesi (güvenlik, ölçek, teslimat)',
      services_s2_h3: 'Yazılım Mimarisi ve Geliştirme',
      services_s2_l1: 'Sistem tasarımı, API\'ler, entegrasyonlar',
      services_s2_l2: 'Uygulamalı geliştirme desteği',
      services_s2_l3: 'Dokümantasyon: diyagramlar, ADR\'ler, runbook\'lar',
      services_s3_h3: 'Bulut ve Altyapı',
      services_s3_l1: 'Dağıtım kalıpları ve ortamlar',
      services_s3_l2: 'Güvenlik tabanı ve kimlik stratejisi',
      services_s3_l3: 'Gözlemlenebilirlik (log\'lar, metrikler, izleme)',
      services_s4_h3: 'Optimizasyon ve Güvenilirlik',
      services_s4_l1: 'Performans ayarı ve darboğaz analizi',
      services_s4_l2: 'Sürdürülebilirlik için yeniden yapılandırma',
      services_s4_l3: 'Olay öğrenimleri ve güvenilirlik iyileştirmeleri',
      services_how_h2: 'Nasıl çalışıyoruz',
      services_how_lead: 'Basit, şeffaf ve ölçülebilir.',
      services_how_1_h3: '1) Keşif',
      services_how_1_p: 'Hedefleri, kısıtlamaları ve başarı metriklerini netleştiriyoruz. Kısa bir yazılı özet alıyorsunuz.',
      services_how_2_h3: '2) Kapsam ve plan',
      services_how_2_p: 'Kapsam ve zaman çizelgesi öneriyoruz. Takip edilmesi ve çıkılması kolay tutuyoruz.',
      services_how_3_h3: '3) Teslimat',
      services_how_3_p: 'Uygulamalı uygulama veya danışmanlık. Sık kontrol noktaları ve yeniden kullanılabilir dokümantasyon beklenir.',
      services_how_4_h3: '4) Devir teslim',
      services_how_4_p: 'Son dokümantasyon, sonraki adımlar ve isteğe bağlı destek süreci.',
      services_ready_h3: 'Başlamaya hazır mısınız?',
      services_ready_p: 'Kısa bir not gönderin — sonraki adımlarla yanıt verelim.',
      services_ready_btn: 'İletişim',
      services_cases_h2: 'Vaka çalışmaları',
      services_cases_lead: 'Seçilmiş görevler (detaylar anonimleştirilmiştir).',
      services_case1_h3: 'Finansal hizmetler platformu',
      services_case1_prob: 'Sorun: Teslimat riski ve belirsiz sahiplik.',
      services_case1_app: 'Yaklaşım: Mimari ve teslimat değerlendirmesi.',
      services_case1_out: 'Sonuç: Net yol haritası, azaltılmış operasyonel risk.',
      services_case2_h3: 'B2B SaaS iç araçları',
      services_case2_prob: 'Sorun: Ölçekleme sorunları ve dokümante edilmemiş sistemler.',
      services_case2_app: 'Yaklaşım: Mimari inceleme ve uygulama desteği.',
      services_case2_out: 'Sonuç: İyileştirilmiş güvenilirlik ve teslimat hızı.',

      // ── HOW WE WORK ──
      how_title: 'Nasıl çalışıyoruz',
      how_lead: 'Netlik ve sonuçlara odaklanan pratik, kıdemli düzeyde bir yaklaşım.',
      how_1_h3: '1. Keşfet',
      how_1_p: 'Çözüm önermeden önce iş hedeflerini, kısıtlamaları ve riskleri anlayın.',
      how_2_h3: '2. Tasarla',
      how_2_p: 'Gerçeklikle uyumlu mimari, sorumluluklar ve teslimat planı tanımlayın.',
      how_3_h3: '3. Teslim et',
      how_3_p: 'Uygulamalı rehberlik ve incelemelerle ekipleri uygulama sürecinde destekleyin.',
      how_4_h3: '4. Optimize et',
      how_4_p: 'Riski sürekli azaltın, akışı iyileştirin ve kararları belgeleyin.',
      how_sec_h3: 'Güvenlik ve NDA',
      how_sec_p: 'Müşteri gizliliği temeldir. Tüm görevler NDA-önceliklidir.',
      how_cta_h3: 'Görüşmeye hazır mısınız?',
      how_cta_p: 'Kısa bir değerlendirmeyle başlayalım.',
      how_cta_btn: 'Danışmanlık talep et',

      // ── CONTACT ──
      contact_title: 'İletişim',
      contact_lead: 'Danışmanlık talebi gönderin. Anında başarı mesajı alacaksınız.',
      contact_biz_h3: 'İş e-postası',
      contact_biz_note: 'Austin, TX • Uzaktan-öncelikli',
      contact_biz_tip: 'Daha hızlı yönlendirme için şunları ekleyin: şirket adı, proje özeti ve zaman çizelgesi.',
      contact_form_h3: 'Danışmanlık talep et',
      contact_lbl_name: 'Ad Soyad',
      contact_lbl_email: 'E-posta',
      contact_lbl_company: 'Şirket (isteğe bağlı)',
      contact_lbl_msg: 'Mesaj',
      contact_submit: 'Gönder',
      contact_secure: 'Güvenli işlem • NDA uyumlu',
      contact_modal_h2: 'Mesaj alındı',
      contact_modal_p: 'Teşekkürler — en kısa sürede yanıt vereceğiz.',
      contact_modal_sub: 'Genellikle 1 iş günü içinde yanıt veriyoruz.',
      contact_modal_back: 'Ana sayfaya dön',
      contact_modal_close: 'Kapat',
      contact_toast_ok: 'Başarıyla gönderildi.',
      contact_toast_err: 'Gönderilemedi. Lütfen info@northernrocktech.com adresine e-posta gönderin.',

      // ── PRIVACY ──
      privacy_title: 'Gizlilik Politikası',
      privacy_h_overview: 'Genel Bakış',
      privacy_overview: 'Bu web sitesi Northern Rock Technology Consulting LLC tarafından işletilmektedir. Siteyi işletmek, sorgulamalara yanıt vermek ve site performansını anlamak için sınırlı bilgi topluyoruz.',
      privacy_h_provided: 'Sağladığınız bilgiler',
      privacy_provided: 'İletişim formunu gönderirseniz, talebinize yanıt verebilmek için girdiğiniz bilgileri (ad, e-posta, şirket ve mesaj gibi) alırız.',
      privacy_h_analytics: 'Analitik',
      privacy_analytics: 'Web sitesinin toplam kullanımını anlamak için Google Analytics kullanıyoruz (örneğin sayfa görüntülemeleri ve etkileşimler). Analitik, çerezler veya benzer teknolojiler kullanabilir. Tarayıcı ayarlarınızdan çerezleri sınırlayabilirsiniz.',
      privacy_h_use: 'Bilgileri nasıl kullanıyoruz',
      privacy_use_l1: 'Danışmanlık taleplerine ve sorgulara yanıt verme',
      privacy_use_l2: 'Web sitesinin güvenliğini ve güvenilirliğini koruma',
      privacy_use_l3: 'Toplam analitiğe dayalı içerik ve kullanıcı deneyimini iyileştirme',
      privacy_h_sharing: 'Paylaşım',
      privacy_sharing: 'Kişisel bilgileri satmıyoruz. Siteyi işletmeye yardımcı olan hizmet sağlayıcılarla (örneğin barındırma, form işleme ve analitik) yalnızca hizmeti sağlamak için gerekli olduğu kadar veri paylaşabiliriz.',
      privacy_h_contact: 'İletişim',
      privacy_contact: 'Gizlilik soruları için info@northernrocktech.com adresine e-posta gönderin.',
      privacy_h_faturaai: 'FaturaAI Mobil Uygulaması',
      privacy_faturaai_1: 'FaturaAI iOS uygulaması herhangi bir kişisel veri toplamaz, depolamaz veya paylaşmaz. Tüm fatura verileri yalnızca cihazınızda yerel olarak depolanır. Kamera ve dosya erişimi yalnızca fatura analizi amacıyla kullanılır. Fatura görselleri yalnızca analiz için Anthropic\'in Claude API\'sine gönderilir ve hiçbir sunucuda saklanmaz. Kullanım istatistikleri, konum verisi veya tanımlayıcılar toplanmaz.',
      privacy_faturaai_2: 'FaturaAI gizlilik soruları için info@northernrocktech.com adresine e-posta gönderin.',

      // ── TERMS ──
      terms_title: 'Kullanım Koşulları',
      terms_h_use: 'Bu web sitesinin kullanımı',
      terms_use: 'Bu web sitesine erişerek, onu yalnızca yasal amaçlarla kullanmayı ve siteye veya sistemlerine yetkisiz erişim sağlamaya çalışmamayı kabul edersiniz.',
      terms_h_advice: 'Profesyonel tavsiye değil',
      terms_advice: 'Bu sitedeki bilgiler yalnızca genel bilgilendirme amaçlıdır ve hukuki, finansal veya profesyonel tavsiye niteliği taşımaz. Durumunuza özel tavsiye için danışmanlık talep edin.',
      terms_h_ip: 'Fikri mülkiyet',
      terms_ip: 'Aksi belirtilmedikçe, bu web sitesindeki içerik Northern Rock Technology Consulting LLC\'ye aittir. İzin almadan içeriği çoğaltamaz veya dağıtamazsınız.',
      terms_h_liability: 'Sorumluluk sınırlaması',
      terms_liability: 'Web sitesi, herhangi bir garanti olmaksızın "olduğu gibi" sunulmaktadır. Yasaların izin verdiği azami ölçüde, web sitesini kullanımınızdan kaynaklanan zararlardan sorumlu değiliz.',
      terms_h_contact: 'İletişim',
      terms_contact: 'Bu koşullar hakkında sorularınız için: info@northernrocktech.com.',

      // ── 404 ──
      notfound_h1: '404',
      notfound_lead: 'Bu sayfa mevcut değil veya taşınmış olabilir.',
      notfound_p: 'Aradığınız sayfa bulunamadı. Ana sayfaya dönebilir veya bizimle iletişime geçebilirsiniz.',
      notfound_home: 'Ana sayfaya git',
      notfound_contact: 'Bize ulaşın',

      // ── THANK YOU ──
      thankyou_h1: 'Teşekkürler!',
      thankyou_p: 'Mesajınız alındı. En kısa sürede yanıt vereceğiz.',
      thankyou_back: 'Ana sayfaya dön',

      // ── FATURAAI ──
      fatura_available: 'iOS\'ta Kullanılabilir',
      fatura_eyebrow: 'FaturaAI',
      fatura_h1: 'Yapay zeka ile<br>anında fatura analizi.',
      fatura_lead: 'Fotoğraf, PDF veya e-Arşiv HTML faturalarınızı saniyeler içinde okur, analiz eder ve düzenli kayıtlara dönüştürür. Serbest meslek ve küçük işletmeler için tasarlandı.',
      fatura_appstore: 'App Store\'da İndir',
      fatura_how_link: 'Nasıl çalışır?',
      fatura_meta_platform_k: 'Platform',
      fatura_meta_platform_v: 'iOS (iPhone)',
      fatura_meta_dev_k: 'Geliştirici',
      fatura_meta_dev_v: 'Northern Rock Technology Consulting LLC',
      fatura_meta_ai_k: 'AI Modeli',
      fatura_meta_ai_v: 'Claude Sonnet (Anthropic)',
      fatura_meta_format_k: 'Desteklenen Format',
      fatura_meta_format_v: 'Fotoğraf · PDF · e-Arşiv HTML',
      fatura_meta_free_k: 'Ücretsiz Plan',
      fatura_meta_free_v: '5 fatura (ömür boyu)',
      fatura_meta_pro_k: 'Pro Plan',
      fatura_meta_pro_v: '$29,99 / yıl',
      fatura_screens_h2: 'Uygulamadan görünümler',
      fatura_feat_h2: 'Özellikler',
      fatura_feat_lead: 'Tek fatura, toplu analiz, tam kontrol.',
      fatura_f1_h3: 'AI ile Otomatik Okuma',
      fatura_f1_p: 'Claude Sonnet modeli ile fatura görselinden firma adı, fatura no, KDV, toplam ve tüm kalemleri otomatik çıkarır.',
      fatura_f2_h3: 'PDF & e-Arşiv Desteği',
      fatura_f2_p: 'Fotoğraf, PDF ve e-Arşiv HTML faturalarını destekler. Birden fazla sayfayı da analiz eder.',
      fatura_f3_h3: 'Toplu İçe Aktarma',
      fatura_f3_p: 'Onlarca faturayı tek seferde seç. Uygulama sırayla analiz eder, başarı/hata durumlarını raporlar.',
      fatura_f4_h3: 'Excel\'e Aktarma',
      fatura_f4_p: 'Tüm faturalarınızı tek tıkla Excel\'e aktar. Muhasebecine gönder ya da arşivle.',
      fatura_f5_h3: 'Mükerrer Koruma',
      fatura_f5_p: 'Aynı fatura no ile iki kez kayıt oluşturmayı önler. Yanlışlıkla çift kayıt sorununu ortadan kaldırır.',
      fatura_f6_h3: 'Gizlilik Öncelikli',
      fatura_f6_p: 'Veriler cihazınızda saklanır. Fatura görselleri sadece analiz için Anthropic API\'ye gönderilir, başka yerde saklanmaz.',
      fatura_how_h2: 'Nasıl çalışır?',
      fatura_step1_h3: '1. Faturayı yükle',
      fatura_step1_p: 'Kamera ile fotoğrafla, PDF seç ya da e-Arşiv HTML dosyasını aç.',
      fatura_step2_h3: '2. AI analiz eder',
      fatura_step2_p: 'Claude Sonnet modeli faturayı okur, yapısal veriyi saniyeler içinde çıkarır.',
      fatura_step3_h3: '3. Onayla & kaydet',
      fatura_step3_p: 'Çıkarılan bilgileri kontrol et, gerekirse düzenle ve kaydet.',
      fatura_step4_h3: '4. Export et',
      fatura_step4_p: 'Tüm faturalarını Excel\'e aktar. Muhasebe için hazır format.',
      fatura_price_h2: 'Fiyatlandırma',
      fatura_price_lead: 'Başlamak ücretsiz.',
      fatura_free_label: 'Ücretsiz',
      fatura_free_period: 'sonsuza kadar',
      fatura_free_f1: '5 fatura (ömür boyu)',
      fatura_free_f2: 'Tüm fatura formatları',
      fatura_free_f3: 'AI analiz',
      fatura_free_f4: 'Excel export',
      fatura_free_f5: 'Sınırsız fatura',
      fatura_free_btn: 'Ücretsiz İndir',
      fatura_pro_label: 'Pro',
      fatura_pro_period: 'yıllık · aylık ~$2,50',
      fatura_pro_f1: 'Sınırsız fatura',
      fatura_pro_f2: 'Tüm fatura formatları',
      fatura_pro_f3: 'AI analiz (öncelikli)',
      fatura_pro_f4: 'Excel\'e aktarma',
      fatura_pro_f5: 'Mükerrer fatura koruması',
      fatura_pro_btn: 'Pro\'ya Geç',
      fatura_sub_legal: 'Satın alma onaylandığında ödeme Apple ID hesabınızdan tahsil edilir. Mevcut dönemin bitiminden en az 24 saat önce otomatik yenileme kapatılmadıkça abonelik otomatik olarak yenilenir. Yenileme ücreti mevcut dönemin bitiminden 24 saat önce hesabınızdan tahsil edilir. Aboneliğinizi App Store hesap ayarlarından yönetebilir ve iptal edebilirsiniz. Abonelik satın alındığında kullanılmamış ücretsiz deneme süresi hakkı geçersiz sayılır.',
      fatura_eula_link: 'EULA',
      fatura_privacy_link: 'Gizlilik Politikası',
      eula_title: 'FaturaAI – Son Kullanıcı Lisans Sözleşmesi (EULA)',
      eula_intro: 'Bu Son Kullanıcı Lisans Sözleşmesi ("Sözleşme"), siz ve Northern Rock Technology Consulting LLC ("Geliştirici") arasında FaturaAI iOS uygulaması ("Uygulama") için yapılmıştır. Uygulamayı indirerek veya kullanarak bu şartları kabul etmiş olursunuz.',
      eula_h_license: 'Lisans',
      eula_license: 'Geliştirici, bu Sözleşme ve App Store Hizmet Koşulları kapsamında, sahip olduğunuz veya kontrol ettiğiniz Apple markalı cihazlarda Uygulamayı kullanmanız için size münhasır olmayan, devredilemez, geri alınabilir bir lisans vermektedir.',
      eula_h_sub: 'Abonelik ve Ödeme',
      eula_sub: 'FaturaAI Pro, yıllık 29,99 $ karşılığında otomatik yenilenen bir abonelik olarak sunulmaktadır. Ödeme, satın alma onayında Apple ID\'nize yansıtılır. Mevcut dönemin bitiminden en az 24 saat önce iptal edilmediği sürece abonelik otomatik olarak yenilenir. Aboneliğinizi istediğiniz zaman App Store hesap ayarlarından yönetebilir veya iptal edebilirsiniz.',
      eula_h_free: 'Ücretsiz Plan',
      eula_free: 'Ücretsiz plan, ömür boyu en fazla 5 fatura analizi yapılmasına olanak tanır. Ücretsiz plan için herhangi bir ödeme gerekmez.',
      eula_h_data: 'Veri ve Gizlilik',
      eula_data: 'Tüm fatura verileri cihazınızda yerel olarak saklanır. Fatura görselleri yalnızca analiz amacıyla Anthropic\'in Claude API\'sine gönderilir ve hiçbir sunucuda saklanmaz. Uygulama kişisel veri toplamaz.',
      eula_h_ip: 'Fikri Mülkiyet',
      eula_ip: 'Uygulama ve tüm içerikleri Northern Rock Technology Consulting LLC\'ye aittir. Uygulamayı kopyalayamaz, değiştiremez, dağıtamaz veya tersine mühendislik uygulayamazsınız.',
      eula_h_disclaimer: 'Sorumluluk Reddi',
      eula_disclaimer: 'Uygulama hiçbir garanti olmaksızın "olduğu gibi" sunulmaktadır. Yapay zeka tarafından çıkarılan veriler hata içerebilir; önemli fatura bilgilerini daima doğrulayınız. Geliştirici, yapay zeka çıktısındaki hataların herhangi bir sorumluluğunu kabul etmez.',
      eula_h_term: 'Sözleşmenin Sona Ermesi',
      eula_term: 'Bu lisans, sona erdirilene kadar geçerlidir. Bu şartlara uyulmaması halinde otomatik olarak sona erer. Sona ermesi durumunda Uygulamayı kullanmayı bırakmalı ve silmelisiniz.',
      eula_h_governing: 'Geçerli Hukuk',
      eula_governing: 'Bu Sözleşme, kanunlar ihtilafı hükümleri dikkate alınmaksızın Amerika Birleşik Devletleri Texas Eyaleti yasalarına tabidir.',
      eula_h_contact: 'İletişim',
      eula_contact: 'Bu EULA hakkında sorularınız için: info@northernrocktech.com',
      fatura_cta_title: 'Faturalarınızı daha akıllı yönetin.',
      fatura_cta_sub: 'Northern Rock Technology tarafından geliştirildi. Sorularınız için: info@northernrocktech.com',
      fatura_privacy_btn: 'Gizlilik Politikası',
      fatura_footer_ana: 'Ana Sayfa',
      fatura_footer_serv: 'Hizmetler',
      fatura_footer_priv: 'Gizlilik',
      fatura_footer_terms: 'Şartlar',
      fatura_footer_contact: 'İletişim',
    }
  };

  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'en';
    } catch (e) {
      return 'en';
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function applyLang(lang) {
    var t = translations[lang] || translations['en'];
    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });
    // Update html lang attribute
    document.documentElement.lang = lang;
    // Update toggle buttons
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      var btnLang = btn.getAttribute('data-lang');
      btn.classList.toggle('active', btnLang === lang);
    });
    // Update cookie banner aria-label
    var banner = document.getElementById('cookieBanner');
    if (banner) {
      banner.setAttribute('aria-label', lang === 'tr' ? 'Çerez bildirimi' : 'Cookie notice');
    }
  }

  function buildToggle() {
    var nav = document.querySelector('.nav-inner');
    if (!nav) return;
    var wrapper = document.createElement('div');
    wrapper.className = 'lang-switcher';
    wrapper.innerHTML =
      '<button class="lang-toggle" data-lang="en" aria-label="Switch to English">EN</button>' +
      '<span class="lang-sep">|</span>' +
      '<button class="lang-toggle" data-lang="tr" aria-label="Türkçe\'ye geç">TR</button>';
    nav.appendChild(wrapper);

    wrapper.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        setLang(lang);
        applyLang(lang);
      });
    });
  }

  // Run on DOM ready
  function init() {
    buildToggle();
    applyLang(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose globally so contact.js can use translated strings
  window.nrtI18n = {
    getLang: getLang,
    t: function (key) {
      var lang = getLang();
      return (translations[lang] || translations['en'])[key] || key;
    }
  };
})();

// ── Mobile Nav Drawer ──
(function () {
  function initMobileNav() {
    var navInner = document.querySelector('.nav-inner');
    if (!navInner) return;

    // Build hamburger button
    var btn = document.createElement('button');
    btn.className = 'nav-menu-btn';
    btn.setAttribute('aria-label', 'Open navigation menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span><span></span><span></span>';
    navInner.appendChild(btn);

    // Build drawer (cloned from desktop nav-links)
    var desktopLinks = document.querySelector('.nav-links');
    var drawer = document.createElement('nav');
    drawer.className = 'nav-drawer';
    drawer.style.display = 'none'; // Ensure hidden before CSS loads
    drawer.setAttribute('aria-label', 'Mobile navigation');

    if (desktopLinks) {
      var links = desktopLinks.cloneNode(true);
      Array.from(links.children).forEach(function (a) {
        drawer.appendChild(a);
      });
    }

    // Lang toggle inside drawer
    var lang = document.querySelector('.lang-switcher');
    if (lang) {
      var drawerLang = document.createElement('div');
      drawerLang.className = 'drawer-lang';
      var lc = lang.cloneNode(true);
      drawerLang.appendChild(lc);
      drawer.appendChild(drawerLang);
      // Wire up cloned lang toggles
      drawerLang.querySelectorAll('.lang-toggle').forEach(function (b) {
        b.addEventListener('click', function () {
          var l = b.getAttribute('data-lang');
          try { localStorage.setItem('nrt_lang', l); } catch(e) {}
          applyLang(l);
          closeDrawer();
        });
      });
    }

    // Insert drawer AFTER the nav element (not at top of body)
    var navEl = document.querySelector('.nav');
    if (navEl && navEl.parentNode) {
      navEl.parentNode.insertBefore(drawer, navEl.nextSibling);
    } else {
      document.body.appendChild(drawer);
    }
    drawer.setAttribute('aria-hidden', 'true');

    function openDrawer() {
      drawer.style.display = 'flex'; // Override inline style
      btn.classList.add('open');
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      btn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function closeDrawer() {
      btn.classList.remove('open');
      drawer.classList.remove('open');
      drawer.style.display = 'none'; // Re-apply inline hide
      drawer.setAttribute('aria-hidden', 'true');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    btn.addEventListener('click', function () {
      drawer.classList.contains('open') ? closeDrawer() : openDrawer();
    });

    // Close on nav link click
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeDrawer);
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (drawer.classList.contains('open') && !drawer.contains(e.target) && !btn.contains(e.target)) {
        closeDrawer();
      }
    });

    // Close on ESC
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  // ── Scroll-to-top button ──
  function initScrollTop() {
    var el = document.createElement('button');
    el.className = 'scroll-top';
    el.setAttribute('aria-label', 'Scroll to top');
    el.innerHTML = '↑';
    document.body.appendChild(el);

    var threshold = 400;
    window.addEventListener('scroll', function () {
      if (window.scrollY > threshold) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    }, { passive: true });

    el.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Skip link ──
  function initSkipLink() {
    var main = document.getElementById('main-content');
    if (!main) return;
    var skip = document.createElement('a');
    skip.href = '#main-content';
    skip.className = 'skip-link';
    skip.setAttribute('tabindex', '0');
    // Use data-i18n for translation
    var lang = getLang();
    skip.textContent = lang === 'tr' ? 'İçeriğe geç' : 'Skip to content';
    // Insert as very first element in body for correct tab order
    document.body.insertBefore(skip, document.body.firstChild);
  }

  // Run after i18n init
  var _origInit = window._nrtI18nInitDone;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initMobileNav();
      initScrollTop();
      initSkipLink();
    });
  } else {
    initMobileNav();
    initScrollTop();
    initSkipLink();
  }
})();
