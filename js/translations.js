// ===== TELUGU TRANSLATIONS ENGINE =====
// Maps CSS selectors to { en: '...', te: '...' }

const translations = {
  // --- NAVBAR ---
  '.nav-link[href="#hero"], .nav-link[href="index.html"]': { en: 'Home', te: 'హోమ్' },
  '.nav-link[href="#about"], .nav-link[href="index.html#about"]': { en: 'About', te: 'నా గురించి' },
  '.nav-link[href="#services"], .nav-link[href="index.html#services"]': { en: 'Services', te: 'సేవలు' },
  '.nav-link[href="plans.html"]': { en: 'LIC Plans', te: 'LIC ప్రణాళికలు' },
  '.nav-link[href="#calculator"], .nav-link[href="index.html#calculator"]': { en: 'Calculator', te: 'క్యాల్క్యులేటర్' },
  '.nav-link[href="#gallery"], .nav-link[href="index.html#gallery"]': { en: 'Gallery', te: 'గ్యాలరీ' },
  '.nav-link[href="blog.html"]': { en: 'Blog', te: 'బ్లాగ్' },
  '.nav-link[href="#contact"], .nav-link[href="index.html#contact"]': { en: 'Contact', te: 'సంప్రదించండి' },
  '.nav-logo-text span:last-child': { en: 'Trusted Since 2000', te: '2000 నుండి నమ్మకం' },

  // --- HERO ---
  '.hero-badge': { en: '<i class="fas fa-award"></i> Certified LIC Advisor · 25+ Years', te: '<i class="fas fa-award"></i> సర్టిఫైడ్ LIC సలహాదారు · 25+ సంవత్సరాలు' },
  '.hero-text h1': { en: 'Trusted <span class="accent">LIC Advisor</span> — 25+ Years of Experience', te: 'నమ్మకమైన <span class="accent">LIC సలహాదారు</span> — 25+ సంవత్సరాల అనుభవం' },
  '.hero-text p': { en: 'Helping families secure their future with the right insurance solutions. Expert guidance on term insurance, pension plans, child education plans, and investment options.', te: 'సరైన బీమా పరిష్కారాలతో కుటుంబాల భవిష్యత్తును భద్రపరచడంలో సహాయం. టర్మ్ ఇన్సూరెన్స్, పెన్షన్ ప్రణాళికలు, పిల్లల విద్య ప్రణాళికలు మరియు పెట్టుబడి ఎంపికలపై నిపుణుల మార్గదర్శకత్వం.' },
  '.hero-stat:nth-child(1) .label': { en: 'Years Experience', te: 'సంవత్సరాల అనుభవం' },
  '.hero-stat:nth-child(2) .label': { en: 'Happy Clients', te: 'సంతోష కస్టమర్లు' },
  '.hero-stat:nth-child(3) .label': { en: 'Policies Sold', te: 'పాలసీలు విక్రయించబడ్డాయి' },
  '.hero-card-1 .card-label': { en: 'Policies Sold', te: 'పాలసీలు విక్రయించబడ్డాయి' },
  '.hero-card-2 .card-label': { en: 'Client Rating', te: 'కస్టమర్ రేటింగ్' },

  // --- HERO AGENT INFO ---
  '.hero-agent-name': { en: 'P. Venkata Narayana', te: 'పి. వెంకట నారాయణ' },
  '.hero-agent-code': { en: '<i class="fas fa-id-badge"></i> Agent Code: 04080651', te: '<i class="fas fa-id-badge"></i> ఏజెంట్ కోడ్: 04080651' },
  '.hero-agent-club': { en: '<i class="fas fa-award"></i> B.M CLUB MEMBER WARANGAL-1 DIVISION BRANCH OFFICE', te: '<i class="fas fa-award"></i> B.M క్లబ్ మెంబర్ వరంగల్-1 డివిజన్ బ్రాంచ్ ఆఫీస్' },

  // --- TRUST BADGES ---
  '.badge-card:nth-child(1) p': { en: 'Years Experience', te: 'సంవత్సరాల అనుభవం' },
  '.badge-card:nth-child(2) p': { en: 'Happy Clients', te: 'సంతోష కస్టమర్లు' },
  '.badge-card:nth-child(3) p': { en: 'Policies Sold', te: 'పాలసీలు విక్రయించబడ్డాయి' },
  '.badge-card:nth-child(4) h4': { en: 'Free', te: 'ఉచితం' },
  '.badge-card:nth-child(4) p': { en: 'Consultation', te: 'సంప్రదింపు' },

  // --- ABOUT ---
  '.about-text h3': { en: 'About Me', te: 'నా గురించి' },
  '.about-text h2': { en: 'Your Trusted Partner in <span class="text-gradient">Financial Security</span>', te: 'ఆర్థిక భద్రతలో <span class="text-gradient">మీ నమ్మకమైన భాగస్వామి</span>' },
  '.about-exp-badge .text': { en: 'Years Exp.', te: 'సంవత్సరాల అను.' },
};

// Paragraphs in about section (by index)
const aboutParagraphs = [
  { en: 'With over <strong>25 years of dedicated service</strong> as a Life Insurance Corporation of India agent, I have helped thousands of families secure their financial future through personalized insurance solutions.', te: '<strong>భారత జీవిత బీమా సంస్థ</strong> ఏజెంట్‌గా 25 సంవత్సరాల అంకితమైన సేవతో, వ్యక్తిగతీకరించిన బీమా పరిష్కారాల ద్వారా వేలాది కుటుంబాల ఆర్థిక భవిష్యత్తును భద్రపరచడంలో నేను సహాయపడ్డాను.' },
  { en: 'My journey began in 2000 with a simple mission — to ensure that every family has the right protection against life\'s uncertainties. Over the years, I\'ve earned the trust of 1000+ clients through transparent advice, prompt service, and genuine care for their well-being.', te: 'ప్రతి కుటుంబానికి జీవిత అనిశ్చితాలకు వ్యతిరేకంగా సరైన రక్షణ ఉండేలా చూడటం అనే సాధారణ లక్ష్యంతో నా ప్రయాణం 2000లో ప్రారంభమైంది. ఈ సంవత్సరాలలో, పారదర్శక సలహా, తక్షణ సేవ మరియు వారి శ్రేయస్సు పట్ల నిజమైన శ్రద్ధ ద్వారా 1000+ క్లయింట్ల నమ్మకాన్ని సంపాదించాను.' },
  { en: '"I don\'t sell policies — I help families build a safety net for their loved ones."', te: '"నేను పాలసీలు అమ్మను — ప్రియమైన వారి కోసం కుటుంబాలు భద్రతా వలయాన్ని నిర్మించడంలో సహాయపడతాను."' },
];

const aboutFeatures = [
  { en: 'Term Insurance Expert', te: 'టర్మ్ ఇన్సూరెన్స్ నిపుణుడు' },
  { en: 'Child Education Plans', te: 'పిల్లల విద్య ప్రణాళికలు' },
  { en: 'Pension & Retirement', te: 'పెన్షన్ & రిటైర్‌మెంట్' },
  { en: 'Investment Plans', te: 'పెట్టుబడి ప్రణాళికలు' },
  { en: 'Claims Assistance', te: 'క్లెయిమ్స్ సహాయం' },
  { en: 'Premium Reminders', te: 'ప్రీమియం రిమైండర్లు' },
];

// --- SERVICES ---
const servicesTitle = { en: 'Our Insurance Services', te: 'మా బీమా సేవలు' };
const servicesSubtitle = { en: 'Comprehensive range of LIC plans tailored to your needs — from protection to investment and beyond.', te: 'మీ అవసరాలకు అనుగుణంగా రూపొందించిన LIC ప్రణాళికల సమగ్ర శ్రేణి — రక్షణ నుండి పెట్టుబడి వరకు.' };

const serviceCards = [
  { title: { en: 'Term Insurance Plans', te: 'టర్మ్ ఇన్సూరెన్స్ ప్రణాళికలు' }, desc: { en: 'Pure protection plans that provide high life cover at affordable premiums. Secure your family\'s financial future.', te: 'తక్కువ ప్రీమియంలకు అధిక జీవిత కవర్ అందించే స్వచ్ఛమైన రక్షణ ప్రణాళికలు. మీ కుటుంబం ఆర్థిక భవిష్యత్తును భద్రపరచండి.' } },
  { title: { en: 'Child Education & Marriage Plans', te: 'పిల్లల విద్య & వివాహ ప్రణాళికలు' }, desc: { en: 'Dedicated plans to build a secure fund for your child\'s education, career, and marriage milestones.', te: 'మీ పిల్లల విద్య, కెరీర్ మరియు వివాహ మైలురాళ్ల కోసం భద్రమైన నిధిని నిర్మించడానికి అంకితమైన ప్రణాళికలు.' } },
  { title: { en: 'Pension & Retirement Plans', te: 'పెన్షన్ & రిటైర్‌మెంట్ ప్రణాళికలు' }, desc: { en: 'Ensure a comfortable retirement with guaranteed pension plans. Receive regular income after retirement.', te: 'హామీ ఇచ్చిన పెన్షన్ ప్రణాళికలతో సౌకర్యవంతమైన రిటైర్‌మెంట్‌ను నిర్ధారించుకోండి. రిటైర్‌మెంట్ తర్వాత క్రమ ఆదాయం పొందండి.' } },
  { title: { en: 'Health Insurance Plans', te: 'ఆరోగ్య బీమా ప్రణాళికలు' }, desc: { en: 'Cover medical expenses and critical illness treatments. Protect your family\'s health without financial stress.', te: 'వైద్య ఖర్చులు మరియు తీవ్రమైన వ్యాధి చికిత్సలను కవర్ చేయండి. ఆర్థిక ఒత్తిడి లేకుండా మీ కుటుంబం ఆరోగ్యాన్ని రక్షించండి.' } },
  { title: { en: 'Investment & Money-Back Plans', te: 'పెట్టుబడి & మనీ-బ్యాక్ ప్రణాళికలు' }, desc: { en: 'Grow your wealth while staying protected. Get periodic returns and lump-sum maturity benefits.', te: 'రక్షితంగా ఉంటూ మీ సంపదను పెంచుకోండి. కాలానుగుణ రాబడులు మరియు ఒకేసారి మెచ్యూరిటీ ప్రయోజనాలు పొందండి.' } },
  { title: { en: 'Loan Protection Plans', te: 'లోన్ రక్షణ ప్రణాళికలు' }, desc: { en: 'Safeguard your family from loan liabilities. Ensure home and personal loans are covered in any eventuality.', te: 'లోన్ బాధ్యతల నుండి మీ కుటుంబాన్ని రక్షించండి. ఏ పరిస్థితిలోనైనా హోమ్ మరియు వ్యక్తిగత రుణాలు కవర్ అయ్యేలా నిర్ధారించుకోండి.' } },
];

// --- WHY CHOOSE US ---
const whyTitle = { en: 'Why Choose Us?', te: 'మమ్మల్ని ఎందుకు ఎంచుకోవాలి?' };
const whySubtitle = { en: 'We go beyond selling policies — we build lasting relationships based on trust and personalized service.', te: 'పాలసీలు అమ్మడం దాటి వెళ్తాం — నమ్మకం మరియు వ్యక్తిగతీకరించిన సేవపై ఆధారపడిన శాశ్వత సంబంధాలను నిర్మిస్తాం.' };

const whyCards = [
  { title: { en: '25+ Years of Experience', te: '25+ సంవత్సరాల అనుభవం' }, desc: { en: 'Deep understanding of LIC products and insurance landscape built over two decades of dedicated service.', te: 'రెండు దశాబ్దాల అంకిత సేవపై నిర్మించిన LIC ఉత్పత్తులు మరియు బీమా రంగం యొక్క లోతైన అవగాహన.' } },
  { title: { en: 'Personalized Recommendations', te: 'వ్యక్తిగత సిఫార్సులు' }, desc: { en: 'Every family is unique. We analyze your needs and suggest plans that truly fit your budget and goals.', te: 'ప్రతి కుటుంబం ప్రత్యేకం. మీ అవసరాలను విశ్లేషించి, మీ బడ్జెట్ మరియు లక్ష్యాలకు సరిగ్గా సరిపోయే ప్రణాళికలను సూచిస్తాం.' } },
  { title: { en: 'Free Consultation', te: 'ఉచిత సంప్రదింపు' }, desc: { en: 'No charges for consultations. We believe in helping you understand your options before you decide.', te: 'సంప్రదింపులకు ఎటువంటి ఛార్జీలు లేవు. మీరు నిర్ణయించుకునే ముందు మీ ఎంపికలను అర్థం చేసుకోవడంలో సహాయపడతాం.' } },
  { title: { en: 'Post-Policy Support', te: 'పాలసీ అనంతర సహాయం' }, desc: { en: 'Our relationship doesn\'t end at policy purchase. We assist with premium payments, renewals, and more.', te: 'మా సంబంధం పాలసీ కొనుగోలుతో ముగియదు. ప్రీమియం చెల్లింపులు, పునరుద్ధరణలు మరింత సహాయం చేస్తాం.' } },
  { title: { en: 'Claims Assistance', te: 'క్లెయిమ్స్ సహాయం' }, desc: { en: 'We guide you through the entire claims process, ensuring quick and hassle-free claim settlements.', te: 'మొత్తం క్లెయిమ్స్ ప్రక్రియలో మీకు మార్గదర్శకత్వం చేస్తాం, త్వరిత మరియు ఇబ్బంది లేని క్లెయిమ్ సెటిల్‌మెంట్లను నిర్ధారిస్తాం.' } },
  { title: { en: 'Premium Reminder Service', te: 'ప్రీమియం రిమైండర్ సేవ' }, desc: { en: 'Never miss a premium due date. We send timely reminders so your policy stays active and protected.', te: 'ప్రీమియం గడువు తేదీని ఎన్నడూ మిస్ అవ్వకండి. మీ పాలసీ యాక్టివ్‌గా మరియు రక్షితంగా ఉండేలా సకాలంలో రిమైండర్లు పంపుతాం.' } },
  { title: { en: 'Transparent Advice', te: 'పారదర్శక సలహా' }, desc: { en: 'No hidden terms, no misleading promises. We explain every detail clearly so you make informed decisions.', te: 'దాచిన నిబంధనలు లేవు, తప్పుదారి పట్టించే వాగ్దానాలు లేవు. మీరు సమాచారంతో నిర్ణయాలు తీసుకునేలా ప్రతి వివరాన్ని స్పష్టంగా వివరిస్తాం.' } },
];

// --- CALCULATOR ---
const calcTexts = {
  title: { en: 'Premium Calculator', te: 'ప్రీమియం క్యాల్క్యులేటర్' },
  desc: { en: 'Get an instant estimate of your life insurance premium. Our calculator helps you plan your insurance budget with ease.', te: 'మీ జీవిత బీమా ప్రీమియం యొక్క తక్షణ అంచనాను పొందండి. మా క్యాల్క్యులేటర్ మీ బీమా బడ్జెట్‌ను సులభంగా ప్లాన్ చేయడంలో సహాయపడుతుంది.' },
  formTitle: { en: 'Calculate Your Premium', te: 'మీ ప్రీమియం లెక్కించండి' },
  age: { en: 'Your Age', te: 'మీ వయస్సు' },
  gender: { en: 'Gender', te: 'లింగం' },
  coverage: { en: 'Coverage Amount (₹)', te: 'కవరేజ్ మొత్తం (₹)' },
  term: { en: 'Policy Term (Years)', te: 'పాలసీ కాలం (సంవత్సరాలు)' },
  btnCalc: { en: '<i class="fas fa-calculator"></i> Calculate Premium', te: '<i class="fas fa-calculator"></i> ప్రీమియం లెక్కించండి' },
  resultLabel: { en: 'Estimated Monthly Premium', te: 'అంచనా నెలవారీ ప్రీమియం' },
  features: [
    { en: 'Instant premium estimate', te: 'తక్షణ ప్రీమియం అంచనా' },
    { en: 'Compare different coverage amounts', te: 'వివిధ కవరేజ్ మొత్తాలను పోల్చండి' },
    { en: 'Plan your insurance budget', te: 'మీ బీమా బడ్జెట్‌ను ప్లాన్ చేయండి' },
    { en: 'No obligation, completely free', te: 'బాధ్యత లేదు, పూర్తిగా ఉచితం' },
  ],
};

// --- TESTIMONIALS ---
const testimonialsTitle = { en: 'What Our Clients Say', te: 'మా క్లయింట్లు ఏమంటారు' };
const testimonialsSubtitle = { en: 'Hear from families who have trusted us with their financial security journey.', te: 'వారి ఆర్థిక భద్రత ప్రయాణంలో మమ్మల్ని నమ్మిన కుటుంబాల నుండి వినండి.' };

const testimonialsData = [
  {
    text: { en: '"I\'ve been with this advisor for over 15 years now. The guidance I received for my child\'s education plan was invaluable. My daughter\'s education is fully funded thanks to the foresight and planning we did together."', te: '"నేను ఈ సలహాదారుతో 15 సంవత్సరాలకు పైగా ఉన్నాను. నా పిల్లల విద్య ప్రణాళిక కోసం నేను పొందిన మార్గదర్శకత్వం ఎంతో విలువైనది. మేము కలిసి చేసిన ముందుచూపు మరియు ప్రణాళిక వల్ల నా కుమార్తె విద్య పూర్తిగా నిధులు సమకూర్చబడింది."' },
    name: { en: 'Rajesh K.', te: 'రాజేష్ కె.' },
    role: { en: 'Business Owner, Mulugu', te: 'వ్యాపార యజమాని, ములుగు' }
  },
  {
    text: { en: '"After my husband\'s sudden demise, the claim process was handled so compassionately and efficiently. The claim amount was settled within 15 days. Forever grateful for the support during such a difficult time."', te: '"నా భర్త ఆకస్మిక మరణం తరువాత, క్లెయిమ్ ప్రక్రియ చాలా కరుణతో మరియు సమర్థవంతంగా నిర్వహించబడింది. క్లెయిమ్ మొత్తం 15 రోజుల్లో పరిష్కరించబడింది. అటువంటి కష్టకాలంలో ఇచ్చిన మద్దతుకు ఎప్పటికీ కృతజ్ఞురాలిని."' },
    name: { en: 'Sunita M.', te: 'సునీత ఎం.' },
    role: { en: 'Teacher, Warangal', te: 'ఉపాధ్యాయురాలు, వరంగల్' }
  },
  {
    text: { en: '"I was confused between multiple plans for my retirement. The advisor patiently explained each option and helped me choose Jeevan Akshay. Now I receive ₹18,000 monthly pension. Best decision of my life!"', te: '"నా రిటైర్‌మెంట్ కోసం బహుళ ప్రణాళికల మధ్య నేను గందరగోళానికి గురయ్యాను. సలహాదారు ఓపికగా ప్రతి ఎంపికను వివరించి, జీవన్ అక్షయ్ ఎంచుకోవడంలో నాకు సహాయపడ్డారు. ఇప్పుడు నేను నెలకు ₹18,000 పెన్షన్ పొందుతున్నాను. నా జీవితంలో ఉత్తమ నిర్ణయం!"' },
    name: { en: 'Vinod P.', te: 'వినోద్ పి.' },
    role: { en: 'Retired Govt. Officer, Hyderabad', te: 'రిటైర్డ్ ప్రభుత్వ అధికారి, హైదరాబాద్' }
  },
  {
    text: { en: '"Very professional and transparent. Unlike other agents, there was no pressure to buy expensive plans. I got exactly what I needed — a ₹1 Crore term plan at just ₹12,000 per year. Highly recommended!"', te: '"చాలా వృత్తిపరమైన మరియు పారదర్శకమైనది. ఇతర ఏజెంట్లలాగా కాకుండా, ఖరీదైన ప్రణాళికలను కొనుగోలు చేయమని ఎటువంటి ఒత్తిడి లేదు. సంవత్సరానికి కేవలం ₹12,000 తో ₹1 కోటి టర్మ్ ప్లాన్ — నాకు సరిగ్గా కావాల్సినది నాకు లభించింది. ఖచ్చితంగా సిఫార్సు చేస్తున్నాను!"' },
    name: { en: 'Amit P.', te: 'అమిత్ పి.' },
    role: { en: 'Software Engineer, Hanamkonda', te: 'సాఫ్ట్‌వేర్ ఇంజనీర్, హనుమకొండ' }
  }
];

// --- GALLERY ---
const galleryTitle = { en: 'Gallery', te: 'గ్యాలరీ' };
const gallerySubtitle = { en: 'Moments from our 25+ year journey — achievements, recognitions, and milestones.', te: 'మా 25+ సంవత్సరాల ప్రయాణం నుండి క్షణాలు — సాధనలు, గుర్తింపులు మరియు మైలురాళ్లు.' };

// --- BLOG PREVIEW ---
const blogTitle = { en: 'Insurance Insights & Tips', te: 'బీమా అంతర్దృష్టులు & చిట్కాలు' };
const blogSubtitle = { en: 'Stay informed with expert articles on life insurance, financial planning, and LIC policy updates.', te: 'జీవిత బీమా, ఆర్థిక ప్రణాళిక మరియు LIC పాలసీ నవీకరణలపై నిపుణుల వ్యాసాలతో తెలుసుకోండి.' };

const blogCards = [
  { title: { en: 'Why Every Family Needs Term Insurance', te: 'ప్రతి కుటుంబానికి టర్మ్ ఇన్సూరెన్స్ ఎందుకు అవసరం' }, desc: { en: 'Term insurance is the most affordable and essential form of life coverage. Learn why every breadwinner should have a term plan.', te: 'టర్మ్ ఇన్సూరెన్స్ అత్యంత సరసమైన మరియు అవసరమైన జీవిత కవరేజ్ రూపం. ప్రతి సంపాదనాదారునికి టర్మ్ ప్లాన్ ఎందుకు ఉండాలో తెలుసుకోండి.' } },
  { title: { en: 'Retirement Planning in Your 30s: LIC Pension Plans', te: 'మీ 30లలో రిటైర్‌మెంట్ ప్లానింగ్: LIC పెన్షన్ ప్లాన్లు' }, desc: { en: 'Start early, retire peacefully. Discover how LIC pension plans can help you build a comfortable retirement corpus.', te: 'ముందుగా ప్రారంభించండి, ప్రశాంతంగా రిటైర్ అవ్వండి. LIC పెన్షన్ ప్రణాళికలు సౌకర్యవంతమైన రిటైర్‌మెంట్ కార్పస్ నిర్మించడంలో ఎలా సహాయపడతాయో తెలుసుకోండి.' } },
  { title: { en: 'Securing Your Child\'s Education: Best LIC Plans', te: 'మీ పిల్లల విద్యను భద్రపరచడం: ఉత్తమ LIC ప్రణాళికలు' }, desc: { en: 'Education costs are rising rapidly. Learn about LIC plans that help you build a robust education fund for your children.', te: 'విద్యా ఖర్చులు వేగంగా పెరుగుతున్నాయి. మీ పిల్లల కోసం పటిష్ఠమైన విద్యా నిధిని నిర్మించడంలో సహాయపడే LIC ప్రణాళికల గురించి తెలుసుకోండి.' } },
];

// --- CONTACT ---
const contactTitle = { en: 'Get In Touch', te: 'సంప్రదించండి' };
const contactSubtitle = { en: 'Ready to secure your family\'s future? Contact us for a free, no-obligation consultation.', te: 'మీ కుటుంబం భవిష్యత్తును భద్రపరచడానికి సిద్ధంగా ఉన్నారా? ఉచిత, బాధ్యత లేని సంప్రదింపు కోసం మమ్మల్ని సంప్రదించండి.' };

// --- PLANS PAGE TRANSLATIONS ---
const plansPageTitle = { en: 'LIC Insurance Plans', te: 'LIC బీమా ప్రణాళికలు' };
const plansPageSubtitle = { en: 'Comprehensive range of Life Insurance plans to protect your family, grow your wealth, and secure your retirement.', te: 'మీ కుటుంబాన్ని రక్షించడానికి, మీ సంపదను పెంచడానికి మరియు మీ రిటైర్‌మెంట్‌ను భద్రపరచడానికి జీవిత బీమా ప్రణాళికల సమగ్ర శ్రేణి.' };

const planSections = [
  {
    heading: { en: 'Term Insurance Plans', te: 'టర్మ్ ఇన్సూరెన్స్ ప్రణాళికలు' },
    intro: { en: 'Term insurance is the purest and most affordable form of life insurance. It provides high life cover at low premium and ensures your family is financially protected in your absence.', te: 'టర్మ్ ఇన్సూరెన్స్ జీవిత బీమా యొక్క అత్యంత స్వచ్ఛమైన మరియు సరసమైన రూపం. ఇది తక్కువ ప్రీమియంలో అధిక జీవిత కవర్ అందిస్తుంది మరియు మీ లేమిలో మీ కుటుంబం ఆర్థికంగా రక్షించబడేలా చేస్తుంది.' },
  },
  {
    heading: { en: 'Endowment Plans', te: 'ఎండోమెంట్ ప్రణాళికలు' },
    intro: { en: 'Endowment plans combine protection with savings. You get life cover during the policy term and a guaranteed maturity amount at the end. Perfect for those who want insurance + savings.', te: 'ఎండోమెంట్ ప్రణాళికలు రక్షణను పొదుపులతో కలుపుతాయి. పాలసీ కాలంలో జీవిత కవర్ మరియు చివరిలో హామీ ఇచ్చిన మెచ్యూరిటీ మొత్తం పొందుతారు. బీమా + పొదుపు కావాలనుకునే వారికి అనువైనది.' },
  },
  {
    heading: { en: 'Pension & Retirement Plans', te: 'పెన్షన్ & రిటైర్‌మెంట్ ప్రణాళికలు' },
    intro: { en: 'Pension plans provide a regular income after retirement. Start early to build a substantial corpus and enjoy a financially independent retirement life.', te: 'పెన్షన్ ప్రణాళికలు రిటైర్‌మెంట్ తర్వాత క్రమ ఆదాయాన్ని అందిస్తాయి. గణనీయమైన కార్పస్ నిర్మించడానికి ముందుగా ప్రారంభించి, ఆర్థికంగా స్వతంత్ర రిటైర్‌మెంట్ జీవితాన్ని ఆస్వాదించండి.' },
  },
  {
    heading: { en: 'Child Education & Marriage Plans', te: 'పిల్లల విద్య & వివాహ ప్రణాళికలు' },
    intro: { en: 'Secure your child\'s future milestones — education, higher studies, career, and marriage — with dedicated child insurance plans from LIC.', te: 'LIC నుండి అంకిత పిల్లల బీమా ప్రణాళికలతో మీ పిల్లల భవిష్యత్ మైలురాళ్లను — విద్య, ఉన్నత చదువులు, కెరీర్ మరియు వివాహం — భద్రపరచండి.' },
  },
  {
    heading: { en: 'Health Insurance Plans', te: 'ఆరోగ్య బీమా ప్రణాళికలు' },
    intro: { en: 'Protect your family against rising medical costs with LIC\'s health insurance plans. Cover hospitalization, critical illness, and surgical expenses.', te: 'LIC ఆరోగ్య బీమా ప్రణాళికలతో పెరుగుతున్న వైద్య ఖర్చులకు వ్యతిరేకంగా మీ కుటుంబాన్ని రక్షించండి. హాస్పిటలైజేషన్, తీవ్రమైన వ్యాధి మరియు శస్త్రచికిత్స ఖర్చులను కవర్ చేయండి.' },
  },
  {
    heading: { en: 'Investment & Money-Back Plans', te: 'పెట్టుబడి & మనీ-బ్యాక్ ప్రణాళికలు' },
    intro: { en: 'Earn guaranteed returns while staying protected. Money-back and investment plans provide periodic payouts and a lump sum at maturity along with life cover.', te: 'రక్షితంగా ఉంటూ హామీ రాబడులు సంపాదించండి. మనీ-బ్యాక్ మరియు పెట్టుబడి ప్రణాళికలు జీవిత కవర్‌తో పాటు కాలానుగుణ చెల్లింపులు మరియు మెచ్యూరిటీలో ఒకేసారి మొత్తాన్ని అందిస్తాయి.' },
  },
  {
    heading: { en: 'Loan Protection Plans', te: 'లోన్ రక్షణ ప్రణాళికలు' },
    intro: { en: 'Protect your family from loan liabilities. If something happens to you, the insurance covers the outstanding loan amount so your family isn\'t burdened.', te: 'లోన్ బాధ్యతల నుండి మీ కుటుంబాన్ని రక్షించండి. మీకు ఏదైనా జరిగితే, బీమా బకాయి లోన్ మొత్తాన్ని కవర్ చేస్తుంది కాబట్టి మీ కుటుంబంపై భారం ఉండదు.' },
  },
];

const plansCTA = {
  title: { en: 'Not Sure Which Plan Is Right for You?', te: 'మీకు ఏ ప్రణాళిక సరైనదో తెలియదా?' },
  desc: { en: 'Don\'t worry — with 25+ years of experience, we\'ll help you find the perfect LIC plan based on your needs, budget, and financial goals.', te: 'చింతించకండి — 25+ సంవత్సరాల అనుభవంతో, మీ అవసరాలు, బడ్జెట్ మరియు ఆర్థిక లక్ష్యాల ఆధారంగా సరైన LIC ప్రణాళికను కనుగొనడంలో మీకు సహాయపడతాం.' },
};

const planHeadings = {
  features: { en: 'Key Features', te: 'ముఖ్య లక్షణాలు' },
  benefits: { en: 'Benefits', te: 'ప్రయోజనాలు' },
  eligibility: { en: 'Eligibility', te: 'అర్హత' }
};

const planCardsData = [
  // 1. Jeevan Amar
  {
    title: { en: '<i class="fas fa-star"></i> LIC Jeevan Amar (Plan No. 955)', te: '<i class="fas fa-star"></i> LIC జీవన్ అమర్ (ప్లాన్ నెం. 955)' },
    features: [
      { en: 'Pure term insurance plan with no maturity benefit', te: 'మెచ్యూరిటీ ప్రయోజనం లేని స్వచ్ఛమైన టర్మ్ ఇన్సూరెన్స్ ప్లాన్' },
      { en: 'High sum assured at affordable premiums', te: 'సరసమైన ప్రీమియంతో అధిక బీమా మొత్తం' },
      { en: 'Option of Level Cover and Increasing Cover', te: 'లెవల్ కవర్ మరియు పెరుగుతున్న కవర్ ఎంపిక' },
      { en: 'Special premium rates for women and non-smokers', te: 'మహిళలు మరియు ధూమపానం చేయని వారికి ప్రత్యేక ప్రీమియం రేట్లు' },
      { en: 'Tax benefits under Section 80C and 10(10D)', te: 'సెక్షన్ 80C మరియు 10(10D) కింద పన్ను ప్రయోజనాలు' }
    ],
    benefits: [
      { en: 'Death Benefit: Sum Assured payable to nominee on death during the policy term', te: 'మరణ ప్రయోజనం: పాలసీ కాలంలో మరణిస్తే నామినీకి బీమా మొత్తం చెల్లించబడుతుంది' },
      { en: 'Increasing Cover Option: Sum Assured increases by 10% annually (up to double)', te: 'పెరుగుతున్న కవర్ ఎంపిక: బీమా మొత్తం ఏటా 10% పెరుగుతుంది (రెట్టింపు వరకు)' },
      { en: 'Accidental Death & Disability rider available', te: 'ప్రమాద మరణం & వైకల్య రైడర్ అందుబాటులో ఉంది' }
    ],
    eligibility: [
      { en: 'Entry Age: 18–65 years', te: 'ప్రవేశ వయస్సు: 18–65 సంవత్సరాలు' },
      { en: 'Policy Term: 10–40 years', te: 'పాలసీ కాలం: 10–40 సంవత్సరాలు' },
      { en: 'Minimum Sum Assured: ₹25 Lakh', te: 'కనీస బీమా మొత్తం: ₹25 లక్షలు' },
      { en: 'Maximum Sum Assured: No limit', te: 'గరిష్ట బీమా మొత్తం: పరిమితి లేదు' }
    ],
    btnText: { en: '<i class="fas fa-phone-alt"></i> Get Quote for Jeevan Amar', te: '<i class="fas fa-phone-alt"></i> జీవన్ అమర్ కోసం కోట్ పొందండి' }
  },
  // 2. Tech Term
  {
    title: { en: '<i class="fas fa-star"></i> LIC Tech Term (Plan No. 954)', te: '<i class="fas fa-star"></i> LIC టెక్ టర్మ్ (ప్లాన్ నెం. 954)' },
    features: [
      { en: 'Online-only term insurance plan — buy from the comfort of your home', te: 'ఆన్‌లైన్-మాత్రమే టర్మ్ ఇన్సూరెన్స్ ప్లాన్ — మీ ఇంటి నుండే కొనుగోలు చేయండి' },
      { en: 'Lower premiums compared to offline plans', te: 'ఆఫ్‌లైన్ ప్లాన్‌లతో పోలిస్తే తక్కువ ప్రీమియంలు' },
      { en: 'Lump sum or monthly income payout options', te: 'లమ్ సమ్ లేదా నెలవారీ ఆదాయ చెల్లింపు ఎంపికలు' },
      { en: 'Available for salaried and self-employed individuals', te: 'వేతన జీవులు మరియు స్వయం ఉపాధి పొందుతున్న వారికి అందుబాటులో ఉంది' }
    ],
    benefits: [
      { en: 'Death Benefit as lump sum, monthly income, or combination', te: 'మరణ ప్రయోజనం ఏకమొత్తంగా, నెలవారీ ఆదాయంగా లేదా రెండింటి కలయికగా' },
      { en: 'No maturity benefit (pure protection plan)', te: 'మెచ్యూరిటీ ప్రయోజనం లేదు (స్వచ్ఛమైన రక్షణ ప్లాన్)' },
      { en: 'Rebate for annual/half-yearly premium payment', te: 'వార్షిక/అర్ధ వార్షిక ప్రీమియం చెల్లింపుకు తగ్గింపు' }
    ],
    eligibility: [
      { en: 'Entry Age: 18–65 years', te: 'ప్రవేశ వయస్సు: 18–65 సంవత్సరాలు' },
      { en: 'Policy Term: 10–40 years', te: 'పాలసీ కాలం: 10–40 సంవత్సరాలు' },
      { en: 'Minimum Sum Assured: ₹50 Lakh', te: 'కనీస బీమా మొత్తం: ₹50 లక్షలు' },
      { en: 'Maximum Sum Assured: ₹25 Crore', te: 'గరిష్ట బీమా మొత్తం: ₹25 కోట్లు' }
    ],
    btnText: { en: '<i class="fas fa-phone-alt"></i> Get Quote for Tech Term', te: '<i class="fas fa-phone-alt"></i> టెక్ టర్మ్ కోసం కోట్ పొందండి' }
  },
  // 3. New Jeevan Anand
  {
    title: { en: '<i class="fas fa-star"></i> New Jeevan Anand (Plan No. 915)', te: '<i class="fas fa-star"></i> న్యూ జీవన్ ఆనంద్ (ప్లాన్ నెం. 915)' },
    features: [
      { en: 'Combination of endowment and whole life plan', te: 'ఎండోమెంట్ మరియు హోల్ లైఫ్ ప్లాన్ కలయిక' },
      { en: 'Life cover continues even after maturity (unique feature)', te: 'మెచ్యూరిటీ తర్వాత కూడా లైఫ్ కవర్ కొనసాగుతుంది (ప్రత్యేక లక్షణం)' },
      { en: 'Guaranteed additions of ₹50 per ₹1,000 Sum Assured per year', te: 'సంవత్సరానికి ₹1,000 బీమా మొత్తానికి ₹50 గ్యారెంటీ అదనపు మొత్తం' },
      { en: 'Bonus declared annually by LIC', te: 'LIC ద్వారా ఏటా బోనస్ ప్రకటించబడుతుంది' },
      { en: 'Excellent plan for long-term wealth creation', te: 'దీర్ఘకాలిక సంపద సృష్టికి అద్భుతమైన ప్లాన్' }
    ],
    benefits: [
      { en: 'Death Benefit (during term): Sum Assured + Bonuses', te: 'మరణ ప్రయోజనం (పాలసీ కాలంలో): బీమా మొత్తం + బోనస్‌లు' },
      { en: 'Maturity Benefit: Sum Assured + Guaranteed Additions + Bonuses', te: 'మెచ్యూరిటీ ప్రయోజనం: బీమా మొత్తం + గ్యారెంటీ అదనపు మొత్తాలు + బోనస్‌లు' },
      { en: 'Death Benefit (after maturity): Basic Sum Assured payable again', te: 'మరణ ప్రయోజనం (మెచ్యూరిటీ తర్వాత): ప్రాథమిక బీమా మొత్తం మళ్లీ చెల్లించబడుతుంది' },
      { en: 'Loan facility available after 3 years', te: '3 సంవత్సరాల తర్వాత లోన్ సౌకర్యం అందుబాటులో ఉంది' }
    ],
    eligibility: [
      { en: 'Entry Age: 18–50 years', te: 'ప్రవేశ వయస్సు: 18–50 సంవత్సరాలు' },
      { en: 'Policy Term: 15–35 years', te: 'పాలసీ కాలం: 15–35 సంవత్సరాలు' },
      { en: 'Minimum Sum Assured: ₹1,00,000', te: 'కనీస బీమా మొత్తం: ₹1,00,000' },
      { en: 'Maximum Sum Assured: No limit', te: 'గరిష్ట బీమా మొత్తం: పరిమితి లేదు' }
    ],
    btnText: { en: '<i class="fas fa-phone-alt"></i> Get Quote for New Jeevan Anand', te: '<i class="fas fa-phone-alt"></i> న్యూ జీవన్ ఆనంద్ కోసం కోట్ పొందండి' }
  },
  // 4. Jeevan Akshay VII
  {
    title: { en: '<i class="fas fa-star"></i> LIC Jeevan Akshay VII (Plan No. 957)', te: '<i class="fas fa-star"></i> LIC జీవన్ అక్షయ్ VII (ప్లాన్ నెం. 957)' },
    features: [
      { en: 'Immediate annuity plan — pension starts right after purchase', te: 'తక్షణ యాన్యుటీ ప్లాన్ — కొనుగోలు చేసిన వెంటనే పెన్షన్ ప్రారంభమవుతుంది' },
      { en: 'Single premium payment, lifetime pension', te: 'సింగిల్ ప్రీమియం చెల్లింపు, జీవితకాల పెన్షన్' },
      { en: '10 annuity options to choose from', te: 'ఎంచుకోవడానికి 10 యాన్యుటీ ఎంపికలు' },
      { en: 'Guaranteed pension for life — no market risk', te: 'జీవితకాల గ్యారెంటీ పెన్షన్ — మార్కెట్ ప్రమాదం లేదు' },
      { en: 'Available for single and joint life', te: 'సింగిల్ మరియు జాయింట్ లైఫ్ కోసం అందుబాటులో ఉంది' }
    ],
    benefits: [
      { en: 'Regular pension (monthly/quarterly/half-yearly/yearly)', te: 'రెగ్యులర్ పెన్షన్ (నెలవారీ/త్రైమాసిక/అర్ధ-వార్షిక/వార్షిక)' },
      { en: 'Return of purchase price to nominee on death (select options)', te: 'మరణంపై నామినీకి కొనుగోలు ధర తిరిగి చెల్లించబడుతుంది (ఎంచుకున్న ఎంపికలలో)' },
      { en: 'Increasing annuity option available', te: 'పెరుగుతున్న యాన్యుటీ ఎంపిక అందుబాటులో ఉంది' },
      { en: 'Loan available after 1 year', te: '1 సంవత్సరం తర్వాత లోన్ అందుబాటులో ఉంది' }
    ],
    eligibility: [
      { en: 'Entry Age: 30–85 years', te: 'ప్రవేశ వయస్సు: 30–85 సంవత్సరాలు' },
      { en: 'Minimum Purchase Price: ₹1,00,000', te: 'కనీస కొనుగోలు ధర: ₹1,00,000' },
      { en: 'Minimum Pension: ₹1,000 per month', te: 'కనీస పెన్షన్: నెలకు ₹1,000' },
      { en: 'Maximum: No limit', te: 'గరిష్ట పరిమితి లేదు' }
    ],
    btnText: { en: '<i class="fas fa-phone-alt"></i> Get Quote for Jeevan Akshay', te: '<i class="fas fa-phone-alt"></i> జీవన్ అక్షయ్ కోసం కోట్ పొందండి' }
  },
  // 5. Saral Pension
  {
    title: { en: '<i class="fas fa-star"></i> LIC Saral Pension (Plan No. 962)', te: '<i class="fas fa-star"></i> LIC సరళ్ పెన్షన్ (ప్లాన్ నెం. 962)' },
    features: [
      { en: 'Standard immediate annuity plan mandated by IRDAI', te: 'IRDAI ద్వారా తప్పనిసరి చేయబడిన ప్రామాణిక తక్షణ యాన్యుటీ ప్లాన్' },
      { en: 'Simple and transparent — easy to understand', te: 'సరళమైన మరియు పారదర్శకమైన — అర్థం చేసుకోవడం సులభం' },
      { en: 'Two annuity options: Life Annuity with Return of Purchase Price, and Joint Life Annuity', te: 'రెండు యాన్యుటీ ఎంపికలు: పర్చేజ్ ప్రైస్ రిటర్న్‌తో లైఫ్ యాన్యుటీ, మరియు జాయింట్ లైఫ్ యాన్యుటీ' },
      { en: 'Available across all insurance companies with same features', te: 'ఒకే లక్షణాలతో అన్ని బీమా కంపెనీలలో అందుబాటులో ఉంది' }
    ],
    benefits: [
      { en: 'Guaranteed pension for life', te: 'జీవితకాల గ్యారెంటీ పెన్షన్' },
      { en: '100% Return of Purchase Price to nominee on death', te: 'మరణంపై నామినీకి కొనుగోలు ధర 100% తిరిగి చెల్లించబడుతుంది' },
      { en: 'Joint Life option covers both spouses', te: 'జాయింట్ లైఫ్ ఎంపిక ఇద్దరు జీవిత భాగస్వాములను కవర్ చేస్తుంది' },
      { en: 'Loan facility available after 6 months', te: '6 నెలల తర్వాత లోన్ సౌకర్యం అందుబాటులో ఉంది' }
    ],
    eligibility: [
      { en: 'Entry Age: 40–80 years', te: 'ప్రవేశ వయస్సు: 40–80 సంవత్సరాలు' },
      { en: 'Minimum Purchase Price: ₹1,00,000', te: 'కనీస కొనుగోలు ధర: ₹1,00,000' },
      { en: 'Maximum: No limit', te: 'గరిష్ట పరిమితి లేదు' }
    ],
    btnText: { en: '<i class="fas fa-phone-alt"></i> Get Quote for Saral Pension', te: '<i class="fas fa-phone-alt"></i> సరళ్ పెన్షన్ కోసం కోట్ పొందండి' }
  },
  // 6. Children's Money Back
  {
    title: { en: '<i class="fas fa-star"></i> New Children\'s Money Back Plan (Plan No. 932)', te: '<i class="fas fa-star"></i> న్యూ చిల్డ్రన్స్ మనీ బ్యాక్ ప్లాన్ (ప్లాన్ నెం. 932)' },
    features: [
      { en: 'Specially designed for children\'s financial needs', te: 'పిల్లల ఆర్థిక అవసరాల కోసం ప్రత్యేకంగా రూపొందించబడింది' },
      { en: 'Money back at key milestones: 18, 20, and 22 years', te: 'ముఖ్యమైన దశలలో మనీ బ్యాక్: 18, 20 మరియు 22 సంవత్సరాలకు' },
      { en: 'Final maturity benefit at age 25', te: '25 సంవత్సరాల వయస్సులో తుది మెచ్యూరిటీ ప్రయోజనం' },
      { en: 'Premium waiver on death of proposer (parent)', te: 'ప్రతిపాదకుడు (తల్లి/తండ్రి) మరణిస్తే ప్రీమియం మినహాయింపు' },
      { en: 'Bonuses declared annually by LIC', te: 'LIC ద్వారా ఏటా బోనస్ ప్రకటించబడుతుంది' }
    ],
    benefits: [
      { en: 'Survival Benefit: 20% of SA at age 18, 20% at 20, 20% at 22', te: 'సర్వైవల్ ప్రయోజనం: వయస్సు 18, 20, 22 లో SA యొక్క 20% చొప్పున' },
      { en: 'Maturity: 40% of SA + Bonuses at age 25', te: 'మెచ్యూరిటీ: 25 ఏళ్ల వయస్సులో SA యొక్క 40% + బోనస్‌లు' },
      { en: 'Death Benefit: Full Sum Assured + Bonuses to nominee', te: 'మరణ ప్రయోజనం: నామినీకి పూర్తి బీమా మొత్తం + బోనస్‌లు' },
      { en: 'Premium waiver benefit if parent/proposer dies during the term', te: 'పాలసీ వ్యవధిలో తల్లిదండ్రులు/ప్రతిపాదకుడు మరణిస్తే ప్రీమియం మినహాయింపు ప్రయోజనం' }
    ],
    eligibility: [
      { en: 'Child Age: 0–12 years', te: 'పిల్లల వయస్సు: 0–12 సంవత్సరాలు' },
      { en: 'Policy Term: Until child turns 25', te: 'పాలసీ కాలం: బిడ్డకు 25 ఏళ్లు వచ్చే వరకు' },
      { en: 'Minimum Sum Assured: ₹1,00,000', te: 'కనీస బీమా మొత్తం: ₹1,00,000' },
      { en: 'Proposer Age: 18–50 years', te: 'ప్రతిపాదకుని వయస్సు: 18–50 సంవత్సరాలు' }
    ],
    btnText: { en: '<i class="fas fa-phone-alt"></i> Get Quote for Children\'s Plan', te: '<i class="fas fa-phone-alt"></i> చిల్డ్రన్స్ ప్లాన్ కోసం కోట్ పొందండి' }
  },
  // 7. Arogya Rakshak
  {
    title: { en: '<i class="fas fa-star"></i> LIC Arogya Rakshak (Plan No. 906)', te: '<i class="fas fa-star"></i> LIC ఆరోగ్య రక్షక్ (ప్లాన్ నెం. 906)' },
    features: [
      { en: 'Non-linked, non-participating health insurance plan', te: 'నాన్-లింక్డ్, నాన్-పార్టిసిపేటింగ్ హెల్త్ ఇన్సూరెన్స్ ప్లాన్' },
      { en: 'Fixed benefit plan — pays fixed amount irrespective of actual hospital bills', te: 'ఫిక్స్‌డ్ బెనిఫిట్ ప్లాన్ — అసలు ఆసుపత్రి బిల్లులతో సంబంధం లేకుండా నిర్ణీత మొత్తాన్ని చెల్లిస్తుంది' },
      { en: 'Covers hospitalization expenses for 30+ major surgeries', te: '30+ పెద్ద శస్త్రచికిత్సలకు హాస్పిటలైజేషన్ ఖర్చులను కవర్ చేస్తుంది' },
      { en: 'Day care procedure coverage included', te: 'డే కేర్ విధాన కవరేజ్ చేర్చబడింది' },
      { en: 'No need to submit hospital bills for claim', te: 'క్లెయిమ్ కోసం ఆసుపత్రి బిల్లులను సమర్పించాల్సిన అవసరం లేదు' }
    ],
    benefits: [
      { en: 'Hospital Cash Benefit: ₹500 to ₹5,000 per day', te: 'హాస్పిటల్ క్యాష్ ప్రయోజనం: రోజుకు ₹500 నుండి ₹5,000 వరకు' },
      { en: 'Major Surgical Benefit: Up to ₹10 Lakh', te: 'పెద్ద శస్త్రచికిత్స ప్రయోజనం: ₹10 లక్షల వరకు' },
      { en: 'Day Care procedure benefit', te: 'డే కేర్ విధాన ప్రయోజనం' },
      { en: 'Other surgical benefit options', te: 'ఇతర శస్త్రచికిత్స ప్రయోజన ఎంపికలు' }
    ],
    eligibility: [
      { en: 'Entry Age: 18–65 years', te: 'ప్రవేశ వయస్సు: 18–65 సంవత్సరాలు' },
      { en: 'Policy Term: 1 year (renewable)', te: 'పాలసీ కాలం: 1 సంవత్సరం (పునరుద్ధరించదగినది)' },
      { en: 'Premium payment: Annual only', te: 'ప్రీమియం చెల్లింపు: వార్షికం మాత్రమే' }
    ],
    btnText: { en: '<i class="fas fa-phone-alt"></i> Get Quote for Arogya Rakshak', te: '<i class="fas fa-phone-alt"></i> ఆరోగ్య రక్షక్ కోసం కోట్ పొందండి' }
  },
  // 8. New Money Back Plan
  {
    title: { en: '<i class="fas fa-star"></i> LIC New Money Back Plan – 25 Years (Plan No. 921)', te: '<i class="fas fa-star"></i> LIC న్యూ మనీ బ్యాక్ ప్లాన్ – 25 సంవత్సరాలు (ప్లాన్ నెం. 921)' },
    features: [
      { en: 'Money back at regular intervals: 20%, 20%, 20% of SA', te: 'సాధారణ వ్యవధిలో మనీ బ్యాక్: SA యొక్క 20%, 20%, 20%' },
      { en: 'Maturity benefit: 40% of SA + accumulated bonuses', te: 'మెచ్యూరిటీ ప్రయోజనం: SA యొక్క 40% + పేరుకుపోయిన బోనస్‌లు' },
      { en: 'Life cover throughout the policy term', te: 'పాలసీ వ్యవధి అంతటా లైఫ్ కవర్' },
      { en: 'Ideal for meeting periodic financial needs', te: 'కాలానుగుణ ఆర్థిక అవసరాలను తీర్చడానికి అనువైనది' },
      { en: 'Tax benefits under Section 80C', te: 'సెక్షన్ 80C కింద పన్ను ప్రయోజనాలు' }
    ],
    benefits: [
      { en: 'Survival Benefits at end of 5th, 10th, and 15th year', te: '5వ, 10వ మరియు 15వ సంవత్సరం చివరలో సర్వైవల్ ప్రయోజనాలు' },
      { en: 'Maturity Benefit at end of 20th year with bonuses', te: 'బోనస్‌లతో 20వ సంవత్సరం చివరలో మెచ్యూరిటీ ప్రయోజనం' },
      { en: 'Death Benefit: Full Sum Assured + Bonuses regardless of survival benefits paid', te: 'మరణ ప్రయోజనం: చెల్లించిన సర్వైవల్ ప్రయోజనాలతో సంబంధం లేకుండా పూర్తి బీమా మొత్తం + బోనస్‌లు' }
    ],
    eligibility: [
      { en: 'Entry Age: 13–45 years', te: 'ప్రవేశ వయస్సు: 13–45 సంవత్సరాలు' },
      { en: 'Policy Term: 25 years', te: 'పాలసీ కాలం: 25 సంవత్సరాలు' },
      { en: 'Minimum Sum Assured: ₹1,00,000', te: 'కనీస బీమా మొత్తం: ₹1,00,000' },
      { en: 'Maximum Sum Assured: No limit', te: 'గరిష్ట బీమా మొత్తం: పరిమితి లేదు' }
    ],
    btnText: { en: '<i class="fas fa-phone-alt"></i> Get Quote for Money Back Plan', te: '<i class="fas fa-phone-alt"></i> మనీ బ్యాక్ ప్లాన్ కోసం కోట్ పొందండి' }
  },
  // 9. New Bima Kiran
  {
    title: { en: '<i class="fas fa-star"></i> LIC New Bima Kiran (Plan No. 950)', te: '<i class="fas fa-star"></i> LIC న్యూ బీమా కిరణ్ (ప్లాన్ నెం. 950)' },
    features: [
      { en: 'Decreasing term insurance linked to your loan amount', te: 'మీ లోన్ మొత్తానికి లింక్ చేయబడిన తగ్గుతున్న టర్మ్ ఇన్సూరెన్స్' },
      { en: 'Sum Assured decreases as your loan balance reduces', te: 'మీ లోన్ బ్యాలెన్స్ తగ్గుతున్న కొద్దీ బీమా మొత్తం తగ్గుతుంది' },
      { en: 'Very affordable premiums', te: 'చాలా సరసమైన ప్రీమియంలు' },
      { en: 'Covers home loans, personal loans, and other liabilities', te: 'హోమ్ లోన్‌లు, పర్సనల్ లోన్‌లు మరియు ఇతర బాధ్యతలను కవర్ చేస్తుంది' },
      { en: 'Single premium or regular premium options', te: 'సింగిల్ ప్రీమియం లేదా రెగ్యులర్ ప్రీమియం ఎంపికలు' }
    ],
    benefits: [
      { en: 'Death Benefit: Outstanding loan amount covered', te: 'మరణ ప్రయోజనం: బకాయి లోన్ మొత్తం కవర్ చేయబడుతుంది' },
      { en: 'Family doesn\'t inherit debt liability', te: 'కుటుంబానికి అప్పు బాధ్యత రాదు' },
      { en: 'Can be used for any loan — home, personal, business', te: 'హోమ్, పర్సనల్, బిజినెస్ — ఏదైనా లోన్ కోసం ఉపయోగించవచ్చు' }
    ],
    eligibility: [
      { en: 'Entry Age: 18–60 years', te: 'ప్రవేశ వయస్సు: 18–60 సంవత్సరాలు' },
      { en: 'Policy Term: Equal to loan tenure', te: 'పాలసీ కాలం: లోన్ కాల వ్యవధికి సమానం' },
      { en: 'Sum Assured: Equal to loan amount', te: 'బీమా మొత్తం: లోన్ మొత్తానికి సమానం' }
    ],
    btnText: { en: '<i class="fas fa-phone-alt"></i> Get Quote for Loan Protection', te: '<i class="fas fa-phone-alt"></i> లోన్ ప్రొటెక్షన్ కోసం కోట్ పొందండి' }
  }
];


// --- BLOG PAGE TRANSLATIONS ---
const blogPageTitle = { en: 'Insurance Insights & Tips', te: 'బీమా అంతర్దృష్టులు & చిట్కాలు' };
const blogPageSubtitle = { en: 'Expert articles on life insurance, financial planning, and making the most of your LIC policies.', te: 'జీవిత బీమా, ఆర్థిక ప్రణాళిక మరియు మీ LIC పాలసీలను సద్వినియోగం చేసుకోవడంపై నిపుణుల వ్యాసాలు.' };

const blogArticles = [
  // 1. Term Insurance
  {
    title: { en: 'Why Every Family Needs Term Insurance', te: 'ప్రతి కుటుంబానికి టర్మ్ ఇన్సూరెన్స్ ఎందుకు అవసరం' },
    tag: { en: 'Term Insurance', te: 'టర్మ్ ఇన్సూరెన్స్' },
    bodyHtml: {
      en: `<p>In today's uncertain world, having adequate life insurance is not a luxury — it's a necessity. Among all types of life insurance, <strong>term insurance</strong> stands out as the most essential form of financial protection for every family.</p>
           <h2>What is Term Insurance?</h2>
           <p>Term insurance is the purest form of life insurance. You pay a small premium, and in return, your family receives a large sum assured in case of your unfortunate demise during the policy term. It's simple, affordable, and provides maximum coverage.</p>
           <h2>Why Is It So Important?</h2>
           <ul>
             <li><strong>Income Replacement:</strong> If you're the primary earner, your sudden absence can leave your family financially devastated. Term insurance replaces your income for years to come.</li>
             <li><strong>Debt Protection:</strong> Outstanding home loans, car loans, and credit card debt don't disappear. Term insurance ensures your family isn't burdened with your liabilities.</li>
             <li><strong>Child's Future:</strong> Your children's education and marriage plans shouldn't be compromised. The sum assured can fund these important milestones.</li>
             <li><strong>Affordable Premiums:</strong> A 30-year-old can get ₹1 Crore coverage for as low as ₹8,000-₹12,000 per year. That's less than ₹35 per day!</li>
             <li><strong>Tax Benefits:</strong> Premiums are eligible for tax deduction under Section 80C, and the claim amount is tax-free under Section 10(10D).</li>
           </ul>
           <h2>How Much Coverage Do You Need?</h2>
           <p>A general rule of thumb is to have coverage of <strong>10-15 times your annual income</strong>. For example, if your annual income is ₹8 Lakh, you should have a term plan of ₹80 Lakh to ₹1.2 Crore.</p>
           <h2>LIC Term Insurance Plans</h2>
           <p>LIC offers two excellent term insurance plans:</p>
           <ul>
             <li><strong>Jeevan Amar:</strong> Offline plan with level and increasing cover options</li>
             <li><strong>Tech Term:</strong> Online plan with attractive premium rates and multiple payout options</li>
           </ul>
           <p><em>Don't wait for a wake-up call. Secure your family today with a term insurance plan.</em></p>`,
      te: `<p>నేటి అనిశ్చిత ప్రపంచంలో, తగినంత జీవిత బీమా కలిగి ఉండటం ఒక విలాసం కాదు — అది ఒక అవసరం. అన్ని రకాల జీవిత బీమాలలో, <strong>టర్మ్ ఇన్సూరెన్స్</strong> ప్రతి కుటుంబానికి ఆర్థిక రక్షణ యొక్క అత్యంత ముఖ్యమైన రూపంగా నిలుస్తుంది.</p>
           <h2>టర్మ్ ఇన్సూరెన్స్ అంటే ఏమిటి?</h2>
           <p>టర్మ్ ఇన్సూరెన్స్ అనేది జీవిత బీమా యొక్క స్వచ్ఛమైన రూపం. మీరు చిన్న ప్రీమియం చెల్లిస్తారు, మరియు దానికి బదులుగా, పాలసీ కాలంలో మీరు దురదృష్టవశాత్తు మరణిస్తే మీ కుటుంబం పెద్ద బీమా మొత్తాన్ని పొందుతుంది. ఇది సరళమైనది, సరసమైనది మరియు గరిష్ట కవరేజీని అందిస్తుంది.</p>
           <h2>ఇది ఎందుకు అంత ముఖ్యం?</h2>
           <ul>
             <li><strong>ఆదాయ భర్తీ:</strong> మీరు ప్రాథమిక సంపాదనపరులైతే, మీ ఆకస్మిక లేమి మీ కుటుంబాన్ని ఆర్థికంగా నాశనం చేస్తుంది. టర్మ్ ఇన్సూరెన్స్ రాబోయే సంవత్సరాలకు మీ ఆదాయాన్ని భర్తీ చేస్తుంది.</li>
             <li><strong>అప్పుల రక్షణ:</strong> బకాయి ఉన్న హోమ్ లోన్‌లు, కార్ లోన్‌లు మరియు క్రెడిట్ కార్డ్ అప్పులు అదృశ్యం కావు. టర్మ్ ఇన్సూరెన్స్ మీ అప్పుల భారం మీ కుటుంబంపై పడకుండా చూసుకుంటుంది.</li>
             <li><strong>పిల్లల భవిష్యత్తు:</strong> మీ పిల్లల విద్య మరియు వివాహ ప్రణాళికలు రాజీ పడకూడదు. బీమా మొత్తం ఈ ముఖ్యమైన మైలురాళ్లకు నిధులు సమకూర్చగలదు.</li>
             <li><strong>సరసమైన ప్రీమియంలు:</strong> 30 ఏళ్ల వయస్సు ఉన్నవారు సంవత్సరానికి ₹8,000-₹12,000 కంటే తక్కువతో ₹1 కోటి కవరేజీని పొందవచ్చు. అది రోజుకు ₹35 కంటే తక్కువ!</li>
             <li><strong>పన్ను ప్రయోజనాలు:</strong> ప్రీమియంలు సెక్షన్ 80C కింద పన్ను తగ్గింపుకు అర్హత పొందుతాయి మరియు క్లెయిమ్ మొత్తం సెక్షన్ 10(10D) కింద పన్ను రహితం.</li>
           </ul>
           <h2>మీకు ఎంత కవరేజ్ అవసరం?</h2>
           <p>సాధారణ నియమం ఏమిటంటే మీ <strong>వార్షిక ఆదాయానికి 10-15 రెట్లు</strong> కవరేజ్ కలిగి ఉండాలి. ఉదాహరణకు, మీ వార్షిక ఆదాయం ₹8 లక్షలు అయితే, మీరు ₹80 లక్షల నుండి ₹1.2 కోట్ల వరకు టర్మ్ ప్లాన్ కలిగి ఉండాలి.</p>
           <h2>LIC టర్మ్ ఇన్సూరెన్స్ ప్రణాళికలు</h2>
           <p>LIC రెండు అద్భుతమైన టర్మ్ ఇన్సూరెన్స్ ప్లాన్‌లను అందిస్తుంది:</p>
           <ul>
             <li><strong>జీవన్ అమర్:</strong> లెవెల్ మరియు పెరుగుతున్న కవర్ ఎంపికలతో ఆఫ్‌లైన్ ప్లాన్</li>
             <li><strong>టెక్ టర్మ్:</strong> ఆకర్షణీయమైన ప్రీమియం రేట్లు మరియు బహుళ చెల్లింపు ఎంపికలతో ఆన్‌లైన్ ప్లాన్</li>
           </ul>
           <p><em>వేక్-అప్ కాల్ కోసం వేచి ఉండకండి. టర్మ్ ఇన్సూరెన్స్ ప్లాన్‌తో ఈరోజే మీ కుటుంబాన్ని భద్రపరచండి.</em></p>`
    },
    btns: [
      { en: '<i class="fas fa-phone-alt"></i> Get Term Insurance Quote', te: '<i class="fas fa-phone-alt"></i> టర్మ్ కోట్ పొందండి' },
      { en: 'View Term Plans', te: 'టర్మ్ ప్లాన్‌లను చూడండి' }
    ]
  },
  // 2. Retirement Planning
  {
    title: { en: 'Retirement Planning in Your 30s: LIC Pension Plans', te: 'మీ 30లలో రిటైర్‌మెంట్ ప్లానింగ్: LIC పెన్షన్ ప్లాన్లు' },
    tag: { en: 'Retirement Planning', te: 'రిటైర్‌మెంట్ ప్లానింగ్' },
    bodyHtml: {
      en: `<p>Most people don't think about retirement until their 50s — by which time they've already lost the most powerful wealth-building tool: <strong>time</strong>. Starting your retirement planning in your 30s can make the difference between a comfortable retirement and a financially stressful one.</p>
           <h2>Why Start in Your 30s?</h2>
           <ul>
             <li><strong>Power of Compounding:</strong> Starting early means your money has more time to grow. Even a modest monthly investment of ₹5,000 starting at age 30 can grow to ₹50+ Lakh by age 60.</li>
             <li><strong>Lower Premiums:</strong> Younger age means lower premium rates for the same coverage amount.</li>
             <li><strong>Inflation Protection:</strong> What costs ₹1 Lakh today may cost ₹3-4 Lakh in 30 years. Early planning helps you stay ahead of inflation.</li>
             <li><strong>Peace of Mind:</strong> Knowing you have a solid retirement plan removes anxiety about the future.</li>
           </ul>
           <h2>How Much Do You Need for Retirement?</h2>
           <p>If your current monthly expenses are ₹50,000, you'll need approximately <strong>₹1.5 to ₹2 Crore</strong> as a retirement corpus (accounting for inflation). This may seem like a lot, but with systematic planning over 25-30 years, it's absolutely achievable.</p>
           <h2>Best LIC Pension Plans</h2>
           <ul>
             <li><strong>Jeevan Akshay VII:</strong> Immediate annuity plan with 10 options. Invest a lump sum and start receiving pension immediately. Ideal for those nearing retirement.</li>
             <li><strong>Saral Pension:</strong> Standardized pension plan with guaranteed return of purchase price. Simple and transparent with just 2 options — perfect for beginners.</li>
           </ul>
           <h2>Our Recommendation</h2>
           <p>We recommend a two-pronged approach: Start a <strong>regular premium endowment plan</strong> in your 30s to build the corpus, and then convert it into an <strong>immediate annuity plan</strong> like Jeevan Akshay at retirement. This gives you both growth and guaranteed income.</p>`,
      te: `<p>చాలా మంది 50 ఏళ్లు వచ్చే వరకు రిటైర్‌మెంట్ గురించి ఆలోచించరు — అప్పటికి వారు అత్యంత శక్తివంతమైన సంపద-సృష్టి సాధనాన్ని కోల్పోతారు: <strong>సమయం</strong>. మీ 30లలో మీ రిటైర్‌మెంట్ ప్లానింగ్ ప్రారంభించడం సౌకర్యవంతమైన మరియు ఆర్థిక ఒత్తిడి లేని రిటైర్‌మెంట్‌కు మధ్య వ్యత్యాసాన్ని చూపుతుంది.</p>
           <h2>మీ 30లలో ఎందుకు ప్రారంభించాలి?</h2>
           <ul>
             <li><strong>చక్రవడ్డీ శక్తి (Power of Compounding):</strong> త్వరగా ప్రారంభించడం అంటే మీ డబ్బు పెరగడానికి ఎక్కువ సమయం ఉంటుంది. 30 ఏళ్ల వయస్సులో నెలకు ₹5,000 స్వల్ప పెట్టుబడితో ప్రారంభించినా 60 ఏళ్ల వయస్సుకు ₹50+ లక్షలకు పెరగవచ్చు.</li>
             <li><strong>తక్కువ ప్రీమియంలు:</strong> తక్కువ వయస్సు అంటే అదే కవరేజీ మొత్తానికి తక్కువ ప్రీమియం రేట్లు.</li>
             <li><strong>ద్రవ్యోల్బణ రక్షణ:</strong> ఈ రోజు ₹1 లక్ష ఉన్నది 30 సంవత్సరాలలో ₹3-4 లక్షలు కావచ్చు. ముందుస్తు ప్రణాళిక ద్రవ్యోల్బణాన్ని అధిగమించడంలో మీకు సహాయపడుతుంది.</li>
             <li><strong>మానసిక ప్రశాంతత:</strong> మీకు బలమైన రిటైర్‌మెంట్ ప్లాన్ ఉందని తెలుసుకోవడం భవిష్యత్తు గురించి ఆందోళనను తొలగిస్తుంది.</li>
           </ul>
           <h2>రిటైర్‌మెంట్ కోసం మీకు ఎంత అవసరం?</h2>
           <p>మీ ప్రస్తుత నెలవారీ ఖర్చులు ₹50,000 అయితే, మీకు రిటైర్‌మెంట్ కార్పస్‌గా సుమారు <strong>₹1.5 నుండి ₹2 కోట్లు</strong> అవసరం (ద్రవ్యోల్బణాన్ని పరిగణనలోకి తీసుకుంటే). ఇది చాలా పెద్దదిగా అనిపించవచ్చు, కానీ 25-30 సంవత్సరాల పాటు క్రమబద్ధమైన ప్రణాళికతో, ఇది ఖచ్చితంగా సాధించవచ్చు.</p>
           <h2>ఉత్తమ LIC పెన్షన్ ప్రణాళికలు</h2>
           <ul>
             <li><strong>జీవన్ అక్షయ్ VII:</strong> 10 ఎంపికలతో తక్షణ యాన్యుటీ ప్లాన్. ఒకేసారి పెద్ద మొత్తాన్ని పెట్టుబడిగా పెట్టండి మరియు వెంటనే పెన్షన్ పొందడం ప్రారంభించండి. రిటైర్‌మెంట్‌కు దగ్గరవుతున్న వారికి అనువైనది.</li>
             <li><strong>సరళ్ పెన్షన్:</strong> కొనుగోలు ధర యొక్క గ్యారెంటీ రాబడితో ప్రామాణిక పెన్షన్ ప్లాన్. కేవలం 2 ఎంపికలతో సరళమైనది మరియు పారదర్శకమైనది — ప్రారంభకులకు సరైనది.</li>
           </ul>
           <h2>మా సిఫార్సు</h2>
           <p>మేము ద్విముఖ విధానాన్ని సిఫార్సు చేస్తున్నాము: కార్పస్‌ను నిర్మించడానికి మీ 30లలో <strong>రెగ్యులర్ ప్రీమియం ఎండోమెంట్ ప్లాన్</strong> ప్రారంభించండి, ఆపై రిటైర్‌మెంట్‌లో దానిని జీవన్ అక్షయ్ లాంటి <strong>తక్షణ యాన్యుటీ ప్లాన్</strong>గా మార్చండి. ఇది మీకు వృద్ధి మరియు హామీ ఆదాయం రెండింటినీ ఇస్తుంది.</p>`
    },
    btns: [
      { en: '<i class="fas fa-phone-alt"></i> Plan Your Retirement', te: '<i class="fas fa-phone-alt"></i> రిటైర్‌మెంట్‌ను ప్లాన్ చేయండి' },
      { en: 'View Pension Plans', te: 'పెన్షన్ ప్రణాళికలను చూడండి' }
    ]
  },
  // 3. Child Education
  {
    title: { en: 'Securing Your Child\'s Education: Best LIC Plans', te: 'మీ పిల్లల విద్యను భద్రపరచడం: ఉత్తమ LIC ప్రణాళికలు' },
    tag: { en: 'Child Plans', te: 'పిల్లల ప్రణాళికలు' },
    bodyHtml: {
      en: `<p>As a parent, your child's education is one of the most important investments you'll ever make. With education costs rising by <strong>10-12% annually</strong>, what costs ₹10 Lakh today will cost ₹30+ Lakh in 15 years. Planning early is not optional — it's essential.</p>
           <h2>The Rising Cost of Education</h2>
           <ul>
             <li>Engineering degree (4 years): ₹10-25 Lakh today → ₹40-80 Lakh in 15 years</li>
             <li>Medical degree (5 years): ₹25-50 Lakh today → ₹80 Lakh-2 Crore in 15 years</li>
             <li>MBA from top institute: ₹20-35 Lakh today → ₹60 Lakh-1 Crore in 15 years</li>
             <li>Overseas education: ₹40-80 Lakh today → ₹1.5-3 Crore in 15 years</li>
           </ul>
           <h2>Why LIC Child Plans?</h2>
           <ul>
             <li><strong>Disciplined Savings:</strong> Regular premium payment builds a substantial fund over time</li>
             <li><strong>Money at the Right Time:</strong> Survival benefits at ages 18, 20, 22, and 25 align perfectly with education milestones</li>
             <li><strong>Premium Waiver:</strong> If the parent/proposer dies, future premiums are waived but the policy continues — your child's future is secured regardless</li>
             <li><strong>Tax Benefits:</strong> Premiums are deductible under Section 80C</li>
             <li><strong>Safe & Guaranteed:</strong> LIC being a government entity, your money is 100% safe</li>
           </ul>
           <h2>Recommended Plan: New Children's Money Back Plan</h2>
           <p>This is our top recommendation for child's education planning. Here's how it works:</p>
           <ul>
             <li>Buy the policy when your child is born (age 0-12 years)</li>
             <li>Pay premiums for the premium paying term</li>
             <li>Receive 20% of Sum Assured at child's age 18 (for college admission)</li>
             <li>Receive 20% at age 20 (for higher studies)</li>
             <li>Receive 20% at age 22 (for career start/marriage)</li>
             <li>Receive 40% + Bonuses at age 25 (maturity — for settling down)</li>
           </ul>
           <p><strong>Example:</strong> For a Sum Assured of ₹10 Lakh taken at child's birth: ₹2L at 18, ₹2L at 20, ₹2L at 22, and approximately ₹7-8L (40% SA + bonuses) at age 25. Total benefit: approximately ₹13-14 Lakh from a total premium payment of around ₹7-8 Lakh.</p>`,
      te: `<p>తల్లిదండ్రులుగా, మీ పిల్లల విద్య మీరు చేసే అత్యంత ముఖ్యమైన పెట్టుబడులలో ఒకటి. విద్యా ఖర్చులు ఏటా <strong>10-12%</strong> పెరుగుతున్నందున, ఈ రోజు ₹10 లక్షలు ఖర్చయ్యేది 15 సంవత్సరాలలో ₹30+ లక్షలు అవుతుంది. ముందుగానే ప్లాన్ చేసుకోవడం అనేది ఎంపిక కాదు — అది చాలా అవసరం.</p>
           <h2>పెరుగుతున్న విద్యా ఖర్చులు</h2>
           <ul>
             <li>ఇంజనీరింగ్ డిగ్రీ (4 సంవత్సరాలు): ఈరోజు ₹10-25 లక్షలు → 15 సంవత్సరాలలో ₹40-80 లక్షలు</li>
             <li>మెడికల్ డిగ్రీ (5 సంవత్సరాలు): ఈరోజు ₹25-50 లక్షలు → 15 సంవత్సరాలలో ₹80 లక్షలు-2 కోట్లు</li>
             <li>టాప్ ఇన్‌స్టిట్యూట్ నుండి MBA: ఈరోజు ₹20-35 లక్షలు → 15 సంవత్సరాలలో ₹60 లక్షలు-1 కోటి</li>
             <li>విదేశీ విద్య: ఈరోజు ₹40-80 లక్షలు → 15 సంవత్సరాలలో ₹1.5-3 కోట్లు</li>
           </ul>
           <h2>LIC చైల్డ్ ప్లాన్స్ ఎందుకు?</h2>
           <ul>
             <li><strong>క్రమశిక్షణతో కూడిన పొదుపు:</strong> క్రమం తప్పని ప్రీమియం చెల్లింపు కాలక్రమేణా గణనీయమైన నిధిని నిర్మిస్తుంది</li>
             <li><strong>సరైన సమయంలో డబ్బు:</strong> 18, 20, 22 మరియు 25 ఏళ్ల వయస్సులో సర్వైవల్ ప్రయోజనాలు విద్యా మైలురాళ్లతో సరిగ్గా సరిపోలుతాయి</li>
             <li><strong>ప్రీమియం మినహాయింపు:</strong> తల్లిదండ్రులు/ప్రతిపాదకుడు మరణిస్తే, భవిష్యత్ ప్రీమియంలు మినహాయించబడతాయి కానీ పాలసీ కొనసాగుతుంది — సంబంధం లేకుండా మీ పిల్లల భవిష్యత్తు సురక్షితంగా ఉంటుంది</li>
             <li><strong>పన్ను ప్రయోజనాలు:</strong> సెక్షన్ 80C కింద ప్రీమియంలకు పన్ను మినహాయింపు ఉంటుంది</li>
             <li><strong>సురక్షితమైనది & హామీ ఇవ్వబడినది:</strong> LIC ప్రభుత్వ సంస్థ కావడంతో, మీ డబ్బు 100% సురక్షితంగా ఉంటుంది</li>
           </ul>
           <h2>సిఫార్సు చేయబడిన ప్లాన్: న్యూ చిల్డ్రన్స్ మనీ బ్యాక్ ప్లాన్</h2>
           <p>పిల్లల విద్యా ప్రణాళిక కోసం ఇది మా అత్యుత్తమ సిఫార్సు. ఇది ఎలా పనిచేస్తుందో ఇక్కడ ఉంది:</p>
           <ul>
             <li>మీ బిడ్డ పుట్టినప్పుడు పాలసీని కొనుగోలు చేయండి (0-12 సంవత్సరాల వయస్సు)</li>
             <li>ప్రీమియం చెల్లింపు గడువు వరకు ప్రీమియంలు చెల్లించండి</li>
             <li>పిల్లల వయస్సు 18కి చేరుకోగానే బీమా మొత్తంలో 20% పొందండి (కళాశాల ప్రవేశం కోసం)</li>
             <li>20 ఏళ్ల వయస్సులో 20% పొందండి (ఉన్నత చదువుల కోసం)</li>
             <li>22 ఏళ్ల వయస్సులో 20% పొందండి (కెరీర్ ప్రారంభం/వివాహం కోసం)</li>
             <li>25 ఏళ్ల వయస్సులో 40% + బోనస్‌లను పొందండి (మెచ్యూరిటీ — స్థిరపడటం కోసం)</li>
           </ul>
           <p><strong>ఉదాహరణ:</strong> పిల్లల జనన సమయంలో తీసుకున్న ₹10 లక్షల బీమా మొత్తానికి: 18 ఏళ్లకు ₹2 లక్షలు, 20 ఏళ్లకు ₹2 లక్షలు, 22 ఏళ్లకు ₹2 లక్షలు, మరియు 25 ఏళ్లకు సుమారు ₹7-8 లక్షలు (40% SA + బోనస్‌లు). మొత్తం ప్రయోజనం: సుమారు ₹7-8 లక్షల మొత్తం ప్రీమియం చెల్లింపు నుండి సుమారు ₹13-14 లక్షలు.</p>`
    },
    btns: [
      { en: '<i class="fas fa-phone-alt"></i> Plan Your Child\'s Future', te: '<i class="fas fa-phone-alt"></i> భవిష్యత్తును ప్లాన్ చేయండి' },
      { en: 'View Child Plans', te: 'చైల్డ్ ప్లాన్‌లను చూడండి' }
    ]
  },
  // 4. Maturity Benefits
  {
    title: { en: 'Understanding LIC Policy Maturity Benefits', te: 'LIC పాలసీ మెచ్యూరిటీ ప్రయోజనాలను అర్థం చేసుకోవడం' },
    tag: { en: 'Policy Benefits', te: 'పాలసీ ప్రయోజనాలు' },
    bodyHtml: {
      en: `<p>One of the most awaited moments for any LIC policyholder is the day their policy matures. But many people are unsure about what exactly they'll receive, how the amount is calculated, and what steps to take. Let's break it down.</p>
           <h2>What is Maturity Benefit?</h2>
           <p>Maturity benefit is the amount paid by LIC when your policy term completes and you're alive. It typically includes the <strong>Sum Assured + Bonuses + Final Additional Bonus</strong> (if any). The exact amount depends on your plan type, premium paid, and LIC's declared bonus rates.</p>
           <h2>Components of Maturity Amount</h2>
           <ul>
             <li><strong>Basic Sum Assured:</strong> The guaranteed amount you chose at the time of buying</li>
             <li><strong>Simple Reversionary Bonus:</strong> Declared annually by LIC and added to your policy each year</li>
             <li><strong>Final Additional Bonus (FAB):</strong> One-time bonus declared at maturity for policies with a term of 15+ years</li>
             <li><strong>Guaranteed Additions:</strong> Fixed additions per year (applicable in certain plans like New Jeevan Anand)</li>
           </ul>
           <h2>How to Claim Maturity Benefit?</h2>
           <ul>
             <li>LIC sends a Discharge Voucher/Form approximately 2-3 months before maturity</li>
             <li>Fill the form with accurate bank details (NEFT mandatory)</li>
             <li>Submit with original policy bond, ID proof, and cancelled cheque</li>
             <li>Amount is directly credited to your bank account on the maturity date</li>
             <li>Maturity amount is <strong>100% tax-free</strong> under Section 10(10D) if annual premium ≤ 10% of SA</li>
           </ul>
           <h2>Need Help with Your Maturity?</h2>
           <p>If your policy is maturing soon, we can help you with the entire process — from filling the discharge voucher to ensuring timely credit of your maturity amount. We also advise on the best way to reinvest your maturity proceeds.</p>`,
      te: `<p>ఏదైనా LIC పాలసీదారునికి అత్యంత ఎదురుచూసే క్షణాలలో ఒకటి వారి పాలసీ మెచ్యూర్ అయిన రోజు. కానీ చాలా మందికి వారు ఖచ్చితంగా ఏమి పొందుతారు, మొత్తం ఎలా లెక్కించబడుతుంది మరియు ఏ దశలను తీసుకోవాలో తెలియదు. దానిని వివరంగా తెలుసుకుందాం.</p>
           <h2>మెచ్యూరిటీ ప్రయోజనం అంటే ఏమిటి?</h2>
           <p>మెచ్యూరిటీ ప్రయోజనం అంటే మీ పాలసీ వ్యవధి పూర్తయిన తర్వాత మరియు మీరు జీవించి ఉన్నప్పుడు LIC చెల్లించే మొత్తం. ఇది సాధారణంగా <strong>బీమా మొత్తం + బోనస్‌లు + తుది అదనపు బోనస్</strong> (ఏదైనా ఉంటే) కలిగి ఉంటుంది. ఖచ్చితమైన మొత్తం మీ ప్లాన్ రకం, చెల్లించిన ప్రీమియం మరియు LIC ప్రకటించిన బోనస్ రేట్లపై ఆధారపడి ఉంటుంది.</p>
           <h2>మెచ్యూరిటీ మొత్తం భాగాలు</h2>
           <ul>
             <li><strong>ప్రాథమిక బీమా మొత్తం:</strong> మీరు కొనుగోలు చేసే సమయంలో ఎంచుకున్న గ్యారెంటీ మొత్తం</li>
             <li><strong>సాధారణ రివర్షనరీ బోనస్:</strong> LIC ద్వారా ఏటా ప్రకటించబడుతుంది మరియు ప్రతి సంవత్సరం మీ పాలసీకి జోడించబడుతుంది</li>
             <li><strong>తుది అదనపు బోనస్ (FAB):</strong> 15+ సంవత్సరాల కాల వ్యవధితో కూడిన పాలసీలకు మెచ్యూరిటీ సమయంలో ప్రకటించే వన్-టైమ్ బోనస్</li>
             <li><strong>గ్యారెంటీ అదనపు మొత్తాలు:</strong> సంవత్సరానికి నిర్ణీత అదనపు మొత్తాలు (న్యూ జీవన్ ఆనంద్ లాంటి కొన్ని ప్లాన్‌లలో వర్తిస్తాయి)</li>
           </ul>
           <h2>మెచ్యూరిటీ ప్రయోజనాన్ని ఎలా క్లెయిమ్ చేయాలి?</h2>
           <ul>
             <li>మెచ్యూరిటీకి దాదాపు 2-3 నెలల ముందు LIC ఒక డిశ్చార్జ్ వోచర్/ఫారమ్‌ను పంపుతుంది</li>
             <li>ఖచ్చితమైన బ్యాంక్ వివరాలతో ఫారమ్‌ను పూరించండి (NEFT తప్పనిసరి)</li>
             <li>ఒరిజినల్ పాలసీ బాండ్, ID ప్రూఫ్ మరియు క్యాన్సిల్ చేసిన చెక్‌తో సమర్పించండి</li>
             <li>మెచ్యూరిటీ తేదీలో మొత్తం నేరుగా మీ బ్యాంక్ ఖాతాలో జమ చేయబడుతుంది</li>
             <li>వార్షిక ప్రీమియం SA లో 10% కన్నా తక్కువ ఉంటే సెక్షన్ 10(10D) కింద మెచ్యూరిటీ మొత్తం <strong>100% పన్ను రహితం</strong></li>
           </ul>
           <h2>మీ మెచ్యూరిటీకి సహాయం కావాలా?</h2>
           <p>మీ పాలసీ త్వరలో మెచ్యూర్ అవుతుంటే, డిశ్చార్జ్ వోచర్‌ను పూరించడం నుండి మీ మెచ్యూరిటీ మొత్తం సకాలంలో క్రెడిట్ అయ్యేలా చూసుకోవడం వరకు మొత్తం ప్రక్రియలో మేము మీకు సహాయం చేస్తాము. మీ మెచ్యూరిటీ ఆదాయాన్ని తిరిగి పెట్టుబడి పెట్టడానికి ఉత్తమ మార్గం గురించి కూడా మేము సలహా ఇస్తాము.</p>`
    },
    btns: [
      { en: '<i class="fas fa-phone-alt"></i> Get Maturity Assistance', te: '<i class="fas fa-phone-alt"></i> మెచ్యూరిటీ సహాయం పొందండి' },
      { en: 'Policy Services', te: 'పాలసీ సేవలు' }
    ]
  }
];

// --- BUTTONS (common) ---
const btnTexts = {
  getConsultation: { en: '<i class="fas fa-phone-alt"></i> Get Free Consultation', te: '<i class="fas fa-phone-alt"></i> ఉచిత సంప్రదింపు పొందండి' },
  whatsapp: { en: '<i class="fab fa-whatsapp"></i> WhatsApp Now', te: '<i class="fab fa-whatsapp"></i> వాట్సాప్ చేయండి' },
  getQuote: { en: '<i class="fas fa-bolt"></i> Get Quote', te: '<i class="fas fa-bolt"></i> కోట్ పొందండి' },
  learnMore: { en: 'Learn More <i class="fas fa-arrow-right"></i>', te: 'మరింత తెలుసుకోండి <i class="fas fa-arrow-right"></i>' },
  readMore: { en: 'Read More <i class="fas fa-arrow-right"></i>', te: 'మరింత చదవండి <i class="fas fa-arrow-right"></i>' },
  viewAll: { en: 'View All Articles <i class="fas fa-arrow-right"></i>', te: 'అన్ని వ్యాసాలు చూడండి <i class="fas fa-arrow-right"></i>' },

  sendMessage: { en: '<i class="fas fa-paper-plane"></i> Send Message', te: '<i class="fas fa-paper-plane"></i> సందేశం పంపండి' },
  submitRequest: { en: '<i class="fas fa-paper-plane"></i> Submit Request', te: '<i class="fas fa-paper-plane"></i> అభ్యర్థన సమర్పించండి' },
};

// ===== LANGUAGE TOGGLE ENGINE =====
let currentLang = localStorage.getItem('lic-lang') || 'en';

function applyTranslations(lang) {
  // Simple selector-based translations
  for (const [selector, texts] of Object.entries(translations)) {
    const selectors = selector.split(', ');
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        el.innerHTML = texts[lang];
      });
    });
  }

  // About paragraphs
  const aboutParas = document.querySelectorAll('.about-text > p');
  aboutParas.forEach((p, i) => {
    if (aboutParagraphs[i]) p.innerHTML = aboutParagraphs[i][lang];
  });

  // About features
  document.querySelectorAll('.about-feature span').forEach((span, i) => {
    if (aboutFeatures[i]) span.textContent = aboutFeatures[i][lang];
  });

  // Services section
  const sTitle = document.querySelector('#services .section-title h2');
  const sSub = document.querySelector('#services .section-title p');
  if (sTitle) sTitle.textContent = servicesTitle[lang];
  if (sSub) sSub.textContent = servicesSubtitle[lang];

  document.querySelectorAll('.service-card').forEach((card, i) => {
    if (serviceCards[i]) {
      const h3 = card.querySelector('h3');
      const p = card.querySelector('p');
      if (h3) h3.textContent = serviceCards[i].title[lang];
      if (p) p.textContent = serviceCards[i].desc[lang];
      const link = card.querySelector('.service-link');
      if (link) link.innerHTML = btnTexts.learnMore[lang];
    }
  });

  // Why Choose Us
  const wTitle = document.querySelector('#why-choose-us .section-title h2');
  const wSub = document.querySelector('#why-choose-us .section-title p');
  if (wTitle) wTitle.textContent = whyTitle[lang];
  if (wSub) wSub.textContent = whySubtitle[lang];

  document.querySelectorAll('.why-card').forEach((card, i) => {
    if (whyCards[i]) {
      const h4 = card.querySelector('h4');
      const p = card.querySelector('p');
      if (h4) h4.textContent = whyCards[i].title[lang];
      if (p) p.textContent = whyCards[i].desc[lang];
    }
  });

  // Calculator
  const calcTitle = document.querySelector('.calculator-info h2');
  const calcDesc = document.querySelector('.calculator-info p');
  const calcFormTitle = document.querySelector('.calculator-form h3');
  if (calcTitle) calcTitle.textContent = calcTexts.title[lang];
  if (calcDesc) calcDesc.textContent = calcTexts.desc[lang];
  if (calcFormTitle) calcFormTitle.textContent = calcTexts.formTitle[lang];

  document.querySelectorAll('.calc-feature span').forEach((span, i) => {
    if (calcTexts.features[i]) span.textContent = calcTexts.features[i][lang];
  });

  const calcLabels = document.querySelectorAll('.calculator-form label');
  if (calcLabels[0]) calcLabels[0].textContent = calcTexts.age[lang];
  if (calcLabels[1]) calcLabels[1].textContent = calcTexts.gender[lang];
  if (calcLabels[2]) calcLabels[2].textContent = calcTexts.coverage[lang];
  if (calcLabels[3]) calcLabels[3].textContent = calcTexts.term[lang];

  const calcBtn = document.querySelector('#calcForm button[type="submit"]');
  if (calcBtn) calcBtn.innerHTML = calcTexts.btnCalc[lang];

  const resultLabel = document.querySelector('#calcResult > p:first-child');
  if (resultLabel) resultLabel.textContent = calcTexts.resultLabel[lang];

  // Testimonials
  const tTitle = document.querySelector('#testimonials .section-title h2');
  const tSub = document.querySelector('#testimonials .section-title p');
  if (tTitle) tTitle.textContent = testimonialsTitle[lang];
  if (tSub) tSub.textContent = testimonialsSubtitle[lang];

  document.querySelectorAll('.testimonial-card').forEach((card, i) => {
    if (testimonialsData[i]) {
      const text = card.querySelector('.testimonial-text');
      const name = card.querySelector('.testimonial-name');
      const role = card.querySelector('.testimonial-role');
      if (text) text.textContent = testimonialsData[i].text[lang];
      if (name) name.textContent = testimonialsData[i].name[lang];
      if (role) role.textContent = testimonialsData[i].role[lang];
    }
  });

  // Gallery
  const gTitle = document.querySelector('#gallery .section-title h2');
  const gSub = document.querySelector('#gallery .section-title p');
  if (gTitle) gTitle.textContent = galleryTitle[lang];
  if (gSub) gSub.textContent = gallerySubtitle[lang];

  // Blog preview
  const bTitle = document.querySelector('#blog .section-title h2');
  const bSub = document.querySelector('#blog .section-title p');
  if (bTitle) bTitle.textContent = blogTitle[lang];
  if (bSub) bSub.textContent = blogSubtitle[lang];

  // Blog preview cards
  document.querySelectorAll('#blog .blog-card').forEach((card, i) => {
    if (blogCards[i]) {
      const h3a = card.querySelector('h3 a');
      const p = card.querySelector('.blog-card-content > p');
      if (h3a) h3a.textContent = blogCards[i].title[lang];
      if (p) p.textContent = blogCards[i].desc[lang];
      const link = card.querySelector('.service-link');
      if (link) link.innerHTML = btnTexts.readMore[lang];
    }
  });

  // Contact
  const cTitle = document.querySelector('#contact .section-title h2');
  const cSub = document.querySelector('#contact .section-title p');
  if (cTitle) cTitle.textContent = contactTitle[lang];
  if (cSub) cSub.textContent = contactSubtitle[lang];

  const contactBtn = document.querySelector('#contactForm button[type="submit"]');
  if (contactBtn) contactBtn.innerHTML = btnTexts.sendMessage[lang];

  // Service request form button
  const srvBtn = document.querySelector('#serviceForm button[type="submit"]');
  if (srvBtn) srvBtn.innerHTML = btnTexts.submitRequest[lang];

  // Hero buttons
  const heroBtns = document.querySelectorAll('.hero-buttons .btn');
  if (heroBtns[0]) heroBtns[0].innerHTML = btnTexts.getConsultation[lang];
  if (heroBtns[1]) heroBtns[1].innerHTML = btnTexts.whatsapp[lang];

  // Get Quote button in nav
  const navQuoteBtn = document.querySelector('.nav-cta .btn');
  if (navQuoteBtn) navQuoteBtn.innerHTML = btnTexts.getQuote[lang];

  // View all articles link
  const viewAllBtn = document.querySelector('#blog .btn-outline');
  if (viewAllBtn) viewAllBtn.innerHTML = btnTexts.viewAll[lang];

  // ===== PLANS PAGE TRANSLATIONS =====
  const plansHeaderH1 = document.querySelector('.page-header h1');
  const plansHeaderP = document.querySelector('.page-header p');
  
  // Plans page header
  if (plansHeaderH1) {
    const currentText = plansHeaderH1.getAttribute('data-en') || plansHeaderH1.textContent;
    if (!plansHeaderH1.getAttribute('data-en')) plansHeaderH1.setAttribute('data-en', currentText);
    
    if (currentText === 'LIC Insurance Plans') {
      plansHeaderH1.textContent = plansPageTitle[lang];
      if (plansHeaderP) plansHeaderP.textContent = plansPageSubtitle[lang];
    } else if (currentText === 'Insurance Insights & Tips') {
      plansHeaderH1.textContent = blogPageTitle[lang];
      if (plansHeaderP) plansHeaderP.textContent = blogPageSubtitle[lang];
    } else if (currentText === 'Online Policy Services') {
      plansHeaderH1.textContent = lang === 'te' ? 'ఆన్‌లైన్ పాలసీ సేవలు' : currentText;
    }
  }

  // Plan section headings and intro paragraphs
  document.querySelectorAll('.plan-section').forEach((section, i) => {
    if (planSections[i]) {
      const h2 = section.querySelector('.plan-header h2');
      const introP = section.querySelector('.plan-details-inner > p');
      if (h2) h2.textContent = planSections[i].heading[lang];
      if (introP) introP.textContent = planSections[i].intro[lang];
    }
  });

  // Plan cards content
  const allPlanCards = document.querySelectorAll('.plan-card');
  allPlanCards.forEach((card, i) => {
    if (planCardsData[i]) {
      const h3 = card.querySelector('h3');
      if (h3) h3.innerHTML = planCardsData[i].title[lang];
      
      const h4s = card.querySelectorAll('h4');
      if (h4s[0]) h4s[0].textContent = planHeadings.features[lang];
      if (h4s[1]) h4s[1].textContent = planHeadings.benefits[lang];
      if (h4s[2]) h4s[2].textContent = planHeadings.eligibility[lang];
      
      const uls = card.querySelectorAll('ul');
      if (uls[0]) {
        const lis = uls[0].querySelectorAll('li');
        lis.forEach((li, j) => {
          if (planCardsData[i].features[j]) li.innerHTML = planCardsData[i].features[j][lang];
        });
      }
      if (uls[1]) {
        const lis = uls[1].querySelectorAll('li');
        lis.forEach((li, j) => {
          if (planCardsData[i].benefits[j]) li.innerHTML = planCardsData[i].benefits[j][lang];
        });
      }
      if (uls[2]) {
        const lis = uls[2].querySelectorAll('li');
        lis.forEach((li, j) => {
          if (planCardsData[i].eligibility[j]) li.innerHTML = planCardsData[i].eligibility[j][lang];
        });
      }
      
      const btn = card.querySelector('.btn-primary');
      if (btn) btn.innerHTML = planCardsData[i].btnText[lang];
    }
  });

  // Plan page CTA
  const planCTATitle = document.querySelector('#plans-content [style*="grad-primary"] h2');
  const planCTADesc = document.querySelector('#plans-content [style*="grad-primary"] p');
  if (planCTATitle) planCTATitle.textContent = plansCTA.title[lang];
  if (planCTADesc) planCTADesc.textContent = plansCTA.desc[lang];

  // Plan page CTA buttons
  const planCTABtns = document.querySelectorAll('#plans-content [style*="grad-primary"] .btn');
  if (planCTABtns[0]) planCTABtns[0].innerHTML = btnTexts.getConsultation[lang];
  if (planCTABtns[1]) planCTABtns[1].innerHTML = btnTexts.whatsapp[lang];

  // ===== BLOG PAGE TRANSLATIONS =====
  // Blog article titles
  // Blog article titles, content and buttons
  document.querySelectorAll('.blog-article').forEach((article, i) => {
    if (blogArticles[i]) {
      const h1 = article.querySelector('h1');
      if (h1) h1.textContent = blogArticles[i].title[lang];
      
      const body = article.querySelector('.article-body');
      if (body) body.innerHTML = blogArticles[i].bodyHtml[lang];
      
      const btns = article.querySelectorAll('div[style*="margin-top"] .btn, .btn-group .btn');
      if (btns[0] && blogArticles[i].btns[0]) btns[0].innerHTML = blogArticles[i].btns[0][lang];
      if (btns[1] && blogArticles[i].btns[1]) btns[1].innerHTML = blogArticles[i].btns[1][lang];
      
      // Tag in meta
      const tagSpan = article.querySelector('.blog-card-meta span:last-child');
      if (tagSpan && blogArticles[i].tag) {
        tagSpan.innerHTML = '<i class="fas fa-tag"></i> ' + blogArticles[i].tag[lang];
      }
    }
  });

  // Blog sidebar article links
  document.querySelectorAll('.blog-sidebar .sidebar-card:first-child li a').forEach((a, i) => {
    if (blogArticles[i]) {
      a.textContent = blogArticles[i].title[lang];
    }
  });

  // Blog sidebar headings
  const sidebarArticlesH4 = document.querySelector('.blog-sidebar .sidebar-card:first-child h4');
  if (sidebarArticlesH4) sidebarArticlesH4.innerHTML = lang === 'te' ? '<i class="fas fa-search" style="color:var(--clr-secondary); margin-right:6px;"></i> వ్యాసాలు' : '<i class="fas fa-search" style="color:var(--clr-secondary); margin-right:6px;"></i> Articles';

  const sidebarTopicsH4 = document.querySelector('.blog-sidebar .sidebar-card:nth-child(2) h4');
  if (sidebarTopicsH4) sidebarTopicsH4.innerHTML = lang === 'te' ? '<i class="fas fa-tags" style="color:var(--clr-accent); margin-right:6px;"></i> అంశాలు' : '<i class="fas fa-tags" style="color:var(--clr-accent); margin-right:6px;"></i> Topics';

  const sidebarAdviceH4 = document.querySelector('.blog-sidebar .sidebar-card:nth-child(3) h4');
  if (sidebarAdviceH4) sidebarAdviceH4.innerHTML = lang === 'te' ? '<i class="fas fa-phone-alt" style="margin-right:6px;"></i> నిపుణుల సలహా కావాలా?' : '<i class="fas fa-phone-alt" style="margin-right:6px;"></i> Need Expert Advice?';

  const sidebarLinksH4 = document.querySelector('.blog-sidebar .sidebar-card:nth-child(4) h4');
  if (sidebarLinksH4) sidebarLinksH4.innerHTML = lang === 'te' ? '<i class="fas fa-link" style="color:var(--clr-secondary); margin-right:6px;"></i> ఉపయోగకరమైన లింక్‌లు' : '<i class="fas fa-link" style="color:var(--clr-secondary); margin-right:6px;"></i> Useful Links';

  // Update the toggle button itself
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    const flag = langToggle.querySelector('.lang-flag');
    const label = langToggle.querySelector('.lang-label');
    if (lang === 'te') {
      if (flag) flag.textContent = 'EN';
      if (label) label.textContent = 'English';
      langToggle.title = 'Switch to English';
    } else {
      if (flag) flag.textContent = 'తె';
      if (label) label.textContent = 'తెలుగు';
      langToggle.title = 'Switch to Telugu';
    }
  }

  // Store language
  localStorage.setItem('lic-lang', lang);
  currentLang = lang;
  document.documentElement.lang = lang === 'te' ? 'te' : 'en';
}

// Initialize toggle
document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const newLang = currentLang === 'en' ? 'te' : 'en';
      applyTranslations(newLang);
    });
  }

  // Apply saved language
  if (currentLang === 'te') {
    applyTranslations('te');
  }
});
